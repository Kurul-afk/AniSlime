import { Button, TextField } from "@mui/material";
import React, { useContext } from "react";
import { Controller, useForm } from "react-hook-form";
import "./style.css";
import { authContext } from "../../context/authContext";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const {
    control,
    formState: { errors },
    watch,
    register,
    handleSubmit,
  } = useForm();

  const navigate = useNavigate();

  const { handleSignUp } = useContext(authContext);

  const pwd = watch("password");

  const onSubmit = (data) => {
    console.log(data);
    handleSignUp(data, navigate);
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
          <Controller
            control={control}
            name="password2"
            rules={{
              required: "Потвердите пароль!",
              validate: (value) =>
                value === pwd || "The passwords do not match",
            }}
            render={({ field }) => (
              <TextField
                label="Потвердите пароль"
                variant="outlined"
                type="text"
                className="sign-up__input"
                error={!!errors.password2}
                helperText={errors.password2?.message?.toString()}
                {...field}
              />
            )}
          />
          <Button
            className="sign-up__btn_submit"
            type="submit"
            variant="contained"
          >
            Потвердить
          </Button>
          <p>
            Если у вас уже есть аккаунт <Link to="/sign-in">Логин</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
