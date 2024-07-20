// src/Pages/Homepage.js

import React, { useState, useClipboard} from 'react';
import axios from 'axios';
import UrlShortener from '../components/UrlShortener';
import QRCode from '../components/QRCode';
import { IoIosLink } from "react-icons/io";
import { LuQrCode } from "react-icons/lu";

const Homepage = () => {
    const [activeTab, setActiveTab] = useState('short-link');

    const renderForm = () => {
        switch (activeTab) {
            case 'qr-code':
                return (
                    <>
                      <QRCode   />
                    </>
                );
            
            default:
                
                return (
                    <>
                        <UrlShortener/>
                    </>
                );
        }
    };

    return (
        <div className="max-w-lg mx-auto p-8 bg-white shadow-md rounded-lg">
            <div className="flex justify-center mb-6">
                <button
                    
                    className={`py-2 px-4 mx-2 flex flex-wrap items-center justify-center gap-4 transition duration-300 ${activeTab === 'short-link' ? 'font-bold border-b-4 border-blue-500 text-blue-500' : 'text-gray-600 hover:text-blue-500'}`}
                    onClick={() => setActiveTab('short-link')}
                >
                    <IoIosLink />
                    Short link
                </button>
                <button
                    className={`flex flex-wrap items-center justify-center gap-4 py-2 px-4 mx-2 transition duration-300 ${activeTab === 'qr-code' ? 'font-bold border-b-4 border-blue-500 text-blue-500' : 'text-gray-600 hover:text-blue-500'}`}
                    onClick={() => setActiveTab('qr-code')}
                >
                    < LuQrCode/>
                    QR Code
                </button>
                
            </div>
            <div className="text-center">
                {renderForm()}
                
            </div>
        </div>
    );
};

export default Homepage;
