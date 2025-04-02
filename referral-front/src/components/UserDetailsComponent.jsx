import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getAllByReferralCode } from '../api/apiCalls';
import { getAllUsers } from '../api/apiCalls';
import { UserList } from './UserList';


export const UserDetailsComponent = (props) => {

    const { userData, friends } = props;
    console.log("userData", userData);

    const [referredUsers, setReferredUsers] = useState(friends);


    useEffect(() => { setReferredUsers(friends)}, [friends] )


    const getUsersByReferralCode = async (code) => {
        try {
            const response = await getAllByReferralCode(code);
            const formattedUsers = response.data.map(user => ({
                ...user,
                reward: user.reward === null ? "0.00" : parseFloat(user.reward).toFixed(2)
            }));
            setReferredUsers(formattedUsers);
        } catch (error) {
            console.error("Failed to fetch referred users:", error);
            setReferredUsers([]);
        }
    };

    const getAllUsersForAdmin = async (id) => {
        try {
            const response = await getAllUsers(id);
            const formattedUsers = response.data.map(user => ({
                ...user,
                reward: user.reward === null ? "0.00" : parseFloat(user.reward).toFixed(2)
            }));
            setReferredUsers(formattedUsers);
        } catch (error) {
            console.error("Failed to fetch referred users:", error);
            setReferredUsers([]);
        }
    };



    return <div style={{ display: "flex", justifyContent: "center" }}>
        <div className='row'>
            <div className='row' style={{ display: "flex", justifyContent: "center", }}>
                {userData && (<div className="card" style={{ width: "25rem", borderRadius: "25px" }}>
                    <div className="card-body text-center">
                        <h5 style={{ marginBottom: 25 }} className="card-title">User Details</h5>
                        <p style={{ marginBottom: 5 }} className="card-text"><strong>id :</strong> {userData.id}</p>
                        <p style={{ marginBottom: 5 }} className="card-text"><strong>username :</strong> {userData.userName}</p>
                        <p style={{ marginBottom: 5 }} className="card-text"><strong>firstname :</strong> {userData.firstName}</p>
                        <p style={{ marginBottom: 5 }} className="card-text"><strong>lastname :</strong> {userData.lastName}</p>
                        <p style={{ marginBottom: 5 }} className="card-text"><strong>email : </strong>{userData.email}</p>
                        <p style={{ marginBottom: 5 }} className="card-text"><strong>Rewards : </strong>{userData.reward}</p>
                        <p className="card-text"><strong>referralCode : </strong>{userData.referralCode}</p>
                        <button className="btn btn-danger" onClick={() => getUsersByReferralCode(userData.referralCode)}
                            style={{ marginTop: 5, marginLeft: 5, marginRight: 5 }} href="#" >My Referred Friends</button>
                        {userData.role === "ADMIN" && (
                            <button className="btn btn-danger" onClick={() => getAllUsersForAdmin(userData.id)}
                                style={{ marginTop: 5, marginLeft: 5, marginRight: 5 }} href="#" >All Users</button>
                        )}
                        <Link to={`/signup/${userData.referralCode}`}>
                            <button className="btn btn-success"
                                style={{ marginTop: 5, marginLeft: 5, marginRight: 5 }} href="#" >Invite!</button>
                        </Link>
                    </div>
                </div>)}
                {referredUsers && (
                    <div style={{ display: "flex", justifyContent: "center", marginTop: 25 }} >
                        <UserList users={referredUsers} rewardEditable={userData.role === "ADMIN"} />
                    </div>
                )}
            </div>
        </div>
    </div>;
};
