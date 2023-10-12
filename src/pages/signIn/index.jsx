import { Button, TextField } from "@mui/material";
import React, { useContext } from "react";
import { Controller, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { authContext } from "../../context/authContext";

const SignIn = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
    register,
  } = useForm();

  const { handleSignIn } = useContext(authContext);

  const navigate = useNavigate();

  const onSubmit = (data) => {
    handleSignIn(data, navigate);
  };

  return (
    <div className="sign-up">
      <div className="sign-up__container">
        <form className="sign-up__form" onSubmit={handleSubmit(onSubmit)}>
          <Controller
            control={control}
            name="email"
            rules={{ required: "Введите почту!" }}
            render={({ field }) => (
              <TextField
                error={!!errors.email}
                helperText={errors.email?.message?.toString()}
                label="Электронная почта"
                variant="outlined"
                type="text"
                className="sign-up__input"
                {...register("email", {
                  pattern: {
                    value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                    message: "Entered value does not match email format",
                  },
                })}
                {...field}
              />
            )}
          />
          <Controller
            control={control}
            name="password"
            rules={{ required: "Введите пароль!" }}
            render={({ field }) => (
              <TextField
                label="Пароль"
                variant="outlined"
                type="text"
                className="sign-up__input"
                error={!!errors.password}
                helperText={errors.password?.message?.toString()}
                {...field}
              />
            )}
          />
          <Button type="submit" variant="contained">
            Потвердить
          </Button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
