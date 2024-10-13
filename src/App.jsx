// src/App.js
import React, { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    fullName: "",
    age: "",
    gender: "",
    occupation: "",
    maritalStatus: "",
    householdSize: "",
    educationLevel: "",
    state: "",
    urbanRural: "",
    annualIncome: "",
    housingType: "",
    healthInsurance: "",
    voterRegistration: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Survey submitted! Thank you for your participation.");
    console.log("Survey Data: ", formData);
  };

  return (
    <div className="App">
      <header className="header">
        <h1>Government of India: Official Population Survey</h1>
        <p>Please fill out the following form to help us with the national survey.</p>
      </header>

      <form onSubmit={handleSubmit} className="survey-form">
        <div className="form-group">
          <label>Full Name:</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Age:</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Gender:</label>
          <select name="gender" value={formData.gender} onChange={handleChange} required>
            <option value="">Select</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className="form-group">
          <label>Occupation:</label>
          <input
            type="text"
            name="occupation"
            value={formData.occupation}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Marital Status:</label>
          <select
            name="maritalStatus"
            value={formData.maritalStatus}
            onChange={handleChange}
            required
          >
            <option value="">Select</option>
            <option value="Single">Single</option>
            <option value="Married">Married</option>
            <option value="Divorced">Divorced</option>
            <option value="Widowed">Widowed</option>
          </select>
        </div>

        <div className="form-group">
          <label>Household Size (Number of People in Household):</label>
          <input
            type="number"
            name="householdSize"
            value={formData.householdSize}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Highest Level of Education:</label>
          <select
            name="educationLevel"
            value={formData.educationLevel}
            onChange={handleChange}
            required
          >
            <option value="">Select</option>
            <option value="No formal education">No formal education</option>
            <option value="Primary School">Primary School</option>
            <option value="High School">High School</option>
            <option value="Graduate">Graduate</option>
            <option value="Post-Graduate">Post-Graduate</option>
          </select>
        </div>

        <div className="form-group">
          <label>State/Union Territory:</label>
          <input
            type="text"
            name="state"
            value={formData.state}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Living Area:</label>
          <select
            name="urbanRural"
            value={formData.urbanRural}
            onChange={handleChange}
            required
          >
            <option value="">Select</option>
            <option value="Urban">Urban</option>
            <option value="Rural">Rural</option>
          </select>
        </div>

        <div className="form-group">
          <label>Annual Household Income (INR):</label>
          <input
            type="number"
            name="annualIncome"
            value={formData.annualIncome}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Housing Type:</label>
          <select name="housingType" value={formData.housingType} onChange={handleChange} required>
            <option value="">Select</option>
            <option value="Owned">Owned</option>
            <option value="Rented">Rented</option>
            <option value="Government Provided">Government Provided</option>
          </select>
        </div>

        <div className="form-group">
          <label>Do you have Health Insurance?:</label>
          <select
            name="healthInsurance"
            value={formData.healthInsurance}
            onChange={handleChange}
            required
          >
            <option value="">Select</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>

        <div className="form-group">
          <label>Are you registered to vote?:</label>
          <select
            name="voterRegistration"
            value={formData.voterRegistration}
            onChange={handleChange}
            required
          >
            <option value="">Select</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>

        <button type="submit" className="submit-btn">Submit Survey</button>
      </form>
    </div>
  );
}

export default App;
