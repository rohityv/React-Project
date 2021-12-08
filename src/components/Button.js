import React, { Fragment } from "react";

export default function Button({ onclick, name }) {
  return (
    <Fragment>
      <button
        className={name ? "btn btn-danger" : "btn btn-success"}
        onClick={onclick}>
        {name ? "Close" : "Add New Task"}
      </button>
    </Fragment>
  );
}
