import React from 'react';
import { Paper } from '@mui/material';
import scss from "./ChatArea.module.scss"
import CustomMessage, {MessageProps} from "@/components/features/CustomMessage/CustomMessage";

interface ChatAreaProps {
    messages?: MessageProps[];
}

const ChatArea: React.FC<ChatAreaProps> = ({ messages = [
    { text: 'Hello! This message uses: Avatar + Text + Paper', sender: 'bot', timestamp: '10:30 AM' },
    { text: 'Hi! I understand the component composition pattern now!', sender: 'user', timestamp: '10:31 AM' },
    { text: 'Perfect! Each component has a single responsibility.', sender: 'bot', timestamp: '10:31 AM' },
    { text: 'Hello! This message uses: Avatar + Text + Paper', sender: 'bot', timestamp: '10:30 AM' },
    { text: 'Hi! I understand the component composition pattern now!', sender: 'user', timestamp: '10:31 AM' },
    { text: 'Perfect! Each component has a single responsibility.', sender: 'bot', timestamp: '10:31 AM' },
    { text: 'Hello! This message uses: Avatar + Text + Paper', sender: 'bot', timestamp: '10:30 AM' },
    { text: 'Hi! I understand the component composition pattern now!', sender: 'user', timestamp: '10:31 AM' },
    { text: 'Perfect! Each component has a single responsibility.', sender: 'bot', timestamp: '10:31 AM' },
] }) => {
    return (
        <Paper elevation={1} className={scss.chat_area} >
            {messages.map((msg, index) => (
                <CustomMessage
                    key={index}
                    {...msg}
                    avatar={msg.avatar || (msg.sender === 'user' ? '👤' : '🤖')}
                />
            ))}
        </Paper>
    );
};

export default ChatArea;