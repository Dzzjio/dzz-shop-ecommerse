import styled from 'styled-components'

export const Box = styled.div`
  width: 100%;
  height: 350px;
  margin: 20px auto;
  border-radius: 10px;
  overflow: hidden;

  .box {
    height: 85%;
    position: relative;

    button {
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

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  p {
    margin: 0;
  }

  div.absolute-icons {
    width: 40px;
    display: flex;
    flex-direction: column;
    font-size: 20px;
    gap: 5px;
    position: absolute;
    top: 5px;
    right: 5px;
  }

  div.absolute-icons .icons {
    border: 1px solid gray;
    background-color: #555;
    padding: 8px;
    border-radius: 50%;
    color: white;
  }

  div.absolute-icons .icons:hover {
    background-color: white;
    color: red;
    cursor: pointer;
  }

  .box-text {
    display: flex;
    height: 15%;
    padding: 0 5px;
    font-weight: bold;
    font-size: 15px;
    margin-top: 20px;
  }

  .box-text .title-div {
    width: 60%;
  }

  .title-div span {
    overflow-wrap: break-word;
  }

  .box-text .price-div {
    width: 40%;
    text-align: right;
  }

  .crossed-price {
    color: grey;
    text-decoration: line-through;
  }

  .absolute-discount {
    background-color: white;
    border-radius: 8px;
    padding: 3px 5px;
    font-size: 12px;
    font-weight: bold;
    position: absolute;
    top: 5px;
    left: 3px;
  }
`
