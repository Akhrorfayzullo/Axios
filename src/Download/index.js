import React from "react";
import axios from "axios";

const Download = () => {
  const tokenn = localStorage.getItem("token11");
  const onDownload = async () => {
    try {
      let resp = await axios.get("http://52.78.15.205:3001/my/files", {
        headers: { Authorization: tokenn },
      });
      console.log(resp);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <h1 style={{ color: "red" }}>Download</h1>
      <button onClick={() => onDownload()}>Download</button>
    </div>
  );
};
export default Download;

// last change
