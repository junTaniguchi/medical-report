// Sidebar.tsx
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import CloudDownloadOutlinedIcon from '@mui/icons-material/CloudDownloadOutlined';
import MedicalServicesOutlinedIcon from '@mui/icons-material/MedicalServicesOutlined';
import AutoGraphOutlinedIcon from '@mui/icons-material/AutoGraphOutlined';

export const Sidebar = (props:any) => {
    const{contentsType, setContentsType} = props;
    const MEDICAL_REPORT_CREATE : Number = 1;
    const MEDICAL_REPORT_SEARCH : Number = 2;
    const MEDICAL_REPORT_GRAPH : Number = 3;
    
    const changeContentsCreate = () => {
        setContentsType(MEDICAL_REPORT_CREATE);
        // console.log(contentsType);
        // console.log(`Sidebar.contentsType ${contentsType}`);
        
    }
    const changeContentsSearch = () => {
        setContentsType(MEDICAL_REPORT_SEARCH);
        // console.log(contentsType);
        // console.log(`Sidebar.contentsType ${contentsType}`);
    }
    const changeContentsGraph = () => {
        setContentsType(MEDICAL_REPORT_GRAPH);
        // console.log(contentsType);
        // console.log(`Sidebar.contentsType ${contentsType}`);
    }
    return (
        <>
            <List
                sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                component="nav"
                aria-labelledby="nested-list-subheader"
                subheader={
                    <ListSubheader component="div" id="nested-list-subheader">
                    カルテメニュー
                    </ListSubheader>
                }
            >
                <ListItemButton onClick={changeContentsCreate}>
                    <ListItemIcon>
                        <CloudDownloadOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText primary="作成" />
                </ListItemButton>
                <ListItemButton onClick={changeContentsSearch}>
                    <ListItemIcon>
                        <MedicalServicesOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText primary="検索" />
                </ListItemButton>
                <ListItemButton onClick={changeContentsGraph}>
                    <ListItemIcon>
                        <AutoGraphOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText primary="診断傾向グラフ" />
                </ListItemButton>
            </List>
        </>
    )
}