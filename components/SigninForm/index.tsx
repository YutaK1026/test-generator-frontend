"use client";

import React from "react";
import { useSigninForm } from "./hooks/hooks";
import { SigninFormPresenter } from "./presenter";

export const SigninForm: React.FC = () => {
  const {
    email,
    setEmail,
    name,
    setName,
    password,
    setPassword,
    handleSubmit,
  } = useSigninForm();

  return (
    <SigninFormPresenter
      email={email}
      setEmail={setEmail}
      name={name}
      setName={setName}
      password={password}
      setPassword={setPassword}
      handleSubmit={handleSubmit}
    />
  );
};
