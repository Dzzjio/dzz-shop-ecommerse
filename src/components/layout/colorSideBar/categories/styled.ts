import styled from 'styled-components'

export const CategoriesContainer = styled.div`
  .categories-div > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 15px;
    cursor: pointer;

    & > span:hover {
      text-decoration: underline;
    }
  }
`
