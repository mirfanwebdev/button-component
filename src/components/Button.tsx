import React from "react";

type IconPosition = 'left' | 'right';
type TooltipPosition = 'top' | 'bottom' | 'left' | 'right';
type ButtonSize = 'small' | 'medium' | 'large';
type ButtonColor = 'primary' | 'secondary' | 'danger';

interface ButtonProps {
    label: string;
    backgroundColor?: ButtonColor;
    size: ButtonSize;
    onClick?: () => void;
    icon?: React.ReactNode;
    iconPosition?: IconPosition;
    tooltip?: string;
    tooltipPosition?: TooltipPosition;
}

const Button: React.FC<ButtonProps> = ({
    label,
    onClick,
    backgroundColor = 'primary',
    size = 'medium',
    icon,
    iconPosition = 'left',
    tooltip,
    tooltipPosition = 'top',
}) => {
    // Dynamic styles
    const backgroundStyles = {
        primary: 'bg-blue-500 text-white hover:bg-blue-600',
        secondary: 'bg-gray-500 text-white hover:bg-gray-600',
        danger: 'bg-red-500 text-white hover:bg-red-600',
    }

    const sizeStyles = {
        small: 'px-2 py-1 text-sm',
        medium: 'px-4 py-2 text-base',
        large: 'px-6 py-3 text-lg',
    }

    const tooltipStyles = {
        top: 'top-[-2.5rem] left-1/2 transform -translate-x-1/2',
        bottom: 'bottom-[-2.5rem] left-1/2 transform -translate-x-1/2',
        left: 'left-[-2.5rem] top-1/2 transform -translate-y-1/2',
        right: 'right-[-2.5rem] top-1/2 transform -translate-y-1/2',
    }

    return (
        <div className="relative group">
            {tooltip && (
                <div className={`absolute hidden group-hover:block w-max px-2 py-1 text-sm text-white bg-black rounded shadow-lg ${tooltipStyles[tooltipPosition]}`}>
                    {tooltip}
                </div>
            )}
            <button onClick={onClick} className={`flex items-center justify-center gap-2 rounded focus:outline-none focus:ring-offset-2 focus:ring-blue-300 ${backgroundStyles[backgroundColor]} ${sizeStyles[size]}`}>
                {icon && iconPosition === 'left' && <span>{icon}</span>}
                <span>{label}</span>
                {icon && iconPosition === 'right' && <span>{icon}</span>}
            </button>
        </div>
    );
};

export default Button;