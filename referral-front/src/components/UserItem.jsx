import React from 'react';
import { deletedUser } from '../api/apiCalls';

export const UserTable = ({ users, onDeleteUser }) => {
  const handleSelectUser = async (userId) => {
    try {
      await deletedUser(userId);
      alert('User deleted successfully');
      window.location.reload();
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  return (
    <>
      <table style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", padding: "25px", borderRadius: "5px", width: "100%", margin: "100 auto", boxSizing: "border-box" }}>
        <thead>
          <tr>
            <th style={{ paddingLeft: "30px", paddingRight: "30px", textAlign: "center" }}>Sr no.</th>
            <th style={{ paddingLeft: "30px", paddingRight: "30px", textAlign: "center" }}>Firstname</th>
            <th style={{ paddingLeft: "30px", paddingRight: "30px", textAlign: "center" }}>LastName</th>
            <th style={{ paddingLeft: "30px", paddingRight: "30px", textAlign: "center" }}>Email</th>
            <th style={{ paddingLeft: "30px", paddingRight: "30px", textAlign: "center" }}>Rewards</th>
            <th style={{ paddingLeft: "30px", paddingRight: "30px", textAlign: "center" }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user.id}>
              <td style={{ paddingLeft: "30px", paddingRight: "30px", textAlign: "center" }}>{index + 1}</td>
              <td style={{ paddingLeft: "30px", paddingRight: "30px", textAlign: "center" }}>{user.firstName}</td>
              <td style={{ paddingLeft: "30px", paddingRight: "30px", textAlign: "center" }}>{user.lastName}</td>
              <td style={{ paddingLeft: "30px", paddingRight: "30px", textAlign: "center" }}>{user.email}</td>
              <td style={{ paddingLeft: "30px", paddingRight: "30px", textAlign: "center" }}>{user.reward}</td>
              <td style={{ paddingLeft: "30px", paddingRight: "30px", textAlign: "center" }}>
                <button onClick={() => handleSelectUser(user.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};