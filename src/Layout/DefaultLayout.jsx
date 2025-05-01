import { Outlet } from "react-router-dom"

import Header from "../compounents/Header"
import Footer from "../compounents/Footer"

import { useContext } from "react"
import GlobalContext from "../contexts/GlobalContex"

export default function DefaultLayout() {

    const { isLoading } = useContext(GlobalContext)

    return (
        <>

            <Header />

            {isLoading &&
                (
                    <div className="d-flex justify-content-center align-items-center vh-100">
                        <div className="spinner-border text-success" role="status">
                        </div>
                    </div>
                )
            }

            <Outlet />

            <Footer />

        </>
    )
}