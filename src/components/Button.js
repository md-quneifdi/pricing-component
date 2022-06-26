import React from 'react';
import './Button.css';
import cx from 'classnames';

function Button({ rounded = false , click}) {
  const sliderCX  = cx('slider', {'rounded': rounded})
  return (
      <label className='switch'>
        <input type="checkbox" onClick={click}/>
        <span className={sliderCX}></span>
      </label>
  )
}

export default Button;
