interface FormErrors {
  email?: string;
  elaboration?: string;
  fullName?: string;
  problem?: string;
}

export const contactValidate = (values: any) => {
  const re = /\S+@\S+\.\S+/;
  let errors: FormErrors = {};
  if (!values.email) {
    errors.email = "The field is required.";
  } else if (!re.test(values.email)) {
    errors.email = "Please Write A Valid Email Address";
  }
  if (!values.fullName) {
    errors.fullName = "The field is required.";
  }
  if (!values.elaboration) {
    errors.elaboration = "The field is required.";
  }
  if (!values.problem) {
    errors.problem = "The field is required.";
  }
  return errors;
};
