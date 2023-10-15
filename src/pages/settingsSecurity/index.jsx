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
    watch,
  } = useForm();

  const { handleChangePassword, refreshTokens } = useContext(authContext);

  const navigate = useNavigate();

  const pwd = watch("new_password");

  const onSubmit = (data) => {
    console.log(data)
    handleChangePassword(data, navigate);
  };

  return (
    <div className="settings__security">
      <form className="sign-up__form" onSubmit={handleSubmit(onSubmit)}>
        <Controller
          control={control}
          name="old_password"
          rules={{ required: "Введите cтарый пароль!" }}
          render={({ field }) => (
            <TextField
              label="Введите свой старый пароль"
              variant="outlined"
              type="text"
              className="sign-up__input"
              error={!!errors.old_password}
              helperText={errors.old_password?.message?.toString()}
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
              label="Введите новый пароль"
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
          rules={{ required: "Введите пароль!",
          validate: (value) =>
          value === pwd || "Пароли не совпадают!",
      }}
          render={({ field }) => (
            <TextField
              label="Потвердите новый пароль"
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
  );
};

export default SettingsSecurity;
