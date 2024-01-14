import React, { useContext, useEffect ,useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { LoginContext } from './Context/Context';
import Topbar from '../Components/Topbar';
import Home from '../Components/home/Home';

import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const Dasboard = () => {
    const { logindata, setLoginData } = useContext(LoginContext);

    const [data, setData] = useState(false);


    const history = useNavigate();

    const DashboardValid = async () => {
        let token = localStorage.getItem("usersdatatoken");

        const res = await fetch("/validuser", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": token
            }
        });

        const data = await res.json();
        // console.log(data);

        if (data.status == 401 || !data) {
            history("*");
            console.log("error page");
        } else {
            console.log("user verify");
            setLoginData(data)
            history("/dash");
        }
    }


    useEffect(() => {
        setTimeout(() => {
            DashboardValid();
            setData(true)
        }, 2000)

    }, [])

    return (
        <>
            {
                data ? <div>
                    {/* <img src="./man.png" style={{ width: "200px", marginTop: 20 }} alt="" />
                    <h1>User Email:{logindata ? logindata.ValidUserOne.email : ""}</h1> */}
                    <Topbar/>
          <Home/>
                </div> : <Box sx={{ display: 'flex', justifyContent: "center", alignItems: "center", height: "100vh" }}>
                    Loading... &nbsp;
                    <CircularProgress />
                </Box>
            }

        </>

    )

}

export default Dasboard