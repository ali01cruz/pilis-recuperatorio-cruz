import './Home.css';
import { useContext, useEffect } from "react";
import { UserContext } from "../../contexts/UserContext";
import TriviaApp from '../../components/Filters/Filters.jsx';

const Home = () => {
  const { currentUser } = useContext(UserContext);

  if (currentUser) {
    return (
      <>
       
        <div className='main-container'>
          <TriviaApp></TriviaApp>
        </div>
      </>
    );
  }



};

export default Home;
