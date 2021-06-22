import React from "react";

const SigninForm = () => {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input type="email" className="form-control item" id="email" />
      </div>
      <div className="form-group">
        <label htmlFor="username">Username</label>
        <input type="text" className="form-control item" id="username" />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input type="password" className="form-control" id="password" />
      </div>
      <div className="form-group">
        <label htmlFor="first-name">First Name</label>
        <input type="text" className="form-control item" id="first-name" />
      </div>
      <div className="form-group">
        <label htmlFor="last-name">Last Name</label>
        <input type="text" className="form-control item" id="last-name" />
      </div>
      <div className="form-group">
        <label htmlFor="phone">Phone</label>
        <input type="text" className="form-control item" id="phone" />
      </div>
      <div className="form-group">
        <label htmlFor="adress">Adress</label>
        <input type="text" className="form-control item" id="adress" />
      </div>
      <div className="form-group">
        <label htmlFor="driver-licence">Driver Licence</label>
        <input type="text" className="form-control item" id="driver-licence" />
      </div>
      <div className="form-group">
        <label htmlFor="card-number">Card Number</label>
        <input type="text" className="form-control item" id="card-number" />
      </div>

      <button className="btn btn-primary btn-block" type="submit">
        Register
      </button>
    </form>
  );
};

export default SigninForm;
