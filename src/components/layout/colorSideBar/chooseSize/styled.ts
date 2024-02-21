import styled from 'styled-components'

export const SizeContainer = styled.div`
  .size-span-container {
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
  }

  .size-span {
    border: 1px solid black;
    width: 20px;
    height: 20px;
    text-align: center;
    border-radius: 100%;
    padding: 5px;
    font-weight: bold;
    cursor: pointer;
    user-select: none;

    &.active,
    &:hover {
      color: #fff;
      background: #000;
    }
  }
`
