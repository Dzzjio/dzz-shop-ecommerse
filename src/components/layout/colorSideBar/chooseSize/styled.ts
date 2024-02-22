import styled from 'styled-components'

export const SizeContainer = styled.div`
  .size-span-container {
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
  }

  .size-span {
    border: 1px solid black;
    width: 16px;
    height: 16px;
    border-radius: 100%;
    padding: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    user-select: none;

    &.active,
    &:hover {
      color: #fff;
      background: #000;
    }
  }
`
