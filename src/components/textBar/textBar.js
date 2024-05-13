import React from "react";
import { Style } from "../textBar/styled";



export const TextBar = ({ props }) => {
    return (
 
       
           <Style>
                <div>
                 {props.name}
                </div>
           </Style>
        
    
    );
}