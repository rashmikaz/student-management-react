import {useNavigate} from "react-router";




export function Login() {
    const navigate = useNavigate();
    function goDashboard(){
        navigate('/dashboard');
    }
    return (
        <>

            <div>

                <form
                    className="bg-slate-100 max-w-xl  w-full mx-auto shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] p-6 sm:p-8 rounded-2xl"

                >
                    <div className="mb-12">
                        <h3 className="text-gray-800 text-3xl text-center font-bold">
                            Green Shadow Login
                        </h3>
                    </div>

                    <div>
                        <label className="text-gray-800 text-xs block mb-2">Email</label>
                        <div className="relative flex items-center">
                            <input
                                name="email"
                                type="email"
                                className="w-full bg-transparent text-sm text-gray-800 border-b border-gray-300 focus:border-green-500 pl-2 pr-8 py-3 outline-none"
                                placeholder="Enter email"
                            />
                        </div>
                    </div>

                    <div className="mt-8">
                        <label className="text-gray-800 text-xs block mb-2">Password</label>
                        <div className="relative flex items-center">
                            <input
                                name="password"
                                type="password"
                                className="w-full bg-transparent text-sm text-gray-800 border-b border-gray-300 focus:border-green-500 pl-2 pr-8 py-3 outline-none"
                                placeholder="Enter password"
                            />
                        </div>
                    </div>

                    <div className="mt-8">
                        {/*<AuthButton>Login</AuthButton>*/}
                        {/*<Togglepage onClick={handleToggle}>Register Here</Togglepage>*/}
                        <button onClick={goDashboard}>Login</button>
                    </div>
                </form>
            </div>
        </>
    )
}