import React from "react";
import { useState } from "react";
import axios from "axios";
import Columns from "./Columns";
import "./css/loader.css";

export default function Views(props) {
  const [viewOpen, setViewOpen] = useState(false);
  const [views, setViews] = useState([]);
  const reqBody = props.body;
  const catalog = props.catalog;
  const schema = props.schema;
  const [calOpen,setColOpen]=useState(false);
  const [selectedView,setSelectedView]=useState('')
  const [loading,setLoading]=useState(true);

  const handleView = () => {
    setViewOpen(!viewOpen);
    if(views.length===0){
    axios
      .post("http://192.168.0.159:8080/dextrus/" + catalog + "/" + schema, reqBody)
      .then((response) => {
        if(response.data.length!==0){
        setViews(
          response.data
            .filter((view) => view.table_type === "VIEW")
            .map((view) => view.table_name)
        );
        console.log(response.data);
        setLoading(false);
        }else{
          console.log("No Views");
          alert("No Views")
        }
      })
      .catch((error) => {
        console.log(error);
      });
    }
  };

  const handleColumn = (view) =>{
      setColOpen(!calOpen);
      setSelectedView(view)
  }


  return (
    <div className="view-top-cnt">
      <div className="view-head" onClick={handleView}>
        <span>
        <i class="bi bi-binoculars"></i>Views
        </span>
        {viewOpen ? (
          <i className="bi bi-caret-up toggle-btn"></i>
        ) : (
          <i className="bi bi-caret-down toggle-btn"></i>
        )}
      </div>
      {viewOpen && (
        <div>
          {loading ? ( <div class="spinner">
                 </div>):(
          views.map((view)=>(
            <div key={view} className="view-cnt">
              <div onClick={() => handleColumn(view)}>
                <i class="bi bi-table"></i>
                {view}
                </div>
                {calOpen && selectedView===view &&
                  <div>
                    <Columns body={reqBody} catalog={catalog} schema={schema} table={selectedView}/>
                  </div>
                }
              </div>
          )))}
        </div>
      )} 
    </div>
  );
}
