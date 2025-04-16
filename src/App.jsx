import { BrowserRouter, Routes, Route } from "react-router-dom"
import DefaultLayout from "./Layout/defaultLayout"
import Home from "./pages/Home"

function App() {



  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
