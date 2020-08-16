import React from 'react';
import './Dashboard.css'
export default function Dashboard() {
  return (
      <div className="dashboard">
      	<h1 className="dashboard-text">Welcome Home</h1>
        <button className="logout-button">

        <img src="https://img.icons8.com/ios-filled/50/000000/google-logo.png" alt="google icon"/>
        <span> logout</span>
       </button>
      </div>
  );
}