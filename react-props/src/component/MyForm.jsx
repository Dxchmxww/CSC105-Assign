import {useState} from "react";
import React from "react";

function MyForm(){
    const[username, setUsername] = useState("");
    const[lastname, setLastname] = useState("");
    const[email, setEmail] = useState("");
    const[phone, setPhone] = useState("");
    const[password, setPassword] = useState("");



    const handleUsernameChange = (e) => {
        // setUsername(e.target.value.replace(/[^a-zA-Z@]/g , " "));
        setUsername(e.target.value);


    }

    const handleEmailChange = (e) =>{
        setEmail(e.target.value);

    }

    const handleLastnameChange = (e) => {
        setLastname(e.target.value);

    }

    const handlePhoneChange =(e) => {
        const tel = e.target.value.replace(/[^\d]/g, " "); //to remove any non-digit \d=digit
        setPhone(tel.slice(0,10)) //to limit phone number to 10 digits

    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);

    }

    const handleSubmit = (e) =>{ 
        e.preventDefault();
        alert(`Email: ${username} \nName: ${username}\nLastname: ${lastname}\nPhoneNumber: ${phone}\nPassword: ${password}`);
    }

    return(
        <>
            <div className="div">
                <h2>Register</h2>
                <form onSubmit={handleSubmit}>
                    <label className="label">
                        Email address:
                        <input 
                            type="text" 
                            value = {email} 
                            onChange={handleEmailChange}
                            placeholder="Enter email" 
                            required
                            pattern ="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2, }"/>  
                            {/* {2, } = matches two or more characters  */}
                    </label>
                        <br/>

                    <label>
                        Name:
                        <input type="text" value = {username} onChange={handleUsernameChange} placeholder="Enter name" required/>
                    </label>
                        <br/>

                    <label>
                        Lastname:
                        <input type="text" value = {lastname} onChange={handleLastnameChange} placeholder="Enter lastname" required/>
                    </label>
                        <br/>

                    <label>
                        Phone Number:
                        <input type="tel" value = {phone} onChange={handlePhoneChange} pattern="[0-9]{10}" placeholder="Enter phone number" required/>
                    </label>    
                        <br/>

                    <label>
                        Password:
                        <input type="text" value={password} onChange={handlePasswordChange} placeholder="Password" required/>
                        
                    </label>

                    <br/>

                    <button type="submit">Submit</button>


                </form>

            </div>
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