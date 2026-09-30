"use client";

import { SpinnerIcon } from "@/components/icons/Icons";
import AuthContentComponent from "@/components/shared/AuthContent";
import AuthFormTitleComponent from "@/components/shared/AuthFormTitle";
import SocialLogin from "@/components/shared/SocialLogin";
import AuthFormCard from "@/components/ui/AuthFormCard";
import { className } from "@/utils/className";
import { regex } from "@/utils/regex";
import Link from "next/link";
import { useForm } from "react-hook-form";

export default function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    mode: "all",
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });
  const onRegisterSubmit = (data) => {
    const freshName = data.name.replace(/\s+/g, " ").trim();
    const freshEmail = data.email.trim().toLowerCase();

    const freshData = {
      ...data,
      name: freshName,
      email: freshEmail,
    };

    console.log(freshData);
  };

  return (
    <AuthContentComponent
      title={"Sign up and come in"}
      subtitle={
        "The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost"
      }
    >
      <AuthFormCard>
        <AuthFormTitleComponent
          heading="Welcome to ByteSpace"
          title="Create an Account"
        />
        <form onSubmit={handleSubmit(onRegisterSubmit)} className="auth-form">
          <fieldset className="w-full relative">
            <label className="text-sm">Name</label>
            <input
              type="text"
              placeholder="John Smith"
              className={className(errors.name)}
              {...register("name", {
                required: regex.name.required,
                pattern: {
                  value: regex.name.value,
                  message: regex.name.invalid,
                },
                minLength: {
                  value: 3,
                  message: regex.name.lengthInvalid,
                },
              })}
            />
            <p
              className={`absolute left-2 transition-all duration-175 text-error font-medium text-xs ${
                errors.name
                  ? "top-19 opacity-100"
                  : "top-16 opacity-0 pointer-events-none"
              }`}
            >
              {errors.name?.message}
            </p>
          </fieldset>
          <fieldset className="w-full relative">
            <label className="text-sm">Email</label>
            <input
              type="email"
              placeholder="john.smith@email.com"
              className={className(errors.email)}
              {...register("email", {
                required: regex.email.required,
                pattern: {
                  value: regex.email.value,
                  message: regex.email.invalid,
                },
              })}
            />
            <p
              className={`absolute left-2 transition-all duration-175 text-error font-medium text-xs ${
                errors.email
                  ? "top-19 opacity-100"
                  : "top-16 opacity-0 pointer-events-none"
              }`}
            >
              {errors.email?.message}
            </p>
          </fieldset>
          <fieldset className="w-full relative">
            <label className="text-sm">Password</label>
            <input
              type="password"
              placeholder="******"
              className={className(errors.password)}
              {...register("password", {
                required: regex.password.required,
                pattern: {
                  value: regex.password.value,
                  message: regex.password.invalid,
                },
              })}
            />
            <p
              className={`absolute left-2 transition-all duration-175 text-error font-medium text-xs ${
                errors.password
                  ? "top-19 opacity-100"
                  : "top-16 opacity-0 pointer-events-none"
              }`}
            >
              {errors.password?.message}
            </p>
          </fieldset>
          <div className="ms-auto">
            <button
              disabled={isSubmitting}
              className="btn btn-primary btn-lg w-max px-7 border-none"
            >
              {isSubmitting ? (
                <>
                  <SpinnerIcon />
                  Creating account
                </>
              ) : (
                "Continue"
              )}
            </button>
          </div>
          <div className="divider">or</div>
          <SocialLogin />
        </form>
        <div className="text-center">
          <p className="text-lg">
            Already have an account?{" "}
            <Link
              href={"/auth/login"}
              className="text-secondary hover:underline"
            >
              Login
            </Link>
          </p>
        </div>
      </AuthFormCard>
    </AuthContentComponent>
  );
}
