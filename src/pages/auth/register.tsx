import { useState } from "react";
import { AuthContainerUniqueForm, AuthContainerUniqueFormBtns } from "./styled"
import { StyledLink } from "components/layout/header/styled";

const Register = () => {

    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
      });
    
      const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
      
    return (
        <AuthContainerUniqueForm>
            <h3>Register Now</h3>
            <p>Welcome please registration to your account</p>
            <form>
                <div>
                    <label htmlFor="username">Username</label>
                    <input
                    type="text"
                    id="username"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="email">Email Adress</label>
                    <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    />
                </div>
            </form>
            <AuthContainerUniqueFormBtns>
                <button type="submit">REGISTER</button>
                <button type="submit">SIGN IN</button>
            </AuthContainerUniqueFormBtns>
            <p>Alredy have an account? <StyledLink to='/auth/login'>Log In</StyledLink></p>
        </AuthContainerUniqueForm>
    )
}

export default Register