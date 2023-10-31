"use client";

import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Modal from "./Modal";
import Input from "../inputs/Input";

const RegisterModal = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FieldValues>();
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
  return (
    <div>
      {
        <Modal
          bodyElement={bodyElement}
          isOpen
          onSubmit={() => {}}
          onClose={() => {}}
          btnLabel="Register"
          title="Register"
        />
      }
    </div>
  );
};

export default RegisterModal;
