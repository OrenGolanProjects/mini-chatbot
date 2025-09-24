import * as React from 'react';
import Avatar, {AvatarProps} from '@mui/material/Avatar';

type CustomAvatarProps = AvatarProps & {
    className?: string;
    src?: string;
    type?: 'user' | 'bot' | string;
};

const CustomAvatar: React.FC<CustomAvatarProps> = ({ className, src, type, ...props }) => {

    return <Avatar
        className={className}
        src={src}
        {...props}
    />;
};

export default CustomAvatar;
