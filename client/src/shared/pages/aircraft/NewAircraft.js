import {TextField,Grid, Button} from '@mui/material'
import { Container,Box } from '@mui/system';
import { useState } from 'react'

export default function NewAircraft() {
    const [fin, setFin] = useState('');
    const [reg, setReg] = useState('')
    const [type, setType] = useState('')
    const [man, setMan] = useState('')
    const [code, setCode] = useState('')

    function finChangeHandler(event) {
        setFin(event.target.value)
    }
    function regChangeHandler(event) {
        setReg(event.target.value)
    }
    function typeChangeHandler(event) {
        setType(event.target.value)
    }
    function manChangeHandler(event) {
        setMan(event.target.value)
    }
    function codeChangeHandler(event) {
        setCode(event.target.value)
    }
    function handleSubmit(event) {
        const data = new FormData(event.currentTarget);
        console.log({
            fin: data.get('fin')
        })
    }
    return(
        <Container component="main" maxWidth="xs">
            <Box sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
            }}>
                <Box component="form" onSubmit={handleSubmit} noValidate sx={{mt: 1}}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField variant="outlined" label="FIN" value={fin} onChange={finChangeHandler}/>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField variant="outlined" label="REGISTRATION" value={reg} onChange={regChangeHandler}/>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField variant="filled" label="TYPE" value={type} onChange={typeChangeHandler}/>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField variant="filled" label="CODE" value={code} onChange={codeChangeHandler}/>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                variant="filled" 
                                label="MANUFACTURER" 
                                value={man} 
                                onChange={manChangeHandler}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Button variant="contained" fullWidth>Submit</Button>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container>
    )
}