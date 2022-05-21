import type { NextPage } from 'next'
import { useState, useEffect } from 'react'
import { Header } from '../components/Header'
import { Sidebar } from '../components/Sidebar'
import { SelectIndexProvider } from '../context/SelectIndexContext'
import { MedicalReportInsertIndex } from '../components/medical-report/insert/MedicalReportInsertIndex'
import { MedicalReportSelectIndex } from '../components/medical-report/select/MedicalReportSelectIndex'
// import { Contents } from './Contents'
import Grid from '@mui/material/Grid';

const Home: NextPage = () => {
  const [contentsType, setContentsType] = useState<number>(0);

  // let contentsTag:any;
  const ChangeContents = () => {
    // console.log(`ChangeContents.contentsType ${contentsType}`);
    switch(contentsType){
      case 1:
        return <MedicalReportInsertIndex />
      case 2:
        return(
          <SelectIndexProvider>
            <MedicalReportSelectIndex />
          </SelectIndexProvider>
        )
      default:
        return null; 
    }
    // return (contentsTag);
  };

  useEffect(() => {
    // console.log(`useEffect.contentsType ${contentsType}`);
    ChangeContents();
  },[contentsType])

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Header />
        </Grid>
        <Grid item xs={3}>
          <Sidebar contentsType={contentsType} setContentsType={setContentsType}/>
        </Grid>
        <Grid item xs={9}>
          <ChangeContents />
        </Grid>
      </Grid>
    </>
  )
}

export default Home
