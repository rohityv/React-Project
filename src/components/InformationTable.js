import React, {Fragment} from "react";

export default function InformationTable({ tableData }) {

  const infoTable = function (tableData) {
    return (
      <div className="student-table">
        <table className="table table-dark table-bordered table-striped table-hover">
          <thead>
            <tr>
              <th>#</th>
              <th>First name</th>
              <th>Last name</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((task) => {
              return (
                <tr key={task.id}>
                  <th>{task.count}</th>
                  <td>{task.firstName}</td>
                  <td>{task.lastName}</td>
                  <td>{task.phoneNum}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  };

  return <Fragment>{infoTable(tableData)}</Fragment>;

}
