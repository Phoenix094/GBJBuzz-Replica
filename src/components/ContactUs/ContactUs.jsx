
import { Button, FormControl, OutlinedInput, Stack, Typography } from '@mui/material'

import { styles } from './styles'

const ContactUs = () => {
    return (
        <div style={styles.container}>
            <Stack direction='column' spacing={2} textAlign='center'>
                <Typography variant='h2' color='text.primary'>Ready to get started</Typography>
                <Typography color='GrayText' variant='h4'>
                    Super Charge Your Business with GBJ Buzz's
                </Typography>
                <Typography color='GrayText' variant='h4'>
                    Digital Marketing, AI and CyberSecurity Services !
                </Typography>

                <Stack direction='row' alignItems='center' justifyContent='center' display='flex'>
                    <FormControl fullWidth>
                        <OutlinedInput color='info' placeholder='Enter Your Email Address' sx={styles.input}
                            fullWidth />
                    </FormControl>
                    <Button variant='contained' size='large' color='info' sx={styles.btn}>Sign Up</Button>
                </Stack>
            </Stack>

        </div>
    )
}

export default ContactUs
