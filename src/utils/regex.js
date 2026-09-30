export const regex = {
  name: {
    required: "Name is required",
    value: /^[A-Za-z0-9](?:[A-Za-z0-9 ]{1,}[A-Za-z0-9])?$/,
    invalid: "Use only letters, numbers & spaces. No starting or ending spaces",
    lengthInvalid: `Name must be at least 3 characters`,
  },
  email: {
    required: "Email is required",
    value: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/,
    invalid: "Email address is invalid",
  },
  password: {
    required: "Password is required",
    value: /^(?=.*[A-Z])(?=.*[a-z])(?=.*[@#$%&]).{6,}$/,
    invalid:
      "Min 6 chars, with uppercase, lowercase & special character (@#$%&)",
  },
};
