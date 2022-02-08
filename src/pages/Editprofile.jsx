import React, { useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";

const EditProfilePage = (props) =>{
    const [profile,setProfile] = useState({});
    const navigate = useNavigate(-1);
    useEffect(()=>{
        const ls = localStorage.getItem('__PROFILE__');
        const d = JSON.parse(ls);
        setProfile(d);
    },[])

    const onChangeInput = (eve)=>{
        setProfile((oldStatevalue)=>{
            let newvalue = {...oldStatevalue};
            newvalue[eve.target.name] = eve.target.value;
           return newvalue;
        })
      }

    return(
        <div className="d-inline-block text-center my-4 ml-3">
            <div className="border border-info rounded px-5 py-3">
                <div className="my-4">
                    <input type={'text'} size="50" name="name" value={profile.name} onChange={onChangeInput} placeholder="Enter user name"></input>
                </div>
                <div className="my-4">
                    <input type={'email'} size="50" name="email" value={profile.email} onChange={onChangeInput} placeholder="Enter user email id"></input>
                </div>
                <div className="my-4">
                    <input type={'text'} size="50" name="mobile" value={profile.mobile} onChange={onChangeInput} placeholder="Enter mobile"></input>
                </div>
                <div className="my-4">
                    <input type={'text'} size="50" name="profileImage" value={profile.profileImage} onChange={onChangeInput} placeholder="Enter user image url"></input>
                </div>
                <div className="my-4">
                    <button className="btn btn-info" onClick={()=>{props.onEditProfile(profile); navigate(-1)}}>Update</button>
                </div>
            </div>
        </div>
    )
}

export default EditProfilePage;