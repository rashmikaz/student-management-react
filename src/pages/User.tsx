import {useDispatch} from "react-redux";
import {AppDispatch} from "../store/Store.ts";
import {useEffect, useState} from "react";
import {UserModel} from "../models/UserModel.ts";
import {
    addUser,
    deleteUser,
    deletedUser,
    getUsers,
    saveUser,
    updateUser,
    updatedUser
} from "../reducers/UserSlice.ts";

function User() {

    const dispatch = useDispatch<AppDispatch>();


    useEffect(() => {
        dispatch(getUsers());
    }, [dispatch]);

    const [id, setId] = useState("")
    const [name, setName] = useState("")
    const [nic, setNic] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [password, setPassword] = useState("")


    const handleAdd = () => {
        if (!name || !nic || !email || !phone || !password) {
            alert("All fields are required!")
            return
        }

        const newUser = new UserModel(name, nic, email, phone, password);
        dispatch(saveUser(newUser));
        resetForm();

    }


    const resetForm = () => {
        setId("")
        setName("")
        setNic("")
        setEmail("")
        setPhone("")
        setPassword("")
        setIsEditing(false)
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
                        type="text"
                        name="nic"
                        placeholder="NIC"
                        value={nic}
                        onChange={(e) => setNic(e.target.value)}
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
                        type="text"
                        name="phone"
                        placeholder="Phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
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
                </div>

            </div>

            <div className="flex justify-end">
                <button
                    onClick={handleAdd}
                    className="bg-cyan-500 shadow-lg shadow-cyan-500/50 absolute right-165 bottom-60 "
                >
                    create
                </button>
            </div>

            <div className="flex justify-end">
                <button
                    onClick={}
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