import { AppBar, Box, Button, IconButton, Link, Stack, Toolbar, Typography } from "@mui/material"
import logo from '../../images/logo.png'


const Navbar = () => {
    return (
        <Box >
            <AppBar position="static" color="inherit" >
                <Toolbar>
                    <IconButton aria-label="logo" sx={{ marginLeft: '6rem' }} >
                        <img src={logo} alt="GBJBuzz" />
                    </IconButton>
                    <Typography variant="h4" sx={{ flexGrow: 0.2 }} component='h1' >GBJ BUZZ</Typography>
                    <Stack spacing={4} direction='row' >
                        <Link color='text.primary' underline="hover" variant="h6">Pricing</Link>
                        <Link color='text.primary' underline="hover" variant="h6">About</Link>
                        <Link color='text.primary' underline="hover" variant="h6">Contact</Link>
                        <Link color='text.primary' underline="hover" variant="h6">Services</Link>
                        <Link color='text.primary' underline="hover" variant="h6">Blogs</Link>
                        <Button variant="contained" color="info" sx={{ borderRadius: '10px' }}>Request Quote</Button>
                    </Stack>
                </Toolbar>
            </AppBar>
        </Box>


    )
}

export default Navbar
