import React from 'react';

const Contact = () => {
    return (
        <div className="container contact-form">
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
            <form method="post">
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
                            <textarea name="txtMsg" className="form-control" placeholder="Your Message *"  >adfaf</textarea>
                        </div>
                    </div>
                </div>
            </form>
</div>
    );
};

export default Contact;