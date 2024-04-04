import { StyledFeaturedSection } from "./style"
// import luxuryBrands from '../../assets/images/luxury-brands-Middle-East.jpg'
import summer2024 from '../../assets/images/summer2024.webp'
// import swimwear from '../../assets/images/swimwear.png'

const FeaturedItemsObj = [
    {
        id: 0,
        name: 'Luxury Brands',
        sale: '20% OFF',
        backgroundColor: 'E0DBD7',
        imgURL: summer2024
    },
    {
        id: 1,
        name: 'SUMMER 2024',
        sale: 'Up To 50% OFF',
        backgroundColor: 'DCB9BF',
        imgURL: summer2024
    },
    {
        id: 2,
        name: 'Swimwear SALE',
        sale: '20% OFF',
        backgroundColor: 'FCD6B2',
        imgURL: summer2024
    }
]

const FeaturedSection = () => {
    return (
        <StyledFeaturedSection>
            <div className="featured-section-header">
                <h3>Featured offer for you</h3>
                <p>see all</p>
            </div>
            <div className="featured-section-content">
            {FeaturedItemsObj.map((item, index) => (
                    <div className="featured-box">
                        <img src={item.imgURL} alt={`featured-box-${index+1    }`} />
                        <div key={item.id} style={{ backgroundColor: `#${item.backgroundColor}` }}>
                            <p>{item.sale}</p>
                            <h4>{item.name}</h4>
                            <button>Collect now</button>
                        </div>
                    </div>
            ))}
            </div>
        </StyledFeaturedSection>
    )
}

export default FeaturedSection