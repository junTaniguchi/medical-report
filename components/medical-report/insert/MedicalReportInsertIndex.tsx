import { useState, Fragment } from 'react'
import { MedicalReportNew } from './MedicalReportNew'
import { MedicalReportCreate } from './MedicalReportCreate';
import type { MedicalReportType } from '../../type/medicalReportType';

export const MedicalReportInsertIndex = () => {
    const [isWritten, setIsWritten] = useState<boolean>(false);
    const [medicalReport, setMedicalReport] = useState<MedicalReportType>();
    console.log(`MedicalReportInsertIndex: ${isWritten}`);
    return(
        <Fragment>
            {isWritten? <MedicalReportCreate medicalReport={medicalReport} /> : <MedicalReportNew setIsWritten={setIsWritten} setMedicalReport={setMedicalReport}/> }
        </Fragment>
    )
}