import React from "react";
import style from "./Users.module.css";
import * as axios from "axios";
import userPhoto from "../../../src/assets/images/user.png"


let Users = (props) => {

    let getUsers = () => 
        {
            if(props.users.length === 0){

                    axios
                    .get("https://social-network.samuraijs.com/api/1.0/users")
                    .then(response => { 
                        props.setUsers(response.data.items)
                    })
                }
        // props.setUsers( [
        //     { id: 1, photoUrl: "https://icons-for-free.com/iconfiles/png/512/business+face+people+icon-1320086457520622872.png", followed: false, fullName: "Sergei", status: "I'm create site", location: { city: "Kiev", country: "Ukraine" } },
        //     { id: 2, photoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRxUAaxOy8jnQYmYxXZOjcrq_iFW_Zjlbvv-A&usqp=CAU", followed: true, fullName: "Dima", status: "HELLO PEOPLE", location: { city: "Moscow", country: "Russia" } },
        //     { id: 3, photoUrl: "https://icon-library.com/images/4_avatar-512.png", followed: true, fullName: "Nastya", status: "I am so pretty", location: { city: "Minsk", country: "Belarus" } },
        //     { id: 4, photoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRreMcZBkJH8HScfuswuiCkxCvTu7Kf85z-rg&usqp=CAU", followed: false, fullName: "Andrei", status: "Let's go!", location: { city: "Kiev", country: "Ukraine" } },
        // ]
        //   )
            }

  return(

    <div>
              <button onClick={getUsers}>Get users</button>
        {
            props.users.map( u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photos.small !== null ? u.photos.small : userPhoto} className={style.userPhoto}/>
                    </div>
                    <div>
                        {u.followed ? <button onClick={ () => {props.unfollow(u.id)}}>Follow</button> : <button onClick={ () => {props.follow(u.id)}}>Unfollow</button>}
                      
                    </div>
                </span>
                <span>
                <span>
                    <div>{u.name}</div>
                    <div>{u.status}</div>
                </span>
                <span>
                    <div>{"u.location.country"}</div>
                    <div>{"u.location.city"}</div>
                </span>
                </span>
            </div> )
        }
    </div>
  ) 
}

export default Users;
