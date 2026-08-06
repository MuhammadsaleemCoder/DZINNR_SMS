import React from "react";
import { useParams } from "react-router";

import { useState, useEffect } from "react";
import api from "../../../../api/axios";

function ViewDetails() {
  const [teacherDetails, setTeacherDetails] = useState({});
  const { id } = useParams();

  const getData = async () => {
    try {
      const res = await api.get(`/admin/TeacherProfile/${id}`);
      console.log(res.data.teacherId);
      setTeacherDetails(res.data.teacherId);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return <div className="z-100">{teacherDetails.department}</div>;
}

export default ViewDetails;
