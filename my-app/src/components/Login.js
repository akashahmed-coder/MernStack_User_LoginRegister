import React,{useState} from 'react';
import { useHistory } from 'react-router';

const Login = () => {
  const history = useHistory();
  const [User,setUser] = useState({
    email:"",password:""
  })

  const hanglechange = (e)=>{
    const name = e.target.name;
    const value = e.target.value;

    setUser({...User,[name]:value})
  }

  const userLogin = async(e) =>{
    e.preventDefault();
const {email,password} = User
    const res = await fetch("/signin",{
      
      headers:{
        "Content-Type": "application/json"
      },
      method:"POST",
      body:JSON.stringify({
        email,password
      })
     
    })
    

    const data = await res.json();
    if( res.status === 422 ||   !data ){
      window.alert("please filled the input field properly")
    }else if(res.status === 421){
      window.alert("invalid log in info plese fill the input field correctly ")
    }
    else{
      
      history.push("/")
    }
    
  }
  
   return (
        <div className="container">
        <div className="row">
          <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
            <div className="card border-0 shadow rounded-3 my-5" >
              <div className="card-body p-4 p-sm-5">
                <h5 className="card-title text-center mb-5 fw-light fs-5">Sign In</h5>
                <form method="POST">
                  <div className="form-floating mb-3">
                  <label htmlFor="floatingInput">Email address</label>
                    <input type="email" className="form-control" id="floatingInput"name="email" value={User.email} onChange={hanglechange} placeholder="name@example.com"/>
                    
                  </div>
                  <div className="form-floating mb-3">
                  <label htmlFor="floatingPassword">Password</label>
                    <input type="password" className="form-control" id="floatingPassword"name="password" value={User.password} onChange={hanglechange} placeholder="Password"/>
                  
                  </div>
    
                  <div className="form-check mb-3">
                    <input className="form-check-input" type="checkbox" value="" id="rememberPasswordCheck"/>
                    <label className="form-check-label" htmlFor="rememberPasswordCheck">
                      Remember password
                    </label>
                  </div>
                  <div className="d-grid">
                    <button className="btn btn-primary btn-login text-uppercase fw-bold" onClick={userLogin} type="submit">Sign
                      in</button>
                  </div>
                 
                  
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Login;