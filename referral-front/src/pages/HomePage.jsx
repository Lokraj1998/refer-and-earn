import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Updated import
import { getAllByReferralCode, getUserByUsername } from '../api/apiCalls';
import { UserDetailsComponent } from '../components/UserDetailsComponent';


export const HomePage = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [userData, setUserData] = useState();
    const [friends, setFriends] = useState();
    const [error, setError] = useState();
    const [usernameError, setUsernameError] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const navigate = useNavigate(); // Initialize useNavigate

    const getUsersByReferralCode = async (code) => {
        try {
            const response = await getAllByReferralCode(code);
            setFriends(response.data);
        } catch (error) {
            setFriends()
        }
    };

    const getUser = async () => {
    setUsernameError("");
    setPasswordError("");

    if (!username) setUsernameError("Username is mandatory");
    if (!password) setPasswordError("Password is mandatory");
    if (!username || !password) return;

    try {
        const response = await getUserByUsername(username);
        // Assuming response.data.password is the password received from the response
        if (password === response.data.password) {
            setUserData(response.data);
            console.log("response.data",response.data);
            setError();
            await getUsersByReferralCode(response.data.referralCode);
            console.log(response.data);
            navigate('/details', { state: { userData: response.data, friends: friends } });
        } else {
            // If the input password and the password received in the response are different
            setPasswordError("Password is Incorrect");
        }
    } catch (error) {
        setUserData();
        setError(error.response.data["error"]);
        console.log(error.response.data);
    }
};

    useEffect(() => {
        console.log(username);
    }, [username]);

    const handleUsernameChange = (e) => {
        setUsername(e.target.value)
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }

    return <div>
        <div className='container'>
            <div className="row" style={{ display: "flex", justifyContent: "center", marginTop: "5rem" }}>
                <div className='row' style={{ display: "flex", justifyContent: "center", }}>
                    <div className="col-auto">
                        <input className="form-control" onChange={handleUsernameChange} placeholder="Username" />
                        {usernameError && <div style={{ color: "red" }}>{usernameError}</div>}
                    </div>
                    <div className="col-auto">
                        <input type="password" className="form-control" onChange={handlePasswordChange} placeholder="Password" />
                        {passwordError && <div style={{ color: "red" }}>{passwordError}</div>}
                    </div>
                    <div className="col-auto">
                        <button type="button" onClick={() => getUser()} className="btn btn-primary mb-3">Login</button>
                    </div>
                </div>

                <div style={{ display: "flex", justifyContent: "center", }}>
                    <UserDetailsComponent userData={userData} friends={friends} />
                </div>

                {error && (<div style={{ display: "flex", justifyContent: "center", }}>
                    <p style={{ color: "red" }}>  {error}</p>
                </div>)}
            </div>
        </div>

        <div style={{ display: "flex", justifyContent: "center", marginTop: "60px" }}>
            <Link to="/signup">
                <button style={{ paddingLeft: "200px", paddingRight: "200px" }}
                    type="button" className="btn btn-primary mb-3">SIGNUP !</button>
            </Link>
        </div>
    </div>;
};