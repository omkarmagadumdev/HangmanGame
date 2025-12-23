
import App from "../../App"

const Button = ({text , onclickhandler}) => {

   
    return (
      
        <button onClick={onclickhandler} >
            {text}
        </button>
    )
}

export default Button