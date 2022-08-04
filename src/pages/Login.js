import React from 'react'
import { useForm } from 'react-hook-form';
import styled from 'styled-components'
import {
    useNavigate
} from "react-router-dom";
import { useAuthUser } from '../context/AuthUser';

const Container = styled.div`
    width: 50%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 5%;
`;


const Login = () => {

    const { login } = useAuthUser();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();

    const onSubmit = user => {
        login(user);
        navigate('/register');
    };

    return (
        <Container>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input
                        type="email"
                        className={`form-control ${errors.email && 'is-invalid'}`}
                        id="email"
                        aria-describedby="emailHelp"
                        {...register("email", { required: 'Informe o E-mail' })} />
                    {errors.email && <span className="invalid-feedback">{errors.email.message}</span>}
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input
                        type="password"
                        className={`form-control ${errors.password && 'is-invalid'}`}
                        id="password"
                        {...register("password", { required: 'Informe a senha' })} />
                    {errors.password && <span className="invalid-feedback">{errors.password.message}</span>}
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </Container>
    )
}

export default Login