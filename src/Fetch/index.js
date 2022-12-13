import React, { useEffect, useRef, useState } from 'react'
import { Axios } from 'axios'
import axios from 'axios'

const Fetch = () => {

    const [infos, setInfos] = useState("")
    const [pw, setpw] = useState()
    const passRef = useRef()

    const onSubmit = () => {
        // console.log(passRef.current.value);
        setpw(passRef.current.value)
        


        fetch("http://15.164.222.234:3001/users/signin", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ password: pw }) })
            .then((res) => res.json())
            .then((res) => {
                console.log(res.respdata.token, "token");
                localStorage.setItem("token1", res.respdata.token)
            })

    }
    console.log(pw);

    return (
        <div>
            <h1 style={{ color: "red" }}>password</h1>
            <button onClick={onSubmit}>Submit</button>
            <input ref={passRef} type="password" />
            <h1>{infos}</h1>
            {/* <button onClick={test}>press</button> */}
        </div>

    )
}

export default Fetch