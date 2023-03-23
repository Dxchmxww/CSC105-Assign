import React from "react";
import Card from "./Card"

function List({user}){
    return(
        <div className="list">
            {user.map((user, index) => (<Card key={index} user={user}/>))}
        </div>
    )
}

export default List;