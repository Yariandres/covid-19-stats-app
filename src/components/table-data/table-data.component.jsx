/* eslint-disable no-lone-blocks */
import React from 'react';
import { Table } from 'reactstrap';


import "./table-data.css";

const TableData = props => {
  return (
    <Table className="striped mt-5 my-table">         
      <thead>
        <tr>
          <th>#</th>
          <th>Country</th>
          <th
            className="table-sort"
            onClick={() => props.sortBy("cases")}          
            >Cases
            </th>
          <th
            className="table-sort"
            onClick={() => props.sortBy("todayCases")}
            >Today Deaths                     
          </th>

          <th
            className="table-sort"
            onClick={() => props.sortBy("recovered")}          
            >Recovered
          </th>

          <th
            className="table-sort"
            onClick={() => props.sortBy("critical")} 
            >Critical
          </th>
        </tr>
      </thead>
      {props.info.map((data, index) => ( 
        <tbody key={index}>
          <tr>
            <th scope="row">{index}</th>
            <td>{data.country}</td>
            <td className="table-cases-num">{data.cases}</td>
            <td className="table-today-num">{data.todayCases}</td>
            <td className="table-recovered-num">{data.recovered}</td>
            <td className="table-critical-num">{data.critical}</td>
          </tr>
        </tbody>
      ))}     
    </Table>
  );
}

export default TableData;