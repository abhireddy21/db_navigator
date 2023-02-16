import axios from "axios";
import React from "react";
import { useState } from "react";
import Columns from "./Columns";
import "./css/serverpage.css";
import "./css/loader.css";

export default function Tables(props) {
  const [tabOpen, setTabOpen] = useState(false);
  const [colOpen, setColOpen] = useState(false);
  const [tables, setTables] = useState([]);
  const reqBody = props.body;
  const catalog = props.catalog;
  const schema = props.schema;
  const[loading,setLoading]=useState(true);
  const [selectedTable, setSelectedTable] = useState("");




  const handleTable = () => {
    setTabOpen(!tabOpen);
    if(tables.length===0){
    axios
      .post("http://192.168.0.159:8080/dextrus/" + catalog + "/" + schema, reqBody)
      .then((response) => {
        if(response.data.length !==0){
        setTables(
          response.data
            .filter((table) => table.table_type === "BASE TABLE")
            .map((table) => table.table_name)
        );
        console.log(response.data);
      }else{
        console.log("No data");
        alert("No Tables");
      }
        setLoading(false);
      })
      .catch((error) => {
        console.log("error");
        console.log(error);
      });
    }
  };
  const handleColumn = (table) => {
    setSelectedTable(table)
    setColOpen(!colOpen);
  };
  return (
    <div className="table-cnt-top">
      <div className="table-head" onClick={handleTable}>
        <span>
          <i class="bi bi-file-spreadsheet"></i>Tables
        </span>
        {tabOpen ? (
          <i className="bi bi-caret-up toggle-btn"></i>
        ) : (
          <i className="bi bi-caret-down toggle-btn"></i>
        )}
      </div>
      {tabOpen && (
        <div >
          {loading?(<div class="load-row">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>):(
          tables.map((table) => (
            <div key={table} className="table-cnt">
              <div onClick={() => handleColumn(table)}>
                <i class="bi bi-table"></i>
                {table}
              </div>
              {selectedTable === table && colOpen &&
              <div>
                <Columns body={reqBody} catalog={catalog} schema={schema} table={selectedTable}/>
              </div>
              }
            </div>
          )))}
        </div>
      )}
    </div>
  );
}
