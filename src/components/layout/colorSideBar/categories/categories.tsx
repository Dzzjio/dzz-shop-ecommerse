import { CategoriesContainer } from './styled'

const Categories = () => {
  return (
    <CategoriesContainer>
      <h4>Category</h4>
      <div className="categories-div">
        <div>
          <span>Dresses</span>
          <span>(15)</span>
        </div>
        <div>
          <span>Tops</span>
          <span>(22)</span>
        </div>
        <div>
          <span>Outerwear</span>
          <span>(10)</span>
        </div>
        <div>
          <span>Activewear</span>
          <span>(3)</span>
        </div>
        <div>
          <span>Swimwear</span>
          <span>(8)</span>
        </div>
        <div>
          <span>Footwear</span>
          <span>(2)</span>
        </div>
        <div>
          <span>Formalwear</span>
          <span>(7)</span>
        </div>
      </div>
    </CategoriesContainer>
  )
}

export default Categories
