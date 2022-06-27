import React from "react";
import classes from "./Users.module.css";
import userPhoto from "../../img/defaultUserPhoto.jpeg";

//в пропсы приходят юзеры

const Users = (props) => {
    return <div>
        {
            props.usersData.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img className={classes.userPhoto} src={userPhoto} alt={"userPhoto"} />
                    </div>
                    <div>
                        {u.isFollowed 
                            ? <button onClick={() => {props.unfollow(u.id)}}>Unfollow</button> 
                            : <button onClick={() => {props.follow(u.id)}}>Follow</button>}
                    </div>
                </span>

                <span>
                    <span>
                        <div>{u.userName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
};

export default Users;