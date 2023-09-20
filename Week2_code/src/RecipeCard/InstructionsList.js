import React from "react";
import {RECIPE} from './recipe-data'

export default function InstructionsList(props){

    const {instructions} = props

    return(
        <div className="InstructionsList">
            <div className="InstructionsTitle">
            <h3> Instruction</h3>
            </div>
        
            <div className="InstructionsContent">
                <ol>

                    { RECIPE.instructions.map( (instructions, index)=> (
                        <li key={index}>{instructions} </li>)
                        )
                    }

                </ol>
            </div>
        </div>
    );

}
