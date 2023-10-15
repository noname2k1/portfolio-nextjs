import classNames from 'classnames';
import React from 'react';

interface Props {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary';
    rounded?: boolean;
    onClick?: () => void;
}

const CustomButton = ({
    children,
    variant = 'primary',
    rounded = true,
    onClick,
}: Props) => {
    return (
        <button
            className={classNames(
                'border py-4 px-6 uppercase text-sm tracking-widest mr-2 hover:bg-opacity-70 duration-150 font-semibold',
                {
                    'text-black bg-secondary border-secondary':
                        variant === 'secondary',
                    'border-white bg-black hover:bg-white/20':
                        variant === 'primary',
                    'rounded-full': rounded,
                }
            )}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default CustomButton;
