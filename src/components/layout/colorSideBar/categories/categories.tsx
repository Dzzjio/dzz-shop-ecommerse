import { useEffect } from 'react';
import { CategoriesContainer } from './styled';

interface IProps {
  onChange: (value: string) => void
}

const Categories = ({ onChange }: IProps) => {
  const categoriesData = [
    { name: 'Dresses', count: 15 },
    { name: 'Tops', count: 22 },
    { name: 'Outerwear', count: 10 },
    { name: 'Activewear', count: 3 },
    { name: 'Swimwear', count: 8 },
    { name: 'Footwear', count: 2 },
    { name: 'Formalwear', count: 7 },
  ];

  useEffect(() => {
    const url = new URL(window.location.href);
    const category = url.searchParams.get("category");
    if (category) {
      onChange(category);
    }
  }, [onChange]);

  const chooseCategory = (category: string) => {
    const originUrl = window.location.origin + window.location.pathname;
    const finalUrl = `${originUrl}?category=${category}`;
    window.history.pushState('', '', finalUrl);
    onChange(category);
  };

  return (
    <CategoriesContainer>
      <h4>Category</h4>
      <div className="categories-div">
        {categoriesData.map((category, index) => (
          <div key={index} onClick={() => chooseCategory(category.name)}>
            <span>{category.name}</span>
            <span>({category.count})</span>
          </div>
        ))}
      </div>
    </CategoriesContainer>
  );
};

export default Categories;