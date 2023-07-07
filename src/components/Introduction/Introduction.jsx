import { Typography, Stack, Button } from "@mui/material"
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

import { style } from "./style"
import featureImg from '../../images/feture.png'

const Introduction = () => {
    const { container, primaryText, secondaryText, secondaryContainer, imgDiv, btn } = style
    return (
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
                <Button variant="contained" color="info" fontSize="large" sx={btn} endIcon={<ArrowOutwardIcon fontSize="large" sx={{ fontSize: '2rem' }} color="light" />}>
                    Get Quote
                </Button>
            </Stack>
            {/* Text Container  Ended */}
            <div style={imgDiv}>
                <img src={featureImg} alt="..." />
            </div>


        </div>

    )
}

export default Introduction
