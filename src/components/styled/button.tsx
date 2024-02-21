import { FC } from "react";
import styled from "styled-components";

interface IProps {
  children: string | JSX.Element | JSX.Element[];
  borderWhite?: boolean;
  uppercase?: boolean;
}

const CustomButton = styled.button<IProps>`
  border-radius: 30px;
  padding: 8px 14px;
  font-size: 14px;
  cursor: pointer;
  border: ${(props) => (props.borderWhite ? "3px solid #fff" : 0)};
  background-color: #000;
  color: #fff;
  text-transform: ${(props) => props.uppercase ? 'uppercase': 'normal'};
`;

const Button: FC<IProps> = ({ children, borderWhite, uppercase }) => {
  return (
    <CustomButton borderWhite={!!borderWhite} uppercase={!!uppercase}>
      {children}
    </CustomButton>
  );
};

export default Button;
