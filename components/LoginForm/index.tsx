"use client";

import React from "react";
import { LoginFormPresenter } from "./presenter";
import { useLoginForm } from "./hooks/hooks";

export const LoginForm: React.FC = () => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    remember,
    setRemember,
    isError,
    handleSubmit,
    handleSecondary,
  } = useLoginForm();
  return (
    <LoginFormPresenter
      email={email}
      setEmail={setEmail}
      password={password}
      setPassword={setPassword}
      remember={remember}
      setRemember={setRemember}
      isError={isError}
      handleSubmit={handleSubmit}
      handleSecondary={handleSecondary}
    />
  );
};
