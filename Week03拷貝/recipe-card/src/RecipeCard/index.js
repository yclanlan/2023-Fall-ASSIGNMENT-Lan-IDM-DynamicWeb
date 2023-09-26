import React from 'react'
// import { RECIPE } from './recipe-data'

// seperate comopnent
import RecipeInfo from'./RecipeInfo'
import RecipeImg from './RecipeImg'
import InstructionsList from './InstructionsList'
import IngredientsList from './IngredientsList'
import Card from './Card'
import styles from './RecipeCard.module.css'
import UserRating from './UserRating'

// for css
import RECIPE_IMG from'../assets/88-1596049315262.jpg'


export default function RecipeCard(props){
    const RECIPE = props.recipe
    return(
        <>
 
        <Card>
        <div className={styles.recipe_wrapper}>
            <RecipeImg imgSrc={RECIPE.imgSrc}/>
            
            <div className={styles.recipe_content_wrapper}>
                    <RecipeInfo title={RECIPE.title} 
                                description={RECIPE.description}
                    />
                
                    <div className={styles.recipe_details}>
                            <IngredientsList ingredients={RECIPE.ingredients}/>
                            <InstructionsList instructions={RECIPE.instructions} />
                    </div>
              <UserRating />
            </div>  
        </div>   

        </Card>
        <br/>

        </>
    )
}





function Content(props){

    return <div className={styles.recipe_details}>
        {/* {props.children} */}
        </div>

}

function Layout(props){

    return <div className={styles.recipe_wrapper}>
        {/* {props.children} */}
        </div>

}







