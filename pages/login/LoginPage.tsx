import { route } from "next/dist/server/router";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useState } from "react";
import styled from "styled-components";
import { Input } from "../../components/core";
import { Button } from "../../components/core/Button/Button";
import { User } from "./../../types/types";

const LoginWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const LoginContainer = styled.div`
  padding: 8px 16px;
  border: 1px solid black;
`;

const ButtonContainer = styled.div`
  margin-top: 8px;
  display: flex;
  justify-content: flex-end;
`;

const CustomInput = styled(Input)`
  margin-bottom: 8px;
`;

const Error = styled.div`
  color: #bf211e;
  margin-top: 8px;
`;

export default function LoginPage() {
  const [user, setUser] = useState<User>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [passwordConfirmation, setPasswordConfirmation] = useState<string>("");
  const [error, setError] = useState<boolean>(false);
  const router = useRouter();

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    if (name === "confirmPassword") {
      setPasswordConfirmation(value);
    } else {
      setUser((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const onButtonClickHandler = (event: React.MouseEvent<HTMLElement>) => {
    if (user.password === passwordConfirmation) {
      localStorage.setItem("user", JSON.stringify(user));
      router.push("/dashboard");
    } else {
      setError(true);
    }
  };

  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <LoginWrapper>
        <LoginContainer>
          <h1>Login Page</h1>
          <CustomInput
            onChange={onChangeHandler}
            placeholder="First Name"
            name="firstName"
            value={user.firstName}
          />
          <CustomInput
            onChange={onChangeHandler}
            placeholder="Last Name"
            name="lastName"
            value={user.lastName}
          />
          <CustomInput
            onChange={onChangeHandler}
            placeholder="Email"
            name="email"
            value={user.email}
          />
          <CustomInput
            onChange={onChangeHandler}
            placeholder="Password"
            name="password"
            type="password"
            value={user.password}
          />
          <CustomInput
            onChange={onChangeHandler}
            placeholder="Confirm Password"
            name="confirmPassword"
            type="password"
            value={passwordConfirmation}
          />
          {error && <Error>Passwords should match</Error>}
          <ButtonContainer>
            <Button onClick={onButtonClickHandler}>Login</Button>
          </ButtonContainer>
        </LoginContainer>
      </LoginWrapper>
    </>
  );
}
