//MedicalReportShow.tsx
import type { MedicalReportType } from '../../type/medicalReportType';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import { collection, addDoc, Timestamp } from "firebase/firestore";
import {format} from 'date-fns/format';
import { dbConnect } from "../../firebase/firestoreConnect";
import { async } from '@firebase/util';

export const MedicalReportCreate = (props:MedicalReportType) => {
    const {date, thermometer, heartRate, breathingRate, oxygenRate, minPressure, maxPressure, calorie, weight, memo} = props.medicalReport;
    const paperStyle = {
        wigth: "90%",
        margin: "16px",
        padding: "16px",
    }
    const MedicalReportCreateCall = async () => {
        console.log(props.medicalReport);
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
            console.log('addMedicalReport');
            console.log(addMedicalReport);
            await addDoc(medicalReportRef, addMedicalReport);
            alert(`データベースに登録されました。`);
        }catch(err:unknown){
            alert(`データベースにアクセス出来ませんでした。`);
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
                        <TextField
                            disabled
                            id="outlined-disabled"
                            type='datetime-local'
                            label="診察日"
                            value={date.toString()}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </Grid>
                    {/* 2段目 */}
                    <Grid item xs={4}>
                    </Grid>
                    <Grid item xs={4}>
                        <TextField
                            disabled
                            id="outlined-disabled"
                            type='number'
                            label="体温(BT)"
                            value={thermometer}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <TextField
                            disabled
                            id="outlined-disabled"
                            type='number'
                            label="脈拍(HR)"
                            value={heartRate}
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
                            disabled
                            id="outlined-disabled"
                            type='number'
                            label="呼吸数(RR)"
                            value={breathingRate}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <TextField
                            disabled
                            id="outlined-disabled"
                            type='number'
                            label="血中酸素濃度(SpO2)"
                            value={oxygenRate}
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
                            disabled
                            id="outlined-disabled"
                            type='number'
                            label="最低血圧(BP)"
                            value={minPressure}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <TextField
                            disabled
                            id="outlined-disabled"
                            type='number'
                            label="最高血圧(BP)"
                            value={maxPressure}
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
                            disabled
                            id="outlined-disabled"
                            type='number'
                            label="摂取カロリー(kcal)"
                            value={calorie}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <TextField
                            disabled
                            id="outlined-disabled"
                            type='number'
                            label="体重(kg)"
                            value={weight}
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
                        <Button variant="contained" onClick={MedicalReportCreateCall} endIcon={<SendIcon />}>
                            登録
                        </Button>
                    </Grid>
                    {/* 6段目 */}
                    <Grid item xs={12}>
                    </Grid>
                </Grid>
            </Paper>
        </>
    )
}