import React from "react";
import { Table } from "react-bootstrap";

const data = [{name:"a",age:80,contactNo:'',address:''}];

const ListPatient = () => {
  return (
    <Table
      striped
      bordered
      hover
      responsive
      className="list-table"
      variant="dark"
    >
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Address</th>
        </tr>
      </thead>
      <tbody>
        {data.map((treatment,index) => (
          <tr key={index}>
            <td>{treatment.name}</td>
            <td>{treatment.age}</td>
            <td>{treatment.address}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
export default ListPatient;