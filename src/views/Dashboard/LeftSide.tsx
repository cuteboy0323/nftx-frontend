import Link from '@mui/material/Link';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

const trending_list = [
    { title: 'BPRINT', value: 342, color: 'rgb(255 109 65)' },
    { title: 'CYPH', value: 170, color: 'rgb(248 113 113)' },
    { title: 'PHUNKY', value: 160, color: 'rgb(239 68 68)' },
    { title: 'DESBES', value: 160, color: 'rgb(252 98 141)' },
    { title: 'DITTO', value: 143, color: 'rgb(251 59 112)' }
];

const activity_list = [
    { title: 'BPRINT #126068', status: 'REDEEM', color: 'rgb(132 204 22)' },
    { title: 'REGULR #3020', status: 'SELL', color: 'rgb(244 63 94)' },
    { title: 'WHALE #1113', status: 'SELL', color: 'rgb(244 63 94)' },
    { title: 'WHALE #2114', status: 'MINT', color: 'rgb(255 109 65)' },
    { title: 'WHALE #2194', status: 'MINT', color: 'rgb(255 109 65)' }
];

const bestapr_list = [
    {
        title: 'DESBES',
        apr: '5,261.72%',
        color: 'linear-gradient(to right, #14b8a6, rgb(168, 85, 247))',
        icon: 'https://images.nftx.io/cdn-cgi/image/anim=false,width=150,height=150,format=auto/https://raw.githubusercontent.com/NFTX-project/nftx-assets/main/vaults-v2/658/256x256.png'
    },
    {
        title: 'YUNK',
        apr: '1,982.43%',
        color: 'linear-gradient(to right, #ff6d41, rgb(251, 59, 112))',
        icon: 'https://images.nftx.io/cdn-cgi/image/anim=false,width=150,height=150,format=auto/https://raw.githubusercontent.com/NFTX-project/nftx-assets/main/vaults-v2/658/256x256.png'
    },
    {
        title: 'DESBES',
        apr: '1,281.71%',
        color: 'linear-gradient(to right, #ff6d41, rgb(251, 59, 112))',
        icon: 'https://images.nftx.io/cdn-cgi/image/anim=false,width=150,height=150,format=auto/https://raw.githubusercontent.com/NFTX-project/nftx-assets/main/vaults-v2/658/256x256.png'
    },
    {
        title: 'PUPS',
        apr: '1,181.82%',
        color: 'linear-gradient(to right, #ff6d41, rgb(251, 59, 112))',
        icon: 'https://images.nftx.io/cdn-cgi/image/anim=false,width=150,height=150,format=auto/https://raw.githubusercontent.com/NFTX-project/nftx-assets/main/vaults-v2/33/256x256.png'
    },
    {
        title: 'BPRINT',
        apr: '971.77%',
        color: 'linear-gradient(to right, #14b8a6, rgb(168, 85, 247))',
        icon: 'https://images.nftx.io/cdn-cgi/image/anim=false,width=150,height=150,format=auto/https://raw.githubusercontent.com/NFTX-project/nftx-assets/main/vaults-v2/361/256x256.png'
    }
];

const LeftSide = () => {
    return (
        <Stack
            sx={{
                width: 320,
                px: 2
            }}
        >
            <Stack
                sx={{
                    pt: 4,
                    pb: 6
                }}
            >
                <Stack spacing={3}>
                    <Stack
                        sx={{
                            p: 2,
                            border: '1px solid rgba(255, 255, 255, 0.05)',
                            borderRadius: '8px',
                            background: 'rgb(36 37 38)'
                        }}
                        spacing={1}
                    >
                        <Stack direction="row" justifyContent="space-between">
                            <Typography fontSize={14} fontWeight={700} color="rgb(156 163 175)">
                                TRENDING
                            </Typography>
                            <Typography fontSize={12} fontWeight={700} color="rgb(209 213 219)">
                                (7D TURNOVER)
                            </Typography>
                        </Stack>
                        <Stack spacing={0.5}>
                            {trending_list.map((item, index) => {
                                return (
                                    <Stack
                                        key={index}
                                        sx={{
                                            px: 2,
                                            py: 1,
                                            height: 42,
                                            border: '1px solid rgba(255, 255, 255, 0.1)',
                                            borderRadius: '8px',
                                            background: '#191a1b'
                                        }}
                                        direction="row"
                                        alignItems="center"
                                        justifyContent="space-between"
                                    >
                                        <Stack direction="row" alignItems="center" spacing={1}>
                                            <Typography
                                                sx={{
                                                    background: item.color,
                                                    px: 0.5,
                                                    py: 0,
                                                    color: 'black',
                                                    fontSize: 12,
                                                    borderRadius: '4px',
                                                    lineHeight: '16px',
                                                    fontWeight: 500
                                                }}
                                            >
                                                #{index + 1}
                                            </Typography>
                                            <Typography fontSize={14} fontWeight={500} color="white">
                                                {item.title}
                                            </Typography>
                                        </Stack>
                                        <Typography fontSize={12} fontWeight={500} color="white">
                                            {item.value}%
                                        </Typography>
                                    </Stack>
                                );
                            })}
                        </Stack>
                    </Stack>
                    <Stack
                        sx={{
                            p: 2,
                            border: '1px solid rgba(255, 255, 255, 0.05)',
                            borderRadius: '8px',
                            background: 'rgb(36 37 38)'
                        }}
                        spacing={1}
                    >
                        <Stack direction="row" justifyContent="space-between">
                            <Typography fontSize={14} fontWeight={700} color="rgb(156 163 175)">
                                ACTIVITY
                            </Typography>
                        </Stack>
                        <Stack
                            sx={{
                                p: 2,
                                border: '1px solid rgba(255, 255, 255, 0.1)',
                                borderRadius: '8px',
                                background: '#191a1b'
                            }}
                            spacing={1.5}
                        >
                            {activity_list.map((item, index) => (
                                <Stack
                                    key={index}
                                    direction="row"
                                    alignItems="center"
                                    justifyContent="space-between"
                                    spacing={1}
                                >
                                    <Typography fontSize={12} fontWeight={500} color="white">
                                        {item.title}
                                    </Typography>
                                    <Chip
                                        label={item.status}
                                        variant="outlined"
                                        sx={{
                                            fontSize: 8,
                                            color: item.color,
                                            borderColor: item.color,
                                            minHeight: 0,
                                            height: 'fit-content',
                                            '& span': {
                                                px: 1,
                                                pt: '2px'
                                            }
                                        }}
                                    />
                                </Stack>
                            ))}
                        </Stack>
                        <Stack sx={{ pt: 1 }}>
                            <Link
                                href="#"
                                sx={{ textDecoration: 'none', fontSize: 14, color: 'white', fontWeight: 500 }}
                            >
                                {'See more >'}
                            </Link>
                        </Stack>
                    </Stack>
                    <Stack
                        sx={{
                            p: 2,
                            border: '1px solid rgba(255, 255, 255, 0.05)',
                            borderRadius: '8px',
                            background: 'rgb(36 37 38)'
                        }}
                        spacing={1}
                    >
                        <Stack direction="row" justifyContent="space-between">
                            <Typography fontSize={14} fontWeight={700} color="rgb(156 163 175)">
                                BEST APRs
                            </Typography>
                        </Stack>
                        <Stack
                            sx={{
                                p: 2,
                                border: '1px solid rgba(255, 255, 255, 0.1)',
                                borderRadius: '8px',
                                background: '#191a1b'
                            }}
                            spacing={1}
                        >
                            {bestapr_list.map((item, index) => (
                                <Stack key={index} direction="row" alignItems="center" justifyContent="space-between">
                                    <Stack direction="row" alignItems="center" spacing={1}>
                                        <img src={item.icon} alt="token" width="24px" height="24px" />
                                        <Typography fontSize={12} fontWeight={500} color="white">
                                            {item.title}
                                        </Typography>
                                    </Stack>
                                    <Typography
                                        fontSize={12}
                                        fontWeight={500}
                                        color="rgba(0, 0, 0, 0)"
                                        sx={{
                                            backgroundImage: item.color,
                                            backgroundClip: 'text'
                                        }}
                                    >
                                        {item.apr}
                                    </Typography>
                                </Stack>
                            ))}
                        </Stack>
                        <Stack sx={{ pt: 1 }}>
                            <Link
                                href="#"
                                sx={{ textDecoration: 'none', fontSize: 14, color: 'white', fontWeight: 500 }}
                            >
                                {'See more >'}
                            </Link>
                        </Stack>
                    </Stack>
                </Stack>
            </Stack>
        </Stack>
    );
};

export default LeftSide;
