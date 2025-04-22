import { Outlet } from "react-router-dom"
import Header from "../Compounent/Header"
import Footer from "../Compounent/Footer"

import { useContext } from "react"
import GlobalContext from "../context/GlobalContex"

export default function DefaultLayout() {

    const { isLoading } = useContext(GlobalContext)

    console.log(isLoading);


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