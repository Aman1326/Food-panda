import { AccountCircleOutlined } from "@mui/icons-material";
import { Button } from "@mui/material";
import React from "react";

const UserProfile = () => {
    const handleLogout = () => {
        console.log("handle Logout");
    }
return (
    <div className="min-h-[80vh] flex flex-col justify-center items-center text-center" >
        <div className="flex flex-col items-center justify-center">
            <AccountCircleOutlined sx={{fontSize:"9rem"}}/>
            <h1 className="py-5 text-2xl font-semibold">Code With aman</h1>
            <p>Email:{" aman99.1326@gmail.com"} </p>
            <Button onClick={handleLogout} variant="contained" sx={{margin:"2rem 0rem"}}>Logout</Button>
        </div>
        
    </div>
)
}

export default UserProfile;