import React,{useState,useEffect} from 'react';
import {useHistory} from 'react-router-dom'


const Contact = () => {
    const history  = useHistory()
    const [userData,setUserData] = useState({})

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
            console.log(data)
            setUserData(data)
          
            if(!data){
               
                throw new Error("cannot get data from server")
            }

            

        }catch(err){
            console.log(err)
            history.push("/login")
        }

    }

    useEffect(() => {
        getAboutData();
    }, [])

    return (
        
        <div className="container contact-form">
            <form method="GET">
            <div className="contact-image">
                <img src="https://image.ibb.co/kUagtU/rocket_contact.png" alt="rocket_contact"/>
            </div>
            <div className="row">
                    <div className="col-lg-10 col-md-4 offset-lg-1">
                        <div className="contact_info_item">
                            <div className="contact_info_content">
                                <div className="contact_info_title">
                                    Phone
                                </div>
                                <div className="contact_info_text">
                                    018282828888
                                </div>
                                
                            </div>
                            <div className="contact_info_content">
                                <div className="contact_info_title">
                                    Email
                                </div>
                                <div className="contact_info_text">
                                    akash@gmail.com
                                </div>
                                
                            </div>
                            <div className="contact_info_content">
                                <div className="contact_info_title">
                                    Adress
                                </div>
                                <div className="contact_info_text">
                                   161, motijheel dhaka
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            
                <h3>Drop Us a Message</h3>


                


               <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <input type="text" name="txtName" className="form-control" placeholder="Your Name *" value="AKASH" />
                        </div>
                        <div className="form-group">
                            <input type="text" name="txtEmail" className="form-control" placeholder="Your Email *" value="ahmed40@ggamil.com" />
                        </div>
                        <div className="form-group">
                            <input type="text" name="txtPhone" className="form-control" placeholder="Your Phone Number *" value="0123456" />
                        </div>
                        <div className="form-group">
                            <input type="submit" name="btnSubmit" className="btnContact" value="Send Message" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <textarea name="txtMsg" className="form-control" placeholder="Your Message *"  ></textarea>
                        </div>
                    </div>
                </div>
            </form>
</div>
    );
};

export default Contact;