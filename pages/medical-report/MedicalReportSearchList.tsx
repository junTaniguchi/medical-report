import { ChangeEvent, useState, useEffect, Fragment } from 'react';
import { DataGrid, GridColDef, GridToolbar, jaJP } from '@mui/x-data-grid';

import type { SearchedMedicalReportType } from '../../type/SearchedMedicalReportType';

export const MedicalReportSearchList = (props) => {
    console.log(`MedicalReportSearchList : ${props}`);
    const searchedMedicalReports:SearchedMedicalReportType[] = props.SearchedMedicalReports;
    // date: Date | null;
    // thermometer: number;
    // heartRate: number;
    // breathingRate: number;
    // oxygenRate: number;
    // minPressure: number;
    // maxPressure: number;
    // calorie: number;
    // weight: number;
    // memo: string;
    const columns: GridColDef[] = [
        // {
        //     field: 'show', headerName: '詳細', width: 40, sortable: false,
        //     renderCell: (params) => <ShowButton rowId={ params.date } />
        // },
        { field: 'id', headerName: 'ID', width: 40 },
        { field: 'date', headerName: '診察日', width: 40 },
        { field: 'thermometer', headerName: '体温', width: 40 },
        { field: 'heartRate', headerName: '脈拍', width: 40 },
        { field: 'breathingRate', headerName: '呼吸数', width: 40 },
        { field: 'oxygenRate', headerName: '血中酸素濃度', width: 40 },
        { field: 'minPressure', headerName: '最低血圧', width: 40 },
        { field: 'maxPressure', headerName: '最高血圧', width: 40 },
        { field: 'calorie', headerName: '摂取カロリー', width: 40 },
        { field: 'weight', headerName: '体重', width: 40 },
        { field: 'memo', headerName: '備考', width: 40 },
      ];
    
    return(
        <Fragment>
            <div style={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={searchedMedicalReports}
                    columns={columns}
                    pageSize={10}
                    rowsPerPageOptions={[10]}
                    checkboxSelection
                />
            </div>
        </Fragment>
    )
}