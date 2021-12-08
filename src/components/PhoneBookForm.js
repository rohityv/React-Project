import React, { Fragment, useState } from "react";

export default function PhoneBookForm({ addEntryToPhoneBook, studentTable }) {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  const [count, setCount] = useState(1);

  const onSubmit = function (e) {
    e.preventDefault();

    addEntryToPhoneBook({ count, firstName, lastName, phoneNum });

    setCount(count + 1)

    setFirstName("");
    setLastName("");
    setPhoneNum("");
  };

  const phoneBookForm = function () {
    return (
      <div className="student-form mb-5">
        <form onSubmit={onSubmit} className="row g-4 w-lg-50">
          <div className="col-lg-12 col-sm-6">
            <label className="form-label">First name:</label>
            <input
              className="form-control"
              name="userFirstname"
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="col-lg-12 col-sm-6">
            <label className="form-label">Last name:</label>
            <input
              className="form-control"
              name="userLastname"
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="col-lg-12 col-sm-6">
            <label className="form-label">Phone:</label>
            <input
              className="form-control"
              name="userPhone"
              type="text"
              value={phoneNum}
              onChange={(e) => setPhoneNum(e.target.value)}
            />
          </div>
          <div className="col-12">
            <button type="submit" className="btn btn-danger">
              Add User
            </button>
          </div>
        </form>
      </div>
    );
  };

  return <Fragment>
    <div className="phone-book-header mb-5 text-center">
        <h2 className="heading-1">{studentTable}</h2>
    </div>
    {phoneBookForm()}
    </Fragment>;
}
