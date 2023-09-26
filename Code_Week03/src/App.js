import React from 'react'
import RecipeCard from'./RecipeCard/index'
import {RECIPE_LIST} from './RecipeCard/recipe-data'


function App() {
  
  return (
    // <>
    // <RecipeCard/>
    // </>
    

    <div>
          
          

           
         
          <br/><br/>


          {RECIPE_LIST.map( (recipe, index) => (
            <RecipeCard recipe={recipe} key ={index}/>
            )
            )
          }
          <br/><br/>
          
    </div>
    
  )
  
}

export default App