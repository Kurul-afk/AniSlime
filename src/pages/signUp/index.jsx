import { TextField } from '@mui/material';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import './style.css'
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
    const {
        control,
        formState: {errors},
        watch,
        register, 
        handleSubmit,
    } = useForm()
    const pwd = watch('password')
    const navigate = useNavigate()

    const onSubmit = (data)=>{
        console.log('worked')
    }

    return (
        <div className='sign-up'>
            <div className="sign-up__container">
              <form className='sign-up__form' onSubmit={handleSubmit(onSubmit)}>
                <Controller
                control={control}
                name="email"
                rules={{required: 'Введите почту!'}}
                render={({ field }) => (
                  <TextField 
                    error={!!errors.email}
                    helperText={errors.email?.message?.toString()}
                    label="Электронная почта" 
                    variant="outlined" 
                    type='text'
                    className='sign-up__input'
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
                rules={{required: 'Введите пароль!'}}
                render={({ field }) => (
                  <TextField 
                    error={!!errors.password}
                    helperText={errors.password?.message?.toString()}
                    label="Пароль" 
                    variant="outlined" 
                    type='text'
                    className='sign-up__input'
                    {...field}
                  />
                )}
              />
              <Controller
                control={control}
                name="password_confrim"
                rules={{required: 'Потвердите пароль!', validate: (value) => value === pwd ||  'The passwords do not match',
               }}
                render={({ field }) => (
                  <TextField 
                    error={!!errors.password_confrim}
                    helperText={errors.password_confrim?.message?.toString()}
                    label="Пароль потвердите пароль" 
                    variant="outlined"
                    type='text'
                    className='sign-up__input'
                    {...field}
                  />
                )}
              />
              </form>
            </div>
        </div>
    );
};

export default SignUp;