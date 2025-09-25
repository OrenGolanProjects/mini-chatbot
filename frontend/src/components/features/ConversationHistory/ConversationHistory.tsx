import React from 'react';
import {Paper} from "@mui/material";
import CustomTextField from "@/components/ui/CustomTextField/CustomTextField";
import scss from "./ConversationHistory.module.scss"
import Conversation, {ConversationProps} from "@/components/features/Conversation/Conversation";

const ConversationHistory = () => {
    const [converstaions, setConverstaions] = React.useState<ConversationProps[]>([]);

    return (
        <Paper
            elevation={1}
            className={scss.conversationHistory}
        >
            {converstaions.map((conversation, index) => (
                <CustomTextField >
                    <Conversation text={conversation.text} timestamp={conversation.timestamp} />
                </CustomTextField>
            ))}

        </Paper>
    );
};

export default ConversationHistory;