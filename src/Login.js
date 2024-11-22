import React from 'react';
import './style.css';

const Login = () => {
  return (
    <section className="h-100 gradient-form" style={{ backgroundColor: '#f5f6fa' }}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-xl-10 col-md-12">
            <div className="card rounded-3 shadow-lg text-black">
              <div className="row g-0">
                {/* Left Column */}
                <div className="col-lg-6 col-md-12">
                  <div className="card-body p-md-5 mx-md-4">

                    {/* Logo and Title */}
                    <div className="text-center">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                        style={{ width: '120px', marginBottom: '1rem' }}
                        alt="logo"
                      />
                      <h4 className="mt-1 mb-5 pb-1" style={{ fontWeight: 'bold', color: '#333' }}>
                        Welcome to <span className='#f5f6fa'>Sachin Thakur</span> Team ⚡️
                      </h4>
                    </div>

                    {/* Form */}
                    <form>
                      <p className="text-muted">Please login to your account</p>

                      <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="form2Example11">Username</label>
                        <input
                          type="email"
                          id="form2Example11"
                          className="form-control"
                          placeholder="Phone number or email address"
                          style={{
                            borderRadius: '20px',
                            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
                          }}
                        />
                      </div>

                      <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="form2Example22">Password</label>
                        <input
                          type="password"
                          id="form2Example22"
                          className="form-control"
                          placeholder="Password"
                          style={{
                            borderRadius: '20px',
                            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
                          }}
                        />
                      </div>

                      {/* Login Button and Forgot Password */}
                      <div className="d-flex justify-content-between align-items-center pt-1 mb-5 pb-1">
                        <button
                          className="btn btn-block fa-lg gradient-custom-2 mb-0"
                          type="button"
                          style={{
                            background: 'linear-gradient(90deg, rgba(102,52,230,1) 0%, rgba(189,107,223,1) 100%)',
                            color: '#fff',
                            borderRadius: '20px',
                            padding: '0.75rem 1.25rem',
                            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
                            transition: 'all 0.3s ease',
                            width: '48%',
                          }}
                        >
                          Log in
                        </button>
                        <a className="text-muted" href="#!" style={{ textDecoration: 'none', width: '48%' }}>
                          Forgot password?
                        </a>
                      </div>

                      {/* Create Account Section */}
                      <div className="d-flex align-items-center justify-content-center pb-4">
                        <p className="mb-0 me-2">Don't have an account?</p>
                        <button
                          type="button"
                          className="btn btn-outline-danger"
                          style={{
                            borderRadius: '20px',
                            padding: '0.5rem 1.25rem',
                            border: '2px solid #ff4d4d',
                            color: '#ff4d4d',
                            transition: 'all 0.3s ease',
                          }}
                          onMouseOver={(e) => (e.target.style.Color = 'purple')}
                          onMouseOut={(e) => (e.target.style.backgroundColor = 'transparent')}
                        >
                          Create new
                        </button>
                      </div>
                    </form>
                  </div>
                </div>

                {/* Right Column */}
                <div className="col-lg-6 col-md-12 d-flex align-items-center gradient-custom-2">
                  <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                    <h4 className="mb-4" style={{ fontWeight: 'bold' }}>We are more than just a company</h4>
                    <p className="small mb-0">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
