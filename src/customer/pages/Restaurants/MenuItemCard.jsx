import React from "react";
import { Button, Card } from "@mui/material";

const MenuItemCard =(item) => {
    const handleAddItemToCart = () => {
        console.log("handle add item to cart");
    }
    return (
        <Card className=" p-5 lg:flex items-center justify-between box">
            <div className="lg:flex items-center lg:space-x-5 ">
                <img className="w-[7rem] h-[7rem] object-cover " src="https://images.unsplash.com/photo-1668236543090-82eba5ee5976?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZG9zYXxlbnwwfHwwfHx8MA%3D%3D" alt="" />
                <div className="space-y-1 lg:space-y-5 lg:maxw-2xl">
                    <p className="font-semibold text-xl">{`Pizza`}</p>
                    <p>₹ {399}</p>
                    <p className="text-gray-400">{ `Rice,Sambhar,Papad` }</p>
                </div>
            </div>
            <div>
                <Button onClick={handleAddItemToCart}>Add To Cart</Button>
            </div>
        </Card>
    )
}
export default MenuItemCard