"use client";

import { FacebookIcon, GoogleIcon } from "@/components/icons/Icons";
import AuthContentComponent from "@/components/shared/AuthContent";
import AuthFormTitleComponent from "@/components/shared/AuthFormTitle";
import AuthFormCard from "@/components/ui/AuthFormCard";
import { toastConfig } from "@/utils/toastConfig";
import Link from "next/link";
import { toast } from "react-toastify";

export default function LoginPage() {
  const handleFacebookLogin = () => {
    const errorMessage = "Facebook login under maintenance. Try again later.";
    toast.error(errorMessage, { ...toastConfig });
  };

  const handleGoogleLogin = () => {
    toast.info("Google login coming soon!", { ...toastConfig });
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
        <form className="auth-form">
          <fieldset className="w-full">
            <label className="text-sm">Email</label>
            <input
              type="email"
              placeholder="user@email.com"
              className="input w-full mt-2 py-5 focus:border-secondary border-shuttle-gray-100"
            />
          </fieldset>
          <fieldset className="w-full">
            <label className="text-sm">Password</label>
            <input
              type="password"
              placeholder="******"
              className="input w-full mt-2 py-5 focus:border-secondary border-shuttle-gray-100"
            />
          </fieldset>
          <div className="ms-auto">
            <button className="btn btn-primary btn-lg w-max px-7 border-none">
              Sign In
            </button>
          </div>
          <div className="divider">or</div>
          <div className="flex justify-center gap-5">
            <button
              type="button"
              onClick={handleFacebookLogin}
              className="btn bg-transparent hover:bg-secondary/5 grayscale-100 hover:grayscale-0 size-20 flex items-center justify-center rounded-2xl! group transition-all"
            >
              <FacebookIcon className="size-10 contrast-200 group-hover:contrast-100" />
            </button>
            <button
              type="button"
              onClick={handleGoogleLogin}
              className="btn bg-transparent hover:bg-secondary/5 grayscale-100 hover:grayscale-0 size-20 flex items-center justify-center rounded-2xl! group transition-all"
            >
              <GoogleIcon className="size-10 contrast-200 group-hover:contrast-100" />
            </button>
          </div>
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
