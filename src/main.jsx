import React from "react";
import "./Form.css";

const Form = () => {
  return (
    <div className="form-container">
      <h2>Registration Form</h2>
      <form>
        <label>First Name:</label>
        <input type="text" name="name" required />

        <label>Surname:</label>
        <input type="text" name="surname" required />

        <label>Age:</label>
        <input type="number" name="age" required />

        <label>Gender:</label>
        <select name="gender" required>
          <option value="">--Select--</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>

        <label>Email:</label>
        <input type="email" name="email" />

        <label>Message:</label>
        <textarea name="message" rows="4"></textarea>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
