import React from "react";

function ViewTeacher({ profileData, setClose }) {
  return (
    <div className="w-[45%] h-[80%]  bg-white absolute z-100 left-1/2   top-1/2 -translate-1/2 rounded border-2 border-zinc-300 p-6 items-center">
      <div className="flex items-center justify-between">
        <h1 className=" font-bold text-2xl py-4">View Teacher Detail</h1>
        <button onClick={setClose} className="cursor-pointer">
          {" "}
          <i className="fa-solid fa-xmark text-2xl"></i>
        </button>
      </div>
      <div className="flex h-full">
        <div className="border border-zinc-300 bg-gray-50 rounded w-[40%]   flex flex-col justify-between items-center  h-[600px] p-8">
          <div>
            <div className=" items-center flex flex-col">
              <div className="h-32 w-32 rounded-full overflow-hidden  shadow-lg ">
                <img
                  src={profileData.img}
                  alt="Profile"
                  className="full object-cover"
                />
              </div>
              <h1 className="font-bold mt-2 text-2xl">
                {profileData.user.name}
              </h1>
              <div className=" mt-2 mb-2 flex items-center gap-2 bg-green-100 py-1 px-3 rounded-full  text-green-800 ">
                <i className="fa-solid fa-circle text-[12px]"></i>{" "}
                <p>{profileData.status}</p>
              </div>
              <p>{profileData.department} Teacher</p>
            </div>
          </div>
          <div className="w-full bg-white border rounded-lg border-zinc-400 flex flex-col gap-6 p-4">
            <div className="w-full rounded   flex items-center gap-3">
              <i className="fa-regular fa-calendar-days text-xl text-zinc-600"></i>
              <div className="w-full ">
                <p className="text-[14px]">Join On</p>
                <p className="text-[15px] font-medium">
                  {new Date(profileData.createdAt).toLocaleString("en-US", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 ">
              <i class="fa-regular fa-address-card text-lg text-zinc-600"></i>
              <div>
                <p>Teacher ID</p>
                <p className="text-[15px] font-medium">
                  TCH-{profileData._id.slice(0, 5)}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full  justify-between    h-[600px]">
          <div className="ml-4  rounded bg-zinc-50 border p-4 border-zinc-300 h-[200px] ">
            <div className="flex gap-3">
              <i className="fa-solid fa-user text-amber-600 text-xl "></i>
              <h2 className="font-bold">Personal Information</h2>
            </div>
            <div className="flex">
              <div className="w-[45%] ">
                <div className=" ml-2 mt-3">
                  <h3 className="text-zinc-700 text-[14px]">Full Name</h3>
                  <p className=" font-medium">{profileData.user.name}</p>
                </div>
                <div className=" ml-2 mt-10">
                  <h3 className="text-zinc-700 text-[14px]">Phone</h3>
                  <p className=" font-medium">{profileData.phone}</p>
                </div>
              </div>
              <div className=" ">
                <div className=" ml-2 mt-3">
                  <h3 className="text-zinc-700 text-[14px]">Email</h3>
                  <p className=" font-medium">{profileData.user.email}</p>
                </div>
                <div className=" ml-2 mt-10">
                  <h3 className="text-zinc-700 text-[14px]">Gender</h3>
                  <p className=" font-medium">{profileData.gender}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="ml-4  rounded bg-zinc-50 border p-4 border-zinc-300 h-[200px] ">
            <div className="flex gap-3">
              <i className="fa-solid fa-user text-amber-600 text-xl "></i>
              <h2 className="font-bold">Professional Information</h2>
            </div>
            <div className="flex">
              <div className="w-[45%] ">
                <div className=" ml-2 mt-3">
                  <h3 className="text-zinc-700 text-[14px]">Qualification</h3>
                  <p className=" font-medium">{profileData.qualification}</p>
                </div>
                <div className=" ml-2 mt-10">
                  <h3 className="text-zinc-700 text-[14px]">Subject</h3>
                  <p className=" font-medium">{profileData.subject}</p>
                </div>
              </div>
              <div className=" ">
                <div className=" ml-2 mt-3">
                  <h3 className="text-zinc-700 text-[14px]">Experience</h3>
                  <p className=" font-medium">{profileData.experience}</p>
                </div>
                <div className=" ml-2 mt-10">
                  <h3 className="text-zinc-700 text-[14px]">Joining Date</h3>
                  <p className=" font-medium">
                    {new Date(profileData.createdAt).toLocaleDateString(
                      "EN-US",
                      {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      },
                    )}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="ml-4  rounded bg-zinc-50 border p-4 border-zinc-300 mt-4 h-[150px] ">
            <div>
              <div className="flex gap-3">
                <i className="fa-solid fa-lock text-amber-600 text-xl "></i>
                <h2 className="font-bold">Account Information</h2>
              </div>
              <p className="ml-9"> Status</p>
              <div className=" mt-6 mb-2 ml-9 flex items-center gap-2 bg-green-100 py-1 px-3 rounded-full  text-green-800 w-[95px] ">
                <i className="fa-solid fa-circle text-[12px]"></i>{" "}
                <p>{profileData.status}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewTeacher;
