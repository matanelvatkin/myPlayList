export const users = [{
    f_name:"matanel",
    l_name: "vatkin",
    id:1,
    password: "20000"
} ,
{
    f_name:"aviya",
    l_name: "vatkin",
    id:2,
    password: 1000
}]

export const addUser = (f_name,l_name,id,password)=>{
   users.push({f_name,l_name,id,password}) 
}