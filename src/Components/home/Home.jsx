import React, { useState } from 'react';
import {useContext} from 'react';
import './home.css';
import Main from '../main/Main';
import { LoginContext } from '../Context/Context';
// import axios from 'axios';
// import { useEffect } from 'react';

const baseURL = "https://url-shortner-tgb5.onrender.com/url";
export default function Home() {
  const {url,setUrl,fetchurl}= useContext(LoginContext)
    const [shortURL, setShortURL] = useState("");

    // const shortPostURL = async()=>{
    //   const { data } = await axios.post("http://localhost:8000/url")
    //   console.log(data)
    //   setShortURL(data.response)
    // }

    // useEffect(() =>{
    //   shortPostURL()
    // },[])


  return (
    <div className='home'>
        <div className="homeContainer">
            <h1 className="homeTitle">Enter the URL</h1>
            <div className="homeInput">
                <input 
                    type="text" 
                    className="inputField" 
                    placeholder='enter the url'
                    value={shortURL}
                    onChange={e => setShortURL(e.target.value)}
                />
                <button 
                  className="shortButton"
                  onClick={
                    ()=>{
                    const URL = {
                      shortURL
                    }
                    fetch(`${baseURL}`, {
                      method: "POST",
                      body: JSON.stringify(URL),
                      headers: {
                          "Content-type": "application/json",
                      }
                    })
                    // .then((data) => data.json())
                    .then((data) => console.log(data))
                    .then(()=> {alert("Short URL generted successfully")
                    fetchurl()
                    })

                  }
                  // shortPostURL
                  
                }
                >Short</button>
            </div>
        </div>
        <Main/>
    </div>
  )
}