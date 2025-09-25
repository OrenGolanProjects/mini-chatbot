import React from 'react';
import {Paper} from "@mui/material";
import CustomButton from "@/components/ui/CustomButton/CustomButton";
import CustomTextField from "@/components/ui/CustomTextField/CustomTextField";
import scss from "./Conversation.module.scss"

export interface ConversationProps {
    text: string;
    timestamp: string;
}

const Conversation:React.FC<ConversationProps> = ({ text, timestamp }) => {
    return (
        <Paper className={scss.conversationContainer} elevation={3}>
            <div>
                <CustomTextField className={scss.conversationText}>
                    {text}
                </CustomTextField>
                <CustomTextField className={scss.conversationTimestamp}>
                    {timestamp}
                </CustomTextField>
            </div>

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