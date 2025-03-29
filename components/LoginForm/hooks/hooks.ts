import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

export const useLoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [isError, setIsError] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const result = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (result?.ok) {
      router.push("/");
    } else {
      setIsError(true);
    }
  };

  const handleSecondary = () => {
    router.push("/signin");
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    remember,
    setRemember,
    isError,
    handleSubmit,
    handleSecondary,
  };
};
