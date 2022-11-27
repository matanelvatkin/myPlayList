import React, { useContext } from 'react'
import { userContext} from "../../App"

function UserHomePage() {
  const {user} =useContext(userContext)
  return (
    <div>wallcame {user.f_name +" " + user.l_name}</div>
  )
}

export default UserHomePage