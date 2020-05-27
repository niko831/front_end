import React from "react"
import styled from "styled-components"


const StyledDiv = styled.div`
    background-color: "#235B2D";
    display:flex;
    width: 100%;
    color: white;
    background-color: #235B2D;
    height: 50px;
    

    

    .header-nav{
        display:flex;
        align-items: baseline;
        

        .info {
            position: absolute;
            left: 88.33%;
            right: 5.06%;
            top: 2.33%;
            bottom: 5.36%;
        }


        a{
            text-decoration:none;
            flex-direction: row;
            color: white;
            margin-left: 20px;
            
            
            
            &.pointer{
            cursor: "pointer";
        }
         }


        
    }

    
    
   

`


export default StyledDiv;
