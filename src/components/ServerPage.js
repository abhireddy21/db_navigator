import React from 'react';
import Catalogs from './Catalogs';
import './css/serverpage.css';

export default function ServerPage() {
  
  return (
    <div>
      <div className="page-main-ctn">
        <div className="page-sidebar">
          <Catalogs/>
        </div>
      </div>
    </div>
  )
}
