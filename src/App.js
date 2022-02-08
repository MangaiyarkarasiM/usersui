import './App.css';
import React, { useState, useEffect, useRef } from 'react';
import Header from './components/Header/Header';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import HomePage from './pages/Dashboard';
import UserPage from './pages/Users';
import CreateUserPage from './pages/Createuser';
import EditUserPage from './pages/Edituser';
import ProfilePage from './pages/Profile';
import EditProfilePage from './pages/Editprofile';

const users=[{
  id : 0,
  name : 'user1',
  email : 'xyz@gmail.com',
  image : 'https://cdn-icons-png.flaticon.com/512/149/149071.png'
}]

const profiledata = {
  id : 0,
  name: 'Profilename',
  email: 'abcprofile@gmail.com',
  mobile: '123456789',
  profileImage: 'https://cdn.pixabay.com/photo/2017/06/13/12/53/profile-2398782_1280.png'
}

function App() {
  const [userlist,setUserList] = useState([]);
  const [profile,setProfile] = useState();
  const isMounted = useRef(false);
  let [idv,setId] = useState(1);

  useEffect(() => {
    if(isMounted.current) {
      localStorage.setItem('__USER__', JSON.stringify(userlist))
    }
  }, [userlist])

  useEffect(() => {
    if(isMounted.current) {
    localStorage.setItem('__PROFILE__', JSON.stringify(profile))
    }
  },[profile])

  useEffect(()=>{
    const userls = localStorage.getItem('__USER__');
    const userd = JSON.parse(userls)
    localStorage.setItem('__USER__', JSON.stringify(users)) //To always display at least one user in the users page
    localStorage.setItem('__PROFILE__', JSON.stringify(profiledata)) //To store the profile data
    
    const profilels = localStorage.getItem('__PROFILE__');
    const profiled = JSON.parse(profilels)
    
    if(userlist?.length !== userd?.length) {
      setUserList(userd)
    }
    setProfile(profiled)
    isMounted.current = true;
  },[])

 const onAddUser = (user) => {
  if(user.name && user.image && user.email)
  {
     setId((oldvalue)=>++oldvalue);
     let u = {
     ...user,
     id:idv};
     setUserList(oldStateValue => {
     return [...oldStateValue,u];
     })
  }
 }

const onEditUser=(user)=>{
  setUserList((oldStateValue)=>{
    let newValue = oldStateValue.map((u)=>{
      if(u.id===user.id)
      {
        
        return user;
      }
      return u;
    })
    return newValue;
  })

}
 
const onDeleteUser = (id) =>{
setUserList((oldStateValue)=>{
  let newValue = oldStateValue.filter((u)=>u.id!==id);
  console.log(newValue);
  return newValue;
})
}

const onEditProfile = (userprofile) => {
  if(userprofile.name && userprofile.email)
  {
    setProfile(userprofile)
  }
}

  return (
    <BrowserRouter>
       <Header/>
       <Routes>
         <Route path="/" element={<HomePage userlist={userlist}/>}></Route>
         <Route path="/users" element={<UserPage userlist={userlist} onDeleteUser={onDeleteUser}/>}></Route>
         <Route path="/create-user" element={<CreateUserPage onAddUser={onAddUser}/>}></Route>
         <Route path="/edit-user/:id" element={<EditUserPage userlist={userlist} onEditUser={onEditUser}/>}></Route>
         <Route path="/profile/:id" element={<ProfilePage />}></Route>
         <Route path="/edit-profile/:id" element={<EditProfilePage onEditProfile={onEditProfile}/>}></Route>
       </Routes>
    </BrowserRouter>
  )
}

export default App;
