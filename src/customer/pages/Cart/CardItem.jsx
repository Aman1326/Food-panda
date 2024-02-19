import React from "react";
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { IconButton } from "@mui/material";
const CardItem =()=>{
return (
    <div className="px-5 ">
        <div className="lg:flex items-center lg:space-x-5" >
        <div>
            <img className="w-[5rem] h-[5rem] object-cover" src="https://images3.alphacoders.com/131/1313839.jpg" alt="" />
        </div>
        <div className="flex items-center justify-between lg:w-[70%]">
            <div className="space-y-1 lg:space-y-3 w-full">
                <p>Burger</p>
                <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-1">
                        <IconButton color='primary'>
                                <RemoveCircleIcon/>
                        </IconButton>
                        <div className="w-5 h-5 text-xs">5                            
                        </div>
                        <IconButton color='primary'>
                            <AddCircleIcon/>
                        </IconButton>
                    </div>
                </div>
            </div>
            <p>₹239</p>
        </div>
        </div>
    </div>
)
}
export default CardItem