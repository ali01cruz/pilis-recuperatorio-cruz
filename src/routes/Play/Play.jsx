
import { useContext, useEffect } from "react";
import { UserContext } from "../../contexts/UserContext";
import Questions from '../../components/Questions/Questions';

const Play = () => {
  const { currentUser } = useContext(UserContext);
  
  if (currentUser) {
    return (
      <>
        <div className='main-container'>
            <Questions></Questions>
        </div>
      </>
    );
  } 
  

  
};

export default Play;
