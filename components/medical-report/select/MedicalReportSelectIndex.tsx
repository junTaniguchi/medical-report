import { useContext, useState, Fragment } from 'react'
import { OpenShowStatusContext } from '../../../context/SelectIndexContext';
import { MedicalReportSearch } from './MedicalReportSearch'
import { MedicalReportShow } from './MedicalReportShow';

export const MedicalReportSelectIndex = () => {
    const {showPageStatus, changeShowPageStatus} = useContext(OpenShowStatusContext);
    console.log(`showPageStatus: ${showPageStatus}`);
    return(
        <Fragment>
            {showPageStatus? <MedicalReportShow /> : <MedicalReportSearch /> }
        </Fragment>
    )
}