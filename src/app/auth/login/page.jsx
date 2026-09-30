"use client";

import { SpinnerIcon } from "@/components/icons/Icons";
import AuthContentComponent from "@/components/shared/AuthContent";
import AuthFormTitleComponent from "@/components/shared/AuthFormTitle";
import SocialLogin from "@/components/shared/SocialLogin";
import AuthFormCard from "@/components/ui/AuthFormCard";
import { className } from "@/utils/className";
import { regex } from "@/utils/regex";
import { toastConfig } from "@/utils/toastConfig";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

export default function LoginPage() {
  const router = useRouter();
  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
  } = useForm({
    mode: "all",
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const handleKeyDown = (e) => {
    if (e.key === " ") {
      e.preventDefault();
    }
  };

  const onLoginSubmit = async (data) => {
    const { email } = data;
    const freshEmail = email.trim().toLowerCase();
    const res = await signIn("credentials", {
      email: freshEmail,
      password: data.password,
      redirect: false,
    });
    if (res?.error) {
      toast.error("login failed");
    } else {
      router.push("/");
      toast.success("Login successful. Welcome back!", {
        ...toastConfig,
        position: "top-center",
      });
    }
  };
  return (
    <AuthContentComponent
      title={"Sign in with ease"}
      subtitle={
        "Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge."
      }
    >
      <AuthFormCard>
        <AuthFormTitleComponent heading="Welcome Back" title="Sign In" />
        <form onSubmit={handleSubmit(onLoginSubmit)} className="auth-form">
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
                onChange: (e) => {
                  e.target.value = e.target.value.replace(/\s/g, "");
                },
              })}
              onKeyDown={handleKeyDown}
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
              type="submit"
              disabled={isSubmitting}
              className="btn btn-primary btn-lg w-max px-7 border-none"
            >
              {isSubmitting ? (
                <>
                  <SpinnerIcon />
                  Signing in
                </>
              ) : (
                "Sign In"
              )}
            </button>
          </div>
          <div className="divider">or</div>
          <SocialLogin />
        </form>
        <div className="text-center">
          <p className="text-lg">
            New here?{" "}
            <Link
              href={"/auth/register"}
              className="text-secondary hover:underline"
            >
              Create an account
            </Link>
          </p>
        </div>
      </AuthFormCard>
    </AuthContentComponent>
  );
}
