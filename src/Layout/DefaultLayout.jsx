import { Outlet } from "react-router-dom"
import Header from "../Compounent/Header"
import Footer from "../Compounent/Footer"

export default function DefaultLayout() {

    return (
        <>

            <Header />

            <Outlet />

            <Footer />

        </>
    )
}