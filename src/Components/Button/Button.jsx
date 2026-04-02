
const Button = ({text , onclickhandler,type ="button"}) => {

   
    return (
      
        <button 
        onClick={onclickhandler} 
        type={type}
        className="w-full  ms-2 cursor-pointer px-5 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl transition duration-200 ease-in-out shadow-lg shadow-indigo-900/30"
        >
            {text}
        </button>
    )
}

export default Button