// ** Material UI Components ** //
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

const header_list = [
    {
        title: 'Buy',
        position: 'top',
        description: 'Shop NFT collections',
        bg_out: 'linear-gradient(to right, rgb(105, 227, 94), rgb(59, 130, 246))',
        bg_in: 'linear-gradient(to right, rgb(84, 182, 75), rgb(59, 130, 246))'
    },
    {
        title: 'Sell',
        position: '100%',
        description: 'Instantly sell your holdings',
        bg_out: 'linear-gradient(to right, rgb(239, 68, 68), rgb(244, 63, 94))',
        bg_in: 'linear-gradient(to right, rgb(239, 68, 68), rgb(244, 63, 94))'
    },
    {
        title: 'Swap',
        position: '0',
        description: 'Swap like-kind NFTs',
        bg_out: 'linear-gradient(to right, rgb(168, 85, 247), rgb(59, 130, 246))',
        bg_in: 'linear-gradient(to right, rgb(168, 85, 247), rgb(59, 130, 246))'
    },
    {
        title: 'Stake',
        position: 'bottom',
        description: 'Stake your NFTs to earn yield',
        bg_out: 'linear-gradient(to right, rgb(20 184 166), rgb(20 184 166))',
        bg_in: 'linear-gradient(to right, rgb(16 155 144), rgb(15, 118, 110))'
    }
];

const TopCards = () => (
    <Grid container spacing={2}>
        {header_list.map((list, index) => (
            <Grid item xs={12} sm={3} key={index}>
                <Stack
                    sx={{
                        backgroundImage: list.bg_out,
                        p: '1px',
                        borderRadius: 1.5
                    }}
                >
                    <Card
                        variant="outlined"
                        sx={{
                            overflow: 'hidden',
                            backgroundImage: 'url(https://nftx.io/images/banner-bg.jpeg)',
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: '150%',
                            backgroundPosition: list.position,
                            borderRadius: 1.5,
                            border: 'none'
                        }}
                    >
                        <CardContent sx={{ p: '24px !important', position: 'relative' }}>
                            <Stack
                                sx={{
                                    backgroundImage: list.bg_in,
                                    position: 'absolute',
                                    opacity: 0.7,
                                    left: 0,
                                    right: 0,
                                    top: 0,
                                    bottom: 0,
                                    display: 'block'
                                }}
                            ></Stack>
                            <Stack spacing={1} sx={{ position: 'relative' }}>
                                <Typography fontSize={24} lineHeight="32px" fontWeight={700}>
                                    {list.title}
                                </Typography>
                                <Typography fontSize={14} lineHeight="20px">
                                    {list.description}
                                </Typography>
                            </Stack>
                        </CardContent>
                    </Card>
                </Stack>
            </Grid>
        ))}
    </Grid>
);

export default TopCards;
