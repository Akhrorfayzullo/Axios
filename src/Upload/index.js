import React, { Fragment, useState } from "react";
import axios from "axios";

const Fetchtest = () => {
  const [file, setfile] = useState("");
  const [fileName, setfileName] = useState("Choose file");
  const token = localStorage.getItem("token11");
  // let formData = new FormData()

  const onChange = (e) => {
    setfile(e.target.files[0]);
    setfileName(e.target.files[0].name);
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);

    let resp = await axios.post("http://52.78.15.205:3001/upload", formData, {
      headers: { authorization: token },
    });
    console.log({ resp });
  };

  const onDownload = async () => {
    try {
      let resp = await axios.get("http://52.78.15.205:3001/my/files", {
        headers: { Authorization: token },
      });
      console.log(resp);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Fragment>
      <h1 style={{ color: "red" }}>test_upload</h1>
      <form onSubmit={onSubmit}>
        <div>
          <input type="file" onChange={onChange} />
          <label>{fileName}</label>
        </div>
        <input type="submit" value="Upload" />
      </form>

      <div>
        <h1 style={{ color: "red" }}>Download</h1>
        <button onClick={() => onDownload()}>Download</button>
      </div>
      {/* <button onClick={test}>press</button> */}
    </Fragment>
  );
};

export default Fetchtest;
// last change
