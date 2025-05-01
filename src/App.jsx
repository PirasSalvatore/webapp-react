import { BrowserRouter, Routes, Route } from "react-router-dom"
import { MoviesProvider } from "./contexts/MoviesContex"

import Error404 from "./Error/Error404"
import DefaultLayout from "./Layout/defaultLayout"
import Home from "./pages/Home"
import SingleMovie from "./pages/SingleMovie"

function App() {

  return (

    <MoviesProvider>
      <BrowserRouter>
        <Routes>

          <Route element={<DefaultLayout />}>
            <Route index element={<Home />} />
            <Route path="/SingleMovie/:id" element={<SingleMovie />} />
          </Route>

          <Route path="*" element={<Error404 />} />

        </Routes>
      </BrowserRouter>
    </MoviesProvider>

  )
}

export default App