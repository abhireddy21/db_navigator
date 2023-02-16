import React from 'react'
import './css/serverpage.css'
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import Schemas from "./Schemas";
import "./css/loader.css";

export default function Catalogs() {

    const location = useLocation();
    const reqBody = location.state;
    const[catOpen,setCatOpen]=useState(false);
    const[scheOpen,setScheOpen]=useState(false);
    const [selectedCat, setSelectedCat] = useState('');
    const [catalogs, setCatalogs] = useState([]);
    const [loading,setLoading]=useState(true);
  

    const handleCatalog =()=>{
    setCatOpen(!catOpen)
    if (catalogs.length === 0) {
        axios
          .post("http://192.168.0.159:8080/dextrus/", reqBody)
          .then((response) => {
            setCatalogs(response.data);
            console.log(response.data);
            setLoading(false);
          })
          .catch((error) => {
            console.log("error");
            console.log(error);
          });
      }
    }
    
    const handleSchema = (catalog) =>{
      setScheOpen(!scheOpen);
      setSelectedCat(catalog);
      console.log(selectedCat);
    }
  return (
    <div>
      <div className="cat-main">
        <div className="cat-head" onClick={handleCatalog}> 
       <span> <i className="bi bi-journal"></i>Catalogs</span>{catOpen ?<i className="bi bi-caret-up toggle-btn"></i>:<i className="bi bi-caret-down toggle-btn"></i> } 
        </div>
        {catOpen && 
        <div className="cat-cnt" >
            {loading ? (
                      <div class="spinner">
                      </div> // show loader when loading is true
                    ) : (
                catalogs.map((catalog) => (
                  
                    <div key={catalog} className="catalog-cnt" >

                      <div onClick={()=>handleSchema(catalog)}>
                       { selectedCat === catalog && scheOpen ? <i class="bi bi-database-dash"></i>:<i class="bi bi-database-add"></i> }{catalog}
                       </div>
                        { selectedCat === catalog && scheOpen && (
                        <div>
                      
                          <Schemas body={reqBody} catalog={selectedCat}/>
                        
                        </div>
                        )}
                    </div>
                    
                )))
            }
        </div>
        
        }
        
      </div>
    </div>
  )
}
