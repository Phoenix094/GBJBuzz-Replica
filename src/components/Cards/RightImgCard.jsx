import { Button, Paper, Stack, Typography } from '@mui/material'
import CallMadeIcon from '@mui/icons-material/CallMade';

import card1 from '../../images/card1.png'
import { styles } from './styles'

const RightImgCard = ({ heading, subHeading, desc, img }) => {
    return (
        <>
            {/* Main Contianer */}
            <Paper elevation={6} sx={styles.paper}>
                {/* descirption  */}
                <Stack direction='row' spacing={4} justifyContent='space-evenly' alignItems='center'>
                    <Stack direction='column'>
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
                    {/* image container end */}
                </Stack>
            </Paper>
            {/* main container end */}
        </>
    )
}

export default RightImgCard
