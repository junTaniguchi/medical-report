//MedicalReportShow.tsx
import { useContext } from 'react';
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
    const {medicalReport, setMedicalReport} = useContext(ShowUniqueReportContext);
    const {date, thermometer, heartRate, breathingRate, oxygenRate, minPressure, maxPressure, calorie, weight, memo} = medicalReport;
    console.log(medicalReport);
    const paperStyle = {
        wigth: "90%",
        margin: "16px",
        padding: "16px",
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
                        {/* <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DateTimePicker
                            renderInput={(props) => <TextField {...props} />}
                            label="診察日"
                            value={date}
                            onChange={(newValue) => {
                                setDate(newValue);
                            }}
                        />
                        </LocalizationProvider> */}
                    </Grid>
                    {/* 2段目 */}
                    <Grid item xs={4}>
                    </Grid>
                    <Grid item xs={4}>
                        <TextField
                            required
                            id="outlined-required"
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
                            required
                            id="outlined-required"
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
                            required
                            id="outlined-required"
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
                            required
                            id="outlined-required"
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
                            required
                            id="outlined-required"
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
                            required
                            id="outlined-required"
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
                            required
                            id="outlined-required"
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
                            required
                            id="outlined-required"
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
                        <Button variant="contained" endIcon={<SendIcon />}>
                            決定
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