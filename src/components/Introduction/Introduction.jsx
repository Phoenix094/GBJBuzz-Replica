import { Typography, Stack, Button } from "@mui/material"
import CallMadeIcon from '@mui/icons-material/CallMade';

import { style } from "./style"
import featureImg from '../../images/feture.png'
import progressBar from '../../images/progressBar.png'
import serviceImg from '../../images/services.png'

const Introduction = () => {
    const { container, primaryText, secondaryText, secondaryContainer, imgDiv, btn, secondContainer, subHeading, informationContainer } = style
    return (
        <>
            <div style={container}>
                {/* Text Container */}
                <Stack sx={secondaryContainer} textAlign='start' direction='row' component='div'>

                    <Typography variant="h2" component='div' color='text.primary' sx={primaryText}>
                        Grow Your Business With
                    </Typography>
                    <Typography variant="h2" component='div' color='text.secondary' sx={secondaryText}>
                        Cutting Edge
                    </Typography>
                    <Typography variant="h2" component='div' color='text.secondary' sx={secondaryText}>
                        Technology
                    </Typography>
                    {/* Button for  Get Quote*/}
                    <Button variant="contained" color="info" fontSize="large" sx={btn} endIcon={<CallMadeIcon fontSize="large" color="light" />}>
                        Get Quote
                    </Button>
                </Stack>
                {/* Text Container  Ended */}
                <div style={imgDiv}>
                    <img src={featureImg} alt="..." />
                </div>
            </div>
            {/* Services Continer */}
            <Stack flexDirection='row' sx={secondContainer}>
                <div id="mainInformationContiner" >
                    <div id="headingContainer">
                        <Typography variant="h4" sx={subHeading}>
                            Unleashing
                        </Typography>
                        <Typography variant="h4" sx={subHeading}>
                            Your Business Potential
                        </Typography>
                        <Typography variant="h4" sx={subHeading}>
                            Our Dynamic Servicess
                        </Typography>
                    </div>
                    <div style={informationContainer}>
                        <div>
                            <img src={progressBar} alt=".." />
                        </div>
                        <Stack direction='column' spacing={4}>
                            <div>
                                <Typography variant="h6">
                                    Experince the Power of comprehensive digital solution with
                                </Typography>
                                <Typography variant="h6">
                                    GBJBUZZ. As the amalgamtion of Xpan Buzz,7i Buzz,
                                </Typography>
                                <Typography variant="h6">
                                    Libex Buzz, Block X Buzz, and Cyber X Buzz, we Offer a
                                </Typography>
                                <Typography variant="h6">
                                    Full range of exclusive
                                    premium services
                                </Typography>
                            </div>
                            <div>
                                <Typography variant="h6">
                                    From the digital marketing strategies to data driven insights,
                                </Typography>
                                <Typography variant="h6">
                                    cutting-edge blockchain technology to advanced cyber
                                </Typography>
                                <Typography variant="h6">
                                    security solution, our dynamic services empower your
                                </Typography>
                                <Typography variant="h6">
                                    business growth
                                </Typography>
                            </div>
                            <div>
                                <Typography variant="h6">
                                    Unleash your business potential with our integrated approach,
                                </Typography>
                                <Typography variant="h6">
                                    delivering unparalleled results that drive success in hte digital
                                </Typography>
                                <Typography variant="h6">
                                    landscape
                                </Typography>
                            </div>
                        </Stack>
                        <div id="imageContainer">
                            <img src={serviceImg} alt="" />
                        </div>
                    </div>
                </div>
            </Stack>
            {/* Services Contianer Ended */}
        </>
    )
}

export default Introduction
