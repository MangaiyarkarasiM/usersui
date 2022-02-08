import React from "react";
import { Link } from "react-router-dom";
const UserPage = (props) => {

    
    return(
        <div>
            <div className="mt-4 ml-2">
                <Link className="btn btn-info" to="/create-user">Create user</Link>
            </div>
            <div className="container">
                <div className="row">
                {props.userlist.map((user)=>{
                    return (
                        <div key={user.id} className="my-4 col-md-6 col-lg-4 text-center">
                            <div className="card rounded">
                                <div className="card-body">
                                    <img src={user.image} alt={user.name} style={{width:"auto",height:"100px"}}></img>
                                    <div className="mt-3">{user.name}</div>
                                </div>
                                <div className="card-footer d-flex align-items-center justify-content-between">
                                    <Link className="btn btn-info" to={`/edit-user/${user.id}`}>Edit</Link>
                                    <button onClick={()=>{props.onDeleteUser(user.id)}} className="btn btn-info">Delete</button>
                                </div>
                            </div>
                        </div>
                    )   
                    }
                )}        
                </div>
            </div>
        </div>
    )
}

export default UserPage;