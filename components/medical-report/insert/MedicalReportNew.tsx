// MedicalReportCreate.tsx

import { ChangeEvent, useState, Fragment } from 'react';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import type { MedicalReportType } from '../../../type/medicalReportType';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import { dbConnect } from "../../firebase/firestoreConnect";
import { collection, addDoc, Timestamp } from "firebase/firestore";

import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

export const MedicalReportNew = (props:any) => {
    const [readOnly, switchButton] = useState<boolean>(false);
    const paperStyle = {
        wigth: "90%",
        margin: "16px",
        padding: "16px",
    }
    
    const [date, setDate] = useState<any>(new Date());
    const [thermometer, setThermometer] = useState<number>(0.0);
    const [heartRate, setHeartRate] = useState<number>(0.0);
    const [breathingRate, setBreathingRate] = useState<number>(0.0);
    const [oxygenRate, setOxygenRate] = useState<number>(0.0);
    const [minPressure, setMinPressure] = useState<number>(0.0);
    const [maxPressure, setMaxPressure] = useState<number>(0.0);
    const [calorie, setCalorie] = useState<number>(0.0);
    const [weight, setWeight] = useState<number>(0.0);
    const [memo, setMemo] = useState<string>("");

    const onChangeVT = (e: ChangeEvent<HTMLInputElement>) => {
        setThermometer(parseFloat(e.target.value));
    }
    const onChangeHR = (e: ChangeEvent<HTMLInputElement>) => {
        setHeartRate(parseFloat(e.target.value));
    }
    const onChangeRR = (e: ChangeEvent<HTMLInputElement>) => {
        setBreathingRate(parseFloat(e.target.value));
    }
    const onChangeSpO2 = (e: ChangeEvent<HTMLInputElement>) => {
        setOxygenRate(parseFloat(e.target.value));
    }
    const onChangeBPMin = (e: ChangeEvent<HTMLInputElement>) => {
        setMinPressure(parseFloat(e.target.value));
    }
    const onChangeBPMax = (e: ChangeEvent<HTMLInputElement>) => {
        setMaxPressure(parseFloat(e.target.value));
    }
    const onChangeKcal = (e: ChangeEvent<HTMLInputElement>) => {
        setCalorie(parseFloat(e.target.value));
    }
    const onChangeKg = (e: ChangeEvent<HTMLInputElement>) => {
        setWeight(parseFloat(e.target.value));
    }
    const onChangeMemo = (e: ChangeEvent<HTMLInputElement>) => {
        setMemo(e.target.value);
    }
    const createMedicalReport = async () => {
        try{
            const db = dbConnect();
            const medicalReportRef = collection(db, 'medical-report');
            const addMedicalReport : MedicalReportType = {
                date : Timestamp.fromDate(date),
                // date : format(doc.date.toDate(),'YYYY-MM-DD HH:mm:ss'),
                thermometer : thermometer,
                heartRate : heartRate,
                breathingRate : breathingRate,
                oxygenRate : oxygenRate,
                minPressure : minPressure,
                maxPressure : maxPressure,
                calorie : calorie,
                weight : weight,
                memo : memo
            }
            await addDoc(medicalReportRef, addMedicalReport);
            alert(`?????????????????????????????????????????????`);
        }catch(err:unknown){
            alert(`????????????????????????????????????????????????????????????`);
        }
    }
    return(
        <Fragment>
            <Paper elevation={3} style={paperStyle}>
                <Grid container spacing={2}>
                    {/* 1?????? */}
                    <Grid item xs={6}>
                        <h2>???????????????????????????</h2>
                        {readOnly? 
                            <p>??????????????????????????????????????????????????????????????????????????????</p>
                        :
                            <p>??????????????????????????????????????????????????????????????????</p>
                        }
                    </Grid>
                    <Grid item xs={6}>
                        <br></br><br></br><br></br><br></br>
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DateTimePicker
                            disabled={readOnly}
                            renderInput={(props) => <TextField {...props} />}
                            label="?????????"
                            value={date}
                            onChange={(newValue) => {
                                setDate(newValue);
                            }}
                        />
                        </LocalizationProvider>
                    </Grid>
                    {/* 2?????? */}
                    <Grid item xs={6}>
                        <TextField
                            disabled={readOnly}
                            id="outlined-required"
                            type='number'
                            label="??????(BT)"
                            onChange={onChangeVT}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            disabled={readOnly}
                            id="outlined-required"
                            type='number'
                            label="??????(HR)"
                            onChange={onChangeHR}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </Grid>
                    {/* 3?????? */}
                    <Grid item xs={6}>
                        <TextField
                            disabled={readOnly}
                            id="outlined-required"
                            type='number'
                            label="?????????(RR)"
                            onChange={onChangeRR}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            disabled={readOnly}
                            id="outlined-required"
                            type='number'
                            label="??????????????????(SpO2)"
                            onChange={onChangeSpO2}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </Grid>
                    {/* 4?????? */}
                    <Grid item xs={6}>
                        <TextField
                            disabled={readOnly}
                            id="outlined-required"
                            type='number'
                            label="????????????(BP)"
                            onChange={onChangeBPMin}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            disabled={readOnly}
                            id="outlined-required"
                            type='number'
                            label="????????????(BP)"
                            onChange={onChangeBPMax}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </Grid>
                    {/* 5?????? */}
                    <Grid item xs={6}>
                        <TextField
                            disabled={readOnly}
                            id="outlined-required"
                            type='number'
                            label="??????????????????(kcal)"
                            onChange={onChangeKcal}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            disabled={readOnly}
                            id="outlined-required"
                            type='number'
                            label="??????(kg)"
                            onChange={onChangeKg}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            disabled={readOnly}
                            id="outlined-required"
                            type='text'
                            label="??????"
                            multiline
                            fullWidth
                            onChange={onChangeMemo}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </Grid>
                    <Grid item xs={6}>
                    </Grid>
                    <Grid item xs={6}>
                        {readOnly?
                            <Fragment>
                                <Button variant="contained" endIcon={<SendIcon />} onClick={createMedicalReport} >
                                    ??????
                                </Button>
                                <p></p>
                                <Button variant="contained" endIcon={<SendIcon />} onClick={()=>(switchButton(false))} >
                                    ????????????
                                </Button>
                            </Fragment>
                        :
                            <Fragment>
                                <Button variant="contained" endIcon={<SendIcon />} onClick={()=>(switchButton(true))} >
                                    ??????
                                </Button>  
                            </Fragment>
                        }
                        
                    </Grid>
                </Grid>
            </Paper>
        </Fragment>
    )
}