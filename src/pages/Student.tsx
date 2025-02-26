import {useEffect, useState} from "react"
import { Trash2 } from "react-feather"
import {useDispatch, useSelector} from "react-redux";
import {
    addStudent,
    deleteStudent,
    deletedStudent,
    getStudents,
    saveStudent,
    updateStudent,
    updatedStudent
} from "../reducers/StudentSlice.ts";
import {StudentModel} from "../models/StudentModel.ts";
import {AppDispatch} from "../store/Store.ts";

function Student() {

    const dispatch = useDispatch<AppDispatch>();
    const students = useSelector(state => state.students);

    useEffect(() => {
        dispatch(getStudents());
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
        // setCustomers([...customers, { id, name, nic, email, phone }])
        const newStudent = new StudentModel(name, nic, email, phone);
        // dispatch(addCustomer(newCustomer));
        dispatch(saveStudent(newStudent));
        //alert("customer added successfully!")
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
        if (!name || !nic || !email || !phone) {
            alert("All fields are required!");
            return;
        }

        const updateCust = new StudentModel(name, nic, email, phone);

        dispatch(updatedStudent({ email, student: updateCust }))
            .then(() => {
                resetForm();
            })
            .catch((error) => {
                console.error("Error updating customer:", error.message);
            });
    }

    const handleDelete = (studentEmail: string) => {
        dispatch(deletedStudent(studentEmail));
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
                {/*<input*/}
                {/*    type="text"*/}
                {/*    name="id"*/}
                {/*    placeholder="ID"*/}
                {/*    value={id}*/}
                {/*    onChange={(e) => setId(e.target.value)}*/}
                {/*    className="border p-2 rounded"*/}
                {/*/>*/}
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
                {students.map((customer: StudentModel) => (
                    <tr
                        key={customer.email}
                        onClick={() => handleEdit(customer)}
                        className="hover:cursor-pointer hover:bg-slate-600 hover:text-white"
                    >
                        <td className="border px-4 py-2">{customer.id}</td>
                        <td className="border px-4 py-2">{customer.name}</td>
                        <td className="border px-4 py-2">{customer.nic}</td>
                        <td className="border px-4 py-2">{customer.email}</td>
                        <td className="border px-4 py-2">{customer.phone}</td>
                        <td className="border px-4 py-2 text-center">
                            <button
                                onClick={() => handleDelete(customer.email)}
                                className="bg-red-500 text-white p-2 rounded-lg"
                            >
                                <Trash2 />
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}

export default Student