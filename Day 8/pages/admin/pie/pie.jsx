import React from 'react'
import PieChart from '../../../assets/components/dashboard-components/PieChart'
import { Box } from '@mui/material';
import Header1 from '../../../assets/components/dashboard-components/Header1';
// import { useTheme } from '@mui/material';
// import { tokens } from '../../theme';
const Pie = () => {
    // const theme = useTheme()
    // const colors = tokens(theme.palette.mode)
    return (
        
        <Box m="20px" height="75vh" p="2px">
            <Header1 title="PIE CHART" subtitle="simple pie chart" />
            <PieChart />
        </Box>
    )
}

export default Pie