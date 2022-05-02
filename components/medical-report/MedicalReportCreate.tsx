// MedicalReportCreate.tsx

import { ChangeEvent, useState } from 'react';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import type { MedicalReportType } from '../../type/medicalReportType';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';

import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

export const MedicalReportCreate = () => {
    const paperStyle = {
        wigth: "90%",
        margin: "16px"
    }
    
    const [date, setDate] = useState<Date | null>(new Date());
    const [thermometer, setThermometer] = useState<number>(0.0);
    const [heartRate, setHeartRate] = useState<number>(0.0);
    const [breathingRate, setBreathingRate] = useState<number>(0.0);
    const [oxygenRate, setOxygenRate] = useState<number>(0.0);
    const [minPressure, setMinPressure] = useState<number>(0.0);
    const [maxPressure, setMaxPressure] = useState<number>(0.0);
    const [calorie, setCalorie] = useState<number>(0.0);
    const [weight, setWeight] = useState<number>(0.0);

    // const onChangeDate = (e: ChangeEvent<HTMLInputElement>) => {
    //     setThermometer(new Date(e.target.value));
    // }
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
    const createMedicalReport = () => {
        const medicalReport: MedicalReportType = {
            date: date,
            thermometer: thermometer,
            heartRate: heartRate,
            breathingRate: breathingRate,
            oxygenRate: oxygenRate,
            minPressure: minPressure,
            maxPressure: maxPressure,
            calorie: calorie,
            weight: weight
        }
    }
    return(
        <>
            <Paper elevation={3} style={paperStyle}>
                <Grid container spacing={2}>
                    {/* 1段目 */}
                    <Grid item xs={4}>
                        電子カルテ
                    </Grid>
                    <Grid item xs={4}>
                    </Grid>
                    <Grid item xs={4}>
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DateTimePicker
                            renderInput={(props) => <TextField {...props} />}
                            label="診察日"
                            value={date}
                            onChange={(newValue) => {
                                setDate(newValue);
                            }}
                        />
                        </LocalizationProvider>
                    </Grid>
                    {/* 2段目 */}
                    <Grid item xs={3}>
                    </Grid>
                    <Grid item xs={3}>
                        <TextField
                            required
                            id="outlined-required"
                            type='number'
                            label="体温(BT)"
                            onChange={onChangeVT}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </Grid>
                    <Grid item xs={3}>
                        <TextField
                            required
                            id="outlined-required"
                            type='number'
                            label="脈拍(HR)"
                            onChange={onChangeHR}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </Grid>
                    <Grid item xs={3}>
                    </Grid>
                    {/* 3段目 */}
                    <Grid item xs={3}>
                    </Grid>
                    <Grid item xs={3}>
                        <TextField
                            required
                            id="outlined-required"
                            type='number'
                            label="呼吸数(RR)"
                            onChange={onChangeRR}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </Grid>
                    <Grid item xs={3}>
                        <TextField
                            required
                            id="outlined-required"
                            type='number'
                            label="血中酸素濃度(SpO2)"
                            onChange={onChangeSpO2}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </Grid>
                    <Grid item xs={3}>
                    </Grid>
                    {/* 4段目 */}
                    <Grid item xs={3}>
                    </Grid>
                    <Grid item xs={3}>
                        <TextField
                            required
                            id="outlined-required"
                            type='number'
                            label="最低血圧(BP)"
                            onChange={onChangeBPMin}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </Grid>
                    <Grid item xs={3}>
                        <TextField
                            required
                            id="outlined-required"
                            type='number'
                            label="最低血圧(BP)"
                            onChange={onChangeBPMax}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </Grid>
                    <Grid item xs={3}>
                    </Grid>
                    {/* 5段目 */}
                    </Grid>
                    <Grid item xs={3}>
                    <Grid item xs={3}>
                        <TextField
                            required
                            id="outlined-required"
                            type='number'
                            label="摂取カロリー(kcal)"
                            onChange={onChangeKcal}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </Grid>
                    <Grid item xs={3}>
                        <TextField
                            required
                            id="outlined-required"
                            type='number'
                            label="体重(kg)"
                            onChange={onChangeKg}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </Grid>
                    </Grid>
                    <Grid item xs={3}>
                    {/* 6段目 */}
                    <Grid item xs={12}>
                    </Grid>
                    {/* 7段目 */}
                    <Grid item xs={5}>
                    </Grid>
                    <Grid item xs={4}>
                    </Grid>
                    <Grid item xs={3}>
                        <Button variant="contained" endIcon={<SendIcon />}>
                            決定
                        </Button>
                    </Grid>
                </Grid>
            </Paper>
        </>
    )
}