import {useState} from "react"
function StateAssignmentOne(){
    const[num, setNumber] = useState(0);
    return(
        <section>
            <button onClick={() => {setNumber((num) => num+1)}}>
               {num}
            </button>
        </section>
    )
}

export default StateAssignmentOne;