import {useEffect, useState} from "react"
import { Trash2 } from "react-feather"
import {useDispatch, useSelector} from "react-redux";
import {
    addStudent,
    deleteStudent,
    deletedStudent,
    getStudent,
    saveStudent,
    updateStudent,
    updatedStudent
} from "../reducers/StudentSlice.ts";
import {StudentModel} from "../models/StudentModel.ts";
import {AppDispatch} from "../store/Store.ts";

function Student(){


    const dispatch = useDispatch<AppDispatch>();
    const students = useSelector(state => state.students);

    useEffect(() => {
        dispatch(getStudent());
    }, [dispatch]);

    const [id, setId] = useState("")
    const [name, setName] = useState("")
    const [nic, setNic] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [isEditing, setIsEditing] = useState(false)

    const handleAdd = () => {
        if (!name || !nic || !email || !phone) {
            alert("All fields are required!")
            return
        }

        const newStudent = new StudentModel(name, nic, email, phone);

        dispatch(saveStudent(newStudent));
        alert("student added successfully!")

        resetForm();

    }

    const handleEdit = (student: StudentModel) => {
        // setId(customer.id)
        setName(student.name)
        setNic(student.nic)
        setEmail(student.email)
        setPhone(student.phone)
        setIsEditing(true)
    }

    const handleUpdate = () => {
        if (!id || !name || !nic || !email || !phone) {
            alert("All fields are required!")
            return
        }
        const updatestu = new StudentModel(name, nic, email, phone);
        dispatch(updatedStudent(email,updatestu));
        alert("Successfully Updated");

        resetForm();
    }

    const handleDelete = (studentEmail: string) => {
        if (window.confirm("Are you sure you want to delete this student?")) {
            dispatch(deletedStudent(studentEmail));
        }
    }

    const resetForm = () => {
        setId("")
        setName("")
        setNic("")
        setEmail("")
        setPhone("")
        setIsEditing(false)
    }

    return (
        <div className="p-6">
            <div className="grid grid-cols-2 gap-4 mb-4">
                <input
                    type="text"
                    name="id"
                    placeholder="ID"
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                    className="border p-2 rounded"
                />
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
            </div>
            <div className="flex justify-end">
                {isEditing ? (
                    <button
                        onClick={handleUpdate}
                        className="bg-blue-500 text-white p-2 rounded mr-2"
                    >
                        Update
                    </button>
                ) : (
                    <button
                        onClick={handleAdd}
                        className="bg-green-500 text-white p-2 rounded mr-2"
                    >
                        Add
                    </button>
                )}
                {isEditing && (
                    <button
                        onClick={resetForm}
                        className="bg-gray-500 text-white p-2 rounded"
                    >
                        Cancel
                    </button>
                )}
            </div>
            <table className="min-w-full table-auto border-collapse mt-6">
                <thead>
                <tr className="bg-gray-100">
                    <th className="border px-4 py-2">ID</th>
                    <th className="border px-4 py-2">Name</th>
                    <th className="border px-4 py-2">NIC</th>
                    <th className="border px-4 py-2">Email</th>
                    <th className="border px-4 py-2">Phone</th>
                    <th className="border px-4 py-2">Actions</th>
                </tr>
                </thead>
                <tbody>
                {students.map((student: StudentModel) => (
                    <tr
                        key={student.email}
                        onClick={() => handleEdit(student)}
                        className="hover:cursor-pointer hover:bg-slate-600 hover:text-white"
                    >
                        <td className="border px-4 py-2">{student.id}</td>
                        <td className="border px-4 py-2">{student.name}</td>
                        <td className="border px-4 py-2">{student.nic}</td>
                        <td className="border px-4 py-2">{student.email}</td>
                        <td className="border px-4 py-2">{student.phone}</td>
                        <td className="border px-4 py-2 text-center">
                            <button
                                onClick={() => handleDelete(student.email)}
                                className="bg-red-500 text-white p-2 rounded-lg"
                            >
                                <Trash2/>
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>

    )

}

export default Student;