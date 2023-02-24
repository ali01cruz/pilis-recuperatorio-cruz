import { useContext, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import Nav from "react-bootstrap/Nav";

const Navigation = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);

  useEffect(() => {
    const userStored = localStorage.getItem("currentUser");
    if (userStored) {
      setCurrentUser(JSON.parse(userStored));
    }
  }, []);

  // Metodo Logout
  const handleSignOut = () => {
    let users = JSON.parse(localStorage.getItem("users")) ?? [];
    let filter = [];
    let register = users.find((obj) => obj.user.username === currentUser.username) ?? null;
    if (register) {
      filter = users.filter(function (item) {
        return item.user.username != register.user.username;
      });
    } else {
      filter = users;
    }
    const newRegister = { "user": currentUser };
    localStorage.setItem("users", JSON.stringify([...filter, newRegister]));
    setCurrentUser(null);
    localStorage.removeItem("currentUser");
  };

  const Informacion = <p>
    The Trivia API - Free to use API for multiple choice trivia questions. Featuring procedurally generated and user generated questions.
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae, alias sed cumque placeat quaerat numquam quod recusandae? Ratione, tempora accusamus unde culpa vero doloremque blanditiis, pariatur nihil ut maxime dolorum?
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem quidem velit animi, perferendis soluta inventore dicta saepe dignissimos corporis unde fuga consequuntur explicabo, eveniet non labore voluptatibus ratione quia id.
  </p>

  return (
    <>
      <div className="navigation">
        <div className="nav-links-container">
          {currentUser ? (
            <Nav className="justify-content-end" activeKey="/home">
              <Nav.Item>
                <Nav.Link className="nav-link sign-out" onClick={handleSignOut} eventKey="link-1">Cerrar Sesión {"("} {currentUser.username} {")"}</Nav.Link>
              </Nav.Item>
            </Nav>
          ) : (
            <Nav className="justify-content-end" activeKey="/home">
              <Nav.Item>
                <Nav.Link as={Link} className="nav-link sign-in" to="/login" >Iniciar sesión</Nav.Link>
              </Nav.Item>
            </Nav>
          )}
          <div>
            <h1 className="text-center">The Trivia</h1>
            {Informacion}
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;