import { createContext, useState } from "react";
import { SearchedMedicalReportType } from "../type/searchedMedicalReportType";

export const OpenListStatusContext = createContext({});
export const OpenShowStatusContext = createContext({});
export const ShowUniqueReportContext = createContext({});
export const SelectIndexProvider = (props:any) =>{
    const {children} = props;
    
    const [searchListStatus, changeSearchListStatus] = useState<boolean>(false);
    const [showPageStatus, changeShowPageStatus] = useState<boolean>(false);
    const [showMedicalReport, setShowMedicalReport] = useState<SearchedMedicalReportType>();

    return(
        <OpenListStatusContext.Provider value={{searchListStatus, changeSearchListStatus}}>
            <OpenShowStatusContext.Provider value={{showPageStatus, changeShowPageStatus}}>
                <ShowUniqueReportContext.Provider value={{showMedicalReport, setShowMedicalReport}}>
                    {children}
                </ShowUniqueReportContext.Provider>
            </OpenShowStatusContext.Provider>
        </OpenListStatusContext.Provider>
    )
}


