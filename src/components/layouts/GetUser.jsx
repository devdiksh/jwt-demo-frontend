import React from "react";
import axiosClient from "../../axiosClient";

const GetUser = () => {
  const handleGetUser = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosClient.getRequest('/get-user');
      console.log(response);
    } catch (err) {
      console.error("Login Failed", err);
    }
  };


  return (
    <div>
      <button className="Submit" onClick={handleGetUser}>
        GetUser
      </button>
    </div>
  );
};

export default GetUser;
