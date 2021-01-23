import React from 'react';
import './MyProfile.css';

function MyProfile() {
    return (
        <div className="myProfile">
            <h1 className="myProfile__title">My Profile</h1>
            <main>
                <div className="myProfile__name">
                    <input type="text" placeholder="First name" />
                    <input type="text" placeholder="Last name" />
                </div>
                <input type="email" placeholder="Email" />
                <input type="number" placeholder="Phone Number" />
                <input type="password" placeholder="Password" />
                <input type="password" placeholder="Confirm Password" />
                <div className="myProfile__buttonContainer">
                    <button>Add New Address</button>
                </div>
            </main>
        </div>
    )
}

export default MyProfile;
