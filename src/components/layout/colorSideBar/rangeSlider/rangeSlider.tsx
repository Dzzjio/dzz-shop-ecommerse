import './index.css'
import React, { useEffect } from 'react'

const RangeSlider: React.FC = () => {
  const controlFromInput = (
    fromSlider: HTMLInputElement,
    fromInput: HTMLInputElement,
    toInput: HTMLInputElement,
    controlSlider: HTMLElement,
  ) => {
    const [from, to] = getParsed(fromInput, toInput)
    fillSlider(fromInput, toInput, '#000', '#000', controlSlider)
    if (from > to) {
      fromSlider.value = to.toString()
      fromInput.value = to.toString()
    } else {
      fromSlider.value = from.toString()
    }
  }

  const controlToInput = (
    toSlider: HTMLInputElement,
    fromInput: HTMLInputElement,
    toInput: HTMLInputElement,
    controlSlider: HTMLElement,
  ) => {
    const [from, to] = getParsed(fromInput, toInput)
    fillSlider(fromInput, toInput, '#C6C6C6', '#25daa5', controlSlider)
    setToggleAccessible(toInput)
    if (from <= to) {
      toSlider.value = to.toString()
      toInput.value = to.toString()
    } else {
      toInput.value = from.toString()
    }
  }

  const controlFromSlider = (
    fromSlider: HTMLInputElement,
    toSlider: HTMLInputElement,
    fromInput: HTMLInputElement,
  ) => {
    const [from, to] = getParsed(fromSlider, toSlider)
    fillSlider(fromSlider, toSlider, '#C6C6C6', '#25daa5', toSlider)
    if (from > to) {
      fromSlider.value = to.toString()
      fromInput.value = to.toString()
    } else {
      fromInput.value = from.toString()
    }
  }

  const controlToSlider = (
    fromSlider: HTMLInputElement,
    toSlider: HTMLInputElement,
    toInput: HTMLInputElement,
  ) => {
    const [from, to] = getParsed(fromSlider, toSlider)
    fillSlider(fromSlider, toSlider, '#C6C6C6', '#25daa5', toSlider)
    setToggleAccessible(toSlider)
    if (from <= to) {
      toSlider.value = to.toString()
      toInput.value = to.toString()
    } else {
      toInput.value = from.toString()
      toSlider.value = from.toString()
    }
  }

  const getParsed = (
    currentFrom: HTMLInputElement,
    currentTo: HTMLInputElement,
  ): [number, number] => {
    const from = parseInt(currentFrom.value, 10)
    const to = parseInt(currentTo.value, 10)
    return [from, to]
  }

  const fillSlider = (
    from: HTMLInputElement,
    to: HTMLInputElement,
    sliderColor: string,
    rangeColor: string,
    controlSlider: HTMLElement,
  ) => {
    const rangeDistance = parseInt(to.max, 10) - parseInt(to.min, 10)
    const fromPosition = parseInt(from.value, 10) - parseInt(to.min, 10)
    const toPosition = parseInt(to.value, 10) - parseInt(to.min, 10)
    controlSlider.style.background = `linear-gradient(
      to right,
      ${sliderColor} 0%,
      ${sliderColor} ${(fromPosition / rangeDistance) * 100}%,
      ${rangeColor} ${(fromPosition / rangeDistance) * 100}%,
      ${rangeColor} ${(toPosition / rangeDistance) * 100}%, 
      ${sliderColor} ${(toPosition / rangeDistance) * 100}%, 
      ${sliderColor} 100%)`
  }

  const setToggleAccessible = (currentTarget: HTMLInputElement) => {
    const toSlider = document.querySelector<HTMLInputElement>('#toSlider')!
    if (Number(currentTarget.value) <= 0) {
      toSlider.style.zIndex = '2'
    } else {
      toSlider.style.zIndex = '0'
    }
  }

  useEffect(() => {
    const fromSlider = document.querySelector<HTMLInputElement>('#fromSlider')!
    const toSlider = document.querySelector<HTMLInputElement>('#toSlider')!
    const fromInput = document.querySelector<HTMLInputElement>('#fromInput')!
    const toInput = document.querySelector<HTMLInputElement>('#toInput')!

    fillSlider(fromSlider, toSlider, '#C6C6C6', '#25daa5', toSlider)
    setToggleAccessible(toSlider)

    fromSlider.oninput = () =>
      controlFromSlider(fromSlider, toSlider, fromInput)
    toSlider.oninput = () => controlToSlider(fromSlider, toSlider, toInput)
    fromInput.oninput = () =>
      controlFromInput(fromSlider, fromInput, toInput, toSlider)
    toInput.oninput = () =>
      controlToInput(toSlider, fromInput, toInput, toSlider)
  }, [])
  
  return (
    <div className="range_container">
      <h4>Price</h4>
      <div className="sliders_control">
        <input
          id="fromSlider"
          type="range"
          defaultValue="10"
          min="0"
          max="999"
        />
        <input id="toSlider" type="range" defaultValue="40" min="0" max="999" />
      </div>
      <div className="form_control">
        <div className="form_control_container">
          <div className="form_control_container__time">
            <span>Min Price: </span>
            <span className="dollar">$</span>
          </div>
          <input
            className="form_control_container__time__input"
            type="number"
            id="fromInput"
            defaultValue="10"
            min="0"
            max="100"
          />
        </div>
        <div className="form_control_container">
          <div className="form_control_container__time">
            <span>Max Price: </span>
            <span className="dollar">$</span>
          </div>
          <input
            className="form_control_container__time__input"
            type="number"
            id="toInput"
            defaultValue="40"
            min="0"
            max="100"
          />
        </div>
      </div>
    </div>
  )
}

export default RangeSlider
