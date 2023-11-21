import React, { useState } from 'react';
import PatientList from '../PatientForm/PatientList';
import './HospitalManagementSystem.css'


const HospitalManagementSystem = () => {
  const [patients, setPatients] = useState([
    { name: 'John Doe', age: 30, gender: 'Male', diagnosis: 'Fever' },
    { name: 'Jane Doe', age: 25, gender: 'Female', diagnosis: 'Broken leg'},
  ]);

  const [newPatient, setNewPatient] = useState({
    name: '',
    age: '',
    gender: '',
    diagnosis: '',
  });

  const [isAdding, setIsAdding] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPatient({
      ...newPatient,
      [name]: value,
    });
  };

  const handleAddPatient = () => {
    if (newPatient.name && newPatient.age && newPatient.gender && newPatient.diagnosis) {
      setPatients([...patients, newPatient]);
      setNewPatient({
        name: '',
        age: '',
        gender: '',
        diagnosis: '',
      });
      setIsAdding(false);
    } else {
      alert('Please fill in all fields before adding a patient.');
    }
  };

  return (
    <div>
      <div className='head'>
        <center>
          <h1>Hospital Management System</h1>
        </center>
          <div>
            <label>
            <h3> <em>Do you want to : </em></h3>
              <select onChange={(e) => setIsAdding(e.target.value === 'add')}>

                <option value="summa">choose</option>
                <option value="add">Add Information</option>
                <option value="access">Access Information</option>
              </select>
            </label>
          </div>
        <div className='input'>
          
          <center>{isAdding && (
            <div>
              <label>
                Name:{' '}
                <input type='text' name='name' value={newPatient.name} onChange={handleInputChange} />
              </label>
              <br />
              <br />

              <label>
                Age:{' '}
                <input type='number' name='age' value={newPatient.age} onChange={handleInputChange} />
              </label>
              <br />
              <br />
              <label>
                Gender:{' '}
                <input type='text' name='gender' value={newPatient.gender} onChange={handleInputChange} />
              </label>
              <br />
              <br />
              <label>
                Diagnosis:{' '}
                <input type='text' name='diagnosis' value={newPatient.diagnosis} onChange={handleInputChange} />
              </label>
              <br />
              <br />
              
              <button className='but' onClick={handleAddPatient}>Add Patient</button>
              <br />
              <br />
              
            </div>
          )}
          </center>
        </div>
        {!isAdding && (
          <center>
            <PatientList patients={patients} />
          </center>
        )}
      </div>
    </div>
  );
};

export default HospitalManagementSystem;
