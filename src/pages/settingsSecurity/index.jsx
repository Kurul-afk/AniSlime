import { Button, TextField } from "@mui/material";
import React, { useContext } from "react";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { authContext } from "../../context/authContext";

const SettingsSecurity = () => {
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
    <div className="settings__security">
      <form className="sign-up__form" onSubmit={handleSubmit(onSubmit)}>
        <Controller
          control={control}
          name="password_old"
          rules={{ required: "Введите cтарый пароль!" }}
          render={({ field }) => (
            <TextField
              label="Введите свой старый пароль"
              variant="outlined"
              type="text"
              className="sign-up__input"
              error={!!errors.password_old}
              helperText={errors.password_old?.message?.toString()}
              {...field}
            />
          )}
        />
        <Controller
          control={control}
          name="password_new"
          rules={{ required: "Введите пароль!" }}
          render={({ field }) => (
            <TextField
              label="Введите новый пароль"
              variant="outlined"
              type="text"
              className="sign-up__input"
              error={!!errors.password_new}
              helperText={errors.password_new?.message?.toString()}
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
  );
};

export default SettingsSecurity;
