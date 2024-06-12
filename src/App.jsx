import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./component/layout/RootLayout";
import About from "./pages/About";
import Home from "./pages/Home";


function App() {
  
  const router = createBrowserRouter(
    createRoutesFromElements(<Route path="/" element={<RootLayout />}>
      <Route index element = {<Home></Home>}></Route>
      <Route path="/about" element = {<About></About>}></Route>
    </Route>)
  );

  return <RouterProvider router={router}/>;
}

export default App
