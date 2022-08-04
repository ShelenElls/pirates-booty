import React, {useEffect, useState } from "react";
import { useAuthContext, getUserData } from '../Auth';
import {Link} from "react-router-dom"
import { EditProfile } from "./edit";

// edit user data
// get completed workouts data

// create a new field on user profile to have list of workouts
// create functionality on the individual workout to complete workout
// upon completion -> add workout id to list on user profile


function UserProfileView (){
    const { user, token } = useAuthContext();
    const [userData, setUserData] = useState(null);
    async function getUserData(username) {
      const usernameurl = `${process.env.REACT_APP_USERS}/users/account/${username}`;
      try {
        const response = await fetch(usernameurl, {
          method: "get",
          credentials: "include",
        });
        if (response.ok) {
          const data = await response.json();
          setUserData(data)
        }
      } catch (e) {}
      return false
    }

    useEffect(
      () => {
        getUserData(user.username)
      }, []
    )

    const newLocal = "breadcrumb-item";
    return(
        <div className="profile-container">
  <div className="main-body">
    {/* Breadcrumb */}
    <nav aria-label="breadcrumb" className="main-breadcrumb">
    </nav>
    {/* /Breadcrumb */}

    <div className="row profile gutters-sm">
      <div className="col-md-4 mb-3">
        <div className="card">
          <div className="card-body">
            <div className="d-flex flex-column align-items-center text-center">
              <img
                src={user.picture_url}
                alt="Admin"
                className="rounded-circle"
                width={150}
              />
                <div className="mt-3">
                <h4>{userData?.first_name} {userData?.last_name}</h4>
                {/* <p className="text-secondary mb-1">Full Stack Developer</p> */}
                <p className="text-muted font-size-sm">
                  {userData?.email}
                </p>
                <p className="text-muted font-size-sm">
                🪙 Booty Coins: {userData?.coins}
                </p>
              </div>
              <div className="row">
              <div className="col-sm-12">
                <button
                  className="btn btn-info"
                  target="__blank"
                ><Link className="link" to="/profile/edit/">Edit</Link>
                </button>
                <span> </span>
                <button
                  className="btn btn-info"
                  target="__blank"
                ><Link className="link" to="/profile/delete/">Delete</Link>
                </button>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
          </div>
          <div className="row history gutters-sm">
          <div className="col-sm-12 mb-3">
            <div className="card h-100">
              <div className="card-body">
                <h6 className="d-flex align-items-center mb-3">
                  <i className="material-icons text-info mr-2">Workout History</i>
                </h6>
                <small>to show list of workouts here?</small>
                <div className="progress mb-3" style={{ height: 5 }}>
                  <div
                    className="progress-bar bg-primary"
                    role="progressbar"
                    style={{ width: "80%" }}
                    aria-valuenow={80}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
        {/* <div className="row gutters-sm">
          <div className="col-sm-12 mb-3">
            <div className="card h-100">
              <div className="card-body">
                <h6 className="d-flex align-items-center mb-3">
                  <i className="material-icons text-info mr-2">Workout History</i>
                </h6>
                <small>to show list of workouts here?</small>
                <div className="progress mb-3" style={{ height: 5 }}>
                  <div
                    className="progress-bar bg-primary"
                    role="progressbar"
                    style={{ width: "80%" }}
                    aria-valuenow={80}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>

    )
}

export default UserProfileView;