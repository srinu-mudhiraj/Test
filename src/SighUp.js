import React, { useState } from 'react';
// import myImage from '../Image/sigin.jpg';
import { toast } from 'react-toastify';
// import openeye from '../Assest/openeye.png';
// import closeye from '../Assest/closeye.png';
// import '../css/Styles.css';

const SignupFormemp = () => {

  const [Empid, setEmpid] = useState('')
  const [password, setpassword] = useState('')
  const [email, setemail] = useState('')
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const IsValidate = () => {
    let isproceed = true;
    if ( Empid === '' || Empid === null) {
      isproceed = false
      toast.warning('Please enter Empid')
    }
    if (email === '' || email === null) {
      isproceed = false;
      toast.warning('Please enter Email')
    }
    if (password === '' || password === null) {
      isproceed = false;
      toast.warning('Please enter password')
    }
    const validatePassword = (password) => {
      if (password.length < 8) {
        return false;
      }

      const hasUpperCase = /[A-Z]/.test(password);
      const hasLowerCase = /[a-z]/.test(password);
      const hasNumber = /\d/.test(password);
      const hasSpecialChar = /[!@#$%^&()_+]/.test(password);

      return hasUpperCase && hasLowerCase && hasNumber && hasSpecialChar;
    };
    if (!isproceed) {
      toast.warning('please enter the value in the password');
    } else if (!validatePassword(password)) {
      // Password meets the condition
      isproceed = false;
      toast.warning("Password must contain at least 8 characters, including uppercase, lowercase, numbers, and special characters.");
    }
    return isproceed;
  }
  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  }

  const handleSubmit = (e) => {
    let regobj = {
      Empid: Empid,
      email: email,
      password: password

    };
    if (IsValidate()) {
      console.log(regobj);
       fetch(" ", {
        method: "POST",
        headers: {
          'content-type' : 'application/json',
          'Accept' : '/',
      },
        body: JSON.stringify(regobj)
      }).then((res) => {
        toast.success('Registered successfully.')

      }).catch((err) => {
        toast.error('Failed :' + err.message);
      });

      setEmpid('')
      setemail('')
      setpassword('')
    }
  };


  return (
    <section className="vh-100" style={{ backgroundColor: '#eee' }}>
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-lg-12 col-xl-11">
            <div className="card text-black" style={{ borderRadius: '25px' }}>
              <div className="card-body p-md-5">
                <div className="row justify-content-center">
                  <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                    <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>
                    <form className="mx-1 mx-md-4">
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                        <div className={`form-outline flex-fill mb-0${Empid ? ' has-value' : ''}`}>
                          <input type="text" id="form3Example1c" className="form-control" value={Empid} onChange={e => setEmpid(e.target.value)} style={{ backgroundColor: 'GhostWhite' }}  />
                          <label className="form-label" htmlFor="form3Example1c">Enter Your Emp id<span>*</span></label>
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                        <div className={`form-outline flex-fill mb-0${email ? ' has-value' : ''}`}>
                          <input  type="email" id="form3Example3c" className="form-control" value={email} onChange={(e) => setemail(e.target.value)} style={{ backgroundColor: 'GhostWhite' }}/>
                          <label className="form-label" htmlFor="form3Example3c">
                            Enter Your Email <span>*</span>
                          </label>
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                        <div className={`form-outline flex-fill mb-0 position-relative${password ? ' has-value' : ''}`}>
                          <input type={isPasswordVisible ? 'text' : 'password'} id="form3Example4c" className="form-control" value={password} onChange={(e) => setpassword(e.target.value)} style={{ backgroundColor: 'GhostWhite' }} />
                          <button type="button" className="Button1 position-absolute end-0 top-50 translate-middle-y" onClick={togglePasswordVisibility} >
                            {/* <img src={isPasswordVisible ? openeye : closeye} alt={isPasswordVisible ? 'Hide' : 'Show'} /> */}
                          </button>
                          <label className="form-label" htmlFor="form3Example4c"> Enter your Password<span>*</span></label>
                        </div>
                      </div>
                      <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                        <button
                          type="button" className="btn btn-primary btn-lg"  onClick={handleSubmit} > Register
                        </button>
                        <button
                          type="button" className="btn btn-primary btn-lg"  onClick={""} > cancel
                        </button>
                      </div>
                    </form>
                  </div>
                  <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                    <img
                      // src={myImage}
                      className="img-fluid"
                      alt="A person signing a document"
                    />
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

export default  SignupFormemp;