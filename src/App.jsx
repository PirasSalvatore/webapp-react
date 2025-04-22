import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState } from "react"


import DefaultLayout from "./Layout/defaultLayout"
import Home from "./pages/Home"
import SingleMovie from "./pages/SingleMovie"
import GlobalContext from "./context/GlobalContex"

function App() {

  const [isLoading, setIsLoading] = useState(true)

  return (

    <GlobalContext.Provider value={{ isLoading, setIsLoading }}>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route index element={<Home />} />
            <Route path="/SingleMovie/:id" element={<SingleMovie />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </GlobalContext.Provider>
  )
}

export default App
