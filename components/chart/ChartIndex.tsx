import { Fragment, useEffect, useState } from "react";
import Grid from '@mui/material/Grid';

import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

import { collection, query, getDocs, orderBy, startAt, endAt, Timestamp } from "firebase/firestore";
import { dbConnect } from "../firebase/firestoreConnect";
import { Chart, registerables } from "chart.js"
import { Line } from "react-chartjs-2";
import {format} from 'date-fns';

export const ChartIndex = () =>{
    Chart.register(...registerables)
    const [minDate, setMinDate] = useState<any>(new Date());
    const [maxDate, setMaxDate] = useState<any>(new Date());
    const [AnalyseStatus, startAnalysis] = useState<boolean>(false);

    const timezone:string[] = [];
    const timezoneThermometer:number[] = [];
    const timezoneHeartRate:number[] = [];
    const timezoneBreathingRate:number[] = [];
    const timezoneOxygenRate:number[] = [];
    const timezoneMinPressure:number[] = [];
    const timezoneMaxPressure:number[] = [];
    const timezoneCalorie:number[] = [];
    const timezoneWeight:number[] = [];

    const [statefullTimezone, setStatefullTimezone] = useState<string[]>([]);
    const [statefullTimezoneThermometer, setStatefullTimezoneThermometer] = useState<number[]>([]);
    const [statefullTimezoneHeartRate, setStatefullTimezoneHeartRate] = useState<number[]>([]);
    const [statefullTimezoneBreathingRate, setStatefullTimezoneBreathingRate] = useState<number[]>([]);
    const [statefullTimezoneOxygenRate, setStatefullTimezoneOxygenRate] = useState<number[]>([]);
    const [statefullTimezoneMinPressure, setStatefullTimezoneMinPressure] = useState<number[]>([]);
    const [statefullTimezoneMaxPressure, setStatefullTimezoneMaxPressure] = useState<number[]>([]);
    const [statefullTimezoneCalorie, setStatefullTimezoneCalorie] = useState<number[]>([]);
    const [statefullTtimezoneWeight, setStatefullTimezoneWeight] = useState<number[]>([]);

    const GraphStyle = {
        wigth: "400px",
        height: "200px",
        padding: "10px",
    }
    const options: {} = {
        maintainAspectRatio: false,
        responsive: false,
    };
    const CreateChart = (targetCategory:string, targetCategoryList:number[]) =>{
        
        const labels = statefullTimezone;
        const graphData = {
            labels: labels,
            datasets: [
                {
                    label: targetCategory,
                    data: targetCategoryList,
                    borderColor: "rgb(75, 192, 192)",
                }
            ],
        };
        // console.log(targetCategory);
        // console.log(targetCategoryList);
        return(
            <Line
                style={GraphStyle}
                data={graphData}
                options={options}
            />
        )
    };
    useEffect(()=>{
        CreateChart("BT",statefullTimezoneThermometer)
        CreateChart("HR",statefullTimezoneHeartRate)
        CreateChart("RR",statefullTimezoneBreathingRate)
        CreateChart("SpO2",statefullTimezoneOxygenRate)
        CreateChart("MaxBP",statefullTimezoneMinPressure)
        CreateChart("MinBP",statefullTimezoneMaxPressure)
        CreateChart("kcal",statefullTimezoneCalorie)
        CreateChart("kg",statefullTtimezoneWeight)

    ,[AnalyseStatus]})
    const searchMedicalReport = async () => {
        try{
            const db = dbConnect();
            const medicalReportRef = collection(db, 'medical-report');
            const execQuery = query(medicalReportRef, orderBy("date"), startAt(Timestamp.fromDate(minDate)), endAt(Timestamp.fromDate(maxDate)));
            const snapshot = getDocs(execQuery);
            (await snapshot).docs.map((document:any)=>{
                const doc = document.data();
                timezone.push(format(doc.date.toDate(), 'yyyy-MM-dd HH:mm'));
                timezoneThermometer.push(doc.thermometer);
                timezoneHeartRate.push(doc.heartRate);
                timezoneBreathingRate.push(doc.breathingRate);
                timezoneOxygenRate.push(doc.oxygenRate);
                timezoneMinPressure.push(doc.minPressure);
                timezoneMaxPressure.push(doc.maxPressure);
                timezoneCalorie.push(doc.calorie);
                timezoneWeight.push(doc.weight);
            })
            setStatefullTimezone(timezone);
            setStatefullTimezoneThermometer(timezoneThermometer);
            setStatefullTimezoneHeartRate(timezoneHeartRate);
            setStatefullTimezoneBreathingRate(timezoneBreathingRate);
            setStatefullTimezoneOxygenRate(timezoneOxygenRate);
            setStatefullTimezoneMinPressure(timezoneMinPressure);
            setStatefullTimezoneMaxPressure(timezoneMaxPressure);
            setStatefullTimezoneCalorie(timezoneCalorie);
            setStatefullTimezoneWeight(timezoneWeight);
            console.log(timezone);
            startAnalysis(true);
        } catch(err: unknown) {
            alert(`データベースにアクセス出来ませんでした。`);
        }
    }

    return(
        <Fragment>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <h2>分析対象期間検索</h2>
                    <p>下のテキストボックスの記録を記入し、範囲内の期間のカルテを分析できます。</p>
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
                {AnalyseStatus?
                    <Fragment>
                        {CreateChart("BT",statefullTimezoneThermometer)}
                        {CreateChart("HR",statefullTimezoneHeartRate)}
                        {CreateChart("RR",statefullTimezoneBreathingRate)}
                        {CreateChart("SpO2",statefullTimezoneOxygenRate)}
                        {CreateChart("MaxBP",statefullTimezoneMinPressure)}
                        {CreateChart("MinBP",statefullTimezoneMaxPressure)}
                        {CreateChart("kcal",statefullTimezoneCalorie)}
                        {CreateChart("kg",statefullTtimezoneWeight)}
                    </Fragment>
                :
                    null
                }
            </Grid>
            <br></br>
        </Fragment>
    );
}