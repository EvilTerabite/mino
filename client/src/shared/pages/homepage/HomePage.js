import React, {useState} from 'react'
import {Button,Input,FormLabel} from '@mui/material'


import './HomePage.css'
function HomePage() {
    const DUMMY_PLANES = [{
        fin: "123",
        reg: "C-GABC",
        man: "airbus",
        type: "220-300",
        code: "223"

    }]
    const [currentFin, setFin] = useState(false);
    const [currentReg, setReg] = useState(false);
    const [currentMan, setMan] = useState(false);
    const [currentType, setType] = useState(false);
    const [currentCode, setCode] = useState(false);

    function handleSubmit(event) {
        const plane = DUMMY_PLANES.find((plane) => {
            return currentFin === plane.fin;
        });
        if(plane) {
            console.log(plane)
            setReg(plane.reg);
            setMan(plane.man)
            setType(plane.type)
            setCode(plane.code)
        } else {
            console.log("Plane with FIN: " + currentFin + " not found!")
            setReg(null)
            setMan(null)
            setType(null)
            setCode(null)
        }
    }

    function finChangeHandler(event) {
        setFin(event.target.value)
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
                <FormLabel><b>Registration</b>: {currentReg}</FormLabel>
                <br/>
                <FormLabel><b>Type</b>: {currentType}</FormLabel>
                <br/>
                <FormLabel><b>Manufacturer</b>: {currentMan}</FormLabel>
                <br/>
                <FormLabel><b>Short Code</b>: {currentCode}</FormLabel>
                <br/>

                <Button variant="contained" onClick={handleSubmit} sx={{
                    padding: "0.3rem",
                    margin: "1rem",
                    position: "relative"
                }}>Submit</Button>
            </form>
        </div>
    );
}

export default HomePage;