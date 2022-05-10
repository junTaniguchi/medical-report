import { useState, Fragment } from 'react'
import { MedicalReportSearch } from './MedicalReportSearch'
import { MedicalReportShow } from './MedicalReportShow';
import type { MedicalReportType } from '../../type/medicalReportType';

export const MedicalReportSelectIndex = () => {
    const [isShowed, setIsShowed] = useState<boolean>(false);
    const [medicalReport, setMedicalReport] = useState<MedicalReportType>();

    return(
        <Fragment>
            {isShowed? <MedicalReportSearch isShowed={isShowed} setIsShowed={setIsShowed} /> : <MedicalReportShow medicalReport={medicalReport}/> }
        </Fragment>
    )
}