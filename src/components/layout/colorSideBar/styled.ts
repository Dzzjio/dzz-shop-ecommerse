import styled from 'styled-components'

export const ColorSidebarContainer = styled.div`
  width: 20%;
  margin: 40px 0px;
  display: flex;
  width: 275px;
  flex-direction: column;
  gap: 20px;

  @media (max-width: 1030px) {
    max-width: 220px;
  }

  div.filters {
    display: flex;
    align-items: center;
    gap: 15px;
    font-size: 13px;
    font-weight: 700;
  }

  .filter-icon {
    font-size: 20px;
  }

  form.search-form {
    position: relative;
  }

  form.search-form input {
    box-sizing: border-box;
    width: 100%;
    padding: 10px;
    border: 2px solid black;
    border-radius: 6px;
    outline: none;
  }

  form .search-icon-div {
    position: absolute;
    right: 0;
    top: 0;
    left: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    margin-right: 10px;
    cursor: pointer;
  }

  .reset-button {
    box-sizing: border-box;
    width: 30%;
    min-width: 100px;
    color: white;
    background-color: black;
    border: 1px solid black;
    padding: 10px 0;
    border-radius: 6px;
    font-weight: bold;
    cursor: pointer;

    &:hover {
      color: black;
      background-color: white;
      border: 1px solid black;
    }
  }

  .color-span-container > span {
    box-sizing: content-box;
  }

  .size-span-container > span {
    box-sizing: content-box;
  }
`
