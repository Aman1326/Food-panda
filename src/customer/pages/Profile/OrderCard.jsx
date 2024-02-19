import { Button, Card } from "@mui/material";
import React from "react";

const OrderCard = ({item}) => {
    return (
        <Card className="flex justify-between items-center p-5">
            <div className="flex items-center space-x-5 ">
                <img className="h-16 w-16 " src="https://images3.alphacoders.com/131/1313839.jpg" alt="" />
            </div>
            <div>
                <p>Pizza</p>
                <p className="text-gray-400 ">₹239</p>
            </div>
            <div>
                <Button variant="contained">Track</Button>
            </div>
        </Card>

    )
}
export default OrderCard;