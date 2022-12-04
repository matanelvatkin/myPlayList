import { useContext } from "react"
import {useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { userContext } from "../App";

export default function LogIn(){
    const {user,setUser} = useContext(userContext)
    let tempUser;
    
    const navigate = useNavigate()
    const {register,handleSubmit,formState:{errors}} = useForm();
    const onSubmit = (data)=>{
        tempUser= user.find(v=>v.f_name===data.user_name && v.password===data.password )
        if(tempUser){
            setUser(tempUser)
            navigate("../"+tempUser.id)
        }
    }
    
    return <div>
        <form onSubmit={handleSubmit(onSubmit)}>
            first name: <input type="text" placeholder= "userName" name = "user_name" ref= {register("user_name",{required:"user name required"}).ref} 
            onChange ={register("user_name").onChange} /><br />
            {errors.user_name&&<p>{errors.user_name.message}</p>}
            password: <input type="password" placeholder='Password' name = "password" 
            ref={register("password",{required:"password required",minLength:{value:8,message:"password length must be more then 8 charceter"}}).ref} onChange ={register("password").onChange}/><br />
            {errors.password&&<p>{errors.password.message}</p>}
            <input type="submit" value="login" />
        </form>
    </div>
}