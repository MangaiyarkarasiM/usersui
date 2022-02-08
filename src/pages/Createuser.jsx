import React,{ useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateUserPage = (props) =>{
const [user, setuserData] = useState({});
const navigate = useNavigate();

const onChangeInput = (e)=>{
  {
      setuserData(oldstate=>{
          return {
              ...oldstate,
              [e.target.name]:e.target.value
          }
      })
  }
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
                <button className="btn btn-info" onClick={()=>{props.onAddUser(user); navigate(-1)}}>Add</button>
            </div>
            </div>
        </div>
    )
}

export default CreateUserPage;