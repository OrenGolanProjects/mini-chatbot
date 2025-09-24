import * as React from 'react';
import Typography, { TypographyProps } from "@mui/material/Typography";

type CustomTypographyProps  = TypographyProps & {
    className?: string;
    href?: string;
};

const CustomTextField: React.FC<CustomTypographyProps > = ({ className, href,...props }) => {
    return(
        <Typography
            className={className}
            component={href ? "a" : "span"}
            href={href}
            {...props}
        />
    );
};

export default CustomTextField;