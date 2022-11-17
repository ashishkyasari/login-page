import React from 'react'
import { Link, Navigate, Route, Routes, useNavigate } from 'react-router-dom'
import Registration from './Registration'
import './Registration.css'



const Login = () => {

  const navigate = useNavigate();

  const navigateToDocinput = () => {
    navigate('/Docinput');
  }

  return (
    <>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-5">
            <div class="card">
              <h2 class="card-title text-center">Login</h2>
              <div class="card-body py-md-4">
                <form _lpchecked="1">
                  <div class="form-group">
                    <input type="email" class="form-control" id="email" placeholder="Email"/>
                  </div>


                  <div class="form-group">
                    <input type="password" class="form-control" id="password" placeholder="Password"/>
                  </div>
                  <div class="d-flex flex-row align-items-center justify-content-between">
                    <p>Do  not have account?<Link to='/Registration'> create account</Link></p>
                    <button class="btn btn-primary" onClick={navigateToDocinput}>Login</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login