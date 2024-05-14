import RootLayout from "./components/RootLayout"
import Home from "./pages/Home"
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import Product from "./pages/Product"

let router = createBrowserRouter(createRoutesFromElements(
  <Route element={<RootLayout/>}>
    <Route index element={<Home/>}></Route>
    <Route path="/product" element={<Product/>}></Route>
  </Route>
))

function App() {

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
