import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BlocCar from './component/BlocCar';
import CarInformation from './component/CarInformation';
import { CarProvider } from './static/CarContext';

function App() {
  return (
    <Router>
      <CarProvider>
        <Routes>
          <Route exact path="/" element={<BlocCar />} />
          <Route path="/cars/:id" element={<CarInformation />} />
        </Routes>
      </CarProvider>
    </Router>
  );
}

export default App;