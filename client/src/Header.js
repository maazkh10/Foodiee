import {Link} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import {UserContext} from "./UserContext";
import { GiChessKing } from "react-icons/gi";
import wals1 from './imgs/wals1.png'
import wals2 from './imgs/wals2.png'
import wals3 from './imgs/wals3.png'
export default function Header() {
  const {setUserInfo,userInfo} = useContext(UserContext);
  useEffect(() => {
    fetch('http://localhost:4000/profile', {
      credentials: 'include',
    }).then(response => {
      response.json().then(userInfo => {
        setUserInfo(userInfo);
      });
    });
  }, []);

  function logout() {
    fetch('http://localhost:4000/logout', {
      credentials: 'include',
      method: 'POST',
    });
    setUserInfo(null);
  }

  const username = userInfo?.username;

  return (
    <header style={{backgroundColor: "#4F6F52" , height: '90vh' }}>
 
     <div className="flex gap-2 justify-center items-center  ">
     <Link to="/" className="text-white from-neutral-200 text-2xl">Cookpedia</Link>
      <GiChessKing className="text-white text-2xl"  />
       </div>
      <nav className="">
        {username && (
          <div className=" ml-[1200px] gap-2">
            <Link className=" rounded-xl   text-2xl font-normal text-white mr-4" to="/create">Create Recipe → </Link>
            <a onClick={logout}>Logout {username}</a>
          </div>
        )}
        {!username && (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </nav>


      <div className="flex  mt-4">
      <div className="w-[50%] m-8 mt-[200px] text-lg text-white font-semibold">
    <div className="text-4xl m-4">here every dish tells a story! 🍽️</div>     Explore a world of flavors, discover mouthwatering recipes, and share your culinary creations with our vibrant community
      </div>

        <div className="w-[80%] grid grid-cols-2  ">
        <img src={wals2} alt="" className="-ml-[10px]" />
        <img src={wals3} alt="" />
        <img src={wals1} alt="wals" className="-mt-[300px]" />
        </div>
        
      </div>
   
   
    </header>
  );
}
