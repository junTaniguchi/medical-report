//MedicalReportShow.tsx
import { useContext, useState, ChangeEvent, Fragment } from 'react';
import { OpenShowStatusContext, ShowUniqueReportContext } from '../../../context/SelectIndexContext'
import type { MedicalReportType } from '../../../type/medicalReportType';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { doc, updateDoc, deleteDoc, Timestamp } from "firebase/firestore";
// import {format} from 'date-fns/format';
import { dbConnect } from "../../firebase/firestoreConnect";
import { async } from '@firebase/util';

export const MedicalReportShow = () => {
    const [readOnly, switchButton] = useState<boolean>(true);
    const {showMedicalReport, setShowMedicalReport} = useContext(ShowUniqueReportContext);
    const { showPageStatus, changeShowPageStatus } = useContext(OpenShowStatusContext);
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

    const [date, setDate] = useState<any>(originalDate);
    const [thermometer, setThermometer] = useState<number>(originalThermometer);
    const [heartRate, setHeartRate] = useState<number>(originalHeartRate);
    const [breathingRate, setBreathingRate] = useState<number>(originalBreathingRate);
    const [oxygenRate, setOxygenRate] = useState<number>(originalOxygenRate);
    const [minPressure, setMinPressure] = useState<number>(originalMinPressure);
    const [maxPressure, setMaxPressure] = useState<number>(originalMaxPressure);
    const [calorie, setCalorie] = useState<number>(originalCalorie);
    const [weight, setWeight] = useState<number>(originalWeight);
    const [memo, setMemo] = useState<string>(originalMemo);

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

    const paperStyle = {
        wigth: "90%",
        margin: "16px",
        padding: "16px",
    }
    const updateMedicalReport = async () =>{
        const targetMedicalReport: MedicalReportType = {
            date: Timestamp.fromDate(date),
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
            const medicalReportRef = doc(db, 'medical-report', showMedicalReport.id);
            await updateDoc(medicalReportRef, targetMedicalReport);
            alert(`更新されました`);
            switchButton(true);    
        }catch(err:unknown){
            alert(`データベースへの接続に失敗し、更新できませんでした。`);
        }
    }
    const deleteMedicalReport = async () => {
        try{
            const db = dbConnect();
            const medicalReportRef = doc(db, 'medical-report', showMedicalReport.id);
            await deleteDoc(medicalReportRef);
            alert(`削除されました`);
            changeShowPageStatus(false);
        }catch(err:unknown){
            alert(`データベースへの接続に失敗し、更新できませんでした。`);
        }
    }
    return(
        <>
            <Paper elevation={3} style={paperStyle}>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <h2>電子カルテ詳細</h2>
                        {readOnly?
                            <p>過去の診断記録をご確認ください。</p>
                        :
                            <p>修正が完了次第、更新ボタンを押下してください。</p>    
                        }                    
                    </Grid>
                    <Grid item xs={6}>
                        <br></br><br></br><br></br><br></br>
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
                    <Grid item xs={6}>
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
                    <Grid item xs={6}>
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
                    <Grid item xs={6}>
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
                    <Grid item xs={6}>
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
                    <Grid item xs={6}>
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
                    <Grid item xs={6}>
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
                    <Grid item xs={6}>
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
                    <Grid item xs={6}>
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
                    <Grid item xs={12}>
                        <TextField
                            disabled={readOnly}
                            id="outlined-required"
                            type='text'
                            label="備考"
                            multiline
                            fullWidth
                            onChange={onChangeMemo}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        {readOnly?
                            <Button variant="contained"
                                endIcon={<SendIcon />}
                                onClick={()=>(changeShowPageStatus(false))}
                            > 一覧画面へ戻る </Button> 
                        :
                            null
                        }
                    </Grid>
                    <Grid item xs={6}>
                        {readOnly?
                            <Fragment>
                                <Button variant="contained"
                                        endIcon={<SendIcon />}
                                        onClick={()=>(switchButton(false))}
                                > 修正 </Button> 
                                <p></p>
                                <Button variant="contained"
                                        endIcon={<SendIcon />}
                                        onClick={deleteMedicalReport}
                                > 削除 </Button> 
                            </Fragment>
                        : 
                            <Fragment>
                                <Button variant="contained"
                                        endIcon={<SendIcon />}
                                        onClick={()=>(switchButton(true))}
                                > 修正取り止め </Button>
                                <p></p>
                                <Button variant="contained"
                                        endIcon={<SendIcon />}
                                        onClick={updateMedicalReport}
                                > 更新 </Button>
                            </Fragment>
                        }
                    </Grid>
                </Grid>
            </Paper>
        </>
    )
}