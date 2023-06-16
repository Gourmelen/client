import React, { createContext, useState } from 'react';

export const CarContext = createContext();

export const CarProvider = ({ children }) => {
  const [carId, setCarId] = useState('');

  return (
    <CarContext.Provider value={{ carId, setCarId }}>
      {children}
    </CarContext.Provider>
  );
}