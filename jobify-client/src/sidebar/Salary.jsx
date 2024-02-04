import React from 'react'
import Button from './Button'
import InputField from '../components/InputField'

const Salary = ({handleChange, handleClick}) => {
  return (
    <div>
      <h4 className='text-lg font-medium mb-2'>Salary</h4>
      <div className='mb-4'>
        <Button onClickHandler={handleClick} value="" title="Hourly" />
        <Button onClickHandler={handleClick} value="monthly" title="Monthly" />
        <Button onClickHandler={handleClick} value="yearly" title="Yearly" />
      </div>
      <div>
      <label className='sidebar-label-container'>
    <input type="radio" name='test' id='test' value="" onChange={handleChange} />
    <span className='checkmark'></span>All
    </label>
      <InputField handleChange={handleChange} value={4000} title="< 4000" name="test2" />
      <InputField handleChange={handleChange} value={5000} title="< 5000" name="test2" />
      <InputField handleChange={handleChange} value={8000} title="< 8000" name="test2" />
      <InputField handleChange={handleChange} value={10000} title="< 10000" name="test2" />
    
      </div>
      </div>
  )
}

export default Salary