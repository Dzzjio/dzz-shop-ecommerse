import PopularProducts from 'components/partials/home/popularProducts';
import FirstSectionHome from './firstSection';
import { StyledHomePage } from './style';
import { useEffect, useState } from 'react';
import { API } from 'services/endpoints';
import FeaturedSection from './featuredOfferSection';

export interface ICat {
  id: string
  name: string
}

const HomePage = () => {
  
  const [latestProducts, setLatestProducts] = useState([])
  const [products, setProducts] = useState([])
  const [categories, setCategories] = useState<ICat[]>([])
  const [activeCategories, setactiveCategories] = useState('')

  const handleCaregoryClick = (category: string) => {
    setactiveCategories(category)
  }

  useEffect(() => {

    API.products.getCategories().then((res) => {
      //add .data
      setCategories(res.data.slice(0, 4))
      console.log('cat:',res.data);
      
    })

    API.products.getProducts(0,6).then((res) => {
      console.log(res);
      const filteredData = res.data.map(
        (item: {images: any[]; name: any; price: any}) => {
        return {
          img: item.images[0],
          title: item.name,
          price: item.price,
          category: 0,
          discount: 0,
        }
      })
      setProducts(filteredData)
    })
  }, [])

  return (
    <StyledHomePage>
      <FirstSectionHome />
      <div className='most-popular-products'>
        <div>
          <h3>Most Popular Products</h3>
          <div className='category-select-popular-products'>
            {
              categories.map((category) => (
                <span
                  key={`category-main-page-${category}`}
                  className={category.id === activeCategories ? 'active' : ''}
                  onClick={() => handleCaregoryClick(category.id)}
                >{category.name}</span>
              ))
            }
          </div>
        </div>
        <PopularProducts products={products}/>
      </div>
      <FeaturedSection />
    </StyledHomePage>
  );
};

export default HomePage;
