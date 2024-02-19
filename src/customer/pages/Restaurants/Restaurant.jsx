import { Divider,Typography,FormControl, RadioGroup, FormControlLabel, Radio, Card } from "@mui/material";
import React, { useState } from "react";
import MenuItemCard from "./MenuItemCard";

const categories = [
    "Thali",
    "Starters",
    "Indian Main Course",
    "Rice and Biriyani",
    "Breads",
    "Accompaniments",
    "Dessert",
];
const foodType = ["Vegetarian Only", "Non-Vegtarian Only", "Both"];
const menu = [1,1,1,1,1,1];
const Restaurant = () => {
    const [selectedCategory , setSelectedCategory] = useState();
    const [selectedFoodType, setSelectedFoodType] = useState();

    const handleFoodTypeChange = () => {
        console.log("Selected Food Type: ", selectedFoodType);
    }
    const handleCategoryChange = ()=>{


        console.log("selected Category: ", selectedCategory);

    }
    return (
        <div className="px-5 lg:px-20" >
            <section>
                <h3 className="text-gray-500 py-2 mt-10">
                    {`Home/india/Ghost Restaurant/2/Order Online` }
                </h3>
                <div>
                    <img className="w-full h-[40vh] object-cover " src="https://image.slidesdocs.com/responsive-images/background/vegetable-juice-fast-food-burger-wooden-table-powerpoint-background_82139b93e5__960_540.jpg" alt="" />
                </div>
                <div>
                    <h1 className="text-4xl py-2 font-semibold ">
                        {`Ghost restaurant`}
                    </h1>
                    <p className='text-gray-500'>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, sit magni corrupti cum saepe sed, cumque hic perspiciatis numquam illum.
                    </p>
                    <p className="py-3 text-orange-300">
                        Open now 10:30am - 12 midnight (Today)
                    </p>
                </div>
            </section>
            <Divider/>
            <section className="pt-[2rem] lg:flex relative">
            <div className="space-y-10 lg:w-[20%] ">
                <Card className="p-5 space-y-5 lg:sticky top-28">
                    <div>
                        <Typography sx={{paddingBottom:"1rem"}} variant="h5">
                            Category
                        </Typography>
                        <FormControl component={"fieldset"}>
                            <RadioGroup name="category" value={selectedCategory} onChange={handleCategoryChange}>
                                {categories.map((item,index) => <FormControlLabel 
                                key={index} 
                                value={item} 
                                control={<Radio/>} 
                                label={item} 
                                sx={{color:"gray"}}
                                />)}
                            </RadioGroup>
                        </FormControl>
                    </div>
                    <Divider/>

                    <div>
                        <Typography sx={{paddingBottom:"1rem"}} variant="h5">
                            Food Type
                        </Typography>
                        <FormControl component={"fieldset"}>
                            <RadioGroup name="FoodType" value={selectedFoodType} onChange={handleFoodTypeChange}>
                                {foodType.map((item,index) => <FormControlLabel 
                                key={index} 
                                value={item} 
                                control={<Radio/>} 
                                label={item} 
                                sx={{color:"gray"}}
                                />)}
                            </RadioGroup>
                        </FormControl>
                    </div>

                </Card>
            </div>
            <div className="lg:w-[80%] space-y-5 lg:pl-10">
                {menu.map((item) => <MenuItemCard item={item}/>)}
            </div>
            </section>
        </div>
    );
};

export default Restaurant;