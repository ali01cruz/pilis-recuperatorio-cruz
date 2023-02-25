import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { UserContext } from '../../contexts/UserContext';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Login = () => {

    const { setCurrentUser } = useContext(UserContext)
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate()
    const onSubmit = (data) => {
        const users = JSON.parse(localStorage.getItem("users")) ?? [];
        const user = users.find((obj) => obj.user.username === data.username) ?? null;
        if (user) {
            setCurrentUser(user.user)
        } else {
            localStorage.setItem('currentUser', JSON.stringify(data))
            setCurrentUser(data)
        }
        navigate('/')
    }

    return (
        <div className="sign-in-container d-flex flex-column justify-content-between text-center align-items-center">
            <span>Enter email and password</span>
            <Card style={{ width: '25rem' }}>
                <Card.Body>
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label className="d-flex text-start text-dark">Email</Form.Label>
                            <Form.Control type="email" placeholder="email"
                                {...register('username', {
                                    required: 'Enter your email'
                                }
                                )} />
                            <p>{errors.username?.message}</p>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label className="d-flex text-start text-dark">Password</Form.Label>
                            <Form.Control type="password" placeholder="password"
                                {...register('password', {
                                    required: 'Enter your password'
                                }
                                )} />
                            <p>{errors.password?.message}</p>
                        </Form.Group>
                        <Button variant="primary" type="submit">
                           Log in
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Login
