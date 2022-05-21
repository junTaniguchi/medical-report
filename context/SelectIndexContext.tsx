import { createContext, useState } from "react";
import { MedicalReportType } from "../type/medicalReportType";

export const OpenListStatusContext = createContext({});
export const OpenShowStatusContext = createContext({});
export const ShowUniqueReportContext = createContext({});
export const SelectIndexProvider = (props:any) =>{
    const {children} = props;
    
    const [searchListStatus, changeSearchListStatus] = useState<boolean>(false);
    const [showPageStatus, changeShowPageStatus] = useState<boolean>(false);
    const [medicalReport, setMedicalReport] = useState<MedicalReportType>();

    return(
        <OpenListStatusContext.Provider value={{searchListStatus, changeSearchListStatus}}>
            <OpenShowStatusContext.Provider value={{showPageStatus, changeShowPageStatus}}>
                <ShowUniqueReportContext.Provider value={{medicalReport, setMedicalReport}}>
                    {children}
                </ShowUniqueReportContext.Provider>
            </OpenShowStatusContext.Provider>
        </OpenListStatusContext.Provider>
    )
}


