//MedicalReportShow.tsx
import { useContext, useState, useEffect } from 'react';
import { ShowUniqueReportContext } from '../../../context/SelectIndexContext'
import type { MedicalReportType } from '../../type/medicalReportType';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

export const MedicalReportShow = () => {
    const [readOnly, switchButton] = useState<Boolean>(true);
    const {medicalReport, setMedicalReport} = useContext(ShowUniqueReportContext);
    const {originalDate, originalThermometer, originalHeartRate, originalBreathingRate, originalOxygenRate, originalMinPressure, originalMaxPressure, originalCalorie, originalWeight, originalMemo} = medicalReport;

    const [date, setDate] = useState<Date | null>(originalDate);
    const [thermometer, setThermometer] = useState<number>(originalThermometer);
    const [heartRate, setHeartRate] = useState<number>(originalHeartRate);
    const [breathingRate, setBreathingRate] = useState<number>(originalBreathingRate);
    const [oxygenRate, setOxygenRate] = useState<number>(originalOxygenRate);
    const [minPressure, setMinPressure] = useState<number>(originalMinPressure);
    const [maxPressure, setMaxPressure] = useState<number>(originalMaxPressure);
    const [calorie, setCalorie] = useState<number>(originalCalorie);
    const [weight, setWeight] = useState<number>(originalWeight);

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

    const paperStyle = {
        wigth: "90%",
        margin: "16px",
        padding: "16px",
    }
    const updateMedicalReport = () =>{
        const medicalReport: MedicalReportType = {
            date: date,
            thermometer: thermometer,
            heartRate: heartRate,
            breathingRate: breathingRate,
            oxygenRate: oxygenRate,
            minPressure: minPressure,
            maxPressure: maxPressure,
            calorie: calorie,
            weight: weight,
            memo: ''
        }
        console.log(medicalReport);
        alert(`更新されました`)
        switchButton(true);
    }
    return(
        <>
            <Paper elevation={3} style={paperStyle}>
                <Grid container spacing={2}>
                    {/* 1段目 */}
                    <Grid item xs={4}>
                    </Grid>
                    <Grid item xs={4}>
                        電子カルテ
                    </Grid>
                    <Grid item xs={4}>
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DateTimePicker
                            renderInput={(props) => <TextField {...props} />}
                            label="診察日"
                            value={originalDate}
                            onChange={(newValue) => {
                                setDate(newValue);
                            }}
                        />
                        </LocalizationProvider>
                    </Grid>
                    {/* 2段目 */}
                    <Grid item xs={4}>
                    </Grid>
                    <Grid item xs={4}>
                        <TextField
                            disabled={readOnly}
                            id="outlined-required"
                            type='number'
                            label="体温(BT)"
                            value={originalThermometer}
                            onChange={onChangeVT}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <TextField
                            disabled={readOnly}
                            id="outlined-required"
                            type='number'
                            label="脈拍(HR)"
                            value={originalHeartRate}
                            onChange={onChangeHR}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </Grid>
                    {/* 3段目 */}
                    <Grid item xs={4}>
                    </Grid>
                    <Grid item xs={4}>
                        <TextField
                            disabled={readOnly}
                            id="outlined-required"
                            type='number'
                            label="呼吸数(RR)"
                            value={originalBreathingRate}
                            onChange={onChangeRR}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <TextField
                            disabled={readOnly}
                            id="outlined-required"
                            type='number'
                            label="血中酸素濃度(SpO2)"
                            value={originalOxygenRate}
                            onChange={onChangeSpO2}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </Grid>
                    {/* 4段目 */}
                    <Grid item xs={4}>
                    </Grid>
                    <Grid item xs={4}>
                        <TextField
                            disabled={readOnly}
                            id="outlined-required"
                            type='number'
                            label="最低血圧(BP)"
                            value={originalMinPressure}
                            onChange={onChangeBPMin}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <TextField
                            disabled={readOnly}
                            id="outlined-required"
                            type='number'
                            label="最高血圧(BP)"
                            value={originalMaxPressure}
                            onChange={onChangeBPMax}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </Grid>
                    {/* 5段目 */}
                    <Grid item xs={4}>
                    </Grid>
                    <Grid item xs={4}>
                        <TextField
                            disabled={readOnly}
                            id="outlined-required"
                            type='number'
                            label="摂取カロリー(kcal)"
                            value={originalCalorie}
                            onChange={onChangeKcal}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <TextField
                            disabled={readOnly}
                            id="outlined-required"
                            type='number'
                            label="体重(kg)"
                            value={originalWeight}
                            onChange={onChangeKg}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </Grid>
                    {/* 6段目 */}
                    <Grid item xs={12}>
                    </Grid>
                    {/* 7段目 */}
                    <Grid item xs={4}>
                    </Grid>
                    <Grid item xs={4}>
                    </Grid>
                    <Grid item xs={4}>
                        {readOnly? 
                            <Button variant="contained"
                                    endIcon={<SendIcon />}
                                    onClick={()=>(switchButton(false))}
                            > 修正 </Button> : 
                            <>
                                <Button variant="contained"
                                        endIcon={<SendIcon />}
                                        onClick={()=>(switchButton(true))}
                                > 修正取り止め </Button>
                                <p></p>
                                <Button variant="contained"
                                        endIcon={<SendIcon />}
                                        onClick={updateMedicalReport}
                                > 修正決定 </Button>
                            </>
                        }
                    </Grid>
                    {/* 6段目 */}
                    <Grid item xs={12}>
                    </Grid>
                </Grid>
            </Paper>
        </>
    )
}