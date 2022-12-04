export const users = [{
    f_name:"matanel",
    l_name: "vatkin",
    id:1,
    password: "123456789"
} ,
{
    f_name:"aviya",
    l_name: "vatkin",
    id:2,
    password: "987654321"
}]

export const addUser = (f_name,l_name,id,password)=>{
   users.push({f_name,l_name,id,password}) 
}