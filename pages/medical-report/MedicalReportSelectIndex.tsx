import { useState, Fragment } from 'react'
import { MedicalReportSearch } from './MedicalReportSearch'
import { MedicalReportShow } from './MedicalReportShow';
import type { MedicalReportType } from '../../type/medicalReportType';

export const MedicalReportSelectIndex = () => {
    const [isShowed, setIsShowed] = useState<boolean>(false);
    const [medicalReport, setMedicalReport] = useState<MedicalReportType>();
    console.log(`MedicalReportSelectIndex`);
    return(
        <Fragment>
            {isShowed? <MedicalReportShow medicalReport={medicalReport}/> : <MedicalReportSearch isShowed={isShowed} setIsShowed={setIsShowed} /> }
        </Fragment>
    )
}