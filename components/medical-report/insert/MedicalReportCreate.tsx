//MedicalReportShow.tsx
import type { MedicalReportType } from '../../type/medicalReportType';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';

export const MedicalReportCreate = (props:MedicalReportType) => {
    const {date, thermometer, heartRate, breathingRate, oxygenRate, minPressure, maxPressure, calorie, weight, memo} = props.medicalReport;
    console.log(`date is ${date}`);
    console.log(`thermometer is ${thermometer}`);
    console.log(`heartRate is ${heartRate}`);
    console.log(`breathingRate is ${breathingRate}`);
    console.log(`oxygenRate is ${oxygenRate}`);
    console.log(`minPressure is ${minPressure}`);
    console.log(`maxPressure, is ${maxPressure}`);
    console.log(`calorie, is ${calorie}`);
    console.log(`weight, is ${weight}`);
    const paperStyle = {
        wigth: "90%",
        margin: "16px",
        padding: "16px",
    }
    const MedicalReportCreateCall = () => {
        console.log(props.medicalReport);
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