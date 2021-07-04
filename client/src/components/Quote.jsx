import React, {useEffect, useState} from 'react';


const Quote = (props) => {
  return (
    <div className='row-span-1 justify-self-center w-73 overflow-x-auto'>
      <p>{props.quote}</p>
    </div>
  )
}

export default Quote;