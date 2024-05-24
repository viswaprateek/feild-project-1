import React, { useEffect, useState } from 'react';
import { Container, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Box } from '@mui/material';
import GaugeChart from 'react-gauge-chart';
import { useMentee } from '../MenteeContext'; // Importing useMentee to get menteeId
import { getAttendanceByUserId } from '../api'; // Importing the function from api.jsx
import Layout from './Layout';

const Attendance = () => {
  const { menteeId } = useMentee();
  const [attendanceData, setAttendanceData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAttendance = async () => {
      try {
        const data = await getAttendanceByUserId(menteeId);
        setAttendanceData(data);
      } catch (error) {
        setError('Failed to fetch attendance data');
      } finally {
        setLoading(false);
      }
    };

    if (menteeId) {
      fetchAttendance();
    }
  }, [menteeId]);

  const sumClasses = (key) => {
    const keys = {
      attended: ['OSattended', 'COattended', 'DAAattended', 'SEattended', 'EEAattended', 'IPRattended', 'WADattended', 'SELABattended', 'OSLABattended', 'FPattended'],
      totalClasses: ['OStotalClasses', 'COtotalClasses', 'DAAtotalClasses', 'SEtotalClasses', 'EEAtotalClasses', 'IPRtotalClasses', 'WADtotalClasses', 'SELABtotalClasses', 'OSLABtotalClasses', 'FPtotalClasses']
    };
    return attendanceData.reduce((total, item) => {
      keys[key].forEach(k => total += (item[k] || 0));
      return total;
    }, 0);
  };

  const totalAttended = sumClasses('attended');
  const totalClasses = sumClasses('totalClasses');
  const attendancePercentage = totalClasses > 0 ? (totalAttended / totalClasses) * 100 : 0;

  if (loading) return <Typography>Loading...</Typography>;
  if (error) return <Typography>{error}</Typography>;

  return (
    <Layout>
      <Box mt={4}>
        <Typography variant="h5" style={{ textAlign: 'center' }} component="h3" gutterBottom>
          Attendance Percentage: {attendancePercentage.toFixed(2)}%
        </Typography>
        <Box display="flex" justifyContent="center">
          <Box width={500} height={400}>
            <GaugeChart id="attendance-gauge"
              nrOfLevels={20}
              colors={["#FF0000", "#FFBB28", "#00FF00"]}
              arcWidth={0.3}
              percent={attendancePercentage / 100}
              textColor="#000000"
              formatTextValue={() => attendancePercentage.toFixed(2) + '%'}
            />
          </Box>
        </Box>
      </Box>
      <Container component="main" maxWidth="md">
        <Typography variant="h5" component="h2" gutterBottom>
          Attendance
        </Typography>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Course Code</TableCell>
                <TableCell align="right">Attended Classes</TableCell>
                <TableCell align="right">Total Classes</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {attendanceData.map((item, index) => (
                <React.Fragment key={index}>
                  <TableRow key={`OS-${index}`}>
                    <TableCell>{item.OScode}</TableCell>
                    <TableCell align="right">{item.OSattended}</TableCell>
                    <TableCell align="right">{item.OStotalClasses}</TableCell>
                  </TableRow>
                  <TableRow key={`CO-${index}`}>
                    <TableCell>{item.COcode}</TableCell>
                    <TableCell align="right">{item.COattended}</TableCell>
                    <TableCell align="right">{item.COtotalClasses}</TableCell>
                  </TableRow>
                  <TableRow key={`DAA-${index}`}>
                    <TableCell>{item.DAAcode}</TableCell>
                    <TableCell align="right">{item.DAAattended}</TableCell>
                    <TableCell align="right">{item.DAAtotalClasses}</TableCell>
                  </TableRow>
                  <TableRow key={`SE-${index}`}>
                    <TableCell>{item.SEcode}</TableCell>
                    <TableCell align="right">{item.SEattended}</TableCell>
                    <TableCell align="right">{item.SEtotalClasses}</TableCell>
                  </TableRow>
                  <TableRow key={`EEA-${index}`}>
                    <TableCell>{item.EEAcode}</TableCell>
                    <TableCell align="right">{item.EEAattended}</TableCell>
                    <TableCell align="right">{item.EEAtotalClasses}</TableCell>
                  </TableRow>
                  <TableRow key={`IPR-${index}`}>
                    <TableCell>{item.IPRcode}</TableCell>
                    <TableCell align="right">{item.IPRattended}</TableCell>
                    <TableCell align="right">{item.IPRtotalClasses}</TableCell>
                  </TableRow>
                  <TableRow key={`WAD-${index}`}>
                    <TableCell>{item.WADcode}</TableCell>
                    <TableCell align="right">{item.WADattended}</TableCell>
                    <TableCell align="right">{item.WADtotalClasses}</TableCell>
                  </TableRow>
                  <TableRow key={`SELAB-${index}`}>
                    <TableCell>{item.SELABcode}</TableCell>
                    <TableCell align="right">{item.SELABattended}</TableCell>
                    <TableCell align="right">{item.SELABtotalClasses}</TableCell>
                  </TableRow>
                  <TableRow key={`OSLAB-${index}`}>
                    <TableCell>{item.OSLABcode}</TableCell>
                    <TableCell align="right">{item.OSLABattended}</TableCell>
                    <TableCell align="right">{item.OSLABtotalClasses}</TableCell>
                  </TableRow>
                  <TableRow key={`FP-${index}`}>
                    <TableCell>{item.FPcode}</TableCell>
                    <TableCell align="right">{item.FPattended}</TableCell>
                    <TableCell align="right">{item.FPtotalClasses}</TableCell>
                  </TableRow>
                </React.Fragment>
              ))}
              <TableRow>
                <TableCell><strong>Total</strong></TableCell>
                <TableCell align="right"><strong>{totalAttended}</strong></TableCell>
                <TableCell align="right"><strong>{totalClasses}</strong></TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </Layout>
  );
};

export default Attendance;
