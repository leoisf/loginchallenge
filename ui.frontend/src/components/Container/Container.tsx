import React from "react";
import './container.css';

import ima from "../assets/image2.png"


interface ContainerProps {
    children: React.ReactNode;
    flex?: boolean;
    justify_content?: 'center' | 'left'| 'right' |'space-between' | 'space-around';
  }

  /**
   * Primary UI component for user interaction
   */
  export const Container =({
      flex = false,
      justify_content = 'left',
      ...props
  }: ContainerProps) => {
    const mode = flex ? 'loginchallenge-cantainer--flex' : 'loginchallenge-cantainer--block';
    return (
      <div
        {...props}
        className={['loginchallenge-cantainer', `loginchallenge-cantainer--${justify_content}`, mode].join(' ')}
      >

      </div>
    );
  };

  