
import { Fragment } from 'react'
import Footer from 'view/ui/shared-component/footer'
import Navbar from 'view/ui/shared-component/navbar'
// import ScrollTop from 'view/ui/shared-component/scrollTop'


export default function LayoutProvider({ children }: { children: React.ReactNode }) {


    return (
        <Fragment>
            <Navbar />
            {children}
            <Footer />
        </Fragment>
    )
}

