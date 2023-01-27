import React, {useState} from 'react'
import {Button,Input,FormLabel,Alert} from '@mui/material'
import axios from 'axios'

export default function FindAircraft() {
    const [currentFin, setFin] = useState(false);
    const [currentReg, setReg] = useState(false);
    const [currentMan, setMan] = useState(false);
    const [currentType, setType] = useState(false);
    const [currentCode, setCode] = useState(false);
    const [errFound, setErrFound] = useState(false);

    function handleSubmit(event) {
        axios
          .get("http://localhost:5000/api/ac/fin/" + currentFin)
          .then((res) => {
            const {code, manufacturer, registration, type} = res.data.myAircraft
            setReg(registration);
            setType(type)
            setCode(code)
            setMan(manufacturer)
            setErrFound(false);
          })
          .catch(err => {
            console.log('err found')
            if(err.code === "ERR_BAD_REQUEST") {
                console.log('404')
                setReg('')
                setType('')
                setCode('')
                setMan('')
                setErrFound(true);
            }
          });

        // if(plane) {
        //     console.log(plane)
        //     setReg(plane.registration);
        //     setMan(plane.manufacturer)
        //     setType(plane.type)
        //     setCode(plane.code)
        // } else {
        //     console.log("Plane with FIN: " + currentFin + " not found!")
        //     setReg(null)
        //     setMan(null)
        //     setType(null)
        //     setCode(null)
        // }
    }

    function finChangeHandler(event) {
        setFin(event.target.value)
    }

    let displayFin;
    if(errFound) {
        displayFin = (
            <Alert severity='error' >
                No plane found!
            </Alert>
        )
    } else {
        displayFin = (
            <React.Fragment>
                <FormLabel><b>Registration</b>: {currentReg}</FormLabel>
                <br/>
                <FormLabel><b>Type</b>: {currentType}</FormLabel>
                <br/>
                <FormLabel><b>Manufacturer</b>: {currentMan}</FormLabel>
                <br/>
                <FormLabel><b>Short Code</b>: {currentCode}</FormLabel>
                <br/>
            </React.Fragment>
        );
    }

    return(
        <div className="homepage">
            <form onSubmit={handleSubmit} action="#">
                <FormLabel sx={{
                    margin: "1rem"
                }}>FIN</FormLabel>
                <br/>
                <Input type="number" onChange={finChangeHandler} value={currentFin}/>
                <br/>

                {/*Display FIN Data*/}
                {displayFin}

                <Button variant="contained" onClick={handleSubmit} sx={{
                    padding: "0.3rem",
                    margin: "1rem",
                    position: "relative"
                }}>Submit</Button>
            </form>
        </div>
    );
}