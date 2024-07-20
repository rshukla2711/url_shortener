import React, { useState } from "react";
import axios from 'axios';
import { qrroute } from "../utils/APIRoutes";
import { FormHelperText, FormControl, Input } from '@mui/material'; 

function QRCode() {
    const [ input, setInput ] = useState(
        {
            longUrl: ""
        }
    );
    const [error, setError] = useState(false);
    const [ qr, setQr ] = useState("");
    const handleInputChange = (e) => {
        setInput({ ...input, [ e.target.name ]: e.target.value });
    };
    const handleEnter = (e) => {
        if (e.key === "Enter") {
            handleSubmit();
        }
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (input.longUrl.length===0) {
            console.log("error");
            setError(true);
            return;
        }
        axios.post(qrroute, input).then(res => {
            if (res.status) {
                let data = res.data;
                let createqr = data.qrCode;
                setQr(createqr);
            }
            console.log("res", res);
        }).catch(error => {
            let errorMsg = error.response.data.error;
            setQr(errorMsg);
            console.log("error", errorMsg);
        });
    };
  return (
    <div>
        <h1 className="text-2xl font-bold mb-4">Create a QR Code</h1>
        <form onSubmit={(e)=>handleSubmit(e)}>
            <input name= "longUrl" type="url"  placeholder="Paste a URL for QR Code" className="w-full p-2 border border-gray-300 rounded mb-4" onChange={(e)=>handleInputChange(e)} onKeyDown={(e)=> handleEnter(e) } required />
            {
                error && 
                <FormHelperText id="url-helper" class="text-red-600 text-left text-sm"> 
                    Please enter a URL to generate QR !!! 
                </FormHelperText>
            }
            <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded transition duration-300" onClick={ (e)=>handleSubmit(e) }  loadingText='Submitting'>Generate QR Code</button>
        </form>
        { qr && <img src={qr} alt="QR Code" className="mx-auto mt-4" /> }    
    </div>
  )
}

export default QRCode