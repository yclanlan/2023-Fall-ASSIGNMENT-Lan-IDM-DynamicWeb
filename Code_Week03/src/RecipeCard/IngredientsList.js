import React from "react";
// import {RECIPE} from './recipe-data'
import styles from './RecipeCard.module.css'

export default function IngredientsList(props){

    const {ingredients} = props

    return(
        <div className={styles.ingredients_list}>
            <div className={styles.list_title}>
            <h3> Ingredients</h3>
            </div>

          
            <ul>
                { ingredients.map( (ingredients,index)=>(
                    <li key={index} className={styles.list_item}>
                        {/* {ingredients}  */}
                        <span className={styles.measure}> {ingredients.measure}</span>
                        <span>                            {ingredients.name} </span>

                    </li> 
                        )
                    )
                }
            </ul>
        </div>
    );

}