import { FC, useEffect, useState } from 'react';
import { SizeContainer } from './styled';

interface IProps {
  onChange: (value: string) => void 
}

const ChooseSize: FC<IProps> = ({ onChange }) => {
  const [active, setActive] = useState<number[]>([]);
  const sizes = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];

  const generateFilterUrl = (choosenArr: number[]) => {
    const originUrl = window.location.origin + window.location.pathname;
    let finalUrl = ''

    if (choosenArr) {
      const sizeString = choosenArr.toString();
      onChange(sizeString)
      finalUrl = `${originUrl}?size=${sizeString}`
    } else {
      finalUrl = originUrl;
    }

    window.history.pushState('', '', finalUrl);
  }

  const chooseSize = (size: number) => {
    let activeCopy = [...active];
    if (activeCopy.indexOf(size) < 0) {
      activeCopy.push(size);
    } else {
      activeCopy = activeCopy.filter((item) => {
        return item !== size
      })
    }
    generateFilterUrl(activeCopy)
    setActive(activeCopy);
  };

  useEffect(() => {
    const url = new URL(window.location.href);
    const size = url.searchParams.get("size");
    if (size) {
      console.log('size', size)
      onChange(size)
      const arr: string[] = size.split(',');
      const arrNums = arr.map(item => Number(item))
      setActive(arrNums)
    }
  }, [])

  return (
    <SizeContainer>
      <h4>Size</h4>
      <div className="size-span-container">
        {sizes.map((size, index) => (
          <span
            onClick={() => chooseSize(size)}
            key={`size-${index}`}
            className={`size-span ${(active.includes(size)) ? 'active' : ''}`}
          >
            {size}
          </span>
        ))}
      </div>
    </SizeContainer>
  );
};

export default ChooseSize;
