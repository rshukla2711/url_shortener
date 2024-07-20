import React, { useState } from "react";
import axios from 'axios';
import { urlroute } from '../utils/APIRoutes';
import {
    useClipboard
} from "@chakra-ui/react";
import { FormHelperText, FormControl, Input } from '@mui/material';
function UrlShortener() {
    const [ input, setInput ] = useState(
        {
            longUrl: "",
            urlCode: ""
        }
    );
    const [ url, setUrl ] = useState("");
    const [error, setError] = useState(false);
    const { hasCopied, onCopy } = useClipboard(url);
    const clientBaseUrl = window.location.href;
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
        axios.post(urlroute, input).then(res => {
            if (res.status) {
                let data = res.data;
                let createUrl = clientBaseUrl + data.urlCode;
                setUrl(createUrl);
            }
            console.log("res", res);
        }).catch(error => {
            let errorMsg = error.response.data.error;
            setUrl(errorMsg);
            console.log("error", errorMsg);
        });
    };
  return (
    <div>
        <h1 className="text-2xl font-bold mb-4">Shorten a long link</h1>
        <form onSubmit={(e)=>handleSubmit(e)}>
            <input name= "longUrl"  type="url" placeholder="Paste a long URL" className="w-full px-2 py-2 border border-gray-300 rounded mb-1"  onChange={(e)=>handleInputChange(e)} onKeyDown={(e)=> handleEnter(e) } required />
            {
                error && 
                <FormHelperText id="url-helper" class="text-red-600 text-left text-sm mb-2"> 
                    Please enter a URL to shorten !!! 
                </FormHelperText>
            }
            <input name= "urlCode"  type="text" placeholder="Enter your custom Code (Optional)" className="w-full p-2 border border-gray-300 rounded mb-4"  onChange={ (e)=>handleInputChange(e) } onKeyDown={ (e)=> handleEnter(e) } />
            <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded transition duration-300"  onClick={ (e)=>handleSubmit(e) }  loadingText='Submitting'>Get your link</button>
        </form>
        { url && <flex mb={ 2 }>
                <input className="w-full py-2 border border-gray-300 rounded mb-4 mt-4" value={ url } isReadOnly placeholder="Short Url" />
                <button onClick={ onCopy } ml={ 2 } className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded transition duration-300">
                    { hasCopied ? "Copied" : "Copy" }
                </button>
        </flex> }
    </div>
  )
}

export default UrlShortener