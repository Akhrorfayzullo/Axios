import React, { Fragment, useState } from 'react'
import axios from 'axios'

const token = localStorage.getItem("token11")

const Fetchtest = () => {
    const [file, setfile] = useState('')
    const [fileName, setfileName] = useState('Choose file')



    // let formData = new FormData()


    const onChange = e => {
        // console.log(e.target.files);
        setfile(e.target.files[0]);
        setfileName(e.target.files[0].name)

    }
    const onSubmit = async e => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('file', file);

       await axios.post("http://52.78.15.205:3001/upload",formData , { headers: { authorization: token } })
            .then((e) => {
                console.log("Success");
                console.log(token);
            })
            .catch((e) => {
                console.error("error");
            })

    }

   
    return (
        <Fragment>
            <h1 style={{ color: "red" }}>test_upload</h1>
            <form onSubmit={onSubmit}>
                <div>
                    <input type="file"  onChange={onChange} />
                    <label>{fileName}</label>
                </div>
                <input type='submit' value='Upload' />
            </form>
            {/* <button onClick={test}>press</button> */}
        </Fragment>

    )
}

export default Fetchtest
// last change 
