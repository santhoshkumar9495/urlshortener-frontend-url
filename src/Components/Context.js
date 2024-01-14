import React, { createContext, useState } from 'react'
import axios from 'axios';
export const LoginContext = createContext("");

const Context = ({children}) => {
    const [logindata,setLoginData] = useState("");
    const [url,setUrl] = useState([]);

    const fetchurl = async() => {
        const { data } = await axios.get('https://url-shortner-tgb5.onrender.com/url/allData')
        setUrl(data.response);

    };
  return (
    <>
    <LoginContext.Provider value={{logindata,setLoginData,url,setUrl,fetchurl}}>
        {children}
    </LoginContext.Provider>
    </>
  )
}

export default Context