import { useLocation } from "react-router-dom";
import LogIn from "./logIn";
import Register from "./register";
import { FC } from "react";
import { AuthContainer, AuthContainerShared, AuthContainerUnique, AuthContentContainer } from "./styled";
import sharedImg from '../../assets/images/auth-shared-img.png'

const AuthPage: FC = () => {

    const location = useLocation();

    const endpoint = location.pathname.split('/').pop();

    const renderComponent = (): JSX.Element | null => {
        switch (endpoint) {
          case 'login':
            return <LogIn />;
          case 'register':
            return <Register />;
          default:
            return null;
        }
      };

    return (
        <AuthContainer>
            <AuthContentContainer>  
                <AuthContainerShared>
                    <img src={sharedImg} alt="sharedImg" />
                    test
                </AuthContainerShared>
                <AuthContainerUnique>
                    {renderComponent()}
                </AuthContainerUnique>
            </AuthContentContainer>
        </AuthContainer>
    );
};

export default AuthPage;