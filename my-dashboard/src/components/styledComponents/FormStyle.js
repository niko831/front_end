import styled from "styled-components"





const StyledForm = styled.div `
    background: #F2F3F2;
    opacity: 0.95;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 5px;

    position: absolute;
    width: 496px;
    height: 523px;
    left: 545px;
    top: 157px;



    input {
        &:focus {
            border-bottom: 3px solid #235B2D;
        }
    }

    .frm-heading-txt { 
        font-family: "Nunito";
    }


    .label-text-1 {
        position: absolute;
        left: 18%;
        font-family: "Nunito";
    }

    .label-text-2{
        position: absolute;
        top: 36%;
        left: 18%;
        font-family: "Nunito";
    }

    .label-text-3 {
        position: absolute;
        top: 34%;
        left: 18%;
        font-family: "Nunito";
    }

    .label-text-4 {
        position: absolute;
        top: 47%;
        left: 18%;
        font-family: "Nunito";
    }
    
    .form-item-1{
        border-radius: 5px;
        background: #FFFFFF;
        
        position: absolute;
        left: 18%;
        right: 0%;
        top: 28%;
        bottom: 0%;
        
        height: 25px;
        width: 300px;

        font-size: 20px;
        font-family: "Nunito";
    }

    .form-item-2 {
        border-radius: 5px;
        background: #FFFFFF;
        
        position: absolute;
        left: 18%;
        right: 0%;
        top: 40%;
        bottom: 0%;
       
        height: 25px;
        width: 300px;

        font-size: 20px;
        font-family: "Nunito";
    }
    

    .form-item-3{
        border-radius: 5px;
        background: #FFFFFF;
        
        position: absolute;
        left: 18%;
        right: 0%;
        top: 53%;
        bottom: 0%;
        
        height: 25px;
        width: 300px;

        font-size: 20px;
        font-family: "Nunito";
    }


    .form-item-4{
        border-radius: 5px;
        background: #FFFFFF;
        
        position: absolute;
        left: 18%;
        right: 0%;
        top: 53%;
        bottom: 0%;
        
        height: 25px;
        width: 300px;

        font-size: 20px;
        font-family: "Nunito";
    }

    .form-schema-errors{
        color:red;
        position: absolute;
        bottom: 22%;
        left: 15%;
    }

    .submit-btn {
        position: absolute;
        left: 16%;
        right: 0%;
        top: 80%;
        bottom: 0%;
       
        width: 330px;
        height: 40px;
        
        background: #79867C;
        border-radius: 5px;
        font-family: "Nunito";
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        color: white;
       
        &.pointer{
            cursor: pointer;
        }

        &:hover {
            box-shadow: 2px 3px 18px 3px #235B2D;
            transition: 2s;
            
            
        }
    
       
    }
        .p-login {
                position: absolute;
                left: 23%;
                bottom: 0%;
                

                .here-link {
                    text-decoration: none;
                    color: #235B2D;
                }
            }

`

export default StyledForm