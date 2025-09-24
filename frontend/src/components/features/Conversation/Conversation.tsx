import React from 'react';
import {Paper} from "@mui/material";
import CustomButton from "@/components/ui/CustomButton/CustomButton";
import CustomTextField from "@/components/ui/CustomTextField/CustomTextField";
import scss from "./Conversation.module.scss"

export interface ConversationProps {
    text: string;
    sender: 'user' | 'bot' | string;
    timestamp: string;
}

const Conversation:React.FC<ConversationProps> = ({ text, sender, timestamp }) => {
    return (
        <Paper className={scss.conversationContainer} elevation={3}>
            <CustomTextField className={scss.conversationText} placeholder="Message header" >
                temp text
                {text}
                {sender}
                {timestamp}
            </CustomTextField>

            <div className={scss.conversationBtns}>
                <CustomButton>
                    Edit
                </CustomButton>
                <CustomButton>
                    Remove
                </CustomButton>
            </div>
        </Paper>

    );
};

export default Conversation;