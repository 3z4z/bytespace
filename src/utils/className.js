export const className = (errorCondition) => {
  return `input w-full z-2 mt-2 py-5 focus:border-secondary border-shuttle-gray-100 ${errorCondition ? "border-error! ring-3 ring-error/25 bg-error/5!" : "ring-0"}`;
};
