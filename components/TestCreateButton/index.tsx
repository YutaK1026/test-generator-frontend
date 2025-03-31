"use client";

import TestCreateButtonPresenter from "./presenter";
import { useSession } from "next-auth/react";

const TestCreateButton = () => {
  const { status } = useSession();
  return <TestCreateButtonPresenter status={status} />;
};

export default TestCreateButton;
