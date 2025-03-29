import { useState } from "react";
import { useRouter } from "next/navigation";

export const useSigninForm = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    //TODO: DBにデータを追加して，sessionに値を追加する
    router.push("/");
  };

  return {
    email,
    setEmail,
    name,
    setName,
    password,
    setPassword,
    handleSubmit,
  };
};
