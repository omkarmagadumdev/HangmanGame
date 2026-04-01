
const Button = ({text , onclickhandler,type ="button"}) => {

   
    return (
      
        <button 
        onClick={onclickhandler} 
        type={type}
        className=" mt-2px w-full cursor-pointer px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition duration-200 ease-in-out transform hover:scale-105 shadow-md"
        >
            {text}
        </button>
    )
}

export default Button