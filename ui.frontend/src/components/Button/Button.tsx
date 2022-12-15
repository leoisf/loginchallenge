import React from 'react';
import './button.css';

interface ButtonProps {
  children: React.ReactNode;
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  type?: "button" | "submit" | "reset";

  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  ...props
}: ButtonProps): JSX.Element => {
  const mode = primary ? 'loginchallenge-button--primary' : 'loginchallenge-button--secondary';
  return (
    <button
      type="button"
      className={['loginchallenge-button', `loginchallenge-button--${size}`, mode].join(' ')}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};
export default Button;
