import React, { useEffect, useRef, useState } from "react";
import { Axios } from "axios";
import axios from "axios";

const Download = () => {
  const [data, setData] = useState();
  const tokenn = localStorage.getItem("token11");
  const onDownload = async (e) => {
    e.preventDefault();
    // try {
    //     const res = await axios.get('http://15.164.222.234:3001/my/files', {
    //         headers: {
    //             authorization: tokenn,
    //             // responseType: 'blob'
    //         }
    //     })
    //         .then((res) => {
    //             // console.log(res.data.response, "-", res.data.response, "data download");
    //             // let len = res.data.response.length - 1
    //             console.log(res);
    //             // setData(res.data.response)
    //             // console.log(res.data.response[len]);
    //             // FileDownload(res.data, 'filename.jpg')
    //         })
    // } catch (err) {
    //     console.log(err);
    // }
    // http://52.78.15.205

    await axios
      .get("http://52.78.15.205:3001/my/files", {
        headers: { Authorization: tokenn },
      })
      .then((e) => {
        console.log({ tokenn });
      })
      .catch((e) => {
        console.error("error");
      });
  };
  return (
    <div>
      <h1 style={{ color: "red" }}>Download</h1>
      <button onClick={(e) => onDownload(e)}>Download </button>

      {/* <Link to="#" target="_blank" download>Download</Link> */}
      {/* <button onClick={test}>press</button> */}
    </div>
  );
};
export default Download;

// last change
