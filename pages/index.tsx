import type { NextPage } from 'next'
import { useState, useEffect } from 'react'
import { Header } from './Header'
import { Sidebar } from './Sidebar'
import { MedicalReportInsertIndex } from './medical-report/MedicalReportInsertIndex'
import { MedicalReportSelectIndex } from './medical-report/MedicalReportSelectIndex'
// import { Contents } from './Contents'
import Grid from '@mui/material/Grid';

const Home: NextPage = () => {
  const [contentsType, setContentsType] = useState<number>(0);
  // console.log(`contentsTag: ${contentsTag}`);

  let contentsTag:any;
  const ChangeContents = () => {
    console.log(`ChangeContents.contentsType ${contentsType}`);
    switch(contentsType){
      case 1:
        contentsTag = <MedicalReportInsertIndex />
      case 2:
        contentsTag = <MedicalReportSelectIndex />
    }
    console.log(`switch contentsTag: ${contentsTag}`);
    return (contentsTag);
  };

  useEffect(() => {
    console.log(`useEffect.contentsType ${contentsType}`);
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
          {/* <ChangeContents {...contentsType} /> */}
          <ChangeContents />
        </Grid>
      </Grid>
    </>
  )
}

export default Home
