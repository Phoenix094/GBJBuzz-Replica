import { Button, FormControl, Grid, IconButton, Link, OutlinedInput, Paper, Stack, Typography } from '@mui/material'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import MpIcon from '@mui/icons-material/Mp';
import MarkunreadIcon from '@mui/icons-material/Markunread';
import CallRoundedIcon from '@mui/icons-material/CallRounded';

import tree1 from '../../images/tree1.png'
import tree2 from '../../images/tree2.png'
import logo2 from '../../images/logo2.png'
import logo from '../../images/logo.png'

const Footer = () => {
    return (
        <>
            <Paper component='div' sx={{
                backgroundColor: '#000',
                height: '100vh',
            }}>
                <div style={{ height: "20vh", marginBottom: '10px solid #FED11F' }}>

                </div>
                <hr color='#FED11F' />
                <Grid container sx={{
                    position: 'relative',
                    left: '4rem',
                    top: '2rem'
                }}>
                    <Grid item xs={2}>
                        {/* 1st Grid component Services */}
                        <Link variant='h4' color={'#FED11F'}>
                            Sercives
                        </Link>
                        <Stack direction='row' my={5} spacing={0}>
                            <img src={tree1} alt="" />
                            <Stack direction='column' spacing={1} >
                                <Typography variant='body2' color={'#FED11F'}>
                                    Performance Marketing
                                </Typography>
                                <Typography variant='body2' color={'#FED11F'}>
                                    360 Marketing
                                </Typography>
                                <Typography variant='body2' color={'#FED11F'}>
                                    Digital Marketing
                                </Typography>
                                <Typography variant='body2' color={'#FED11F'}>
                                    Mobile App Development
                                </Typography>
                                <Typography variant='body2' color={'#FED11F'}>
                                    Web Development
                                </Typography>
                                <Typography variant='body2' color={'#FED11F'}>
                                    {`SEO (Search Engine Optimization)`}
                                </Typography>
                                <Typography variant='body2' color={'#FED11F'}>
                                    AI Automation
                                </Typography>
                                <Typography variant='body2' color={'#FED11F'}>
                                    ADV Camping
                                </Typography>
                            </Stack>
                        </Stack>
                    </Grid>
                    {/* 1st Grid component Services end */}


                    {/* 2nd Grid component Services */}
                    <Grid item xs={4}>
                        <Link variant='h4' color={'#FED11F'}>
                            Digital Transformation
                        </Link>
                        <Stack direction='row' my={5}>
                            <img src={tree1} alt="" />
                            <Stack direction='column' spacing={1} >
                                <Typography variant='body2' color={'#FED11F'}>
                                    Saas Platform
                                </Typography>
                                <Typography variant='body2' color={'#FED11F'}>
                                    Paas Platform
                                </Typography>
                                <Typography variant='body2' color={'#FED11F'}>
                                    AI Development
                                </Typography>
                                <Typography variant='body2' color={'#FED11F'}>
                                    ML Development
                                </Typography>
                                <Typography variant='body2' color={'#FED11F'}>
                                    Digital Product Development
                                </Typography>
                                <Typography variant='body2' color={'#FED11F'}>
                                    Cyber Security Services
                                </Typography>
                                <Typography variant='body2' color={'#FED11F'}>
                                    Health Care Portal
                                </Typography>
                                <Typography variant='body2' color={'#FED11F'}>
                                    Progressive Web App
                                </Typography>
                            </Stack>
                        </Stack>
                    </Grid>
                    {/* 2nd Grid component Services end */}


                    {/* 3rd Grid component Services */}
                    <Grid item xs={3}>
                        <Link variant='h4' color={'#FED11F'}>
                            Useful Links
                        </Link>
                        <Stack direction='row' my={5}>
                            <img src={tree2} alt="" />
                            <Stack direction='column' spacing={1} >
                                <Typography variant='body2' color={'#FED11F'}>
                                    ContactUs
                                </Typography>
                                <Typography variant='body2' color={'#FED11F'}>
                                    AboutUs
                                </Typography>
                                <Typography variant='body2' color={'#FED11F'}>
                                    Blogs
                                </Typography>
                                <Typography variant='body2' color={'#FED11F'}>
                                    Testimonial
                                </Typography>
                                <Typography variant='body2' color={'#FED11F'}>
                                    Assets
                                </Typography>
                                <Typography variant='body2' color={'#FED11F'}>
                                    Services
                                </Typography>
                                <Typography variant='body2' color={'#FED11F'}>
                                    Medium
                                </Typography>
                            </Stack>
                        </Stack>
                    </Grid>
                    {/* 3rd Grid component Services end */}

                    {/* 4th Grid component Services */}
                    <Grid item xs={3}>
                        <Link variant='h4' color={'#FED11F'}>
                            <img src={logo2} alt="" />
                        </Link>
                        <Stack direction='row' my={5} >
                            <Button variant='contained' color='info' sx={{
                                fontSize: '1rem',
                                position: 'relative',
                                top: '1rem',
                                left: '2rem',
                                width: '10rem',
                                borderRadius: '1rem',
                                padding: '1rem'
                            }}>
                                Contact Us
                            </Button>
                        </Stack>
                    </Grid>
                    {/* 4th Grid component Services end */}
                </Grid>
                <Grid container sx={{
                    position: 'relative',
                    left: '4rem',
                    top: '2rem'
                }}>
                    {/* Logo Container */}
                    <Grid item xs={2}>
                        <img src={logo} alt="..." />
                    </Grid>
                    {/* Logo Container Ended */}
                    <Grid item xs={3}>
                        <Stack direction='column' >
                            {/* Input Field */}
                            <Stack direction='row' justifyContent='center' p={1} sx={{
                                background: 'grey',
                                borderTopLeftRadius: '10px',
                                borderBottomRightRadius: '10px'
                            }} >
                                <Typography variant='h6' component='span' color={'#fff'}>
                                    Subscribe for Trading &nbsp;
                                </Typography>
                                <Typography variant='h6' component='span' color={'#FED11F'}>
                                    NewsLetter
                                </Typography>
                            </Stack>
                            <Stack direction='row' my={1} spacing={1}>
                                <FormControl>
                                    <OutlinedInput placeholder='email' color='info' sx={{
                                        background: '#fff'
                                    }} />
                                </FormControl>
                                <Button variant='contained' color='info'>
                                    subscribe
                                </Button>
                            </Stack>
                            {/* INput field End */}
                        </Stack>
                    </Grid>
                    {/* Social Media buttons */}
                    <Grid item xs={3}>
                        <Stack direction='column'>
                            <Stack direction='row' spacing={0} justifyContent='center'>
                                <IconButton aria-label='facebook' color='info' size='large'>
                                    <FacebookIcon fontSize='large' />
                                </IconButton>
                                <IconButton aria-label='instagram' color='info' size='large'>
                                    <InstagramIcon fontSize='large' />
                                </IconButton>
                                <IconButton aria-label='linkedIn' color='info' size='large'>
                                    <LinkedInIcon fontSize='large' />
                                </IconButton>
                                <IconButton aria-label='youtube' color='info' size='large'>
                                    <YouTubeIcon fontSize='large' />
                                </IconButton>
                            </Stack>
                            <Stack direction='row' spacing={0} justifyContent='center'>
                                <IconButton aria-label='twitter' color='info' size='large'>
                                    <TwitterIcon fontSize='large' />
                                </IconButton>
                                <IconButton aria-label='pintrest' color='info' size='large'>
                                    <PinterestIcon fontSize='large' />
                                </IconButton>
                                <IconButton aria-label='monster' color='info' size='large'>
                                    <MpIcon fontSize='large' />
                                </IconButton>
                            </Stack>
                        </Stack>
                    </Grid>
                    {/* Social Media buttons Ended */}
                    {/* Contact Details */}
                    <Grid item xs={3}>
                        <Stack direction='column' spacing={2}>
                            <Stack direction='row'>
                                <IconButton aria-label='mail' color='info' size='large'>
                                    <MarkunreadIcon fontSize='large' />
                                </IconButton>
                                <Link variant='h5' color={'#FED11F'} underline='hover' my={2}>
                                    team@gbjbuzz.com
                                </Link>
                            </Stack>
                            <Stack direction='row'>
                                <IconButton aria-label='mail' color='info' size='large'>
                                    <CallRoundedIcon fontSize='large' />
                                </IconButton>
                                <Link variant='h5' color={'#FED11F'} underline='hover' my={2}>
                                    +91 - 7020107390
                                </Link>
                            </Stack>
                        </Stack>
                    </Grid>
                    {/* Contact Details Ended */}
                </Grid>
            </Paper>

        </>
    )
}

export default Footer
