import React from 'react';
import { useLocation } from 'react-router-dom';
import { UserDetailsComponent } from '../components/UserDetailsComponent';



const DetailsPage = () => {
    const location = useLocation();
    const { userData, friends } = location.state || {}; // Default to empty object if state is undefined

    return (
        <div>
            <UserDetailsComponent userData={userData} friends={friends} />
        </div>
    );
};

export default DetailsPage;
