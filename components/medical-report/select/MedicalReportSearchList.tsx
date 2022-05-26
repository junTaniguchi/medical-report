import { Fragment } from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { ShowButton } from '../../ShowButton';
import type { SearchedMedicalReportType } from '../../../type/searchedMedicalReportType';

export const MedicalReportSearchList = (props:any) => {
    const searchedMedicalReports:SearchedMedicalReportType[] = props.searchedMedicalReports;
    const columns: GridColDef[] = [
        {
            field: 'show', headerName: '詳細', width: 40, sortable: false,
            renderCell: (params) => <ShowButton params={ params } />
        },
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'date', headerName: '診察日', width: 200 },
        { field: 'thermometer', headerName: '体温', width: 70 },
        { field: 'heartRate', headerName: '脈拍', width: 70 },
        { field: 'breathingRate', headerName: '呼吸数', width: 70 },
        { field: 'oxygenRate', headerName: '血中酸素濃度', width: 70 },
        { field: 'minPressure', headerName: '最低血圧', width: 70 },
        { field: 'maxPressure', headerName: '最高血圧', width: 70 },
        { field: 'calorie', headerName: '摂取カロリー', width: 70 },
        { field: 'weight', headerName: '体重', width: 70 },
        { field: 'memo', headerName: '備考', width: 70 },
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