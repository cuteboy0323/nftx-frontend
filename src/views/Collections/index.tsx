// ** Material UI Components ** //
import Stack from '@mui/material/Stack';

// ** Custom Components ** //
import Item from './Item';
import List from './List';
import SearchBar from './SearchBar';

const ListData = [
    {
        id: 1,
        image: 'https://lh3.googleusercontent.com/vwmc2x1sGXL6a2j4p3wu1g9C93rukPadaR9P0NWxKH0qQKeIkdn4Yw2w3WyogGPDAGmUjLMJf5hwA_cFpcwjuES4w4FZ8ES3_QfnQA',
        avatar: 'https://images.nftx.io/cdn-cgi/image/anim=false,width=150,height=150,format=auto/https://raw.githubusercontent.com/NFTX-project/nftx-assets/main/vaults-v2/0/256x256.png',
        name: 'PUNK',
        by: 'CryptoPunks',
        price: 65.38,
        count: 141
    },
    {
        id: 2,
        image: 'https://lh3.googleusercontent.com/e5dgPM5g-z3S4_D5-z_dnywf-liGr0etr2YrX-F8_5p_2pk9LPwxh6qzA2buHNgk9A6iwHrnYA-wmAmybY1ug_cMqLlKXg0r5trOKg',
        avatar: 'https://images.nftx.io/cdn-cgi/image/anim=false,width=150,height=150,format=auto/https://raw.githubusercontent.com/NFTX-project/nftx-assets/main/vaults-v2/27/256x256.png',
        name: 'SQGL',
        by: 'Chromie Squiggle',
        price: 11.08,
        count: 80
    },
    {
        id: 3,
        image: 'https://lh3.googleusercontent.com/fLMRz3fcoXxNMsAaITygzEdp7o23kWeDpTfKDZjuF9hAlTbZT6rx1mhKFqwYBgIDX1PIGJpE9CaylS-P2NosfGk3wQK09WuR9UYpvhk',
        avatar: 'https://images.nftx.io/cdn-cgi/image/anim=false,width=150,height=150,format=auto/https://raw.githubusercontent.com/NFTX-project/nftx-assets/main/vaults-v2/392/256x256.png',
        name: 'MILADY',
        by: 'Milady Maker',
        price: 0.3651,
        count: 1694
    },
    {
        id: 4,
        image: 'https://lh3.googleusercontent.com/v1obecpaXXt-7rTGHAuZAefoLmZHa3TFm_4nYen-LkOGpEGEb-TdtvC_WNLY9zjAn5aMXQpDrb6PjXOCAXuqpqJSk1-WZSRR904L9Q',
        avatar: 'https://images.nftx.io/cdn-cgi/image/anim=false,width=150,height=150,format=auto/https://raw.githubusercontent.com/NFTX-project/nftx-assets/main/vaults-v2/251/256x256.png',
        name: 'DOODLE',
        by: 'Doodles',
        price: 7.612,
        count: 63
    },
    {
        id: 5,
        image: 'https://lh3.googleusercontent.com/hT4qwKYigq4ZGf0kt7qvbwDfzKux9oEQhlj8t9o-Wq2ly5Z3Uqgxv6ZJTRyKrvjWCEd7PlCf8psr-uw8_75cbIGqhZWWVY7Yh5_b',
        avatar: 'https://images.nftx.io/cdn-cgi/image/anim=false,width=150,height=150,format=auto/https://raw.githubusercontent.com/NFTX-project/nftx-assets/main/vaults-v2/24/256x256.png',
        name: 'WIZARD',
        by: 'Forgotten Runes Wizards Cult',
        price: 1.11,
        count: 320
    }
];

const Collections = () => {
    return (
        <Stack>
            <SearchBar />
            <List spacing={2}>
                {ListData.map((item: any) => (
                    <Item key={item.id} {...item} />
                ))}
            </List>
        </Stack>
    );
};

export default Collections;
