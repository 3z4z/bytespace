"use client";

import { toastConfig } from "@/utils/toastConfig";
import { toast } from "react-toastify";
import { FacebookIcon, GoogleIcon } from "../icons/Icons";
import { signIn } from "next-auth/react";

export default function SocialLogin() {
  const handleFacebookLogin = () => {
    const errorMessage = "Facebook login under maintenance. Try again later.";
    toast.error(errorMessage, { ...toastConfig });
  };

  const handleGoogleLogin = async (callbackUrl) => {
    await signIn("google", { callbackUrl });
  };
  return (
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
        onClick={() => handleGoogleLogin("/")}
        className="btn bg-transparent hover:bg-secondary/5 grayscale-100 hover:grayscale-0 size-20 flex items-center justify-center rounded-2xl! group transition-all"
      >
        <GoogleIcon className="size-10 contrast-200 group-hover:contrast-100" />
      </button>
    </div>
  );
}
