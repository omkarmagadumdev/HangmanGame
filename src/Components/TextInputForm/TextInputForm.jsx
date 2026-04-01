import TextInput from "../Textinput/TextInput";
import Button from "../Button/Button";

const TextInputForm = ({ handleFormSubmit, handleTextInputChange,handleShowHideClick , inputType}) => {
    return (
        <div className="max-w-md w-full">
            <div className="bg-white/10 backdrop-blur-lg border border-white/15 shadow-2xl rounded-2xl p-8 space-y-6 text-white">
                <header className="space-y-2 text-center">
                    <p className="text-xs uppercase tracking-[0.25em] text-blue-200">Hangman</p>
                    <h1 className="text-3xl font-bold">Guess the word</h1>
                    <p className="text-sm text-slate-200">Enter a letter and submit</p>
                </header>

                <form onSubmit={handleFormSubmit} className="space-y-4">
                    <TextInput
                        type={inputType}
                        label={"Enter some text"}
                        placeholder="enter some text here"
                        onChangeHandler={handleTextInputChange}
                    />

                    <div className="mt-2">
                        <Button 
                        styletype = "warning" 
                        text = {inputType === "password" ? "show" : "Hide"}
                        onclickhandler={handleShowHideClick} 
                        />
                    </div>
                    
                    <Button
                    type = "submit"
                    Styletype="primary"
                    text="Submit"
                    onclickhandler={handleFormSubmit}
                     
                    />
                </form>
            </div>
        </div>
    );
};

export default TextInputForm;