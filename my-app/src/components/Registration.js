import React,{useState} from 'react';
import {useHistory} from 'react-router-dom'

const Registration = () => {
  const history = useHistory()
  const [user,setUser] = useState({
    name:"",email:"",phone:"",work:"",password:"",cpassword:""
  })
  const handlechange = (e) => {
   
     const name = e.target.name;
     const value = e.target.value;

     setUser({...user,[name]:value})
  }

  const postData = async(e) =>{
    e.preventDefault();
    const {name,email,phone,work,password,cpassword} = user

    const res = await fetch("/register",{
      
      headers:{
        "Content-Type": "application/json"
      },
      method:"POST",
      body:JSON.stringify({
        name,email,phone,work,password,cpassword
      })
     
    })
    console.log("hi")

    const data = await res.json();
    if( res.status === 422 ||   !data ){
      window.alert("please filled the input field properly")
    }else if(res.status === 421){
      window.alert("password does not match")
    }else if(res.status === 420){
      window.alert("email has already exist")
    }
    else{
      
      history.push("/login")
    }
    
  }
  
    return (
        <div>
             <div className="container">
    <div className="row">
      <div className="col-lg-7 col-xl-6 mx-auto">
        <div className="card flex-row my-5 border-0 shadow rounded-3 overflow-hidden">
         
          <div className="card-body p-4 p-sm-5">
            <h4 className="card-title text-center mb-5 fw-light fs-5">Register</h4>
            <form method="POST">

<div className="form-floating mb-3">
<label htmlFor="floatingInputUsername">Name</label>
  <input type="text" className="form-control" id="floatingInputUsername" name="name" 
   value={user.name} onChange={handlechange} placeholder="Enter your name" />
 
</div>

<div className="form-floating mb-3">
<label htmlFor="floatingInputEmail">Email address</label>
  <input type="email" className="form-control"   name="email" 
   value={user.email} onChange={handlechange} placeholder="Enter your email"/>
  
</div>

<div className="form-floating mb-3">
<label htmlFor="floatingInputEmail">Phone</label>
  <input type="text" className="form-control"   name="phone" 
   value={user.phone} onChange={handlechange} placeholder="Enter your phone"/>
  
</div>

<div className="form-floating mb-3">
<label htmlFor="floatingInputEmail">Work</label>
  <input type="text" className="form-control"   name="work" 
   value={user.work} onChange={handlechange} placeholder="Enter your work"/>
  
</div>




<div className="form-floating mb-3">
<label htmlFor="floatingPassword">Password</label>
  <input type="password" className="form-control" id="floatingPassword" name="password" 
   value={user.password} onChange={handlechange} placeholder="Enter your password"/>
  
</div>

<div className="form-floating mb-3">
<label htmlFor="floatingPasswordConfirm">Confirm Password</label>
  <input type="password" className="form-control" id="floatingPasswordConfirm" name="cpassword" 
   value={user.cpassword} onChange={handlechange} placeholder="Confirm Password"/>
 
</div>

<div className="d-grid mb-2">
  <button className="btn btn-lg btn-primary btn-login fw-bold text-uppercase"onClick={postData} type="submit">Register</button>
</div>

<a className="d-block text-center mt-2 small" href="/">Have an account? Sign In</a>

</form>
          </div>
        </div>
      </div>
    </div>
  </div>
        </div>
    );
};

export default Registration;