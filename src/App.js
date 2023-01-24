import React from 'react'; 
import { BrowserRouter as Router, Route,  Routes} from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from './components/Navbar.component';
import InfoList from './components/Info-List.component';
import AddInfo from './components/Add-Info.component';
import EditInfo from './components/Edit-Info.component';
import DeleteInfo from './components/Delete-Info.component';
import SingleInfo from './components/Single-Info.component';



function App() {
  return (
    <div>
        <Router>
        <Navbar />
        <br/>
          <Routes>
            <Route path='/Info'exact element={<AddInfo/>}/>
            <Route path='/'exact element={<InfoList/>}/>
            <Route path='/edit/:id'exact component={<EditInfo/>}/>
            <Route path='/delete/:id'exact component={<DeleteInfo/>}/>
            <Route path='/:id'exact component={<SingleInfo/>}/>
          </Routes>
        </Router> 
      </div>
  );
}

export default App;
