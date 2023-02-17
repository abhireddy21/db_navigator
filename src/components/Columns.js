import axios from "axios";
import React from "react";
import { useState } from "react";
import "./css/loader.css";

export default function Columns(props) {
  const reqBody = props.body;
  const catalog = props.catalog;
  const schema = props.schema;
  const table = props.table;
  const [loading, setLoading] = useState(true);
  const [columns, setColumns] = useState([]);

  if (columns.length === 0) {
    axios
      .post(
        "http://192.168.0.158:8080/dextrus/" +
          catalog +
          "/" +
          schema +
          "/" +
          table,
        reqBody
      )
      .then((response) => {
        setColumns(response.data.map((column) => column.columnName));
        console.log(response.data);
        setLoading(!loading);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <div>
      <div>
        {loading ? (
         <div class="spinner">
         </div>
        ) : (
          columns.map((column) => (
            <div className="col-cnt">
              <i class="bi bi-layout-three-columns"></i>
              {column}
            </div>
          ))
        )}
      </div>
    </div>
  );
}
