import React from "react";
import api from "../../../api/axios";
import { useState, useEffect } from "react";

function CreateTeacherForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    department: "",
    subject: "",
    qualification: "",
    experience: "",
    status: "",
    img: "",
  });

  const handleForm = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitForm = (e) => {
    try {
      e.preventDefault();
      api.post("/admin/teachers", {
        name: formData.name,
        email: formData.email,
        password: formData.password,
        phone: formData.phone,
        department: formData.department,
        subject: formData.subject,
        qualification: formData.qualification,
        experience: formData.experience,
        status: formData.status,
        img: formData.img,
      });
      console.log(formData);
    } catch (error) {
      console.log("issue in creating teacher", error);
    }
  };

  return (
    <div className="w-[40%] z-100 h-170 bg-white border border-slate-300 absolute top-30 left-142  rounded-lg items-center flex flex-col">
      <div className=" border-b  border-slate-400  w-full flex justify-center ">
        <h1 className="font-bold text-2xl mt-8  text-amber-600 mb-3">
          Add Teacher
        </h1>
      </div>
      <form
        action=""
        className="flex-col items-center flex w-full"
        onSubmit={submitForm}
      >
        <div className="w-[90%]">
          <div className="flex  gap-6 w-full mt-4">
            <div>
              <label htmlFor="" className="font-medium ">
                Teacher Name
              </label>
              <input
                type="text"
                className="border border-slate-400 h-12 rounded-lg w-full px-4 mt-2"
                placeholder="Enter Teacher Name"
                name="name"
                required
                value={formData.name}
                onChange={handleForm}
              />
            </div>
            <div>
              <label htmlFor="" className="font-medium ">
                Teacher Email
              </label>
              <input
                type="text"
                className="border border-slate-400 h-12 rounded-lg w-full px-4 mt-2"
                placeholder="Enter Teacher Email"
                name="email"
                required
                value={formData.email}
                onChange={handleForm}
              />
            </div>
          </div>

          <div className="flex  gap-6 w-full mt-5">
            <div>
              <label htmlFor="" className="font-medium ">
                Password &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              </label>
              <input
                type="text"
                className="border border-slate-400 h-12 rounded-lg w-full px-4 mt-2"
                placeholder="Enter Teacher Password"
                name="password"
                required
                value={formData.password}
                onChange={handleForm}
              />
            </div>
            <div>
              <label htmlFor="" className="font-medium ">
                Phone Number
              </label>
              <input
                type="text"
                className="border border-slate-400 h-12 rounded-lg w-full px-4 mt-2"
                placeholder="Enter Teacher Phone"
                name="phone"
                required
                value={formData.phone}
                onChange={handleForm}
              />
            </div>
          </div>
          <div className="flex  gap-6 w-full mt-5">
            <div>
              <label htmlFor="" className="font-medium ">
                Department &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
                &nbsp;
              </label>
              <input
                type="text"
                className="border border-slate-400 h-12 rounded-lg w-full px-4 mt-2"
                placeholder="Teacher Department"
                name="department"
                required
                value={formData.department}
                onChange={handleForm}
              />
            </div>
            <div>
              <label htmlFor="" className="font-medium ">
                Teacher Subject
              </label>
              <input
                type="text"
                className="border border-slate-400 h-12 rounded-lg w-full px-4 mt-2"
                placeholder="Enter Teacher Subject"
                name="subject"
                required
                value={formData.subject}
                onChange={handleForm}
              />
            </div>
          </div>

          <div className="flex  gap-6 w-full mt-5">
            <div>
              <label htmlFor="" className="font-medium ">
                Qualification &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;
                &nbsp;&nbsp; &nbsp;
              </label>
              <input
                type="text"
                className="border border-slate-400 h-12 rounded-lg w-full px-4 mt-2"
                placeholder="Teacher Qualification"
                name="qualification"
                required
                value={formData.qualification}
                onChange={handleForm}
              />
            </div>
            <div>
              <label htmlFor="" className="font-medium ">
                Teacher Experience
              </label>
              <input
                type="text"
                className="border border-slate-400 h-12 rounded-lg w-full px-4 mt-2"
                placeholder="Enter Teacher Experience"
                name="experience"
                required
                value={formData.experience}
                onChange={handleForm}
              />
            </div>
            <div>
              <label htmlFor="" className="font-medium ">
                Teacher Status
              </label>
              <input
                type="text"
                className="border border-slate-400 h-12 rounded-lg w-full px-4 mt-2"
                placeholder="Teacher Status"
                name="status"
                required
                value={formData.status}
                onChange={handleForm}
              />
              <select name="" id="">
                <option value="">Active</option>
              </select>
            </div>
          </div>
          <div className="flex flex-col  gap-2 w-full mt-5 mb-3 ">
            <label htmlFor="" className="font-medium ">
              Image Link
            </label>
            <input
              type="text"
              className="border border-slate-400 h-12 rounded-lg w-full px-4   "
              placeholder="Teacher Qualification"
              name="img"
              required
              value={formData.img}
              onChange={handleForm}
            />
          </div>
        </div>

        <div className="w-full   flex gap-10 items-center justify-center  border-t border-slate-400  h-full">
          <button
            type="submit"
            className="hover:cursor-pointer w-26 bg-amber-600 text-taupe-50 border h-12 items-center justify-center flex rounded mt-2 hover:bg-amber-800"
          >
            <i className="fa-solid fa-check"></i>
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateTeacherForm;
