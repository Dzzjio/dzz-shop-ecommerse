import { useLocation } from "react-router-dom";
import LogIn from "./logIn";
import Register from "./register";
import { FC } from "react";

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
        <div>
            <div>same</div>
            <div>{renderComponent()}</div>
        </div>
    );
};

export default AuthPage;