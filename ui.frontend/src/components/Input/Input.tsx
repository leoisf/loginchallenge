import React from "react";

type InputProps = React.HTMLAttributes<HTMLInputElement> &
  React.HTMLProps<HTMLInputElement>;

const Input = ({
  className, ...props
}:InputProps): JSX.Element => {
  return (
    <input
      className={
        className
      }
      type="text"
      {...props}
    />
  );
}

export default Input;

