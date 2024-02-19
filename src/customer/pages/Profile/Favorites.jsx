import React from 'react'
import RestrauntsCard from '../RestrauntsCard'
import {restaurants} from '../../../Data/Restaurant'

// const favorite  =[1,1,1,1,1,1,1,1,1]
const Favorites = () => {
  return (
    <div>
        <h1 className='py-5 text-xl font-semibold text-center'>My Favorites</h1>
        <div className='flex flex-wrap justify-center '>
        {restaurants.slice(0,6).map((item)=> <RestrauntsCard item={item}/>)}
        </div>
    </div>
  )
}

export default Favorites        