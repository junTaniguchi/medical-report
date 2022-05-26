import { useContext, useState, useEffect, Fragment } from 'react';
import {OpenListStatusContext} from '../../../context/SelectIndexContext'
import type { SearchedMedicalReportType } from '../../../type/searchedMedicalReportType';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { MedicalReportSearchList } from './MedicalReportSearchList';
import { collection, query, where, getDocs, orderBy, startAt, endAt, Timestamp } from "firebase/firestore";
import {format} from 'date-fns/format';
import { dbConnect } from "../../firebase/firestoreConnect";
import { async } from '@firebase/util';

export const MedicalReportSearch = () => {

    const {searchListStatus, changeSearchListStatus} = useContext(OpenListStatusContext);
    console.log(`searchListStatus: ${searchListStatus}`);
    const [minDate, setMinDate] = useState<Date>(new Date());
    const [maxDate, setMaxDate] = useState<Date>(new Date());
    // const [medicalReport, setMedicalReport] = useState<MedicalReportType>();

    const [searchedMedicalReports, setSearchedMedicalReports] = useState<SearchedMedicalReportType[]>([]);
    const searchMedicalReport = async () => {
        const searchMedicalReports : SearchedMedicalReportType[] = [];
        try{
            const db = dbConnect();
            const medicalReportRef = collection(db, 'medical-report');
            const execQuery = query(medicalReportRef, orderBy("date"), startAt(Timestamp.fromDate(minDate)), endAt(Timestamp.fromDate(maxDate)));
            const snapshot = getDocs(execQuery);
            const resultMedicalReport = (await snapshot).docs.map((document:any)=>{
                    const doc = document.data()
                    const searchMedicalReport : SearchedMedicalReportType = {
                        id : document.id,
                        date : doc.date.toDate(),
                        // date : format(doc.date.toDate(),'YYYY-MM-DD HH:mm:ss'),
                        thermometer : doc.thermometer,
                        heartRate : doc.heartRate,
                        breathingRate : doc.breathingRate,
                        oxygenRate : doc.oxygenRate,
                        minPressure : doc.minPressure,
                        maxPressure : doc.maxPressure,
                        calorie : doc.calorie,
                        weight : doc.weight,
                        memo : doc.memo
                    }
                    console.log(doc.date.toDate());
                    searchMedicalReports.push(searchMedicalReport);

            })
            
            setSearchedMedicalReports(searchMedicalReports);
            changeSearchListStatus(true);
        } catch(err: unknown) {
            alert(`データベースにアクセス出来ませんでした。`);
        }
    }

    return(
        <Fragment>
            <Grid container spacing={2}>
                <Grid item xs={4}>
                    <Button variant="contained" endIcon={<SendIcon />} onClick={searchMedicalReport} >
                        検索
                    </Button>
                </Grid>
                <Grid item xs={12}>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DateTimePicker
                            renderInput={(props) => <TextField {...props} />}
                            label="いつから"
                            value={minDate}
                            onChange={(newValue) => {
                                setMinDate(newValue);
                            }}
                        />
                        〜
                    </LocalizationProvider>
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
            {searchListStatus? <MedicalReportSearchList searchedMedicalReports={searchedMedicalReports}/> : null}
        </Fragment>
    )
}