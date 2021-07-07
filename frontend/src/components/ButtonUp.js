import React, { useEffect, useState } from 'react';
import { useWindowScroll } from 'react-use';
import { FaChevronUp  } from 'react-icons/fa';
import './ButtonUp.css';



const ButtonUp = () => {

  const {y: pageYOffset } = useWindowScroll();
  const [visible, setVisibility] = useState(false);

  useEffect(() => {
    if(pageYOffset > 100){
      setVisibility(true);
    }else{
      setVisibility(false);
    }
  }, [pageYOffset]);

  const scrollToTop = () => window.scrollTo({top: 0, behavior: "smooth"});

  if(!visible){
    return false;
  }

  let buttonUpStyle = {color: '#fff', fontSize: '18px'};

  return(
    <button className="btnScrollTop" aria-label="scroll to the top" onClick={scrollToTop}>
      <FaChevronUp style={buttonUpStyle}/>
    </button>
  );
}

export default ButtonUp
