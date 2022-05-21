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
    // const{contentsType, setContentsType} = props;
    const MEDICAL_REPORT_CREATE : number = 1;
    const MEDICAL_REPORT_SEARCH : number = 2;
    const MEDICAL_REPORT_GRAPH : number = 3;
    
    const changeContentsCreate = () => {
        props.setContentsType(MEDICAL_REPORT_CREATE);
        // console.log(props.contentsType);
        // console.log(`Sidebar.contentsType ${props.contentsType}`);
        
    }
    const changeContentsSearch = () => {
        props.setContentsType(MEDICAL_REPORT_SEARCH);
        // console.log(props.contentsType);
        // console.log(`Sidebar.contentsType ${props.ontentsType}`);
    }
    const changeContentsGraph = () => {
        props.setContentsType(MEDICAL_REPORT_GRAPH);
        // console.log(props.contentsType);
        // console.log(`Sidebar.contentsType ${props.contentsType}`);
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