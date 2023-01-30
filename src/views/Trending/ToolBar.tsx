// ** Material UI Components ** //
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

// ** Material UI Icons ** //
import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded';
import KeyboardArrowLeftRoundedIcon from '@mui/icons-material/KeyboardArrowLeftRounded';

const ToolBar = () => {
    return (
        <Stack direction="row" justifyContent="space-between" alignItems="center" mt={4}>
            <Typography fontSize={20} fontWeight={700} lineHeight="28px" textTransform="uppercase" my={2}>
                New Collections
            </Typography>
            <Stack direction="row" alignItems="center" spacing={1}>
                <IconButton
                    sx={{
                        width: 40,
                        height: 40,
                        bgcolor: '#000',
                        border: '2px solid rgb(36 37 38)'
                    }}
                >
                    <KeyboardArrowLeftRoundedIcon />
                </IconButton>
                <IconButton
                    sx={{
                        width: 40,
                        height: 40,
                        bgcolor: '#000',
                        border: '2px solid rgb(36 37 38)'
                    }}
                >
                    <KeyboardArrowRightRoundedIcon />
                </IconButton>
            </Stack>
        </Stack>
    );
};

export default ToolBar;
