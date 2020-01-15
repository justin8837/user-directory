import React from "react";

function Table(props) {
  return (
    <table class="table table-striped">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th
            scope="col"
            onClick={() => {
              props.sort("First");
            }}
          >
            First
          </th>
          <th
            scope="col"
            onClick={() => {
              props.sort("Last");
            }}
          >
            Last
          </th>
          <th scope="col">Handle</th>
        </tr>
      </thead>
      <tbody>
        {props.employees.map(name => (
          <tr>
            <th scope="row">1</th>
            <td>{name.name}</td>
            <td>{name.lastName}</td>
            <td>@mdo</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
