import { Button, TextField } from "@mui/material";
import React, { useContext } from "react";
import { Controller, useForm } from "react-hook-form";
import { authContext } from "../../context/authContext";
import { Link, useNavigate } from "react-router-dom";

const RecoveryAccount = () => {
  const {
    control,
    formState: { errors },
    watch,
    register,
    handleSubmit,
  } = useForm();

  const navigate = useNavigate();

  const { handleRecoveryAccount } = useContext(authContext);

  const pwd = watch("new_password");

  const onSubmit = (data) => {
    console.log(data);
    handleRecoveryAccount(data, navigate);
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
            name="code"
            rules={{ required: "Введите код!" }}
            render={({ field }) => (
              <TextField
                label="Введите код"
                variant="outlined"
                type="text"
                className="sign-up__input"
                error={!!errors.code}
                helperText={errors.code?.message?.toString()}
                {...field}
              />
            )}
          />
          <Controller
            control={control}
            name="new_password"
            rules={{ required: "Введите пароль!" }}
            render={({ field }) => (
              <TextField
                label="Пароль"
                variant="outlined"
                type="text"
                className="sign-up__input"
                error={!!errors.new_password}
                helperText={errors.new_password?.message?.toString()}
                {...field}
              />
            )}
          />
          <Controller
            control={control}
            name="new_password2"
            rules={{
              required: "Потвердите пароль!",
              validate: (value) => value === pwd || "Пароли не совпадают!",
            }}
            render={({ field }) => (
              <TextField
                label="Потвердите пароль"
                variant="outlined"
                type="text"
                className="sign-up__input"
                error={!!errors.new_password2}
                helperText={errors.new_password2?.message?.toString()}
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
        </form>
      </div>
    </div>
  );
};
export default RecoveryAccount;
