import styled from 'styled-components'

export const TagsContainer = styled.div`
  .tag-span {
    padding: 3px 6px;
    border: 1px solid black;
    border-radius: 6px;
    cursor: pointer;

    &:hover {
      color: white;
      background-color: black;
    }
  }

  .tag-span-container {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }
`
