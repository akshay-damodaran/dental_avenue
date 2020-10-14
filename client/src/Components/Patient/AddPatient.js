import React, { useState } from 'react';
import { Button, Form, Row, Col } from "react-bootstrap";
import axios from 'axios';

import '../../styles/Patient/AddPatient.css';
import conf from '../../Conf/conf.json';
import form from '../../Conf/form';
import Modal from '../CommonComponents/DisplayModal';

const AddPatient = (props) => {

  // const { name, dateOfBirth, address, mobileNo, gender, provisionalTreatmentPlan, refBy,
  //   pastDentalHistory, chiefComplaint, provisionalDignosis, occupation } = props.data;
  // let data = props.data;
  
  const [patientData, setPatientData] = useState({
    "name": props.data.name || '',
    "dateOfBirth": props.data.dateOfBirth || '',
    "address": props.data.address || '',
    "mobileNo": props.data.mobileNo || '',
    "gender": props.data.gender || '',
    "pastDentalHistory": props.data.pastDentalHistory || '',
    "chiefComplaint": props.data.chiefComplaint || '',
    "provisionalDignosis": props.data.provisionalDignosis || '',
    "provisionalTreatmentPlan": props.data.provisionalTreatmentPlan || '',
    "refBy": props.data.refBy || '',
    "occupation": props.data.occupation || '',
    "balance": 0
  });

  const [modalData, setModalData] = useState({
    showModal: false,
    modalTitle: '',
    modalMessage: ''
  });

  let { showModal, modalTitle, modalMessage } = modalData;

  const hideModal = () => {
    props.goback();
    setModalData({ ...modalData, showModal: false })
  }

  const handleChange = e => {
    const { name, value } = e.target;
    setPatientData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const savePatient = (e) => {
    e.preventDefault();
    //TODO:add date picker and get date
    if (props.pageType === 'add') {
      patientData.dateOfBirth = new Date(parseInt(patientData.dateOfBirth));
      axios({
        method: 'post',
        url: `${conf.dev.baseUrl}patient/add`,
        data: patientData
      })
        .then((res) => {
          if (res.data.code === 200) {
            setModalData({
              ...modalData, showModal: true, modalMessage: 'Successfully added!', modalTitle: 'Success!'
            })
          } else {
            setModalData({
              ...modalData, showModal: true, modalMessage: 'Please add correct data!', modalTitle: 'Error!'
            })
          }
        })
        .catch(err => {
          setModalData({
            ...modalData, showModal: true, modalMessage: 'Please add correct data!', modalTitle: 'Error!'
          })
        });
    } else {
      patientData.id = props.data['_id'];
      axios({
        method: 'post',
        url: `${conf.dev.baseUrl}patient/update`,
        data: patientData
      })
        .then((res) => {
          if (res.data.code === 200) {
            setModalData({
              ...modalData, showModal: true, modalMessage: 'Successfully updated!', modalTitle: 'Success!'
            })
          } else {
            setModalData({
              ...modalData, showModal: true, modalMessage: 'Please add correct data!', modalTitle: 'Error!'
            })
          }
        })
        .catch(err => setModalData({
          ...modalData, showModal: true, modalMessage: 'Please add correct data!', modalTitle: 'Error!'
        }))
    }
  }

  return (
    <div className='newPatienForm'>
      {!showModal &&
        <>
          {form.formData.map((data) => {
            let type;
            if (data.type === 'text') {
              type = <Form.Control type={data.type}
                placeholder={data.placeholder}
                name={data.name} rows="2"
                value={patientData[data.name]}
                onChange={(e) => handleChange(e)} />
            }
            else if (data.type === 'textarea') {
              type = <Form.Control as={data.type}
                placeholder={data.placeholder}
                name={data.name} rows="2"
                value={patientData[data.name]}
                onChange={(e) => handleChange(e)} />
            }
            else {
              let options = data.options.map(option => <option key={option}>{option}</option>)
              type = <Form.Control as={data.type}
                placeholder={data.placeholder}
                name={data.name} rows="2"
                value={patientData[data.name]}
                onChange={(e) => handleChange(e)} >
                {options}
              </Form.Control>
            }
            return (
              <Form.Group as={Row} key={data.name} >
                <Form.Label column md="4">
                  {data.label}
                </Form.Label>
                <Col md="8">
                  {type}
                </Col>
              </Form.Group>
            )
          })}          
          <Button variant="primary" type="submit" onClick={(e) => { savePatient(e) }}>
            {`${props.pageType.toUpperCase()} PATIENT`}
          </Button>
        </>
      }
      {
        showModal && <Modal title={modalTitle} message={modalMessage} setData={hideModal} />
      }
    </div >
  );
}

export default AddPatient;
