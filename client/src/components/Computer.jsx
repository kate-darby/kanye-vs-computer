import React, {useEffect, useState} from 'react';


const Computer = (props) => {
  const [clicked, setClicked] = useState(false);
  const [icon, setIcon]= useState('');
  const [border, setBorder] = useState('border-2 border-gray-400 rounded');
  const [background, setBackground] = useState('bg-blue-200');

  const handleClick = () => {
    let score;
    setBackground('bg-gray-200');
    if (props.answer === 'computer') {
      setIcon('fas fa-check fa-7x');
      setBorder('border-2 border-green-600 rounded')
      score = 1;
    } else {
      setIcon('fas fa-times fa-7x');
      setBorder('border-2 border-red-600 rounded')
      score = 0;
    }
    setClicked(true);
    props.answered(score);
  }

  useEffect(() => {
    setClicked(false);
    setBorder('border-2 border-gray-400 rounded');
    setBackground('bg-blue-200');
  }, [props.quote]);

  return (
    <div onClick={handleClick} className={`${background} col-span-1 h-36 w-64 justify-self-center ${border}`}>
      {clicked ? <div className='absolute p-4'><i className={icon}></i></div> : null}
      <h2 className='text-center text-2xl p-10'>Computer?</h2>
    </div>
  )
}

export default Computer;