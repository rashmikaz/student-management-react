import {useNavigate} from "react-router";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch} from "../store/Store.ts";
import {UserModel} from "../models/UserModel.ts";
import {loginUser} from "../reducers/UserSlice.ts";


export function Login() {

    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();
    const isAuthenticated = useSelector((state) => state.user.isAuthenticated);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () =>{
        const user: UserModel = {email:email,password:password};
        dispatch(loginUser(user));
        alert("Login successfully!");
        resetForm();
        // navigate('/dashboard');
    }

    const getRegister = () =>{
        navigate('/signup');
    }
    const resetForm = () =>{
        setEmail("");
        setPassword("");
    }
    useEffect(() => {
        if(isAuthenticated){
            navigate('/dashboard');
        }
    }, [isAuthenticated]);

    return (
        <>
            <div>

                <div>
                    <h1 className="font-mono font-semibold text-6xl absolute top-20 right-120 size-10">Student
                        Management System);</h1>
                </div>
                <div className="mb-12 absolute top-70 right-40 size-10 w-90 ">
                    <p className="font-light">Welcome back,please login to your account</p>
                </div>


                <form className="bg-[#fafdff] w-100 absolute inset-y-0 right-115 top-80 w-16 ">

                    <div className="py-8 w-80">
                        <label className="text-gray-800 text-xs block mb-2 mx-2 ">Email</label>
                        <div className="relative flex items-center">
                            <input
                                name="email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full bg-transparent text-sm text-gray-800 border-b border-gray-300 focus:border-green-500 pl-2 pr-8 py-3 outline-none mx-2 "
                                placeholder="Enter email"
                            />
                        </div>
                    </div>

                    <div className="mt-8 w-80">
                        <label className="text-gray-800 text-xs block mb-2 mx-2 ">Password</label>
                        <div className="relative flex items-center">
                            <input
                                name="password"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full bg-transparent text-sm text-gray-800 border-b border-gray-300 focus:border-green-500 pl-2 pr-8 py-3 outline-none mx-2 "
                                placeholder="Enter password"
                            />
                        </div>
                    </div>

                    <div className="mt-8 py-8 w-100">

                        <button className="bg-cyan-500 shadow-lg shadow-cyan-500/50" onClick={handleLogin}>Login
                        </button>
                        <div><h3>new on our system?</h3> <h3 onClick={getRegister} className="absolute left-38 bottom-42 w-50 text-blue-600/100 dark:text-sky-400/100">creat an account</h3></div>

                    </div>
                </form>


                <div>
                    <img src="src/assets/login.jpg" alt="" width="800" height="800"/>
                </div>

            </div>
        </>
    )
}