import Connection from './components/Connection';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import ServerPage from './components/ServerPage';
import Header from './components/Header';
import Home from './components/Home';
import Dextrus from './components/Dextrus';
import RDt from './components/RDt';




function App() {
  return (
    <div className="App">
     <Header></Header>
       <BrowserRouter>
       <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/connect" element={<Connection></Connection>}></Route>
        <Route path="/server" element={ <ServerPage></ServerPage>}></Route>
        <Route path="/dextrus" element={<Dextrus></Dextrus>}></Route>
        <Route path="/rdt" element={<RDt></RDt>}></Route>
       </Routes>
      </BrowserRouter> 
    </div>
  );
}

export default App;
