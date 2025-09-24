// ChatLayout.tsx
import * as React from 'react';
import { Paper } from "@mui/material";
import scss from "./ChatLayout.module.scss";
import Box from "@mui/material/Box";
import InputBar from "@/components/features/InputBar/InputBar";
import ChatArea from "@/components/features/ChatArea/ChatArea";
import ConversationHistory from "@/components/features/ConversationHistory/ConversationHistory";

const ChatLayout = () => {
    return (
        <Box className={scss.chat_layout_box}>
            <Paper className={scss.chat_layout_paper} elevation={3}>
                <div className={scss.main_content}>
                    <ConversationHistory />
                    <ChatArea />
                </div>
                <InputBar />
            </Paper>
        </Box>
    );
}


export default ChatLayout;