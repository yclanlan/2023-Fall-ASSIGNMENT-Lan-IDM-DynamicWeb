import React from "react"

export default
function RecipeImg(props){

    const {imgSrc}=props
    return <img src={imgSrc} alt='Fired spanish' className='img'/>

}