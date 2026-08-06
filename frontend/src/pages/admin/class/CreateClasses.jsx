import React, { useEffect, useState } from "react";

import api from "../../../../api/axios";

function CreateClasses() {
  const [teacher, setTeacher] = useState([]);
  const [selectedStudentId, setSelectedStudentId] = useState("");
  const [students, setStudents] = useState([]);
  const [formData, setFormData] = useState({
    className: "",
    section: "",
    classTeacherId: "",
    students: [],
  });

  const teachers = async () => {
    try {
      const res = await api.get("/admin/teachers");
      setTeacher(res.data.teachers);
    } catch (error) {
      console.log("error fetching teacher data to create class", error.message);
    }
  };

  const getStudent = async () => {
    try {
      const res = await api.get("/admin/students");
      setStudents(res.data.students);
      console.log(res.data, "sssh");
    } catch (error) {
      console.log("error fetching teacher data to create class", error.message);
    }
  };

  const handleForm = async (e) => {
    try {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    } catch (error) {
      console.log(error.message);
    }
  };

  const submitForm = async (e) => {
    try {
      e.preventDefault();
      await api.post("/admin/class", formData);
    } catch (error) {
      console.log("sending form to create new class", error.message);
    }
  };
  useEffect(() => {
    teachers();
    getStudent();
  }, []);

  const addStudent = () => {
    if (selectedStudentId && !formData.students.includes(selectedStudentId)) {
      setFormData({
        ...formData,
        students: [...formData.students, selectedStudentId],
      });
    }
    setSelectedStudentId("");
  };
  return (
    <div className="absolute bg-white border border-zinc-300 h-180 w-160 z-100 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg">
      <div className="border-b border-zinc-300">
        <h1 className="px-8 mt-6 font-bold text-2xl text-amber-600 mb-4">
          Add New Class
        </h1>
      </div>

      <div>
        <form
          className="w-full flex justify-center items-center flex-col mt-4"
          onSubmit={submitForm}
        >
          <div className="w-[90%] flex gap-8 relative">
            <div className="w-[30%]">
              <label htmlFor="" className="text-[14px] font-medium">
                Class Name <span className="text-amber-700">*</span>
              </label>
              <input
                value={formData.className}
                name="className"
                onChange={handleForm}
                placeholder="e.g 10th Grade"
                className="w-full border border-gray-300 rounded-lg h-10 px-3 mt-2"
              />
            </div>
            <div className="w-[30%]">
              <label htmlFor="" className="text-[14px] font-medium">
                Section <span className="text-amber-700">*</span>
              </label>
              <input
                value={formData.section}
                name="section"
                onChange={handleForm}
                placeholder="e.g A"
                className="w-full border border-gray-300 rounded-lg h-10 px-3 mt-2"
              />
            </div>
            <div className="w-[30%]">
              <label htmlFor="" className="text-[14px] font-medium">
                Class Teacher <span className="text-amber-700">*</span>
              </label>
              <select
                value={formData.classTeacherId}
                onChange={handleForm}
                name="classTeacherId"
                id=""
                className="w-full border border-gray-300 rounded-lg h-10 px-3 mt-2"
              >
                <option value="">Select Teacher</option>
                {teacher.map((val) => {
                  return (
                    <option value={val._id} key={val._id}>
                      {val.user.name}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
          <div className="w-[90%] mt-5 flex justify-between items-baseline-last">
            <div className="w-[65%]">
              {" "}
              <label htmlFor="" className="text-[14px] font-medium">
                Add Student in Class <span className="text-amber-700">*</span>
              </label>
              <select
                value={selectedStudentId}
                name="students"
                id=""
                onChange={(e) => setSelectedStudentId(e.target.value)}
                className="w-full border border-gray-300 rounded-lg h-10 px-3 mt-2"
              >
                <option value="">Add Students</option>
                {students.map((val) => {
                  return (
                    <option key={val._id} value={val._id}>
                      {val.user.name}
                    </option>
                  );
                })}
              </select>
            </div>

            <button
              type="button"
              onClick={addStudent}
              className="bg-[#1F2933] text-white px-5 py-2 rounded top-4"
            >
              Add
            </button>
          </div>

          <div className="w-[90%] border-zinc-400 border h-40 mt-10 rounded p-2">
            {formData.students.map((studentId) => {
              const student = students.find((s) => s._id === studentId);
              return (
                <span
                  key={studentId}
                  className="bg-zinc-50 text-amber-00 px-3 py-1 rounded-lg text-sm"
                >
                  {student?.user?.name}
                </span>
              );
            })}
          </div>
          <button className="px-8 py-2 rounded bg-amber-600 text-white mt-7">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateClasses;
