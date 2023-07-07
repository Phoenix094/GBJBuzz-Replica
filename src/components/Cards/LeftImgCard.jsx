import { Paper, Stack, Typography, Button } from '@mui/material'
import CallMadeIcon from '@mui/icons-material/CallMade';

import card1 from '../../images/card1.png'
import { styles } from './styles';

const LeftImgCard = ({ heading, subHeading, img, desc }) => {
    return (
        <>
            {/* Main continer */}
            <Paper elevation={6} sx={styles.paper}>
                <Stack direction='row' spacing={4} justifyContent='space-evenly' alignItems='center'>
                    {/* image container */}
                    <div style={{
                        width: '80vw'
                    }}>
                        {
                            img ? (
                                <img src={img} alt="" />

                            ) : ''
                        }
                    </div>
                    {/* image container start */}
                    {/* description start */}
                    <Stack direction='column' spacing={2}>
                        <Typography variant='h2' color='text.primary' sx={{ fontWeight: 600 }}>
                            {heading}
                        </Typography>
                        <Typography variant='h4' color='text.primary' sx={{ fontWeight: 600 }}>
                            {subHeading}
                        </Typography>
                        <Typography variant='h5' color='text.secondary'>
                            {desc}
                        </Typography>
                        <div style={{ marginTop: '3rem' }}>
                            <Button size='large' variant='contained' color='info' endIcon={<CallMadeIcon />} sx={styles.btn}>
                                Learn More
                            </Button>

                        </div>
                    </Stack>
                    {/* description end */}
                </Stack>
            </Paper>
            {/* Main Container end */}
        </>
    )
}

export default LeftImgCard
