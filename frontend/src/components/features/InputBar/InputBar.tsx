import * as React from 'react';
import Box from '@mui/material/Box';
import scss from "./InputBar.module.scss";
import {Paper} from "@mui/material";
import { Send } from '@mui/icons-material';
import CustomButton from "@/components/ui/CustomButton/CustomButton";
import {useTheme} from "@mui/joy";
import CustomInputTextField from "@/components/ui/CustomInputTextField/CustomInputTextField";

interface InputBarProps {
    onSubmit?: (message: string) => void;
}


const InputBar: React.FC<InputBarProps> = ({ onSubmit }) => {
    const [message, setMessage] = React.useState<string>();
    const theme = useTheme();

    const handleSubmit = (e?: React.FormEvent<HTMLFormElement>) => {
        e?.preventDefault();
        if (onSubmit && message && message.length > 0) {
            onSubmit(message);
            setMessage("");
        }
    }

    return (
        <Paper id={"InputBar_container"} className={scss.input_bar_container} elevation={2} >
            <Box
                id={"InputBar_Box"}
                component="form"
                className={scss.input_bar}
                onSubmit={handleSubmit}
            >

                <CustomInputTextField
                    id="InputBar_TextField"
                    label="Type your message..."
                    fullWidth
                    value={message || ""}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            e.preventDefault();
                            handleSubmit();
                        }
                    }}
                />

                <CustomButton
                    id="InputBar_Submit"
                    className={scss.send_button}
                    variant="outlined"
                    type="submit"
                    endIcon={<Send />}
                    sx={{
                        color: theme.palette.text.primary,
                        borderColor: theme.palette.text.primary,
                    }}
                >Send</CustomButton>
            </Box>
        </Paper>
    );
};

export default InputBar;