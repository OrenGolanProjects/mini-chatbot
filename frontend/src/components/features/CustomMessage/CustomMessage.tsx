import React from 'react';
import {Paper , useTheme} from "@mui/material";
import CustomAvatar from "@/components/ui/CustomAvatar/CustomAvatar";
import CustomTextField from "@/components/ui/CustomTextField/CustomTextField";
import scss from "./CustomMessage.module.scss"

export interface MessageProps {
    text: string;
    sender: 'user' | 'bot' | string;
    timestamp: string;
    avatar?: React.ReactNode;
}

const CustomMessage: React.FC<MessageProps> = ({ text, sender, timestamp, avatar }) => {
    const theme = useTheme();
    const isUser = sender === 'user';
    const bgColor = isUser ? theme.palette.primary.main : theme.palette.secondary.main;

    return (
        <Paper
            className={scss.messageContainer}
            elevation={1}
            style={{
                backgroundColor: bgColor,
                color: '#fff',
                marginLeft: isUser ? 'auto' : undefined,
                marginRight: !isUser ? 'auto' : undefined,
            }}
        >
            <div className={scss.messageContent}>
                <CustomAvatar type={sender}>{avatar}</CustomAvatar>
                <div className={scss.textContainer}>
                    <CustomTextField variant="body1" className={scss.messageText}>
                        {text}
                    </CustomTextField>
                    <div className={scss.timestamp}>{timestamp}</div>
                </div>
            </div>
        </Paper>
    );
};


export default CustomMessage;