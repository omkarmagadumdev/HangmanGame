const TextInput = ({type ,label , placeholder = "enter you input value here",onChangeHandler})=>{
    return(
        <label htmlFor="">
            <span className="text-white block mb-2 font-medium">{label}</span>
            <input type={type} 
            className="px-4 py-2 border border-white/20 rounded-lg w-full bg-white/10 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-400" 
            placeholder={placeholder}
            onChange={onChangeHandler}
            
            />
        </label>
    )
}

export default TextInput