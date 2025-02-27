import { createBrowserRouter, RouterProvider } from "react-router"
import "./App.css"
import { RootLayout } from "./components/RootLayout"
import Dashboard from "./pages/Dashboard"
import Student from "./pages/Student"
import Teacher from "./pages/Teacher"
import Payment from "./pages/Payment"
import {Login} from "./pages/Login"
import User from "./pages/User.tsx"



function App() {
    const routes = createBrowserRouter([
        {
            path:'/',
            element:<Login />
        },
        {
            path: "/signup",
            element: <User />
        },
        {
            path: "",
            element: <RootLayout/>,
            children: [
                { path: "/dashboard", element: <Dashboard /> },
                { path: "/student", element:<Student />},
                { path: "/teacher", element:<Teacher />},
                { path: "/payment", element:<Payment />}

            ]
        }
    ])


  return (
    <>
        <RouterProvider router={routes} />
    </>
  )
}

export default App
