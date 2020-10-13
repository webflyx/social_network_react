import React from "react";
import style from "./Users.module.css";
import * as axios from "axios";
import userPhoto from "../../../src/assets/images/user.png"


class UsersC extends React.Component {
    
    constructor(props) {
        super(props);
       
            axios
            .get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => { 
                this.props.setUsers(response.data.items)
            })
        }
    

    // getUsers = () => 
    //     {
    //         if(this.props.users.length === 0){

    //                 axios
    //                 .get("https://social-network.samuraijs.com/api/1.0/users")
    //                 .then(response => { 
    //                     this.props.setUsers(response.data.items)
    //                 })
    //             }
    //         }

    render () {
        return(
        <div>
              {/* <button onClick={this.getUsers}>Get users</button> */}
        {
            this.props.users.map( u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photos.small !== null ? u.photos.small : userPhoto} className={style.userPhoto}/>
                    </div>
                    <div>
                        {u.followed ? <button onClick={ () => {this.props.unfollow(u.id)}}>Follow</button> : <button onClick={ () => {this.props.follow(u.id)}}>Unfollow</button>}
                      
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
    )}    
}

export default UsersC;
