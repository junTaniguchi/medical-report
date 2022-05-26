//MedicalReportShow.tsx
import { useContext, useState, ChangeEvent, Fragment } from 'react';
import { ShowUniqueReportContext } from '../../../context/SelectIndexContext'
import type { MedicalReportType } from '../../../type/medicalReportType';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { collection, doc, setDocs, updateDoc, Timestamp, setDoc } from "firebase/firestore";
import {format} from 'date-fns/format';
import { dbConnect } from "../../firebase/firestoreConnect";
import { async } from '@firebase/util';

export const MedicalReportShow = () => {
    const [readOnly, switchButton] = useState<Boolean>(true);
    const {showMedicalReport, setShowMedicalReport} = useContext(ShowUniqueReportContext);
    console.log('showMedicalReport');
    console.log(showMedicalReport);
    const originalDate = showMedicalReport.date;
    const originalThermometer = showMedicalReport.thermometer;
    const originalHeartRate = showMedicalReport.heartRate;
    const originalBreathingRate = showMedicalReport.breathingRate;
    const originalOxygenRate = showMedicalReport.oxygenRate;
    const originalMinPressure = showMedicalReport.minPressure;
    const originalMaxPressure = showMedicalReport.maxPressure;
    const originalCalorie = showMedicalReport.calorie;
    const originalWeight = showMedicalReport.weight;
    const originalMemo = showMedicalReport.memo;

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
    const updateMedicalReport = async () =>{
        const preMedicalReport: MedicalReportType = {
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
        // console.log(medicalReport);
        try{
            const db = dbConnect();
            // const medicalReportRef = doc(collection(db, 'medical-report'));
            console.log('showMedicalReport');
            console.log(showMedicalReport);
            const medicalReportRef = doc(db, 'medical-report', showMedicalReport.id);
            // await setDoc(medicalReportRef, medicalReport);
            console.log('medicalReportRef');
            console.log(medicalReportRef);
            await updateDoc(medicalReportRef, preMedicalReport);
            alert(`更新されました`);
            switchButton(true);    
        }catch(err:unknown){
            alert(`データベースへの接続に失敗し、更新できませんでした。`);
        }
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
                            disabled={readOnly}
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
                    <Grid item xs={4}>
                    </Grid>
                    <Grid item xs={4}>
                        <TextField
                            disabled={readOnly}
                            id="outlined-required"
                            type='number'
                            label="体温(BT)"
                            value={thermometer}
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
                            value={heartRate}
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
                            value={breathingRate}
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
                            value={oxygenRate}
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
                            value={minPressure}
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
                            value={maxPressure}
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
                            value={calorie}
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
                            value={weight}
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
                            <Fragment>
                                <Button variant="contained"
                                        endIcon={<SendIcon />}
                                        onClick={()=>(switchButton(true))}
                                > 修正取り止め </Button>
                                <p></p>
                                <Button variant="contained"
                                        endIcon={<SendIcon />}
                                        onClick={updateMedicalReport}
                                > 修正決定 </Button>
                            </Fragment>
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