import React from "react";

export default function LeftSide() {
  return (
    <div
      className="w-[40%] sm:block md:hidden   hidden bg-cover bg-no-repeat bg-center h-screen items-center justify-center xl:block"
      style={{
        backgroundImage: "url('/images/leftSchool.png') ",
      }}
    >
      <div className="px-8 py-2 z-10">
        <div className="flex gap-5 items-center">
          <img src="/images/logo.png" alt="" className=" w-16" />
          <div>
            <h1 className="text-amber-600 text-lg font-bold">DZINNR SMS</h1>
            <p className="text-gray-600 text-[12px]">
              School Management System
            </p>
          </div>
        </div>
        <div className="mt-4 ">
          <h1 className="font-bold text-4xl">Smart School.</h1>
          <h1 className="font-bold text-4xl">
            Better <span className="text-amber-600">Future.</span>
          </h1>
          <p className="mt-1">
            Manage students, teachers, classes, attendance, exams and more – all
            in one place.
          </p>
        </div>
        <div>
          <div className="flex items-center gap-4 mt-5 bg-white w-[70%] p-2 rounded border border-zinc-400">
            <div className="bg-amber-100 p-4 rounded-full">
              <i className="fa-regular fa-user text-amber-600 text-2xl"></i>
            </div>

            <div>
              <h4 className="font-bold">Role Based Access</h4>
              <p>Separate dashboards for Admin, Teachers and Students.</p>
            </div>
          </div>

          <div className="flex items-center gap-4 mt-2  bg-white w-[70%] p-2 rounded border border-zinc-400">
            <div className="bg-amber-100 p-4 rounded-full">
              <i className="fa-solid fa-shield  text-amber-600 text-2xl"></i>
            </div>

            <div>
              <h4 className="font-bold">Secure & Reliable</h4>
              <p>Your data is safe with us using modern authentication.</p>
            </div>
          </div>
          <div className="flex items-center gap-4 mt-2  bg-white w-[70%] p-2 rounded border border-zinc-400">
            <div className="bg-amber-100 p-4 rounded-full">
              <i className="fa-solid fa-chart-simple  text-amber-600 text-2xl"></i>
            </div>
            <div>
              <h4 className="font-bold">Everything Organized</h4>
              <p>From attendance to results, everything in one system.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
