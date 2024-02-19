import React from 'react';

interface ISwiperButtonProps {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  isEnd?: boolean;
  children: React.ReactNode;
}

const SwiperButton = ({ onClick, isEnd, children }: ISwiperButtonProps) => {
  return (
    <button
      className={
        isEnd
          ? 'text-gray cursor-default'
          : 'hover:underline hover:underline-offset-[10px]'
      }
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default SwiperButton;
