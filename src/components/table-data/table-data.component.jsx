/* eslint-disable no-lone-blocks */
import React from 'react';
import { Table } from 'reactstrap';
import { Button } from 'reactstrap';

import "./table-data.css";

const TableData = props => {
  return (
    <Table className="striped mt-5 my-table">      
      <thead>
        <tr>
          <th>#</th>
          <th>Country</th>
          <th>Cases</th>
          <th            
            color="danger"
            onClick={() => props.sortBy("todayCases")}
            >Today Deaths                     
          </th>

          <th>Recovered</th>
          <th>Critical</th>
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