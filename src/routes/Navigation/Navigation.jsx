import { useContext, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";
import { LocationsContext } from "../../contexts/LocationsContext";
import locationLogo from "../../assets/logoclima.png";
import "./Navigation.css";

const Navigation = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const { locations, setLocations } = useContext(LocationsContext);

  useEffect(() => {
    const userStored = localStorage.getItem("currentUser");
    const locationStored = localStorage.getItem("locations");
    if (userStored) {
      setCurrentUser(JSON.parse(userStored));
      setLocations(JSON.parse(locationStored));
      //console.log('estoy logeado');
    }
  }, []);

  const handleSignOut = () => {
    // si viene null hace un nuevo array, si no es null toma el valor q viene
    let users = JSON.parse(localStorage.getItem("users")) ?? []; 
    let filter = [];
    let register = users.find((obj) => obj.user.username === currentUser.username) ?? null;
    if(register){
        filter = users.filter(function(item)
        {
          return item.user.username != register.user.username;
        });
    }else{
        filter = users;
    }
    const newRegister = {"user":currentUser, "locations":locations};
    
    localStorage.setItem("users",JSON.stringify([...filter, newRegister]));
    // borra al usuario porq en localStorage seguia apareciendo
    setCurrentUser(null);
    localStorage.removeItem("currentUser");
    setLocations([])
  };

  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <img src={locationLogo} alt="Logo" className="logo" />
        </Link>
        <div className="nav-links-container">
          {currentUser ? (
            <Link className="nav-link enter" to="location/create">
              Nueva Localidad
            </Link>
          ) : (
            <span className="nav-link">Nueva Localidad</span>
          )}

          {currentUser ? (
            <span className="nav-link sign-out" onClick={handleSignOut}>
              Cerrar Sesion {"("} {currentUser.username} {")"}
            </span>
          ) : (
            <Link className="nav-link sign-in" to="/login">
              Iniciar Sesion
            </Link>
          )}
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
