import { AppBar, Button, IconButton, Link, Stack, Toolbar, Typography } from "@mui/material"
import { Link as RouterLink } from 'react-router-dom'

import logo from '../../images/logo.png'

const Navbar = () => {
    return (

        <AppBar color="inherit" sx={{ padding: '5px 0 5px 0' }} >
            <Toolbar> {/*  Toolbar for padding in Navbar on both side */}
                {/* Icon Button Component for Logo */}
                <IconButton aria-label="logo" sx={{ marginLeft: '6rem' }}>
                    <RouterLink to='/'>
                        <img src={logo} alt="GBJBuzz" />
                    </RouterLink>
                </IconButton>
                <Typography variant="h4" sx={{ flexGrow: 0.2 }} component='h1' >
                    <RouterLink to='/' style={{ textDecoration: 'none', color: '#000' }}>
                        GBJ BUZZ

                    </RouterLink>
                </Typography>
                {/* Other NavLiks */}
                <Stack spacing={4} direction='row' >
                    <Link component={RouterLink} to='/pricing' color='text.primary' underline="hover" variant="h6">Pricing</Link>
                    <Link component={RouterLink} to='/about' color='text.primary' underline="hover" variant="h6">About</Link>
                    <Link component={RouterLink} to='/contact' color='text.primary' underline="hover" variant="h6">Contact</Link>
                    <Link component={RouterLink} to='/services' color='text.primary' underline="hover" variant="h6">Services</Link>
                    <Link component={RouterLink} to='/blogs' color='text.primary' underline="hover" variant="h6">Blogs</Link>
                    <Button variant="contained" color="info" sx={{ borderRadius: '10px' }}>Request Quote</Button>
                </Stack>
                {/* Navlink Part End */}
            </Toolbar>
        </AppBar>



    )
}

export default Navbar
