import React from 'react'
import { RECIPE } from './recipe-data'

// seperate comopnent
import RecipeInfo from'./RecipeInfo'
import RecipeImg from './RecipeImg'
import InstructionsList from './InstructionsList'
import IngredientsList from './IngredientsList'
import './recipe.css'

// for css
import RECIPE_IMG from'../assets/88-1596049315262.jpg'


export default function RecipeCard(){
    return(
        <>
        <div style={{position: "relative"}}>
        <span style={{fontSize: "2rem"}}>DynamicWeb Week2 - Lan</span>
        <span class={{className:"name"}}style={{fontSize: "0.9rem", float:"right"}}>I did two layouts for different sizes of screen!</span>
        </div>


        <br/><br/>

        <Card>
        <RecipeImg imgSrc={RECIPE.imgSrc}/>
        <Layout>

             <RecipeInfo title={RECIPE.title} description={RECIPE.description}/>
        
                <Content>
                     <IngredientsList ingreds={RECIPE.ingredients}/>
                     <InstructionsList instructions={RECIPE.instructions} />
                </Content>

        </Layout> 

           

        </Card>

        <br/><br/><br/> 
        <h5 style={{ textAlign:"right"}} > From React's function </h5>
      
        <hr/>
        <br/><br/><br/>

    
    <img src={ RECIPE_IMG } alt="water spinach" /> <br/>

    <div>
    <h1>{ RECIPE.title } </h1>
    <p>{ RECIPE.description }</p>
    </div>


    <div>
        <h3> Ingredients </h3>
        <ul>

        { RECIPE.ingredients.map( (ingredient, index)=> (
            <li key={index}>{ingredient} </li>)
            )
        }

        </ul>
    </div>



    <div>
        <h3> Instructions </h3>
        <ul>

        { RECIPE.instructions.map( (instruction, index)=> (
            <li key={index}>{instruction} </li>)
            )
        }

        </ul>
    </div>
    <br/><br/><br/>
    <h5 style={{ textAlign:"right"}} > From jsx </h5>
        
        </>
    )
}



function Card(props){

    return <div className="card">
        {props.children}
        </div>

}

function Content(props){

    return <div className="content">
        {props.children}
        </div>

}

function Layout(props){

    return <div className="layout">
        {props.children}
        </div>

}








