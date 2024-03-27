import PopularProducts from 'components/partials/home/popularProducts';
import FirstSectionHome from './firstSection';
import { StyledHomePage } from './style';
import { useEffect } from 'react';
import { API } from 'services/endpoints';

const HomePage = () => {

  useEffect(() => {
    API.products.getLatestProduct().then((res) => {
      console.log(res);
    })

    API.products.getProducts(0,0).then((res) => {
      console.log('products', res);
    })
  }, [])

  return (
    <StyledHomePage>
      <FirstSectionHome />
      {/* <PopularProducts /> */}
    </StyledHomePage>
  );
};

export default HomePage;
