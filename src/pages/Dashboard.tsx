export default function Dashboard() {
    return (
        <>

            <div>
                <h1 className="font-mono text-6xl font-semibold absolute top-7 right-60 size-18">Welcome back</h1>
                <p className="w-68 absolute top-37 left-290 size-16 break-all">"Effortless student management with
                    real-time
                    insights, attendance tracking, and performance analytics—all in one powerful dashboard!"</p>
            </div>

            <div>
                <img src="src/assets/login.jpg" alt="" width="700" height="700"/>
            </div>

            <div className="absolute right-0 top-100">
                <img src="src/assets/dashboard.jpg" alt="" width="400" height="400"/>
            </div>

            <div>
                <button
                    className="bg-blue-500 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-cyan-500 rounded-lg mx-8 w-24 h-10">
                    Modules
                </button>
                <button
                    className="bg-blue-500 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-cyan-500 rounded-lg mx-8 w-24 h-10">
                    Program
                </button>
                <button
                    className="bg-blue-500 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-cyan-500 rounded-lg mx-8 w-24 h-10">
                    results
                </button>


            </div>
            <div>
                <div
                    className="bg-white rounded-lg px-6 py-8 ring shadow-xl w-40 h-30 absolute top-7 right-280 size-18">
                    <h3 className="text-gray-900 absolute bottom-22">Student</h3>
                    <h1>1328</h1>
                    <p className="text-gray-500 dark:text-gray-400 mt-2 text-sm ">
                        All registered student
                    </p>
                </div>

                <div
                    className="bg-white rounded-lg px-6 py-8 ring shadow-xl w-40 h-30 absolute top-7 right-230 size-18 ">
                    <h3 className="text-gray-900 absolute bottom-22">Program</h3>
                    <h1>1328</h1>
                    <p className="text-gray-500 dark:text-gray-400 mt-2 text-sm ">
                        All registered student
                    </p>
                </div>

                <div
                    className="bg-white rounded-lg px-6 py-8 ring shadow-xl w-40 h-30 absolute top-7 right-180 size-18 ">
                    <h3 className="text-gray-900 absolute bottom-22">Teacher</h3>
                    <h1>1328</h1>
                    <p className="text-gray-500 dark:text-gray-400 mt-2 text-sm ">
                        All registered student
                    </p>
                </div>


            </div>

        </>
    )
}
