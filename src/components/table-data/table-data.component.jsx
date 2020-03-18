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
          <th>Cases</th>
          <th>today Deaths</th>
          <th>Recovered</th>
          <th>Critical</th>
        </tr>
      </thead>
      {props.info.map((data, index) => ( 
        <tbody>
          <th scope="row">{index}</th>
          <th>{data.country}</th>
          <th className="table-cases-num">{data.cases}</th>
          <th className="table-today-num">{data.todayCases}</th>
          <th className="table-recovered-num">{data.recovered}</th>
          <th className="table-critical-num">{data.critical}</th>
        </tbody>
      ))}     
    </Table>
  );
}

export default TableData;