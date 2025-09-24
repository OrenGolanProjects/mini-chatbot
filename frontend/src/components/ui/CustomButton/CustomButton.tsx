import * as React from 'react';
import Button, { ButtonProps } from '@mui/material/Button';

interface CustomButtonProps extends Omit<ButtonProps, 'color'> {
    id?: string;
    className?: string;
    children?: React.ReactNode;
}

const CustomButton: React.FC<CustomButtonProps> = ({ className, children, ...props }) => {
    return (
        <Button
            className={className}
            {...props}
        >
            {children}
        </Button>
    );
};

export default CustomButton;
