// import React,{useState} from 'react';
// import {
//   MDBBtn,
//   MDBContainer,
//   MDBRow,
//   MDBCol,
//   MDBCard,
//   MDBCardBody,
//   MDBInput,
//   MDBTextArea,
//   MDBFile,
//   MDBRadio
// }
// from 'mdb-react-ui-kit';
// function ApplicationBoot() {
//     const [formData, setFormData] = useState({
//         name: '',
//         fathersName: '',
//         emis: '',
//         occupation: '',
//         mobile: '',
//         dob: '',
//         email: '',
//         address: '', 
//       });
    
//       const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({
//           ...formData,
//           [name]: value,
//         });
//       };
    
//       const handleSubmit = async (e) => {
//         e.preventDefault();
    
//         try {
//           const response = await fetch('https://localhost:8181/api/v1/apply/save', {
//             method: 'POST',
//             headers: {
//               'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(formData),
//           });
    
//           if (response.status === 200) {
//             // Handle successful form submission
//             console.log('Form submitted successfully');
//           } else {
//             // Handle errors or validation failures
//             console.error('Form submission failed');
//           }
//         } catch (error) {
//           console.error('An error occurred:', error);
//         }
//       };
//   return (
//     <MDBContainer fluid>

//       <MDBRow className='d-flex justify-content-center align-items-center'>
//         <MDBCol lg='9' className='my-5'>
//           <h1 class="text-blue mb-4 align-items-center">Applicant Form</h1>

//           <MDBCard>
//             <MDBCardBody className='px-40'>
//             {/* <MDBCardBody> */}
//             <MDBRow className='align-items-center pt-4 pb-3'>

// <MDBCol md='3' className='ps-5'>
//   <h6 className="mb-0">Applicant's Name:</h6>
// </MDBCol>

// <MDBCol md='9' className='pe-5'>
//   {/* <MDBInput label='' size='lg' id='form2' type='email'/> */}
//   <input
//   type="text"
//   name="aName"
//   placeholder="Enter aName"
//   value={formData.aName}
//   onChange={handleInputChange}
// />

// </MDBCol>

// </MDBRow>

//               <hr className="mx-n3" />

//               <MDBRow className='align-items-center pt-4 pb-3'>

//                 <MDBCol md='3' className='ps-5'>
//                   <h6 className="mb-0">Father's Name:</h6>
//                 </MDBCol>

//                 <MDBCol md='9' className='pe-5'>
//                   <MDBInput label='' size='lg' id='form2' type='email'/>
//                 </MDBCol>

//               </MDBRow>
//               <hr className="mx-n3" />
//               <MDBRow className='align-items-center pt-4 pb-3'>
//                 <MDBCol md='3' className='ps-5'>
//                   <h6 className="mb-0">EMIS NO:</h6>
//                 </MDBCol>

//                 <MDBCol md='9' className='pe-5'>
//                   <MDBInput label='' size='lg' id='form2' type='emis'/>
//                 </MDBCol>
//                 </MDBRow>
//               <hr className="mx-n3" />
//               <MDBRow className='align-items-center pt-4 pb-3'>
//                 <MDBCol md='3' className='ps-5'>
//                   <h6 className="mb-0">Occupation of Parents:</h6>
//                 </MDBCol>

//                 <MDBCol md='9' className='pe-5'>
//                   <MDBInput label='' size='lg' id='form2' type='occupation'/>
//                 </MDBCol>
//                 </MDBRow>
//               <hr className="mx-n3" />
//               <MDBRow className='align-items-center pt-4 pb-3'>
//                 <MDBCol md='3' className='ps-5'>
//                   <h6 className="mb-0">Mobile:</h6>
//                 </MDBCol>

//                 <MDBCol md='9' className='pe-5'>
//                   <MDBInput label='' size='lg' id='form2' type='mobile'/>
//                 </MDBCol>
//                 </MDBRow>

//                   <hr className="mx-n3" />
//               <MDBRow className='align-items-center pt-4 pb-3'>
//                 <MDBCol md='3' className='ps-5'>
//                   <h6 className="mb-0">DOB:</h6>
//                 </MDBCol>

//                 <MDBCol md='9' className='pe-5'>
//                   <MDBInput label='' size='lg' id='form2' type='email'/>
//                 </MDBCol>
//                 </MDBRow>
//               <hr className="mx-n3" />

//                   <div className='d-md-flex ustify-content-start align-items-center mb-4'>
//                   <MDBCol md='3' className='ps-5'>
//                     <h6 class="mb-0">Gender:</h6>
//                     </MDBCol>
//                     <MDBCol md='9' className='pe-5'>
//                     <MDBRadio name='inlineRadio' id='inlineRadio1' value='option1' label='Female' inline />
//                     <MDBRadio name='inlineRadio' id='inlineRadio2' value='option2' label='Male' inline />
//                     <MDBRadio name='inlineRadio' id='inlineRadio3' value='option3' label='Other' inline />
//                     </MDBCol>
//                   </div>

//                   <hr className="mx-n3" />
//               <MDBRow className='align-items-center pt-4 pb-3'>
//                 <MDBCol md='3' className='ps-5'>
//                   <h6 className="mb-0">Email:</h6>
//                 </MDBCol>

//                 <MDBCol md='9' className='pe-5'>
//                   <MDBInput label='' size='lg' id='form2' type='email'/>
//                 </MDBCol>
//                 </MDBRow>
//               <hr className="mx-n3" />

//               <MDBRow className='align-items-center pt-4 pb-3'>

//                 <MDBCol md='3' className='ps-5'>
//                   <h6 className="mb-0">Permanent Address:</h6>
//                 </MDBCol>

//                 <MDBCol md='9' className='pe-5'>
//                   <MDBTextArea label='' id='textAreaExample' rows={3} />
//                 </MDBCol>

//               </MDBRow>

//               <hr className="mx-n3" />

//               <MDBRow className='align-items-center pt-4 pb-3'>

//                 <MDBCol md='3' className='ps-5'>
//                   <h6 className="mb-0">Upload CV</h6>
//                 </MDBCol>

//                 <MDBCol md='9' className='pe-5'>
//                   <MDBFile size='lg' id='customFile' />
//                   <div className="small text-muted mt-2">Upload your CV/Resume or any other relevant file. Max file size 50 MB</div>
//                 </MDBCol>

//               </MDBRow>

//               <hr className="mx-n3" />

//               <MDBBtn className='my-4' size='lg'>send application</MDBBtn>

//             </MDBCardBody>
//           </MDBCard>

//         </MDBCol>
//       </MDBRow>

//     </MDBContainer>
//   );
// }

// export default ApplicationBoot;

import React, { useState } from 'react';

function ApplicationBoot() {
  const [formData, setFormData] = useState({
    aName: '',
    fatherName: '',
    motherName: '',
    mobile: '',
    gender: '',
    bloodgroup: '',
    religion: '',
    nationality: '',
    email: '',
    currentadd: '',
    permanentadd: '',
    board: '',
    rollno: '',
    result: '',
    passingyr: '',
    grade: '',
    addyr: '',
    boardnext: '',
    groupname: '',
    // Add more fields for other properties
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8181/api/v1/apply/save', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.status === 201) {
        // Handle successful form submission
        console.log('Application submitted successfully');
      } else {
        // Handle errors or validation failures
        console.error('Application submission failed');
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="aName"
        placeholder="Applicant's Name"
        value={formData.aName}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="fatherName"
        placeholder="Father's Name"
        value={formData.fatherName}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="motherName"
        placeholder="Mother's Name"
        value={formData.motherName}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="mobile"
        placeholder="Mobile"
        value={formData.mobile}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="gender"
        placeholder="Gender"
        value={formData.gender}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="bloodgroup"
        placeholder="Blood Group"
        value={formData.bloodgroup}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="religion"
        placeholder="Religion"
        value={formData.religion}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="nationality"
        placeholder="Nationality"
        value={formData.nationality}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="currentadd"
        placeholder="Current Address"
        value={formData.currentadd}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="permanentadd"
        placeholder="Permanent Address"
        value={formData.permanentadd}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="board"
        placeholder="Board"
        value={formData.board}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="rollno"
        placeholder="Roll Number"
        value={formData.rollno}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="result"
        placeholder="Result"
        value={formData.result}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="passingyr"
        placeholder="Passing Year"
        value={formData.passingyr}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="grade"
        placeholder="Grade"
        value={formData.grade}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="addyr"
        placeholder="Admission Year"
        value={formData.addyr}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="boardnext"
        placeholder="Next Board"
        value={formData.boardnext}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="groupname"
        placeholder="Group Name"
        value={formData.groupname}
        onChange={handleInputChange}
      />
      <button type="submit">Submit Application</button>
    </form>
  );
}

export default ApplicationBoot;
