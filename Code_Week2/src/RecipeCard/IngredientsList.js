import React from "react";
import {RECIPE} from './recipe-data'

export default function IngredientsList(props){

    const {ingredients} = props

    return(
        <div className="IngredientsList">
            <div className="IngredientsTitle">
                <h3> Ingredients</h3>
            </div>

            <div className="IngredientsContent">
                <ul>

                { RECIPE.ingredients.map( (ingreds, index)=> (
                    <li key={index}>{ingreds} </li>)
                    )
                }
                </ul>
            </div>
            
            
        </div>

        

    );

}