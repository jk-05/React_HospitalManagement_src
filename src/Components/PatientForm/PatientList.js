
import React from 'react';
import Patient from './Patient';

const PatientList = ({ patients }) => {
  return (
    <div>
      <h2>Patients</h2>
      <div style={{display:'flex' , padding:'30px', gap:'30px' ,height:'max-content' , width:'max-content'}}>
        {patients.map((patient, index) => (
          <Patient key={index} {...patient} />
        ))}
      </div>
    </div>
  );
};

export default PatientList;
