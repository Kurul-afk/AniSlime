import { Button, TextField } from "@mui/material";
import React, { useContext } from "react";
import { Controller, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { authContext } from "../../context/authContext";
import { useState } from "react";

const RecoveryPage = () => {
  const {
    control,
    formState: { errors },
    watch,
    register,
    handleSubmit,
  } = useForm();
  const [showInput, setShowInput] = useState(false);

  const navigate = useNavigate();

  const { sendCode } = useContext(authContext);

  const onSubmit = (data) => {
    console.log(data);
    sendCode(data, navigate);
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

export default RecoveryPage;
