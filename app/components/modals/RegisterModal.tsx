"use client";

import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Modal from "./Modal";
import Input from "../inputs/Input";
import Button from "../buttons/Button";
import { FcGoogle } from "react-icons/fc";

const RegisterModal = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
  };

  const bodyElement = (
    <div>
      <Input
        id="name"
        type="text"
        placeholder="Name"
        register={register}
        errors={errors}
        required
      />
      <Input
        id="email"
        type="text"
        placeholder="email"
        register={register}
        errors={errors}
        required
      />
      <Input
        id="password"
        type="password"
        placeholder="password"
        register={register}
        errors={errors}
        required
      />
    </div>
  );

  const footerElement = (
    <div>
      <Button
        btnLabel="Google ile Giriş"
        outline
        icon={FcGoogle}
        onSubmit={() => {}}
      />
    </div>
  );

  return (
    <div>
      {
        <Modal
          footerElement={footerElement}
          bodyElement={bodyElement}
          isOpen
          onSubmit={handleSubmit(onSubmit)}
          onClose={() => {}}
          btnLabel="Register"
          title="Register"
        />
      }
    </div>
  );
};

export default RegisterModal;
