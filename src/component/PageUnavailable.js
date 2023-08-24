import React from 'react';
import error from "../assets/img/error.png"
import {useNavigate} from "react-router-dom"

function PageUnavailable() {
    const navigate = useNavigate()

    const handleClick = () =>{
        navigate("/")
    }
  return (
    <div className='account-pages pt-2'>
    <div className='container'>
    <div className="row">
            <div className="col-lg-12">
              <div className="text-center mb-5">
                <h1 className="display-2 fw-medium">Whoops!</h1>
                <h4 className="text-capitalize">Page unavailable</h4>
                <div className='mt-5 text-center'>
      <button className='btn btn-primary btn-error' onClick={handleClick}>Back to Home page</button></div>
      </div>
      </div>
      </div>
      <div className="justify-content-center row" style={{justifyContent:"center" , display:"flex" , margin:"auto"}}>
        <div className="col-md-8 col-xl-6">
          <div>
            <img src={error} alt="" className="img-fluid" style={{width:"100%"}}/>
              </div>
              </div>
              </div>
      </div>
      </div>
  


  )
}

export default PageUnavailable
