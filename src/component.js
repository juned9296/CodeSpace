import React, { useState, useEffect } from 'react';
import { FaSchool, FaUserGraduate, FaChalkboardTeacher, FaUserFriends } from 'react-icons/fa';
import { Button, Card, Form, Row, Col, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; 

export default function SchoolManagementLayout() {
  const [schoolCode, setSchoolCode] = useState('');

  useEffect(() => {
    // Adding Poppins font from Google Fonts
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);

  const handleLogin = (userType) => {
    console.log(`Logging in as ${userType} with school code: ${schoolCode}`);
  };

  const loginOptions = [
    { type: 'School', icon: FaSchool },
    { type: 'Student', icon: FaUserGraduate },
    { type: 'Teacher', icon: FaChalkboardTeacher },
    { type: 'Parent', icon: FaUserFriends },
  ];

  return (
    <div className="min-vh-100 d-flex flex-column" style={{ backgroundColor: '#0a2647', fontFamily: 'Poppins' }}>
      {/* Header Section - Centered Title */}
      <header className="d-flex justify-content-center align-items-center py-5">
        <h2 className="text-center" style={{ fontWeight: '600', color: '#fff' }}>
          Welcome to ACS School Management System
        </h2>
      </header>

      <Container className="flex-grow-1 d-flex">
        <Row className="w-100">
          {/* Left Side with Image */}
          <Col xs={12} md={6} className="d-flex justify-content-center align-items-center pb-0 p-md-4">

            <img
              src="https://www.academyfront.com/images/blog/mobile-apps.png"
              alt="School Management"
              className="img-fluid"
              style={{ maxHeight: '80%', borderRadius: '10px' }}
            />
          </Col>

          {/* Right Side with Login Form */}
          <Col xs={12} md={6} className="d-flex justify-content-center align-items-center mb-4">
            <Card className="p-4" style={{ width: '100%', maxWidth: '400px', backgroundColor: '#fff', borderRadius: '15px' }}>
              <Form.Group className="mb-4">
                <Form.Label className="fw-bold">School Code</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter School Code"
                  value={schoolCode}
                  onChange={(e) => setSchoolCode(e.target.value)}
                />
              </Form.Group>
              <div className="row text-center">
                {loginOptions.map((item) => (
                  <div className="col-6 mb-3" key={item.type}>
                    <Card className="h-100 p-3 shadow-sm">
                      <div className="d-flex justify-content-center align-items-center mb-2" style={{ fontSize: '24px' }}>
                        <item.icon />
                      </div>
                      <h5>{item.type}</h5>
                      <Button variant="dark" className="w-100 mt-2" onClick={() => handleLogin(item.type)}>
                        Login
                      </Button>
                    </Card>
                  </div>
                ))}
              </div>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Footer Section */}
      <footer className="text-center py-3" style={{ backgroundColor: '#05203C', color: '#fff' }}>
        <Container>
          <p>&copy; 2024 ACS School Management System. All Rights Reserved.</p>
          <p>Helpline: support@schoolmanagement.com</p>
        </Container>
      </footer>
    </div>
  );
}
