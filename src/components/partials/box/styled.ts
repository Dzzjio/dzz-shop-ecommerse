import styled from 'styled-components'

export const Box = styled.div`
    max-width: 10px;
    width: 300px;
    max-height: 475px;
    height: 350px;
    margin: 20px auto;
    border-radius: 10px;

  p {
    margin: 0;
  }
`

export const BoxTop = styled.div`
  height: 85%;
  position: relative;

  & > span {
    background-color: white;
    border-radius: 8px;
    padding: 3px 5px;
    font-size: 12px;
    font-weight: bold;
    position: absolute;
    top: 5px;
    left: 3px;
  }

  & > div {
    width: 40px;
    display: flex;
    flex-direction: column;
    font-size: 20px;
    gap: 5px;
    position: absolute;
    top: 5px;
    right: 5px;

    & > * {
      border: 1px solid gray;
      background-color: #555;
      padding: 8px;
      border-radius: 50%;
      color: white;

      &:hover {
        background-color: white;
        color: #000;
        cursor: pointer;
      }
    }
  }

  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
  }

  & > button {
    position: absolute;
    left: 50%;
    bottom: -17px;
    margin-left: -50px;
    opacity: 0;
    transition: all 0.3s ease-in-out;
  }

  &:hover {
    button {
      opacity: 1;
    }
  }
`

export const BoxBot = styled.div`
  display: flex;
  height: 15%;
  padding: 0 5px;
  font-weight: bold;
  font-size: 15px;
  margin-top: 20px;

  & > div:first-child{
    width: 80%;
  }

  & > div:last-child {
    width: 20%;

    & > span:first-child {
      color: grey;
      text-decoration: line-through;
    }
  }
`