import './App.css';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import ServiceList from './components/ServiceList';
import Service from './components/Service';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Navigate to='/services'/>}></Route>
        <Route exact path='/services' element={<ServiceList/>} />
        <Route exact path='/services/:id/details' element={<Service/>}/>
      </Routes>
    </Router>
  );
}

export default App;
