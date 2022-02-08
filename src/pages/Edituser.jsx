import React, { useEffect, useState } from "react";
import { useParams, useNavigate} from "react-router-dom";

const EditUserPage = (props)=>{
const params = useParams();
const navigate = useNavigate();
const [user,setUser] = useState({});

useEffect(()=>{
    const u1 = props.userlist.find((u)=>{
        return (u.id==params.id)
    })
    setUser(u1);
},[params.id])

const onChangeInput = (eve)=>{
  setUser((oldStatevalue)=>{
      let newvalue = {...oldStatevalue};
      newvalue[eve.target.name] = eve.target.value;
     return newvalue;
  })
}
    return(
        <div className="d-inline-block text-center my-4 ml-3">
        <div className="border border-info rounded px-5 py-3">
        <div className="my-4">
            <input type={'text'} size="50" name="name" value={user.name} onChange={onChangeInput} placeholder="Enter user name"></input>
        </div>
        <div className="my-4">
            <input type={'email'} size="50" name="email" value={user.email} onChange={onChangeInput} placeholder="Enter user email id"></input>
        </div>
        <div className="my-4">
            <input type={'text'} size="50" name="image" value={user.image} onChange={onChangeInput} placeholder="Enter user image url"></input>
        </div>
        <div className="my-4">
            <button className="btn btn-info" onClick={()=>{props.onEditUser(user); navigate(-1)}}>Update</button>
        </div>
        </div>
    </div>
    )
}

export default EditUserPage;