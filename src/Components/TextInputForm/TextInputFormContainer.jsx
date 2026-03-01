import { useState } from "react";
import TextInputForm from "./TextInputForm";
import { useNavigate } from "react-router-dom";

function TextInputFormContainer() {
    const [inputType,setinputType]= useState("password")
    const [value,setvalue] = useState("")
    console.log(value)
    const navigate = useNavigate()

    function handleFormSubmit(event) {
        event.preventDefault();
        console.log("form submitted",value);
        if(value){

                navigate('/play',{state:{wordSelected:value }})
        }
        
    }

    function handleTextInputChange(event) {
        console.log(event.target.value);
        setvalue(event.target.value)
        
    }

    function handleShowHideClick() {
        console.log("handleShowHideClick");
        if( inputType === "password"){
            setinputType("text")
        }else{
            setinputType("password")
        }
        
    }

    return (
        <TextInputForm
            handleFormSubmit={handleFormSubmit}
            handleTextInputChange={handleTextInputChange}
            handleShowHideClick={handleShowHideClick}
            inputType = {inputType}
        />
    );
}

export default TextInputFormContainer;