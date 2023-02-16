import CardQuestion from "./CardQuestion";
import './Questions.css'

const Questions = ({ questions }) => {
  //console.log(locations);
  const nombres = ["ali", "esteban" ,"vail" ,"paola" ,"putita"];
  return (
    <div className="ali">
    
        {nombres.map((nombre) => (
         
            <CardQuestion question={nombre} />
         
        ))}
    
    </div>
  );
};

export default Questions;
