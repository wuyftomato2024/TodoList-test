import React from "react";
import { Titlestyle,Headstyle,LogButton } from "./styled";
import { navigate, useNavigate } from "react-router-dom";




export const Header = () => {
    const navigate = useNavigate()
    return(
        <Titlestyle>
            <div>
           
                <Headstyle>
                    <h1 onClick={() => navigate("main")}>TodoList</h1>
                    <LogButton onClick={() => navigate("/Login")}>login</LogButton>
                </Headstyle>
                
                
                
                </div>
        </Titlestyle>

    )

};

export default Header;