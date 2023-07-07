import { Box, Button, Grid, Link, Paper, Stack, Typography } from '@mui/material'

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

            </Paper>

        </>
    )
}

export default Footer
