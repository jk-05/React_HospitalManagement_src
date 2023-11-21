
import React, { useState } from 'react';
const Patient = ({ name, age, gender, diagnosis }) => {
  return (
    <div className='pat' style={{boxShadow: 'rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px' , padding:'30px'}}>
      <h3>{name}</h3>
      <h6>Age: {age}</h6>
      {console.log(age)}
      <h6>Gender: {gender}</h6>
      {console.log(gender)}
      <h6>Diagnosis: {diagnosis}</h6>
      {console.log(diagnosis)}
    </div>
  );
};

export default Patient;
