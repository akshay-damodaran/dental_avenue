import React, { createContext, useState } from 'react';

const PatientContext = createContext();

export const PatientWrapper = ({ children }) => {
  const [patientId, updatePatientId] = useState('');

  return (
    <PatientContext.Provider value={{
      patientId,
      updatePatientId,
    }}
    >
      { children }
    </PatientContext.Provider>
  );
};

export default PatientContext;
