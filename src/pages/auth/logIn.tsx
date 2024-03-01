import { useState } from "react";
import { AuthContainerUniqueForm, AuthContainerUniqueFormBtns, ForgotPassword } from "./styled";

const LogIn = () => {

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
            <h3>Wellcome Back</h3>
            <p>Welcome please login to your account</p>
            <form>
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
                <ForgotPassword>
                <label htmlFor="checkbox">
                    <input
                    type="checkbox"
                    id="checkbox"
                    />
                    Remember Me
                </label>
                <p>Forgot Password</p>
                </ForgotPassword>
            <AuthContainerUniqueFormBtns>
                <button type="submit">REGISTER</button>
                <button type="submit">SIGN IN</button>
            </AuthContainerUniqueFormBtns>
        </AuthContainerUniqueForm>
    )
}

export default LogIn