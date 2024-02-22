import styled from 'styled-components'

export const ColorsContainer = styled.div`
  .color-span-container {
    display: flex;
    gap: 2px;
    width: 100%;
    flex-wrap: wrap;
  }

  .color-span-container span {
    cursor: pointer;
    border: 5px solid white;
    outline: 1px solid white;
    width: 16px;
    height: 16px;
    border-radius: 100%;
  }
`
