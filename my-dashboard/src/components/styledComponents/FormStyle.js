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


    .frm-heading-txt { 
        font-family: "Nunito";
    }


    .label-text-1 {
        position: absolute;
        left: 25%;
        font-family: "Nunito";
    }

    .label-text-2{
        position: absolute;
        top: 35%;
        left: 25%;
        font-family: "Nunito";
    }

    .label-text-3 {
        position: absolute;
        top: 34%;
        left: 25%;
        font-family: "Nunito";
    }

    .label-text-4 {
        position: absolute;
        top: 47%;
        left: 25%;
        font-family: "Nunito";
    }
    
    .form-item-1{
        border-radius: 5px;
        background: #FFFFFF;
        position: absolute;
        left: 25%;
        right: 0%;
        top: 28%;
        bottom: 0%;
        height: 20px;
        width: 230px;
    }

    .form-item-2 {
        border-radius: 5px;
        background: #FFFFFF;
        position: absolute;
        left: 25%;
        right: 0%;
        top: 40%;
        bottom: 0%;
        height: 20px;
        width: 230px;
    }
    

    .form-item-3{
        border-radius: 5px;
        background: #FFFFFF;
        position: absolute;
        left: 25%;
        right: 0%;
        top: 53%;
        bottom: 0%;
        height: 20px;
        width: 230px;
    }

    .form-item-4{
        border-radius: 5px;
        background: #FFFFFF;
        position: absolute;
        left: 25%;
        right: 0%;
        top: 53%;
        bottom: 0%;
        height: 20px;
        width: 230px;
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
    }
`

export default StyledForm