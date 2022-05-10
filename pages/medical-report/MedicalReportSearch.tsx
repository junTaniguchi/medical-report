import { ChangeEvent, useState, useEffect, Fragment } from 'react';
import type { MedicalReportType } from '../../type/medicalReportType';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { MedicalReportSearchList } from './MedicalReportSearchList';

export const MedicalReportSearch = (props:any) => {

    const [isSearched, setIsSearched] = useState<boolean>(false);
    const [minDate, setMinDate] = useState<Date | null>(New Date());
    const [maxDate, setMaxDate] = useState<Date | null>(New Date());
    const [medicalReport, setMedicalReport] = useState<MedicalReportType>();
    const [medicalReports, setMedicalReports] = useState<MedicalReportType[]>([]);

    const searchMedicalReport = () => {
        // デバッグ用
        const sampleData: MedicalReportType = {
            date: null,
            thermometer: 0,
            heartRate: 0,
            breathingRate: 0,
            oxygenRate: 0,
            minPressure: 0,
            maxPressure: 0,
            calorie: 0,
            weight: 0,
            memo: ''
        }
        // デバッグ用
        setMedicalReport(sampleData);
        setMedicalReports([medicalReport]);
        console.log(medicalReports);
        /////////////////
        setIsSearched(true);
    }

    return(
        <Fragment>
            <Grid container spacing={2}>
                <Grid item xs={4}>
                    <Button variant="contained" endIcon={<SendIcon />} onClick={searchMedicalReport} >
                        検索
                    </Button>
                </Grid>
                <Grid item xs={4}>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DateTimePicker
                            renderInput={(props) => <TextField {...props} />}
                            label="いつから"
                            value={minDate}
                            onChange={(newValue) => {
                                setMinDate(newValue);
                            }}
                        />
                    </LocalizationProvider>
                </Grid>
                <Grid item xs={4}>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DateTimePicker
                            renderInput={(props) => <TextField {...props} />}
                            label="いつまで"
                            value={maxDate}
                            onChange={(newValue) => {
                                setMaxDate(newValue);
                            }}
                        />
                    </LocalizationProvider>
                </Grid>
            </Grid>
            {isSearched? <MedicalReportSearchList medicalReports={medicalReports}/> : null}
        </Fragment>
    )
}