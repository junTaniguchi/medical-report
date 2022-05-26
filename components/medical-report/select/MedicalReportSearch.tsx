import { useContext, useState, Fragment } from 'react';
import {OpenListStatusContext} from '../../../context/SelectIndexContext'
import type { SearchedMedicalReportType } from '../../../type/searchedMedicalReportType';
import Paper from '@mui/material/Paper';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { MedicalReportSearchList } from './MedicalReportSearchList';
import { collection, query, getDocs, orderBy, startAt, endAt, Timestamp } from "firebase/firestore";
import {format} from 'date-fns';
import { dbConnect } from "../../firebase/firestoreConnect";

export const MedicalReportSearch = () => {
    const paperStyle = {
        wigth: "90%",
        margin: "16px",
        padding: "16px",
    }
    const {searchListStatus, changeSearchListStatus} = useContext(OpenListStatusContext);
    console.log(`searchListStatus: ${searchListStatus}`);
    const [minDate, setMinDate] = useState<any>(new Date());
    const [maxDate, setMaxDate] = useState<any>(new Date());

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
                    date : format(doc.date.toDate(), 'yyyy/MM/dd HH:mm'),
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
            <Paper elevation={3} style={paperStyle}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <h2>過去の診断記録検索</h2>
                    <p>下のテキストボックスの記録を記入し、範囲内の期間のカルテを検索できます。</p>
                </Grid>
                <Grid item xs={3}>
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
                <Grid item xs={1}>
                    <p style={{textAlign: "center"}}>〜</p>
                </Grid>
                <Grid item xs={3}>
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
                <Grid item xs={2}>
                    <Button variant="contained" endIcon={<SendIcon />} onClick={searchMedicalReport} >
                        検索
                    </Button>
                </Grid>
            </Grid>
            <br></br>
            {searchListStatus? 
                <MedicalReportSearchList searchedMedicalReports={searchedMedicalReports}/> 
            :
                null
            }
            </Paper>
        </Fragment>
    )
}