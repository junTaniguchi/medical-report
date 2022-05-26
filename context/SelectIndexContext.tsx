import { createContext, useState } from "react";
import { SearchedMedicalReportType } from "../type/searchedMedicalReportType";

export const OpenListStatusContext = createContext({} as {
    searchListStatus: boolean
    changeSearchListStatus: React.Dispatch<React.SetStateAction<boolean>>
  });
export const OpenShowStatusContext = createContext({} as {
    showPageStatus: boolean
    changeShowPageStatus: React.Dispatch<React.SetStateAction<boolean>>
  });
export const ShowUniqueReportContext = createContext({} as {
    showMedicalReport: SearchedMedicalReportType
    setShowMedicalReport: React.Dispatch<React.SetStateAction<SearchedMedicalReportType>>
  });
export const SelectIndexProvider = (props:any) =>{
    const {children} = props;
    
    const [searchListStatus, changeSearchListStatus] = useState<boolean>(false);
    const [showPageStatus, changeShowPageStatus] = useState<boolean>(false);
    const [showMedicalReport, setShowMedicalReport] = useState<SearchedMedicalReportType>({
        id : "0",
        date : new Date(),
        // date : format(doc.date.toDate(),'YYYY-MM-DD HH:mm:ss'),
        thermometer : 0,
        heartRate : 0,
        breathingRate : 0,
        oxygenRate : 0,
        minPressure : 0,
        maxPressure : 0,
        calorie : 0,
        weight : 0,
        memo : ""
    });

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


