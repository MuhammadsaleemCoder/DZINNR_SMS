import React, { useEffect, useState } from "react";
import api from "../../../../api/axios";

function UpdateProfile({ teacher, setClose }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    gender: "",
    createdAt: "",
    experience: "",
    subject: "",
    qualification: "",
  });
  const handleInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const postData = async (e) => {
    try {
      e.preventDefault();
      await api.put(`/admin/singleProfileUpdate/${teacher._id}`, form);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (teacher) {
      setForm({
        name: teacher.user?.name || "",
        email: teacher.user?.email || "",
        phone: teacher.phone || "",
        gender: teacher.gender || "",
        createdAt: teacher.createdAt || "",
        experience: teacher.experience || "",
        subject: teacher.subject || "",
        qualification: teacher.qualification || "",
      });
    }
  }, [teacher]);
  return (
    <div className="w-[45%] h-[80%]  bg-white absolute z-100 left-1/2   top-1/2 -translate-1/2 rounded border-2 border-zinc-300 p-6 items-center">
      <h5 className="font-bold text-2xl py-2">Edit Profile</h5>

      <div className=" h-[90%]">
        <form
          action=""
          className="w-full h-full gap-2 flex flex-col "
          onSubmit={postData}
        >
          <div className="w-full h-[50%] border-zinc-300 border p-5 rounded-lg ">
            <div className="flex gap-3">
              <i className="fa-solid fa-user text-amber-600 text-xl "></i>
              <h2 className="font-bold">Professional Information</h2>
            </div>
            <div className="flex justify-between gap-4 mt-2 ">
              <div className="w-[50%] ">
                <p>Full Name</p>
                <input
                  onChange={handleInput}
                  value={form.name}
                  name="name"
                  type="text"
                  className="w-full h-9 mt-2 border border-zinc-400 rounded-lg  focus:outline-none px-4"
                />
              </div>
              <div className="w-[50%] ">
                <p>Email</p>
                <input
                  name="email"
                  onChange={handleInput}
                  value={form.email}
                  type="text"
                  name="email"
                  className="w-full h-9 mt-2 border border-zinc-400 rounded-lg  focus:outline-none px-4"
                />
              </div>
            </div>
            <div className="flex justify-between gap-4 mt-3 ">
              <div className="w-[50%] ">
                <p>Phone</p>
                <input
                  name="phone"
                  onChange={handleInput}
                  value={form.phone}
                  type="text"
                  className="w-full h-9 mt-2 border border-zinc-400 rounded-lg  focus:outline-none px-4"
                />
              </div>
              <div className="w-[50%] ">
                <p>Gender</p>

                <select
                  value={form.gender}
                  onChange={handleInput}
                  name="gender"
                  id=""
                  className="w-full h-9 mt-2 border border-zinc-400 rounded-lg  focus:outline-none px-4"
                >
                  {" "}
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
            </div>
            <div className="flex justify-between gap-4 mt-3 ">
              <div className="w-[50%] ">
                <p>Date of Birth</p>
                <input
                  name="dateOfBirth"
                  value={form.dateOfBirth}
                  onChange={handleInput}
                  type="date"
                  className="w-full h-9 mt-2 border border-zinc-400 rounded-lg  focus:outline-none px-4"
                />
              </div>
              <div className="w-[50%] ">
                <p>Address</p>
                <input
                  name="address"
                  value={form.address}
                  onChange={handleInput}
                  type="text"
                  className="w-full h-9 mt-2 border border-zinc-400 rounded-lg  focus:outline-none px-4"
                />
              </div>
            </div>
          </div>
          <div className="w-full h-[40%]  border-zinc-300 border p-5 rounded-lg ">
            <div className="flex gap-3">
              <i className="fa-solid fa-user text-amber-600 text-xl "></i>
              <h2 className="font-bold">Professional Information</h2>
            </div>
            <div className="flex justify-between gap-4 mt-2 ">
              <div className="w-[50%] ">
                <p>Subject</p>
                <input
                  name="subject"
                  value={form.subject}
                  onChange={handleInput}
                  name="subject"
                  type="text"
                  className="w-full h-9 mt-2 border border-zinc-400 rounded-lg  focus:outline-none px-4"
                />
              </div>
              <div className="w-[50%] ">
                <p>Qualification</p>
                <input
                  name="qualification"
                  onChange={handleInput}
                  value={form.qualification}
                  type="text"
                  name="email"
                  className="w-full h-9 mt-2 border border-zinc-400 rounded-lg  focus:outline-none px-4"
                />
              </div>
            </div>
            <div className="flex justify-between gap-4 mt-3 ">
              <div className="w-[50%] ">
                <p>Experience</p>
                <input
                  name="experience"
                  value={form.experience}
                  onChange={handleInput}
                  type="text"
                  className="w-full h-9 mt-2 border border-zinc-400 rounded-lg  focus:outline-none px-4"
                />
              </div>
              <div className="w-[50%] ">
                <p>Joining Date</p>
                <input
                  name="createdAt"
                  onChange={handleInput}
                  value={new Date(form.createdAt).toLocaleDateString("EN-US", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                  type="date"
                  className="w-full h-9 mt-2 border border-zinc-400 rounded-lg  focus:outline-none px-4"
                />
              </div>
            </div>
          </div>
          <div className="flex gap-10  justify-between mt-2">
            <button
              className="px-5 py-3 rounded-lg border border-zinc-300"
              onClick={() => setClose()}
              type="button"
            >
              Cancel
            </button>
            <button
              className=" bg-amber-600 px-6 py-3 text-white rounded-lg"
              type="submit"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UpdateProfile;
