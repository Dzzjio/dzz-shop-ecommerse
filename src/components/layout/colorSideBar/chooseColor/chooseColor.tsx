import { FC, useEffect, useState } from 'react'
import { ColorsContainer } from './styled'

interface IProps {
  onChange: (val: string) => void
}

const ChooseColor: FC<IProps> = ({ onChange }) => {
  const [active, setActive] = useState<string>('')
  const colors = [
    'black',
    'cyan',
    'lightgreen',
    'pink',
    'orange',
    'lightblue',
    'purple',
    'red',
    'blue',
    'brown',
  ]

  const urlChange = (val: string) => {
    onChange(val)
    const originUrl = window.location.origin + window.location.pathname;
    const queryString = window.location.search;
    let finalUrl = ''

    if (queryString) {
      if (queryString.indexOf('&color') > -1) {
        const cuttedUrl = queryString.substring(0, queryString.indexOf("color="));
        finalUrl = `${originUrl}${cuttedUrl}color=${val}`
      } else {
        finalUrl = `${originUrl}${queryString}&color=${val}`
      }
    } else {
      // sizes gareshe
      finalUrl = `${originUrl}?color=${val}`
    }

    window.history.pushState('', '', finalUrl);
  }

  const onColorChange = (val: string) => {
    if (val === active) {
      setActive('')
      urlChange('')
    } else {
      setActive(val)
      urlChange(val)
    }
  }

  useEffect(() => {
    const url = new URL(window.location.href);
    const color = url.searchParams.get("color");
    if (color) {
      setActive(color)
      onChange(color)
    }
  }, [])

  return (
    <ColorsContainer>
      <h4>Colors</h4>
      <div className="color-span-container">
        {colors.map((color, index) => (
          <span
            onClick={() => onColorChange(color)}
            key={`color-${index}`}
            className="color-circle"
            style={{
              backgroundColor: color,
              outlineColor: active === color ? color : '#fff'
            }}
          ></span>
        ))}
      </div>
    </ColorsContainer>
  )
}

export default ChooseColor
