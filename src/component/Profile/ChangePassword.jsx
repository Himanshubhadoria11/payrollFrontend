import React, { useState } from "react";

const ChangePassword = () => {
    const [passwords, setPasswords] = useState({ currentPassword: "", newPassword: "", confirmPassword: "" });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPasswords({ ...passwords, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (passwords.newPassword !== passwords.confirmPassword) {
            alert("New passwords do not match!");
            return;
        }
        fetch("http://localhost:7777/api/change-password", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
            body: JSON.stringify({
                currentPassword: passwords.currentPassword,
                newPassword: passwords.newPassword,
            }),
        })
            .then((res) => res.json())
            .then(() => alert("Password changed successfully!"))
            .catch((err) => console.error("Failed to change password:", err));
    };

    return (
        <div>
            <h1>Change Password</h1>
            <form onSubmit={handleSubmit}>
                <input name="currentPassword" type="password" placeholder="Current Password" value={passwords.currentPassword} onChange={handleChange} />
                <input name="newPassword" type="password" placeholder="New Password" value={passwords.newPassword} onChange={handleChange} />
                <input name="confirmPassword" type="password" placeholder="Confirm New Password" value={passwords.confirmPassword} onChange={handleChange} />
                <button type="submit">Change Password</button>
            </form>
        </div>
    );
};

export default ChangePassword;
