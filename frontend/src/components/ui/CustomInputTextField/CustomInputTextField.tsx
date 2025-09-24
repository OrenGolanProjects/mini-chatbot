import * as React from 'react';
import { TextFieldProps } from "@mui/material";
import TextField from "@mui/material/TextField";

type CustomInputTextFieldProps = TextFieldProps & {
    className?: string;
};

const CustomInputTextField: React.FC<CustomInputTextFieldProps> = ({ className, ...props }) => {
    return <TextField className={className} {...props} />;
};

export default CustomInputTextField;
