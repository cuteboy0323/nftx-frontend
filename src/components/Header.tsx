import React, { useState } from 'react';
// ** Material UI Components ** //
import Menu from '@mui/material/Menu';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Divider from '@mui/material/Divider';
import MenuItem from '@mui/material/MenuItem';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import BedtimeOutlinedIcon from '@mui/icons-material/BedtimeOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import { HiOutlineChevronDown } from 'react-icons/hi';
import { FaEthereum } from 'react-icons/fa';
import { StarIcon } from './Svg';

const Header = () => {
    const trigger = useScrollTrigger({ disableHysteresis: true });
    const [isDark, setIsDark] = useState(true);
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const [anchorEl2, setAnchorEl2] = React.useState<null | HTMLElement>(null);

    const open = Boolean(anchorEl);
    const open2 = Boolean(anchorEl2);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClickRewards = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl2(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
        setAnchorEl2(null);
    };

    return (
        <AppBar
            position={trigger ? 'fixed' : 'fixed'}
            sx={{
                backgroundImage: 'none',
                transition: '0s',
                width: '100%',
                height: 70,
                borderBottom: 2,
                borderColor: 'rgb(25, 26, 27)',
                boxShadow: 'none'
            }}
        >
            <Stack justifyContent="space-between" direction="row" px={2} py={1.5} sx={{ height: '100%' }}>
                <Stack alignItems="center" direction="row" spacing={2}>
                    <img width={32} height={32} src={require('../assets/img/logo_on_black.svg').default} alt="icon" />
                    <InputBase
                        placeholder="Search for vaults"
                        sx={{
                            width: 430,
                            '& input': {
                                height: '100%',
                                border: '1px solid rgb(75, 85, 99)',
                                borderRadius: '6px',
                                p: 1.25,
                                transition: '.3s',
                                '&:hover': {
                                    borderColor: 'rgb(251, 59, 112)'
                                },
                                '&:focus': {
                                    borderColor: 'rgb(251, 59, 112)',
                                    background: 'rgb(50, 12, 22)',
                                    boxShadow: '0px 0px 5px 0px rgb(251 59 112)'
                                }
                            }
                        }}
                    />
                </Stack>
                <Stack direction="row" spacing={0.75}>
                    <Button
                        id="shop-button"
                        aria-controls={open ? 'shop-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onMouseEnter={handleClick}
                        variant="text"
                        sx={{
                            height: '100%',
                            fontSize: 16,
                            px: 2,
                            '&:hover': {
                                background: 'transparent'
                            }
                        }}
                        endIcon={<HiOutlineChevronDown />}
                    >
                        Shop
                    </Button>
                    <Menu
                        id="shop-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                            'aria-labelledby': 'shop-button'
                        }}
                        sx={{
                            '& .MuiPaper-root': {
                                border: '1px solid rgb(75, 85, 99)',
                                borderRadius: '8px',
                                background: '#131214'
                            },
                            '& .MuiList-root': {
                                p: 1
                            },
                            '& .MuiMenuItem-root': {
                                p: 1.5,
                                width: 100,
                                fontSize: 14,
                                lineHeight: '14px',
                                borderRadius: '6px',
                                fontFamily: 'Segoe UI'
                            }
                        }}
                    >
                        <Stack onMouseLeave={handleClose}>
                            <MenuItem onClick={handleClose}>Buy</MenuItem>
                            <MenuItem onClick={handleClose}>Sell</MenuItem>
                            <MenuItem onClick={handleClose}>Swap</MenuItem>
                        </Stack>
                    </Menu>
                    <Button
                        id="rewards-button"
                        aria-controls={open2 ? 'rewards-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open2 ? 'true' : undefined}
                        onMouseEnter={handleClickRewards}
                        variant="text"
                        sx={{
                            height: '100%',
                            fontSize: 16,
                            px: 2,
                            '&:hover': {
                                background: 'transparent'
                            }
                        }}
                        endIcon={<HiOutlineChevronDown />}
                    >
                        Rewards
                    </Button>
                    <Menu
                        id="rewards-menu"
                        anchorEl={anchorEl2}
                        open={open2}
                        onClose={handleClose}
                        MenuListProps={{
                            'aria-labelledby': 'rewards-button'
                        }}
                        sx={{
                            '& .MuiPaper-root': {
                                border: '1px solid rgb(75, 85, 99)',
                                borderRadius: '8px',
                                background: '#131214'
                            },
                            '& .MuiList-root': {
                                p: 1
                            },
                            '& .MuiMenuItem-root': {
                                p: 1.5,
                                width: 100,
                                fontSize: 14,
                                lineHeight: '14px',
                                borderRadius: '6px',
                                fontFamily: 'Segoe UI'
                            }
                        }}
                    >
                        <Stack onMouseLeave={handleClose}>
                            <MenuItem onClick={handleClose}>Dashboard</MenuItem>
                            <MenuItem onClick={handleClose}>Pools</MenuItem>
                        </Stack>
                    </Menu>
                    {['Create', 'Coins', 'Activity'].map((item, index) => (
                        <Button
                            key={index}
                            variant="outlined"
                            sx={{
                                height: '100%',
                                fontSize: 16,
                                borderColor: 'transparent',
                                px: 2,
                                '&:hover': {
                                    background: 'transparent',
                                    borderColor: 'rgb(251, 59, 112)'
                                }
                            }}
                        >
                            {item}
                        </Button>
                    ))}
                    <Button
                        variant="outlined"
                        sx={{
                            height: '100%',
                            fontSize: 16,
                            borderColor: 'transparent',
                            px: 2,
                            color: 'rgb(45, 212, 191)',
                            '&:hover': {
                                background: 'transparent',
                                borderColor: 'rgb(45, 212, 191)'
                            }
                        }}
                        endIcon={<StarIcon />}
                    >
                        Yield
                    </Button>
                    <Divider orientation="vertical" variant="middle" flexItem />
                    <IconButton aria-label="fingerprint" onClick={() => setIsDark(!isDark)}>
                        {isDark ? <LightModeOutlinedIcon /> : <BedtimeOutlinedIcon />}
                    </IconButton>
                    <Button
                        variant="outlined"
                        sx={{
                            height: '100%',
                            fontSize: 16,
                            borderColor: 'rgb(251, 59, 112)',
                            px: 1,
                            color: 'rgb(251, 59, 112)',
                            minWidth: 44,
                            '&:hover': {
                                background: 'rgb(50, 12, 22)',
                                borderColor: 'rgb(251, 59, 112)'
                            }
                        }}
                    >
                        <FaEthereum fontSize={20} />
                    </Button>
                    <Button
                        variant="contained"
                        sx={{
                            px: 1.5,
                            color: 'white',
                            height: '100%',
                            borderColor: 'rgb(251, 59, 112)',
                            backgroundColor: 'rgba(0, 0, 0, 0)',
                            backgroundImage: 'linear-gradient(rgb(252, 98, 141), rgb(251, 59, 112))'
                        }}
                    >
                        Connect
                    </Button>
                </Stack>
            </Stack>
        </AppBar>
    );
};

export default Header;
