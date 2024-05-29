import React from "react";

export default function CreateClient() {
  return (
    <React.Fragment>
<div className="row bg-white p-2">
  <form>
    <div className="row g-2">
      <div className="mb-3 col-md-6">
        <label htmlFor="inputEmail4" className="form-label">Email</label>
        <input type="email" className="form-control" id="inputEmail4" placeholder="Email" />
      </div>
      <div className="mb-3 col-md-6">
        <label htmlFor="inputPassword4" className="form-label">Password</label>
        <input type="password" className="form-control" id="inputPassword4" placeholder="Password" />
      </div>
    </div>
    <div className="mb-3">
      <label htmlFor="inputAddress" className="form-label">Address</label>
      <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
    </div>
    <div className="mb-3">
      <label htmlFor="inputAddress2" className="form-label">Address 2</label>
      <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
    </div>
    <div className="row g-2">
      <div className="mb-3 col-md-6">
        <label htmlFor="inputCity" className="form-label">City</label>
        <input type="text" className="form-control" id="inputCity" />
      </div>
      <div className="mb-3 col-md-4">
        <label htmlFor="inputState" className="form-label">State</label>
        <select id="inputState" className="form-select">
          <option>Choose</option>
          <option>Option 1</option>
          <option>Option 2</option>
          <option>Option 3</option>
        </select>
      </div>
      <div className="mb-3 col-md-2">
        <label htmlFor="inputZip" className="form-label">Zip</label>
        <input type="text" className="form-control" id="inputZip" />
      </div>
    </div>
    <div className="mb-2">
      <div className="form-check">
        <input type="checkbox" className="form-check-input" id="customCheck11" />
        <label className="form-check-label" htmlFor="customCheck11">Check this custom checkbox</label>
      </div>
    </div>
    <button type="submit" className="btn btn-primary">Sign in</button>
  </form>
</div>

    </React.Fragment>
  );
}
