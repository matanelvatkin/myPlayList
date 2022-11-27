import { useContext, useRef } from "react"
import { Link } from "react-router-dom";
import { userContext } from "../App";

export default function LogIn(){
    const {user,setUser} = useContext(userContext)
    const passwordRef = useRef(null);
    const firstNameRef =useRef(null);
    let tempUser;
    const onClickLogin = ()=>{
        tempUser = user.find( (v)=>v.f_name === firstNameRef.current && v.password === passwordRef.current)
        if(tempUser){
            setUser(tempUser)
        }
        else{
            console.log("not found");
        }
    }
    return <div>
        <form action="">
            first name: <input type="text" onInput={(e)=>firstNameRef.current=e.target.value}/><br />
            password: <input type="password" onInput={(e)=>passwordRef.current=e.target.value}/><br />
            <button type="button" onClick={onClickLogin}>login</button>
        </form>
        <nav>
            <Link to={`../${user.id}/`}>move on</Link>
        </nav>
    </div>
}