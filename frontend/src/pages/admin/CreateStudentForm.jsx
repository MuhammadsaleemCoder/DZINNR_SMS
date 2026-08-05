import React, { useState, useEffect } from "react";
import api from "../../../api/axios";

function createStudentForm() {
  const [classes, setClasses] = useState([]);
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    rollNumber: "",
    gender: "",
    dateOfBirth: "",
    fatherName: "",
    fatherPhone: "",
    address: "",
    profilePic: "",
    classes: "",
    admissionDate: "",
    status: "",
  });

  const handleInput = async (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const formHandle = async (e) => {
    try {
      e.preventDefault();
      await api.post("/admin/students", {
        name: form.name,
        email: form.email,
        password: form.password,
        phone: form.phone,
        rollNumber: form.rollNumber,
        gender: form.gender,
        dateOfBirth: form.dateOfBirth,
        fatherName: form.fatherName,
        fatherPhone: form.fatherPhone,
        address: form.address,
        profilePic: form.profilePic,
        classes: form.classes,
        admissionDate: form.admissionDate,
        status: form.status,
      });
      console.log(form);
    } catch (error) {
      console.log("Error to sending form to creating student", error);
    }
  };

  const getClass = async () => {
    try {
      const res = await api.get("/admin/class");
      setClasses(res.data.classes);
      console.log(res.data.classes);
    } catch (error) {
      console.log("Error to finding classes creating class", error.response);
    }
  };

  useEffect(() => {
    getClass();
  }, []);
  return (
    <div>
      <div className="absolute left-160 top-50 w-200 h-165  z-100 rounded-l-lg bg-white border border-zinc-300 flex flex-col items-center">
        <div className=" border-b w-full flex justify-center items-center border-zinc-400 mb-3">
          <h1 className="text-amber-600 text-2xl font-bold mt-6 mb-4 ">
            Add New Student
          </h1>
        </div>
        <form
          onSubmit={formHandle}
          className="w-full flex flex-col items-center  mt-4 "
        >
          <div className="w-[95%] flex flex-col justify-center">
            <div className="flex gap-5  justify-center">
              <div className="w-[30%]">
                <label htmlFor="" className="text-[14px] font-medium">
                  Student Name <span className="text-amber-700">*</span>
                </label>
                <input
                  onChange={handleInput}
                  type="text"
                  value={form.name}
                  name="name"
                  placeholder="Enter Student"
                  className="w-full border border-gray-300 rounded-lg h-10 px-3 mt-2"
                />
              </div>
              <div className="w-[30%]">
                <label htmlFor="" className="text-[14px] font-medium">
                  Student Email <span className="text-amber-700">*</span>
                </label>
                <input
                  onChange={handleInput}
                  type="email"
                  name="email"
                  value={form.email}
                  placeholder="Enter Student Email"
                  className="w-full border border-gray-300 rounded-lg h-10 px-3 mt-2"
                />
              </div>
              <div className="w-[30%]">
                <label htmlFor="" className="text-[14px] font-medium">
                  Student Password <span className="text-amber-700">*</span>
                </label>
                <input
                  onChange={handleInput}
                  type="password"
                  value={form.password}
                  name="password"
                  placeholder="Enter Student"
                  className="w-full border border-gray-300 rounded-lg h-10 px-3 mt-2"
                />
              </div>
            </div>
            <div className="flex gap-5  justify-center mt-4">
              <div className="w-[30%]">
                <label htmlFor="" className="text-[14px] font-medium">
                  Contact Number <span className="text-amber-700">*</span>
                </label>
                <input
                  onChange={handleInput}
                  type="number"
                  value={form.phone}
                  name="phone"
                  placeholder="Student phone Number"
                  className="w-full border border-gray-300 rounded-lg h-10 px-3 mt-2"
                />
              </div>
              <div className="w-[30%]">
                <label htmlFor="" className="text-[14px] font-medium">
                  Roll Number <span className="text-amber-700">*</span>
                </label>
                <input
                  onChange={handleInput}
                  type="number"
                  name="rollNumber"
                  value={form.rollNumber}
                  placeholder="Student Roll Number"
                  className="w-full border border-gray-300 rounded-lg h-10 px-3 mt-2"
                />
              </div>
              <div className="w-[30%] flex flex-col">
                <label htmlFor="" className="text-[14px] font-medium">
                  Select Gender <span className="text-amber-700">*</span>
                </label>
                <select
                  name="gender"
                  onChange={handleInput}
                  value={form.gender}
                  id=""
                  className="w-full border  mt-3 h-10 px-3 -px-3 rounded-lg border-zinc-300"
                >
                  <option
                    value=""
                    className="w-full border  mt-3 h-10 px-3 -px-3 rounded-lg border-zinc-300"
                  >
                    Select Gender
                  </option>
                  <option
                    value="male"
                    className="w-full border  mt-3 h-10 px-3 -px-3 rounded-lg border-zinc-300"
                  >
                    Male
                  </option>
                  <option
                    className="w-full border  mt-3 h-10 px-3 -px-3 rounded-lg border-zinc-300"
                    value="female"
                  >
                    Female
                  </option>
                </select>
              </div>
            </div>

            <div className="flex gap-5  justify-center mt-4">
              <div className="w-[30%]">
                <label htmlFor="" className="text-[14px] font-medium">
                  Date Of Birth <span className="text-amber-700">*</span>
                </label>
                <input
                  onChange={handleInput}
                  type="date"
                  name="dateOfBirth"
                  value={form.dateOfBirth}
                  placeholder="Student phone Number"
                  className="w-full border border-gray-300 rounded-lg h-10 px-3 mt-2"
                />
              </div>
              <div className="w-[30%]">
                <label htmlFor="" className="text-[14px] font-medium">
                  Father Name <span className="text-amber-700">*</span>
                </label>
                <input
                  onChange={handleInput}
                  type="text"
                  value={form.fatherName}
                  name="fatherName"
                  placeholder="Student Roll Number"
                  className="w-full border border-gray-300 rounded-lg h-10 px-3 mt-2"
                />
              </div>

              <div className="w-[30%]">
                <label htmlFor="" className="text-[14px] font-medium">
                  Father Number<span className="text-amber-700">*</span>
                </label>
                <input
                  onChange={handleInput}
                  type="number"
                  value={form.fatherPhone}
                  name="fatherPhone"
                  placeholder="Student Roll Number"
                  className="w-full border border-gray-300 rounded-lg h-10 px-3 mt-2"
                />
              </div>
            </div>

            <div className="flex gap-5  justify-center mt-4">
              <div className="w-[30%]">
                <label htmlFor="" className="text-[14px] font-medium">
                  Student Address <span className="text-amber-700">*</span>
                </label>
                <input
                  onChange={handleInput}
                  type="text"
                  value={form.address}
                  name="address"
                  placeholder="Student Address"
                  className="w-full border border-gray-300 rounded-lg h-10 px-3 mt-2"
                />
              </div>
              <div className="w-[30%]">
                <label htmlFor="" className="text-[14px] font-medium">
                  Student Class <span className="text-amber-700">*</span>
                </label>

                <select
                  name="classes"
                  onChange={handleInput}
                  value={form.classes}
                  id=""
                  className="w-full border border-gray-300 rounded-lg h-10 px-3 mt-2"
                >
                  {classes.map((cls) => {
                    return (
                      <option key={cls._id} value={cls._id}>
                        {cls.className}
                      </option>
                    );
                  })}
                </select>
              </div>

              <div className="w-[30%]">
                <label htmlFor="" className="text-[14px] font-medium">
                  Admission Date<span className="text-amber-700">*</span>
                </label>
                <input
                  onChange={handleInput}
                  type="date"
                  value={form.admissionDate}
                  name="admissionDate"
                  placeholder="Student Roll Number"
                  className="w-full border border-gray-300 rounded-lg h-10 px-3 mt-2"
                />
              </div>
            </div>
            <div className="flex gap-5  justify-center mt-4">
              <div className="w-[72%]">
                <label htmlFor="" className="text-[14px] font-medium">
                  Student Profile <span className="text-amber-700">*</span>
                </label>
                <input
                  onChange={handleInput}
                  value={form.profilePic}
                  type="text"
                  name="profilePic"
                  placeholder="Student profilePic"
                  className="w-full border border-gray-300 rounded-lg h-10 px-3 mt-2"
                />
              </div>
              <div className="w-[20%]">
                <label htmlFor="" className="text-[14px] font-medium">
                  Student Status <span className="text-amber-700">*</span>
                </label>
                <select
                  name="status"
                  onChange={handleInput}
                  value={form.status}
                  id=""
                  className="w-full border border-gray-300 rounded-lg h-10 px-3 mt-2"
                >
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                  <option value="Graduate">Graduate</option>
                  <option value="Transferred">Transferred</option>
                  <option value="Dropped">Dropped</option>
                  <option value="Suspended">Suspended</option>
                </select>
              </div>
            </div>
          </div>
          <div className="w-full flex mt-12 items-center justify-center border-t border-zinc-300">
            <button
              className="mt-5 bg-amber-600 w-30 h-10 rounded  text-white hover:bg-amber-800"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default createStudentForm;
