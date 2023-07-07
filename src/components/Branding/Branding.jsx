import { Paper, Stack, Typography } from '@mui/material'
import TaskAltIcon from '@mui/icons-material/TaskAlt';

import servicesLogo from '../../images/servicesLogo.png'
const Branding = () => {
    return (
        // Branding Contianer started
        <Paper sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh'
        }} id='Branding Container'>
            <Stack direction='column' spacing={2}>
                {/* Moto Text */}
                <Stack direction='row' spacing={2}>
                    <TaskAltIcon color='info' sx={{
                        fontSize: 100
                    }} />
                    <Typography variant='h1' color='text.primary' sx={{
                        fontWeight: 900,
                        fontSize: 120
                    }}>
                        Exclusive
                    </Typography>
                    <Stack direction='column' sx={{
                        position: 'relative',
                        top: '1rem'
                    }}>
                        <Typography variant='h3' color='text.primary' sx={{ fontWeight: 900 }}>
                            Premium
                        </Typography>
                        <Typography variant='h3' color='text.primary' sx={{ fontWeight: 900 }}>
                            Support
                        </Typography>
                    </Stack>
                </Stack>
                <Stack direction='column' spacing={2} >
                    <Typography color='text.primary' variant='h3' sx={{ fontWeight: 600 }}>
                        Skyrocket Your Business Success: Unleash
                    </Typography>
                    <Typography color='text.primary' variant='h3' sx={{ fontWeight: 600 }}>
                        The Power of GBJ Premium Support With
                    </Typography>
                    {/* Moto Text Ended */}
                    {/* Services Logo Container */}
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center'
                    }} id='ServicesLogo'>
                        <img src={servicesLogo} alt="" width={500} />
                    </div>
                    {/* Services Logo Container  Ended*/}
                </Stack>

            </Stack>
        </Paper>

        // Branding container Ended
    )
}

export default Branding
