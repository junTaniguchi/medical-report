import { ChangeEvent, useState, useEffect, Fragment } from 'react';
import type { SearchedMedicalReportType } from '../../type/SearchedMedicalReportType';
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
    const [minDate, setMinDate] = useState<Date | null>(new Date());
    const [maxDate, setMaxDate] = useState<Date | null>(new Date());
    // const [medicalReport, setMedicalReport] = useState<MedicalReportType>();
    const [searchedMedicalReports, setSearchedMedicalReports] = useState<SearchedMedicalReportType[]>([]);

    const searchMedicalReport = () => {
        const searchData = {
            minDate: minDate,
            maxDate: maxDate
        }
        // デバッグ用
        const sampleData: SearchedMedicalReportType = {
            id: 1,
            date: new Date(),
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
        setSearchedMedicalReports([sampleData]);
        console.log(`${sampleData}`);
        console.log(`${searchedMedicalReports}`);
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
            {isSearched? <MedicalReportSearchList searchedMedicalReports={searchedMedicalReports}/> : null}
        </Fragment>
    )
}