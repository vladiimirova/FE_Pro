import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import InputField from "./InputField.js";

const schema = z.object({
  name: z
    .string()
    .min(5, { message: "Name must be at least 5 characters long" }),
  email: z.string().email({ message: "Invalid email address" }),
  age: z
    .string()
    .transform((val) => parseInt(val, 10))
    .pipe(z.number().min(18, { message: "Must be at least 18 years old" })),
  lastName: z
    .string()
    .min(5, { message: "Last Name must be at least 5 characters long" }),
  phone: z
    .string()
    .regex(/^\+380[0-9\s]+$/, { message: "Phone number must start with +380" })
    .min(13, { message: "Phone number must be at least 13 characters long" })
    .max(16, { message: "Phone number cannot exceed 16 characters" }),
});

const RegistrationForm = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white p-8 rounded-lg shadow-md w-[392px] h-[702px]"
    >
      <h1 className="text-2xl font-semibold mb-4 text-center">
        Registration Form
      </h1>

      <InputField
        label="Name"
        register={register("name")}
        errors={errors.name}
        type="text"
      />
      <InputField
        label="Last Name"
        register={register("lastName")}
        errors={errors.lastName}
        type="text"
      />
      <InputField
        label="Age"
        register={register("age")}
        errors={errors.age}
        type="number"
      />
      <InputField
        label="Email"
        register={register("email")}
        errors={errors.email}
        type="text"
      />
      <InputField
        label="Phone"
        register={register("phone")}
        errors={errors.phone}
        type="text"
      />

      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200"
      >
        Submit
      </button>
    </form>
  );
};

export default RegistrationForm;
