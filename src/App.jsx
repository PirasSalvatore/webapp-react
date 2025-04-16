import { BrowserRouter, Routes, Route } from "react-router-dom"
import DefaultLayout from "./Layout/defaultLayout"
import Home from "./pages/Home"
import SingleMovie from "./pages/SingleMovie"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route index element={<Home />} />
          <Route path="/SingleMovie/:id" element={<SingleMovie />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
