"use client";

import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Modal from "./Modal";
import Input from "../inputs/Input";
import Button from "../buttons/Button";
import { FcGoogle } from "react-icons/fc";
import { useAppDispatch, useAppSelector } from "@/app/redux/hooks";
import { loginModalFunc } from "@/app/redux/modalSlice";

const LoginModal = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const { loginModal } = useAppSelector((state) => state.modal);
  const dispatch = useAppDispatch();
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
  };

  const bodyElement = (
    <div>
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
    <div className="mt-5">
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
          isOpen={loginModal}
          onSubmit={handleSubmit(onSubmit)}
          onClose={() => {
            dispatch(loginModalFunc());
          }}
          btnLabel="Login"
          title="Login"
        />
      }
    </div>
  );
};

export default LoginModal;
