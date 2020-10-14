import React, { useState, useEffect } from "react";
import { Table, Button } from "react-bootstrap";
import axios from 'axios';

import conf from '../../Conf/conf.json';
import AddPatient from './AddPatient';
import Modal from '../CommonComponents/DisplayModal';
import '../../styles/Patient/ListPatient.css';

const ListPatient = () => {
  const [patientData, setPatientData] = useState([]);
  const [listPage, setListpage] = useState({
    pageType: 'add',
    pageData: '',
    showModal: false,
    modalMessage: '',
    modalTitle: '',
    showForm: false
  });

  let { pageType, pageData, showForm, showModal, modalTitle, modalMessage } = listPage;

  const getData = () => {
    axios({
      method: 'get',
      url: `${conf.dev.baseUrl}patient/get`,
    })
      .then((patientData) => {
        setPatientData(patientData.data.data);
      })
      .catch(err => console.log(err));
  }

  useEffect(() => {
    getData();
  }, []);

  const addPatient = () => {
    setListpage({ ...listPage, showForm: true });
  }

  const deletePatient = (id) => {
    axios({
      method: 'post',
      url: `${conf.dev.baseUrl}patient/delete`,
      data: { id }
    })
      .then((res) => {
        if (res.data.code === 200) {
          setListpage({
            ...listPage, showModal: true, modalMessage: 'Successfully Deleted!', modalTitle: 'Success!'
          })
          getData();
        } else {
          setListpage({
            ...listPage, showModal: true, modalMessage: 'Error in Deleting!', modalTitle: 'Error!'
          })
        }
      })
      .catch(err => console.log(err));
  }

  const editPatient = (editPatientData) => {
    setListpage({ ...listPage, showForm: true, pageType: 'edit', pageData: editPatientData });
  }

  return (
    <div className='list-patient-container'>
      {
        !showForm && !showForm &&
        <>
          <Button
            onClick={() => { addPatient() }}>
            Add Patient
           </Button>
          <Table
            striped
            bordered
            hover
            responsive
            className="list-table"
            variant="light">
            <thead>
              <tr>
                <th>Name</th>
                <th>DOB</th>
                <th>Address</th>
                <th>Contact No</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {
                patientData.map((patient, index) => (
                  <tr key={index}>
                    <td>{patient.name}</td>
                    <td>{patient.dateOfBirth}</td>
                    <td>{patient.address}</td>
                    <td>{patient.mobileNo}</td>
                    <td>
                      <Button
                        onClick={() => { editPatient(patient) }}>
                        Edit
                      </Button>
                    </td>
                    <td>
                      <Button
                        onClick={() => { deletePatient(patient._id) }}>
                        X
                      </Button>
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </Table>
        </>
      }
      {showForm && <AddPatient pageType={pageType} data={pageData} goback={() => {
        setListpage({ ...listPage, showForm: false });
        getData();
      }} />}
      {
        showModal && <Modal title={modalTitle} message={modalMessage} setData={() =>
          setListpage({ ...listPage, showModal: false })} />
      }
    </div>
  );
}
export default ListPatient;
