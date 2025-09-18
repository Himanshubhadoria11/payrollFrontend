

import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import api from "../api/axios";


const Profile = () => {
  const { id } = useParams();
  const [profileData, setProfileData] = useState(null);
  const [error, setError] = useState(null);

  // State for updating profile and changing password
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  // Fetch profile data on component mount
  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const response = await axios.get('/api/getUser');
        setProfileData(response.data);
        setName(response.data.name);
        setEmail(response.data.email);
       
      } catch (error) {
        setError(error.message);
        console.error('Error fetching profile data:', error);
      }
    };

    fetchProfileData();
  }, []);

  // Handle profile update
  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post( `/api/updateprofile/${id}`, { name, email });
      alert(response.data.message || 'Profile updated successfully');
      setProfileData((prevData) => ({ ...prevData, name, email }));
    } catch (error) {
      console.error('Error updating profile:', error);
      alert(error.response?.data?.message || 'Failed to update profile');

    } 
  };

  // Handle password change
  const handleChangePassword = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`/api/changepassword/${id}`, {
        currentPassword,
        newPassword,
      });
      alert(response.data.message || 'Password changed successfully');
      setCurrentPassword('');
      setNewPassword('');
    } catch (error) {
      console.error('Error changing password:', error);
      alert(error.response?.data?.message || 'Failed to change password');
    }
  };

  // Render profile, update form, and change password form
  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    // <div>
    //   {profileData ? (
    //     <div>
    //       <h1>Profile</h1>
    //       <p><strong>Name:</strong> {profileData.name}</p>
    //       <p><strong>Email:</strong> {profileData.email}</p>
         

    //       {/* Update Profile Form */}
    //       <h2>Update Profile</h2>
    //       <form onSubmit={handleUpdateProfile}>
    //         <div>
    //           <label>Name</label>
    //           <input
    //             type="text"
    //             value={name}
    //             onChange={(e) => setName(e.target.value)}
    //             placeholder="Enter your name"
    //           />
    //         </div>
    //         <div>
    //           <label>Email</label>
    //           <input
    //             type="email"
    //             value={email}
    //             onChange={(e) => setEmail(e.target.value)}
    //             placeholder="Enter your email"
    //           />
    //         </div>
    //         <button type="submit">Update Profile</button>
    //       </form>

    //       {/* Change Password Form */}
    //       <h2>Change Password</h2>
    //       <form onSubmit={handleChangePassword}>
    //         <div>
    //           <label>Current Password</label>
    //           <input
    //             type="password"
    //             value={currentPassword}
    //             onChange={(e) => setCurrentPassword(e.target.value)}
    //             placeholder="Enter current password"
    //           />
    //         </div>
    //         <div>
    //           <label>New Password</label>
    //           <input
    //             type="password"
    //             value={newPassword}
    //             onChange={(e) => setNewPassword(e.target.value)}
    //             placeholder="Enter new password"
    //           />
    //         </div>
    //         <button type="submit">Change Password</button>
    //       </form>
    //     </div>
    //   ) : (
    //     <div>Loading...</div>
    //   )}
    // </div>
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
  {profileData ? (
    <div>
      {/* Profile Info */}
      <h1 className="text-3xl font-bold text-gray-800 mb-4">My Profile</h1>
      <div className="mb-6">
        <p className="text-lg">
          <span className="font-semibold text-gray-700">Name:</span> {profileData.name}
        </p>
        <p className="text-lg">
          <span className="font-semibold text-gray-700">Email:</span> {profileData.email}
        </p>
      </div>

      {/* Update Profile Form */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-green-600 mb-4">Update Profile</h2>
        <form onSubmit={handleUpdateProfile} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-600">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-green-400 focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-green-400 focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition font-semibold"
          >
            Update Profile
          </button>
        </form>
      </div>

      {/* Change Password Form */}
      <div>
        <h2 className="text-2xl font-semibold text-red-600 mb-4">Change Password</h2>
        <form onSubmit={handleChangePassword} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-600">Current Password</label>
            <input
              type="password"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              placeholder="Enter current password"
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-red-400 focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600">New Password</label>
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              placeholder="Enter new password"
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-red-400 focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition font-semibold"
          >
            Change Password
          </button>
        </form>
      </div>
    </div>
  ) : (
    <div className="text-center text-gray-500">Loading...</div>
  )}
</div>

  );
};

export default Profile;


