import React from 'react';
import Catalogs from './Catalogs';
import './css/serverpage.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';
export default function ServerPage() {
  useEffect(() => {
    toast.success("Connected to Server", {
      position: toast.POSITION.TOP_CENTER
    });
  }, []);
  
  return (
    <div>
      <div className="page-main-ctn">
        <div className="page-sidebar">
          <Catalogs/>
        </div>
      </div>
      <ToastContainer/>
    </div>
  )
}
