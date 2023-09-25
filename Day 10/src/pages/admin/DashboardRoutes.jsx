import React from 'react'
import DashboardAdmin from './dashboard/DashboardAdmin'
import Team from './team/Team'
import Contacts from './contacts/Contacts'
import Invoices from './invoices/Invoices'
import Form from './form/Form'
import Bar from './bar/Bar'
import Pie from './pie/pie'
import Line from './line/line'
import FAQ from './faq/FAQ'
import Geography from './geography/Geography'
import { ColorModeContext, useMode } from '../../theme'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { MyProSidebarProvider } from './global/sidebar/sidebarContext'
import Topbar from './global/Topbar'
import { Route, Routes } from 'react-router-dom'
import AdminLogin from './AdminLogin'

function DashboardRoutes() {
    const [theme, colorMode] = useMode();
  return (
    <>
          <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <MyProSidebarProvider>

              <Topbar />
              <Routes>
                <Route path="/admindashboard" exact element={<DashboardAdmin />} />
                <Route path="/team" exact element={<Team />} />
                <Route path="/contacts" exact element={<Contacts />} />
                <Route path="/invoices" exact element={<Invoices />} />
                <Route path="/form" exact element={<Form />} />
                <Route path="/bar" exact element={<Bar />} />
                <Route path="/pie" exact element={<Pie />} />
                <Route path="/line" exact element={<Line />} />
                <Route path="/faq" exact element={<FAQ />} />
                <Route path="/geography" exact element={<Geography />} />
                <Route path="/adminlogin" exact element={<AdminLogin />} />
              </Routes>

        </MyProSidebarProvider>
      </ThemeProvider>
    </ColorModeContext.Provider>
        </>
  )
}

export default DashboardRoutes
