import Stack from '@mui/material/Stack';
import Content from './Content';
import LeftSide from './LeftSide';

const Dashboard = () => {
    return (
        <Stack direction="row" sx={{ height: '100%' }}>
            <LeftSide />
            <Stack
                flexGrow={1}
                sx={{
                    py: 4,
                    px: 5,
                    borderLeft: '1px solid rgb(36, 37, 38)'
                }}
            >
                <Content />
            </Stack>
        </Stack>
    );
};

export default Dashboard;
