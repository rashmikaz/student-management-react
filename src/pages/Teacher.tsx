

function Teacher() {
    return (
        <div className="p-6">
            <div className="grid grid-cols-2 gap-4 mb-4">

                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value=""
                    className="border p-2 rounded"
                />
                <input
                    type="text"
                    name="nic"
                    placeholder="NIC"
                    value=""
                    className="border p-2 rounded"
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value=""
                    className="border p-2 rounded"
                />
                <input
                    type="text"
                    name="phone"
                    placeholder="Phone"
                    value=""
                    className="border p-2 rounded"
                />
                <input
                    type="text"
                    name="address"
                    placeholder="Address"
                    value=""
                    className="border p-2 rounded"
                />
                <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value=""
                    className="border p-2 rounded"
                />
            </div>


        </div>
    )
}

export default Teacher;