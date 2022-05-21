import { useContext, Fragment } from 'react';

import IconButton from '@mui/material/IconButton';
import MedicalServicesOutlinedIcon from '@mui/icons-material/MedicalServicesOutlined';
import { MedicalReportType } from '../type/medicalReportType';
import { OpenShowStatusContext, ShowUniqueReportContext } from '../context/SelectIndexContext'
export const ShowButton = ({rowId}) => {
    const { medicalReport, setMedicalReport} = useContext(ShowUniqueReportContext);
    const { showPageStatus, changeShowPageStatus } = useContext(OpenShowStatusContext);
    const getMedicalReport = () =>{
        // デバッグ用
        const sampleData: MedicalReportType = {
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
        setMedicalReport(sampleData);
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