import { useState } from "react"
import {Link, useNavigate} from "react-router";


export function Menu() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true)

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen)
    }
    function handleNavigate() {
        navigate("/")
    }
    const navigate = useNavigate();

    return (
        <div
            className={`bg-[#1e272e] text-white rounded-xl${
                isSidebarOpen ? "w-64" : "w-16"
            } transition-all duration-300 ease-in-out`}
        >
            <div className="p-4 flex flex-col h-full">
                <button
                    onClick={toggleSidebar}
                    className="text-white focus:outline-none mb-4"
                >

                </button>
                {isSidebarOpen && (
                    <h1 className="text-center text-4xl font-bold">Genius</h1>
                )}
                <ul className="flex-col space-y-13 mt-25">
                    <li>
                        <Link
                            to="dashboard"
                            className="flex items-center space-x-4 p-2 rounded-md transition-colors hover:bg-cyan-500 hover:text-gray-200"
                        >

                            {isSidebarOpen && <span>Dashboard</span>}
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="student"
                            className="flex items-center space-x-4 p-2 rounded-md transition-colors hover:bg-cyan-500 hover:text-gray-200"
                        >

                            {isSidebarOpen && <span>Student</span>}
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="teacher"
                            className="flex items-center space-x-4 p-2 rounded-md transition-colors hover:bg-cyan-500 hover:text-gray-200"
                        >

                            {isSidebarOpen && <span>Teacher</span>}
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="payment"
                            className="flex items-center space-x-4 p-2 rounded-md transition-colors hover:bg-cyan-500 hover:text-gray-200"
                        >

                            {isSidebarOpen && <span>Payment</span>}
                        </Link>
                    </li>
                    <li>
                        <Link
                            onClick={handleNavigate}
                            to=""
                            className="flex items-center space-x-4 p-2 rounded-md transition-colors hover:bg-cyan-500 hover:text-gray-200 mt-49 "
                        >

                            {isSidebarOpen && <span>Logout</span>}
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}
