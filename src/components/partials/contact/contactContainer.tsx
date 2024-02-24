import React, { useState } from 'react';
import { LeftStyledContactContainer, RightStyledContactContainer, StyledContactContainer } from "./styled";
import mapImg from '../../../assets/images/map-img.png'
import redLocation from '../../../assets/images/red-location.png'
import blackLocation from '../../../assets/images/black-loction.png'

interface FormData {
    name: string;
    email: string;
    phoneNumber: string;
    message: string;
}

const ContactContainer = () => {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        phoneNumber: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Handle form submission here
        console.log(formData);
    };

    const alertData = () => {
        alert(`
        name: ${formData.name},
        email: ${formData.email},
        phone number: ${formData.phoneNumber},
        message: ${formData.message}
        `)
    }

    return (
        <StyledContactContainer>
            <LeftStyledContactContainer>
                <h3>Georgia</h3>
                <p>Address: 2564 blabla Lorem, ipsum dolordolordo lordolordolordo lordolordolordolor sit amet consectetur</p>
                <div>
                    <div>
                        <h4>Call Us</h4>
                        <p>+995 (599) 160 881</p>
                        <p>+995 (599) 160 881</p>
                    </div>
                    <div>
                        <h4>Email Us</h4>
                        <p>Giojio14@gmail.com</p>
                    </div>
                </div>

                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name">Your Name</label><br />
                        <input 
                            type="text" 
                            id="name" 
                            name="name" 
                            value={formData.name} 
                            onChange={handleChange} 
                        />
                    </div>
                    <div>
                        <label htmlFor="email">Email Adress</label><br />
                        <input 
                            type="email" 
                            id="email" 
                            name="email" 
                            value={formData.email} 
                            onChange={handleChange} 
                        />
                    </div>
                    <div>
                        <label htmlFor="phoneNumber">Phone Number</label><br />
                        <input 
                            type="tel" 
                            id="phoneNumber" 
                            name="phoneNumber" 
                            value={formData.phoneNumber} 
                            onChange={handleChange} 
                        />
                    </div>
                    <div>
                        <label htmlFor="message">Message</label><br />
                        <textarea 
                            id="message" 
                            name="message" 
                            value={formData.message} 
                            onChange={handleChange} 
                        />
                    </div>
                    <div>
                        <button onClick={alertData} type="submit">Submit</button>
                    </div>
                </form>
            </LeftStyledContactContainer>

            <RightStyledContactContainer>
                <img src={mapImg} alt="world-map-image" />
                <img className='location-img location-img-1' src={redLocation} alt="red-location" />
                <img className='location-img location-img-2' src={blackLocation} alt="black-location" />
                <img className='location-img location-img-3' src={blackLocation} alt="black-location" />
                <h2>CONTACT US</h2>
            </RightStyledContactContainer>
        </StyledContactContainer>
    )
}

export default ContactContainer;