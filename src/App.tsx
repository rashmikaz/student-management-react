import { createBrowserRouter, RouterProvider } from "react-router"
import "./App.css"
import { RootLayout } from "./components/RootLayout"
import Dashboard from "./pages/Dashboard"
import Student from "./pages/Student"
import Teacher from "./pages/Teacher"
import Payment from "./pages/Payment"


function App() {
    const routes = createBrowserRouter([
        {
            path: "",
            element: <RootLayout />,
            children: [
                { path: "", element: <Dashboard /> },
                { path: "", element:<Student />},
                { path: "", element:<Teacher />},
                { path: "", element:<Payment />}
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
