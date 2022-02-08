import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

const ProfilePage = () =>{
    const [profile,setProfile] = useState({});
    useEffect(()=>{
        const ls = localStorage.getItem('__PROFILE__');
        const d = JSON.parse(ls);
        setProfile(d);
    },[])

    return(
        <div className="container">
            <div className="row">
                <div className="col-lg-12 col-md-12">
                    <div className="mt-4 ">
                        <img src={profile.profileImage} alt="profileimage" style={{width:"auto", height:"200px"}}/>
                        <div className="my-3">
                            <div className="font-weight-bold">Name</div>
                            <div>{profile.name}</div>
                        </div>
                        <div className="my-3">
                            <div className="font-weight-bold">Email</div>
                            <div>{profile.email}</div>
                        </div>
                        <div className="my-3">
                            <div className="font-weight-bold">Mobile</div>
                            <div>{profile.mobile}</div>
                        </div>
                    </div>
                    <Link className="btn btn-info text-white text-center" to={`/edit-profile/${profile.id}`}> Edit </Link>
                </div>
            </div>
        </div>
    )
}

export default ProfilePage;