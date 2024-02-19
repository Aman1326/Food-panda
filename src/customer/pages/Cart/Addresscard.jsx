import { Card,Button } from "@mui/material";
import React from "react";
import HomeIcon from '@mui/icons-material/Home';
const AddressCard =({handleSelectAdddress,item,showButton}) => {
    
return (
    <Card className="flex space-x-5 lg:w-64 m-5 p-5 ">
        <HomeIcon/>
        <div className="space-y-3 text-gray-500">
            <h1 className="font-semibold text-large text-white">Home</h1>
            <p>flat-01 Sangrila Society Hoshangabad Road Bhopal,462026, MP,India</p>
            {showButton && <Button variant="outline" fullWidth onClick={()=> handleSelectAdddress(item)}>Select</Button>}
        </div>
    </Card>
)
}
export default AddressCard;