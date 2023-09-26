import React from "react";
// import {RECIPE} from './recipe-data'
import styles from './RecipeCard.module.css'

export default function InstructionsList(props){

    const {instructions} = props

    return(
        <div className={styles.instructions_list}>
            <div className={styles.list_title}>
            <h3> Instruction</h3>
            </div>
        
            
            <ol>

                { instructions.map( (instructions, index) => (
                    <li key={index} className={styles.list_item}>
                    {instructions} 
                    </li>)
                    )
                }
                {/* {console.log(instructions)} */}
            </ol>
            
        </div>
    );

}