import { useContext, Fragment } from 'react';

import IconButton from '@mui/material/IconButton';
import MedicalServicesOutlinedIcon from '@mui/icons-material/MedicalServicesOutlined';
import { SearchedMedicalReportType } from '../type/searchedMedicalReportType';
import { OpenShowStatusContext, ShowUniqueReportContext } from '../context/SelectIndexContext'
export const ShowButton = (props) => {
    console.log('ShowButton');
    console.log(props);
    const { showMedicalReport, setShowMedicalReport } = useContext(ShowUniqueReportContext);
    const { showPageStatus, changeShowPageStatus } = useContext(OpenShowStatusContext);
    const getMedicalReport = () =>{
        // デバッグ用
        const targetMedicalreport: SearchedMedicalReportType = {
            id: props.params.id,
            date: props.params.row.date,
            thermometer: props.params.row.thermometer,
            heartRate: props.params.row.heartRate,
            breathingRate: props.params.row.breathingRate,
            oxygenRate: props.params.row.oxygenRate,
            minPressure: props.params.row.minPressure,
            maxPressure: props.params.row.maxPressure,
            calorie: props.params.row.calorie,
            weight: props.params.row.weight,
            memo: props.params.row.memo
        }
        setShowMedicalReport(targetMedicalreport);
        console.log('targetMedicalreport');
        console.log(targetMedicalreport);
        
        changeShowPageStatus(true);

    }
    return(
        <Fragment>
            <IconButton color="primary" onClick={getMedicalReport}>
                <MedicalServicesOutlinedIcon />
            </IconButton>
        </Fragment>
    )
}