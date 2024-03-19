import PopularProducts from 'components/partials/home/popularProducts';
import FirstSectionHome from './firstSection';
import { StyledHomePage } from './style';

const HomePage = () => {
  return (
    <StyledHomePage>
      <FirstSectionHome />
      {/* <PopularProducts /> */}
    </StyledHomePage>
  );
};

export default HomePage;
