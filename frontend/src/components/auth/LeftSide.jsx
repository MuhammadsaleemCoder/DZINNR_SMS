import React from "react";

export default function LeftSide() {
  return (
    <div className="w-[30%] sm:block hidden">
      <div className="p-8">
        <div className="flex gap-5">
          <img src="/images/logo.png" alt="" className=" w-12" />
          <div>
            <h1 className="text-blue-600 text-lg font-bold">DZINNR SMS</h1>
            <p className="text-gray-600 text-[12px]">
              School Management System
            </p>
          </div>
        </div>
        <div className="mt-4 ">
          <h1 className="font-bold text-4xl">Smart School.</h1>
          <h1 className="font-bold text-4xl">
            Better <span className="text-blue-600">Future.</span>
          </h1>
          <p className="mt-1">
            Manage students, teachers, classes, attendance, exams and more – all
            in one place.
          </p>
        </div>
        <div>
          <div className="flex items-center gap-4 mt-4">
            <div className="bg-blue-50 p-4 rounded-full">
              <i className="fa-regular fa-user text-blue-600 text-2xl"></i>
            </div>

            <div>
              {" "}
              <h4 className="font-bold">Role Based Access</h4>
              <p>Separate dashboards for Admin, Teachers and Students.</p>
            </div>
          </div>

          <div className="flex items-center gap-4 mt-6">
            <div className="bg-blue-50 p-4 rounded-full">
              <i className="fa-solid fa-shield  text-blue-600 text-2xl"></i>
            </div>

            <div>
              <h4 className="font-bold">Secure & Reliable</h4>
              <p>Your data is safe with us using modern authentication.</p>
            </div>
          </div>
          <div className="flex items-center gap-4 mt-7">
            <div className="bg-blue-50 p-4 rounded-full">
              <i className="fa-solid fa-chart-simple  text-blue-600 text-2xl"></i>
            </div>
            <div>
              <h4 className="font-bold">Everything Organized</h4>
              <p>From attendance to results, everything in one system.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-92 bg-amber-300">
        <img
          src="/images/school.png"
          alt=""
          className="object-cover w-full h-full "
        />
      </div>
    </div>
  );
}
