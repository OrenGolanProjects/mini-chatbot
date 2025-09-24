import React from 'react';
import {Paper} from "@mui/material";
import CustomTextField from "@/components/ui/CustomTextField/CustomTextField";
import scss from "./ConversationHistory.module.scss"
import Conversation from "@/components/features/Conversation/Conversation";

const ConversationHistory = () => {
    return (
        <Paper
            elevation={1}
            className={scss.conversationHistory}
        >
            <CustomTextField >
                <Conversation />
                <Conversation />
                <Conversation />
                <Conversation />
                <Conversation />
                <Conversation />
                <Conversation />
                <Conversation />
                <Conversation />
                <Conversation />
                <Conversation />

            </CustomTextField>
        </Paper>
    );
};

export default ConversationHistory;