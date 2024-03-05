import React, { useEffect, useState } from 'react'
import Side from './Side'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import DeleteConfirmationModal from './DeleteConfirmationModal';

function Vehicallist() {

  const [deleteIndex, setDeleteIndex] = useState(null); 
  const [showDeleteModal, setShowDeleteModal] = useState(false); 

  const [formData, setFormData] = useState({
    name: '',
    price: '',
    Passanger: '',
    stime: '00:00',
    etime: '23:00',
    status: '',
    image: ''
  });

  const [vehicles, setVehicles] = useState([]);
  const [show, setShow] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const handleClose = () => {
    setShow(false);
    setEditIndex(null);
  };

  const handleShow = () => setShow(true);

  const handleSubmit = () => {
    if (editIndex !== null) {
      const updatedVehicles = [...vehicles];
      updatedVehicles[editIndex] = formData;
      setVehicles(updatedVehicles);
      setEditIndex(null);
    } else {
      setVehicles([...vehicles, formData]);
    }
    handleClose();
    setFormData({
      name: '',
      price: '',
      Passanger: '',
      stime: '',
      etime: '',
      status: '',
      image: ''
    });
  };

  const handleFormDataChange = (field, value) => {
    setFormData(prevState => ({
      ...prevState,
      [field]: value
    }));
  };

  const handleEdit = index => {
    setFormData(vehicles[index]);
    setEditIndex(index);
    handleShow();
  };
  
  const handleDeleteConfirmation = () => {
    const updatedVehicles = [...vehicles];
    updatedVehicles.splice(deleteIndex, 1);
    setVehicles(updatedVehicles);
    setShowDeleteModal(false);
    setDeleteIndex(null);
  };


  const handleShowDeleteModal = index => {
    setDeleteIndex(index);
    setShowDeleteModal(true);
  };

  return (
    <>

      <div className='main d-flex gap-2'>
        <Side/>
        <div className='right-side'>
            <div className='d-flex justify-content-between align-content-center px-2'>
            <div>
                <h5 className='v-clr'>Vehicle List</h5>
                <p>Menu/vehical List</p>
            </div>
            <div>
            <img className='me-4' src="/img/Vector(11).png" width={"20px"} alt="" />
            <img src="/img/MaskGroup(3).png" width={"40px"} alt="" />
            </div>
            </div>
            <div className='row gap-2 justify-content-between px-2 align-content-center'>
                <div className='bg-white py-2 col-xl-5 col-lg-5'>
                <span><img src="/img/Vector(12).png" alt="" /></span>
                <input className='border-0 inp ms-2' type="search" placeholder='search by vehical name..'/> 
                <span className='f-color float-end'><i className="fa fa-filter" aria-hidden="true"></i> Filter</span>
                </div>
                <div className='btn1 rounded text-center text-white fw-bold  p-2 col-xl-2 col-lg-2 col-md-4 col-md-3 col-5'>Shared by me</div>
                <div className='col-xl-2 col-lg-2 col-md-3 col-5 fw-bold  bg-white rounded text-center p-2'>Shared with me</div>
                <div className='col-xl-2 col-lg-2 col-md-3 p-0'>
                
                <MyVerticallyCenteredModal 
            show={show}
            handleClose={handleClose}
            handleFormDataChange={handleFormDataChange}
            handleSubmit={handleSubmit}
            handleShow={handleShow} 
            formData={formData}/>
                </div>
            </div>

            <div className='bg-white p-5 m-4 gap-2 row justify-content-between'>

{vehicles.length === 0 ? (
        <div className='text-center h1'>
        Please Add Vehical 
        </div>
       ) : (
         vehicles.map((vehicle, index) => (
          <div className='main col-lg-5 p-3 rounded-4'>
           <div key={index} className='d-flex'>
             <div className='pe-2'>
               <img src={vehicle.image} className='rounded-3' height={"150px"} alt="" />
             </div>
             <div className='p-2'>
              <div className='d-md-flex align-content-center gap-2'>
               <p className='card1 my-1'>{vehicle.price} </p>
               <p className='fsm text-white cardtime1 p-2 rounded-pill'>{vehicle.status}</p>
               </div>
               <p className='v-clr fw-bold my-2'>{vehicle.name}</p>
               <p className='text-secondary fsm mb-2'>{vehicle.Passanger} Passengers</p>
               <p className='text-secondary fsm'>{vehicle.stime}-{vehicle.etime}</p>
               
             </div>
             
           </div>
           <div className="d-flex justify-content-center gap-2  mt-2">
                 <Button className='text-decoration-underline text-primary  bg-transparent border-0' onClick={() => handleEdit(index)}>Edit Vehical Detail</Button>
                 <Button className='bg-white text-decoration-underline text-primary bg-transparent border-0' onClick={() => handleShowDeleteModal(index)}>Delete vehicle</Button>
      
                  <DeleteConfirmationModal 
                    show={showDeleteModal} 
                    handleClose={() => setShowDeleteModal(false)} 
                    handleConfirm={handleDeleteConfirmation} 
                  />
               </div>
           </div>
         ))
       )}

   </div>


            
        </div>
      </div>

      
    </>
  );
}


export default Vehicallist;

function MyVerticallyCenteredModal({ show, handleClose, handleFormDataChange, handleSubmit, handleShow, formData}) {
 
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const fileType = file.type.split('/')[1];
      if (fileType === 'jpg' || fileType === 'jpeg' || fileType === 'png') {
        const reader = new FileReader();
        reader.onloadend = () => {
          handleFormDataChange('image', reader.result);
        };
        reader.readAsDataURL(file);
      } else {
        handleFormDataChange('image', '');
      }
    }
  };
  
    return (
      <>
      <div className='container'>

        <Button className='btn1 p-2 border-0 w-100' onClick={handleShow}>
        Add Vehical
      </Button>
      
    </div>
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title> Add Vehicle</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Vehicle Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Vehicle Name"
                autoFocus
                value={formData.name}
                onChange={(e) => handleFormDataChange('name', e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3">
              <Row>
                <Col>
                  <Form.Label>Price</Form.Label>
                  <Form.Control type="number" placeholder="$500" value={formData.price} onChange={(e) => handleFormDataChange('price', e.target.value)}/>
                </Col>
                <Col>
                  <Form.Label>Passengers</Form.Label>
                  <Form.Control type="number" placeholder="5" value={formData.Passanger} onChange={(e) => handleFormDataChange('Passanger', e.target.value)}/>
                </Col>
              </Row>
            </Form.Group>
            <Form.Group className="mb-3">
              <Row>
                <Col>
                  <Form.Label>Start Time</Form.Label>
                  <Form.Control type="time" value={formData.stime} onChange={(e) => handleFormDataChange('stime', e.target.value)} />
                </Col>
                <Col>
                  <Form.Label>End Time</Form.Label>
                  <Form.Control type="time" value={formData.etime} onChange={(e) => handleFormDataChange('etime', e.target.value)} />
                </Col>
              </Row>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Status</Form.Label>
              <Form.Select aria-label="Default select example" value={formData.status} onChange={(e) => handleFormDataChange('status', e.target.value)}>
                <option>Select Status</option>
                <option value="In Progress">In Progress</option>
                <option value="Unlisted">Unlisted</option>
                <option value="Listed">Listed</option>
                <option value="Pending">Pending</option>
              </Form.Select>
            </Form.Group>
            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label>Upload Photo</Form.Label>
              <Form.Control type="file" accept='.jpg, .png' onChange={(e) => handleFileChange(e)} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          {(formData.name=="" || formData.price=="" || formData.Passanger=="" || formData.stime=="" || formData.etime=="" || formData.status=="" || formData.image=="" )?
          <Button variant="primary" disabled={true} className='mx-auto rounded-pill border-0 btn1' onClick={handleSubmit}>
            Submit
          </Button>:
          <Button variant="primary" className='mx-auto rounded-pill border-0 btn1' onClick={handleSubmit}>
          Submit
          </Button>
          
          }
        </Modal.Footer>
      </Modal>                           

      </>
    );
  }




