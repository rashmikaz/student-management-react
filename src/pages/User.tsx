import {useState} from "react";
import {useDispatch} from "react-redux";
import {AppDispatch} from "../store/Store.ts";
import {UserModel} from "../models/UserModel.ts";
import {registerUser} from "../reducers/UserSlice.ts";
import {useNavigate} from "react-router";

function User() {
    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const handleRegister = () => {
        const user: UserModel = {email:email,password:password};
        dispatch(registerUser(user));
        resetForm()
        navigate("/")
    }

    const getLogin = () => {
        navigate("/")
    }


    const resetForm = () => {

        setName("")
        setEmail("")
        setPassword("")
        setConfirmPassword("")

    }

    return (
        <div>

            <div>
                <h1 className="font-mono font-semibold text-6xl absolute top-20 left-190 size-10 w-200">Student
                    Management System);</h1>
            </div>
            <div className="mb-12 absolute top-55 right-76 size-10 w-100 ">
                <p className="font-light">Welcome back,please create your account to login</p>
            </div>

            <div className="p-6 w-180 absolute top-79 right-5 size-16">
                <div className="grid grid-cols-2 gap-5 mb-2">
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="border p-2 rounded"
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="border p-2 rounded"
                    />

                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="border p-2 rounded"
                    />
                    <input
                        type="password"
                        name="confirm password"
                        placeholder="Password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="border p-2 rounded"
                    />
                </div>

            </div>

            <div className="flex justify-end">
                <button
                    onClick={handleRegister}
                    className="bg-cyan-500 shadow-lg shadow-cyan-500/50 absolute right-165 bottom-60 "
                >
                    create
                </button>
            </div>

            <div className="flex justify-end">
                <button
                    onClick={getLogin}
                    className="bg-cyan-500 shadow-lg shadow-cyan-500/50 absolute right-151 bottom-60 "
                >
                    login
                </button>
            </div>

            <div>
                <img src="src/assets/login.jpg" alt="" width="800" height="800"/>
            </div>


        </div>
    )


}

export default User;