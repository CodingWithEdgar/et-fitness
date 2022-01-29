import React from "react";

export const Contact = () => (
  <div className="container">
    <h1>Let's get in touch</h1>
    <form>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          aria-label="name"
          placeholder="Name"
          required
        />
      </div>
      <div className="input-group mb-3">
        <input
          type="email"
          className="form-control"
          aria-label="email"
          placeholder="Email"
          required
        />
      </div>
      <div className="input-group mb-3">
        <textarea
          type="text"
          className="form-control"
          aria-label="Notes"
          placeholder="Message"
          required
        />
      </div>
      <button type="submit" className="btn btn-primary btn-lg col-12">Submit</button>
    </form>
  </div>
);
