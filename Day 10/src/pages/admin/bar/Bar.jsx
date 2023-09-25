import React from 'react'
import BarChart from '../../../assets/components/dashboard-components/BarChart'
import { Box } from '@mui/material';
import Header1 from '../../../assets/components/dashboard-components/Header1';
// import { useTheme } from '@mui/material';
// import { tokens } from '../../theme';
const Bar = () => {
    // const theme = useTheme()
    // const colors = tokens(theme.palette.mode)
    return (
        <Box m="20px" height="75vh">
            <Header1 title="BAR CHART" subtitle="simple bar chart" />
            <BarChart />
        </Box>
    )
}

export default Bar