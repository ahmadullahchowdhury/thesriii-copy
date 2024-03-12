import sendMessage from "lib/sendEmail";
import { startTransition, useEffect, useState } from "react";
import { contactValidate } from "Validation/validation";

const initializeValue = {
    fullName: '',
    email: '',
    problem: "",
    elaboration: "",
}
interface FormErrors {
    fullName?: string;
    problem?: string;
    elaboration?: string;
    email?: string;
}

const initializeErrors = {
    fullName: '',
    email: '',
    problem: "",
    elaboration: "",
}

interface response {
    status?: boolean | null;
    data?: string | null;
}

const ContactForm = () => {
    const [data, setData] = useState(initializeValue);
    const [formErrors, setFormErrors] = useState(initializeErrors as FormErrors);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [response, setResponse] = useState({ status: null, data: null } as response)

    const handleChange = (e: any) => {
        setData({
            ...data,
            [e.target.name]: e.target.value,
        });
    };

    // ERROR HANDLING 
    useEffect(() => {
        if (data.fullName !== '' || data.email !== '' || data.problem !== '' || data.elaboration !== '') {
            setFormErrors(contactValidate(data));
        }
    }, [data]);

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        if (Object.keys(formErrors).length > 0) {
            console.log("All field are required", formErrors);
        } else {
            try {
                setIsLoading(true)
                startTransition(() => {
                    sendMessage(data).then(res => {
                        console.log(res)
                        if (res.status) {
                            setData(initializeValue);
                            setIsLoading(false)
                            setResponse({ status: res.status, data: res.message })
                            setFormErrors(initializeValue)
                        } else {
                            setResponse({ status: res.status, data: res.message })
                            setIsLoading(false)
                        }
                    })
                })
            } catch (error) {
                setResponse({ status: false, data: 'some things wrong' })
                setIsLoading(false)
            }
        }
    };

    return (
        <div className="">
            <form onSubmit={handleSubmit} className="mx-auto">
                <div className="flex flex-wrap -m-2">
                    <div className="p-2 w-full">
                        <div className="relative">
                            <input
                                type="text"
                                id="name"
                                value={data.fullName}
                                onChange={handleChange}
                                name="fullName"
                                placeholder="Full Name"
                                className="w-full text-text_color bg-contact_bg rounded-lg border focus:border-secondary_1 focus:bg-primary_lower focus:ring-2 focus:ring-secondary_1 text-base outline-none py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            />
                            {formErrors.fullName?.includes("required") && (
                                <p className="text-error_text text-sm w-full">
                                    {formErrors.fullName}
                                </p>
                            )}
                        </div>
                    </div>
                    <div className="p-2 w-full">
                        <div className="relative">
                            <input
                                type="email"
                                id="email"
                                value={data.email}
                                onChange={handleChange}
                                placeholder="Email"
                                name="email"
                                className="w-full text-text_color bg-contact_bg rounded-lg border focus:border-secondary_1 focus:bg-primary_lower focus:ring-2 focus:ring-secondary_1 text-base outline-none py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            />
                            {formErrors.email?.includes("required") && (
                                <p className="text-error_text text-sm w-full">
                                    {formErrors.email}
                                </p>
                            )}
                            {formErrors.email?.includes("Valid Email") && (
                                <p className="text-error_text text-sm w-full">
                                    {formErrors.email}
                                </p>
                            )}
                        </div>
                    </div>
                    <div className="p-2 w-full">
                        <div className="relative">
                            <input
                                type="text"
                                id="problem"
                                value={data.problem}
                                onChange={handleChange}
                                name="problem"
                                placeholder="Problem"
                                className="w-full text-text_color bg-contact_bg rounded-lg border focus:border-secondary_1 focus:bg-primary_lower focus:ring-2 focus:ring-secondary_1 text-base outline-none py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            />
                            {formErrors.problem?.includes("required") && (
                                <p className="text-error_text text-sm w-full">
                                    {formErrors.problem}
                                </p>
                            )}
                        </div>
                    </div>
                    <div className="p-2 w-full">
                        <div className="relative">
                            <textarea
                                id="elaboration"
                                value={data.elaboration}
                                onChange={handleChange}
                                placeholder="Elaboration"
                                name="elaboration"
                                className="w-full text-text_color h-24 bg-contact_bg rounded-lg border focus:border-secondary_1 focus:bg-primary_lower focus:ring-2 focus:ring-secondary_1 text-base outline-none py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            ></textarea>
                            {formErrors.elaboration?.includes("required") && (
                                <p className="text-error_text text-sm w-full">
                                    {formErrors.elaboration}
                                </p>
                            )}
                        </div>
                    </div>
                    <div className="p-2 w-full text-center">
                        <button disabled={isLoading ? true : false} className={`hover:shadow-button-shadow-black w-full mx-auto sm:text-2xl font-bold text-center text-primary_lower border-0 py-1 focus:outline-none rounded-xl text-lg cursor-pointer ${isLoading ? 'px-16 py-3 bg-indigo-300' : 'px-16 py-3 bg-secondary_1 hover:[#E95656 ]'}`
                        }>
                            {isLoading ?
                                <span className="flex items-center gap-2">
                                    <svg aria-hidden="true" className="w-6 h-6 text-gray-200 animate-spin dark:text-gray-300 fill-indigo-500" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                                    </svg>
                                    Processing...
                                </span>
                                :
                                "Message"
                            }
                        </button>
                    </div>
                </div>
            </form>
            {
                response?.status === true && <div className="mt-4 p-2 border-2 border-green-500">
                    <p>{response.data}</p>
                </div>

            }
            {/* // TODO: add transition here */}
            {
                response?.status === false && <div className=" mt-4 p-2 border-2 border-red-500">
                    <p>{response.data}</p>
                </div>
            }


        </div>
    )
}

export default ContactForm
