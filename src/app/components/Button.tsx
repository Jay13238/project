import React from "react";

type Props = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {};

const Button = (props: Props) => {
  return (
    <button
      className=" cursor-pointer w-[10rem] py-3 text-white font-bold rounded-lg bg-sub-DEFUALT hover:bg-hover-100 transition-all duration-75"
      {...props}
    />
  );
};
export default Button;
