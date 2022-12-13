import React, { useEffect, useState } from 'react'
import { Axios } from 'axios'
import axios from 'axios'

const Fetchtest = () => {
    const [files, setfiles] = useState()
    const token= localStorage.getItem("token1")


    let formData = new FormData()


    const handleFile = (e) => {
      
       
    }
    const onSubmit = (e) => {
        e.preventDefault();
        const data = new FormData();

        data.append('files', files)
        axios.post("http://15.164.222.234:3001/upload",{headers:{authorization:token}}, {body:data})
            .then((e) => {
                console.log("Success");
            })
            .catch((e) =>{
                console.error("error");
            })

    }

    const handleUpload = () => {
        console.log("jeg");
    }
    return (
        <div>
            <h1 style={{ color: "red" }}>test_upload</h1>
            <form onSubmit={onSubmit}>
                <div>
                    <label>Select file</label>
                    <input type="file" name="file" onChange={handleFile} />
                </div>
                <button >Upload</button>
            </form>
            {/* <button onClick={test}>press</button> */}
        </div>

    )
}

export default Fetchtest
