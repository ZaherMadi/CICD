import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { validationSchema } from "../utils/validation";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RegistrationForm = ({ addUser }) => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(validationSchema)
  });

  const onSubmit = (data) => {
    addUser(data);
    toast.success("Utilisateur enregistré avec succès !");
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Nom</label>
        <input type="text" {...register("firstName")} />
        <p>{errors.firstName?.message}</p>
      </div>
      <div>
        <label>Prénom</label>
        <input type="text" {...register("lastName")} />
        <p>{errors.lastName?.message}</p>
      </div>
      <div>
        <label>Email</label>
        <input type="email" {...register("email")} />
        <p>{errors.email?.message}</p>
      </div>
      <div>
        <label>Date de naissance</label>
        <input type="date" {...register("birthDate")} />
        <p>{errors.birthDate?.message}</p>
      </div>
      <div>
        <label>Ville</label>
        <input type="text" {...register("city")} />
        <p>{errors.city?.message}</p>
      </div>
      <div>
        <label>Code Postal</label>
        <input type="text" {...register("postalCode")} />
        <p>{errors.postalCode?.message}</p>
      </div>
      <button type="submit">S'enregistrer</button>
    </form>
  );
};

export default RegistrationForm;
