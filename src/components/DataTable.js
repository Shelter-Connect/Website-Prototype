import React from "react";
import MaterialTable from "@material-table/core";

import './DataTable.css';

const data = [
  { id:1, name: "Water Bottle", quantity: "10", date:new Date() },
  { id:2, name: "Volunteer ", quantity: "10", date: new Date() },
  { id:3, name: "Blankets ", quantity: "200", date: new Date() },
  { id:4, name: "Product10", quantity: "10", date:new Date() },
  { id:5, name: "Product11 ", quantity: "10", date: new Date() },
  { id:6, name: "Product12", quantity: "200", date: new Date() },
  { id:7, name: "Product13", quantity: "10", date:new Date() },
  { id:8, name: "Product14 ", quantity: "10", date: new Date() },
  { id:9, name: "Product15 ", quantity: "200", date: new Date() },
  { id:10, name: "Water Bottle", quantity: "10", date:new Date() },
  { id:11, name: "Volunteer ", quantity: "10", date: new Date() },
  { id:12, name: "Blankets ", quantity: "200", date: new Date() },
  { id:13, name: "Product12", quantity: "10", date:new Date() },
  { id:14, name: "Product1 ", quantity: "10", date: new Date() },
  { id:15, name: "Product18 ", quantity: "200", date: new Date() },
  { id:16, name: "Product15", quantity: "10", date:new Date() },
  { id:17, name: "Product10 ", quantity: "10", date: new Date() },
  { id:18, name: "Blankets ", quantity: "200", date: new Date() },
  { id:19, name: "Product11", quantity: "10", date:new Date() },
  { id:20, name: "Product20 ", quantity: "10", date: new Date() },
  { id:21, name: "Product14 ", quantity: "200", date: new Date() },
  { id:22, name: "Product15", quantity: "10", date:new Date() },
  { id:23, name: "Product15 ", quantity: "10", date: new Date() },
  { id:24, name: "Product16 ", quantity: "200", date: new Date() },
  { id:25, name: "Water Bottle", quantity: "10", date:new Date() },
  { id:26, name: "Volunteer ", quantity: "10", date: new Date() },
  { id:27, name: "Blankets ", quantity: "200", date: new Date() },
];

const columns = [
  { title: "Name", field: "name", width: "150",
 cellStyle: {
    whiteSpace: 'nowrap'
   }},
  { title: "Quantity", field: "quantity", width: "150",
  cellStyle: {
    whiteSpace: 'nowrap'
   } },
  { title: "Date", field: "date", width: "150",
  type: "date", cellStyle: {
    whiteSpace: 'nowrap'
   } }
];
const DataTable = () => {
  return (
    <div className="demo">
      <h1>Material-Table Demo</h1>
      <div className="requests-div">
          <MaterialTable 
        columns={columns}
        data={data}
      />
      </div>
    </div>
  )
}
export default DataTable;