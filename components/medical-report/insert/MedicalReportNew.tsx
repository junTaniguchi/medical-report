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
            alert(`データベースに登録されました。`);
        }catch(err:unknown){
            alert(`データベースにアクセス出来ませんでした。`);
        }
    }
    return(
        <Fragment>
            <Paper elevation={3} style={paperStyle}>
                <Grid container spacing={2}>
                    {/* 1段目 */}
                    <Grid item xs={6}>
                        <h2>新規電子カルテ起票</h2>
                        {readOnly? 
                            <p>記載した内容に問題がなければ、登録を押下してください</p>
                        :
                            <p>下にある項目を全て計測して記載してください。</p>
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
                            onChange={onChangeHR}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </Grid>
                    {/* 3段目 */}
                    <Grid item xs={6}>
                        <TextField
                            disabled={readOnly}
                            id="outlined-required"
                            type='number'
                            label="呼吸数(RR)"
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
                            onChange={onChangeSpO2}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </Grid>
                    {/* 4段目 */}
                    <Grid item xs={6}>
                        <TextField
                            disabled={readOnly}
                            id="outlined-required"
                            type='number'
                            label="最低血圧(BP)"
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
                            onChange={onChangeBPMax}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </Grid>
                    {/* 5段目 */}
                    <Grid item xs={6}>
                        <TextField
                            disabled={readOnly}
                            id="outlined-required"
                            type='number'
                            label="摂取カロリー(kcal)"
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
                    </Grid>
                    <Grid item xs={6}>
                        {readOnly?
                            <Fragment>
                                <Button variant="contained" endIcon={<SendIcon />} onClick={createMedicalReport} >
                                    登録
                                </Button>
                                <p></p>
                                <Button variant="contained" endIcon={<SendIcon />} onClick={()=>(switchButton(false))} >
                                    取り止め
                                </Button>
                            </Fragment>
                        :
                            <Fragment>
                                <Button variant="contained" endIcon={<SendIcon />} onClick={()=>(switchButton(true))} >
                                    起票
                                </Button>  
                            </Fragment>
                        }
                        
                    </Grid>
                </Grid>
            </Paper>
        </Fragment>
    )
}