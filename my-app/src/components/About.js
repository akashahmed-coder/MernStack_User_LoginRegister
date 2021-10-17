import React,{useEffect,useState} from 'react';
import profileImg from './img/markJ.jpg'
import {useHistory} from 'react-router-dom'

const About = () => {
    
  
    const [userData,setUserData] = useState({})
    const history = useHistory()
    
    const getAboutData = async function(){
       
        try{
           
            const res = await fetch('/about',{
                method:"GET",
                headers:{
                    Accept:"application/json",
                    "Content-Type":"application/json"

                },
                credentials:"include"
            })
            
            const data = await res.json()
            setUserData(data)
          
            if(!res.status === 200 || !data){
               
                throw new Error(res.error)
            }

            

        }catch(err){
            console.log(err)
            history.push("/login")
        }

    }

    useEffect(() => {
        console.log("hi")
        getAboutData();
    }, [])

    return (
        <div className="container emp-pro mt-5">
            <form method="GET">
                <div className="row">
                    <div className="col-md-4">
                       <div className="profile-img-div mb-5" >
                       <img className="emp-pro-img" src={profileImg} alt="" />
                       </div>
                    </div>
                    <div className="col-md-6">
                        <div className="profile-head pl-3">
                            <h5>{userData.name}</h5>
                            <span>Web Devloper</span>
                               <p className="profile-rating mt-3 mb-3">
                                   Rankings : 1/10
                               </p>
                         </div>
                            <ul class="nav justify-content-start " role="tablist">
                                <li className="nav-item">
                                <a className="nav-link active" data-toggle="tab" id="home-tab" role="tab" href="#home">About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" data-toggle="tab" id="profile-tab" role="tab" href="#profile">Timeline</a>
                                </li>
                              
                            </ul>
                            
                            
                    </div>
                    <div className="col-md-2">
                            <input type="button" value="Edit Profile" />
                            </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                       
                       
                       <a href="http://www.youtube.com">Youtube</a>
                       <br />
                        
                        <a href="http://www.youtube.com">facebook</a>
                        <br />
                        
                        <a href="http://www.youtube.com">Github</a>
                        <br />
                        
                        <a href="http://www.youtube.com">Softwere Devlopment</a>
                        <br />
                        
                        <a href="http://www.youtube.com">Wesite Devlopment</a>
                        <br />
                        
                        <a href="http://www.youtube.com">Figma</a>
                        
                      
                    </div>

                    <div className="col-md-8 pl-3">
                    <div className="tab-pane fade active show" role="tabpanel"id="home"aria-labelledby="home-tab">
                        <div className="row">
                            <div className="col-md-6 ">
                                <label htmlFor="">User Id</label>
                            </div>
                            <div className="col-md-6">
                                <p>233223322332</p>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-6 ">
                                <label htmlFor="">Name</label>
                            </div>
                            <div className="col-md-6">
                                <p>Akash Ahmed</p>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-6 ">
                                <label htmlFor="">Email</label>
                            </div>
                            <div className="col-md-6">
                                <p>akash@gmail.com</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 ">
                                <label htmlFor="">Phone</label>
                            </div>
                            <div className="col-md-6">
                                <p>01233453</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 ">
                                <label htmlFor="">Profassion</label>
                            </div>
                            <div className="col-md-6">
                                <p>web devloper</p>
                            </div>
                        </div>
                    </div>


                    <div className="tab-pane fade active timline2" id="profile" role="tabpanel"aria-labelledby="profile-tab">
                        <div className="row ">
                            <div className="col-md-6 ">
                                <label htmlFor="">Experience</label>
                            </div>
                            <div className="col-md-6">
                                <p>Expert</p>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-6 ">
                                <label htmlFor="">Hourly Rate</label>
                            </div>
                            <div className="col-md-6">
                                <p>10$/hr</p>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-6 ">
                                <label htmlFor="">Total Project</label>
                            </div>
                            <div className="col-md-6">
                                <p>320</p>
                            </div>
                        </div>
                        
                        <div className="row">
                            <div className="col-md-6 ">
                                <label htmlFor="">English Level</label>
                            </div>
                            <div className="col-md-6">
                                <p>Expert</p>
                            </div>
                        </div>
                        
                        <div className="row">
                            <div className="col-md-6 ">
                                <label htmlFor="">Availability</label>
                            </div>
                            <div className="col-md-6">
                                <p>6 Month</p>
                            </div>
                        </div>
                    </div>
                    </div>
                   
                </div>
            </form>
        </div>
    );
};

export default About;