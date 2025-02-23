import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch} from "../store/Store.ts";
import {deletedTeacher, getTeachers, saveTeacher, updatedTeacher} from "../reducers/TeacherSlice.ts";
import {TeacherModel} from "../models/TeacherModel.ts";
import {Trash2} from "react-feather";


function Teacher() {


    const dispatch = useDispatch<AppDispatch>();
    const teachers = useSelector(state => state.teachers);

    useEffect(() => {
        dispatch(getTeachers());
    }, [dispatch]);

    const [id, setId] = useState("")
    const [name, setName] = useState("")
    const [nic, setNic] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [address, setAddress] = useState("")
    const [subject, setSubject] = useState("")
    const [isEditing, setIsEditing] = useState(false)

    const handleAdd = () => {
        if (!name || !nic || !email || !phone || !address || !subject) {
            alert("All fields are required!")
            return
        }

        const newTeacher = new TeacherModel(name, nic, email, phone, address, subject);
        dispatch(saveTeacher(newTeacher));
        resetForm();

    }
    const handleEdit = (teacher: TeacherModel) => {

        setName(teacher.name)
        setNic(teacher.nic)
        setEmail(teacher.email)
        setPhone(teacher.phone)
        setAddress(teacher.address)
        setSubject(teacher.subject)
        setIsEditing(true)
    }

    const handleUpdate = () => {
        if (!name || !nic || !email || !phone || !address || !subject) {
            alert("All fields are required!");
            return;
        }

        const updateTeac = new TeacherModel(name, nic, email, phone, address, subject);

        dispatch(updatedTeacher({ email, teacher: updateTeac }))
            .then(() => {
                resetForm();
            })
            .catch((error) => {
                console.error("Error updating teacher:", error.message);
            });
    }

    const handleDelete = (teacherEmail: string) => {
        dispatch(deletedTeacher(teacherEmail));
    }

    const resetForm = () => {
        setId("")
        setName("")
        setNic("")
        setEmail("")
        setPhone("")
        setAddress("")
        setSubject("")
        setIsEditing(false)
    }


    return (
        <div className="p-6">
            <div className="grid grid-cols-2 gap-4 mb-4">

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
                    type="text"
                    name="address"
                    placeholder="Address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="border p-2 rounded"
                />
                <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
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
                    <th className="border px-4 py-2">Email</th>
                    <th className="border px-4 py-2">Address</th>
                    <th className="border px-4 py-2">Subject</th>
                </tr>
                </thead>
                <tbody>
                {teachers.map((teacher: TeacherModel) => (
                    <tr
                        key={teacher.email}
                        onClick={() => handleEdit(teacher)}
                        className="hover:cursor-pointer hover:bg-slate-600 hover:text-white"
                    >
                        <td className="border px-4 py-2">{teacher.id}</td>
                        <td className="border px-4 py-2">{teacher.name}</td>
                        <td className="border px-4 py-2">{teacher.nic}</td>
                        <td className="border px-4 py-2">{teacher.email}</td>
                        <td className="border px-4 py-2">{teacher.phone}</td>
                        <td className="border px-4 py-2">{teacher.address}</td>
                        <td className="border px-4 py-2">{teacher.subject}</td>
                        <td className="border px-4 py-2 text-center">
                            <button
                                onClick={() => handleDelete(teacher.email)}
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

export default Teacher;