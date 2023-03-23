import {useState} from "react";
import "../Style/MyForm.css"

function MyForm(){
    const[username, setUsername] = useState("");
    const[lastname, setLastname] = useState("");
    const[email, setEmail] = useState("");
    const[phone, setPhone] = useState("");
    const[password, setPassword] = useState("");
    const [isFilled, setIsFilled] = useState(false);

    // const handleSubmit = (e) =>{
    //     // alert ('Please fill out this field')
    //     e.preventDefault();
    // }

    const handleUsernameChange = (e) => {
        // setUsername(e.target.value.replace(/[^a-zA-Z@]/g , " "));
        setUsername(e.target.value);
        setIsFilled(true);

    }

    const handleEmailChange = (e) =>{
        setEmail(e.target.value);
        setIsFilled(true);
    }

    const handleLastnameChange = (e) => {
        setLastname(e.target.value);
        setIsFilled(true);
    }

    const handlePhoneChange =(e) => {
        const tel = e.target.value.replace(/[^\d]/g, " "); //to remove any non-digit \d=digit
        setPhone(tel.slice(0,10)) //to limit phone number to 10 digits
        setIsFilled(true);

    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
        setIsFilled(true);
    }

    return(
        <>
            <h2>Register</h2>
            <form>
                <label className="div">
                    Email address
                    <input type="text" value = {email} onChange={handleEmailChange} 
                        required
                        pattern ="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2, }"/>  
                        {/* {2, } = matches two or more characters  */}
                    
                    <br/>

                    Name:
                    <input type="text" value = {username} onChange={handleUsernameChange} required/>
                    <br/>

                    Lastname:
                    <input type="text" value = {lastname} onChange={handleLastnameChange} required/>
                    <br/>

                    Phone Number:
                    <input value = {phone} onChange={handlePhoneChange} pattern="[0-9]{10}" required/>
                    <br/>

                    Passsword:
                    <input type="text" value={password} onChange={handlePasswordChange} required/>
                    <br/>
                    
                </label>

                {/* <input type="submit" value="Submit"/> */}

                <button type="submit">Submit</button>


            </form>

        </>
        
        //one input
        // <form>
        //     <label>Enter my name:
        //         <input
        //            type = "text"
        //            value={name}
        //            onChange={(e) =>setName( e.target.value )}
        //         />
        //     </label>
        // </form>

        
    );
}

export default MyForm;