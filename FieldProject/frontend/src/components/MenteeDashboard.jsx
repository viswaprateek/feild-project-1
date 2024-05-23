import React, { useState, useEffect } from 'react';
import { Container, Grid, Card, CardContent, Typography, CircularProgress, Avatar, Box } from '@mui/material';
import { getMenteeById } from '../api';
import { useMentee } from '../MenteeContext';
import Layout from './Layout';

const MenteeDashboard = () => {
  const { menteeId } = useMentee();
  const [mentee, setMentee] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMentee = async () => {
      try {
        const fetchedMentee = await getMenteeById(menteeId);
        setMentee(fetchedMentee);
        setLoading(false);
      } catch (error) {
        console.error(`Failed to fetch mentee with ID ${menteeId}:`, error);
        setLoading(false);
      }
    };

    if (menteeId) {
      fetchMentee();
    }
  }, [menteeId]);

  if (loading) {
    return <CircularProgress />;
  }

  if (!mentee) {
    return <Typography variant="h6">Mentee not found</Typography>;
  }

  return (
    <Layout>
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Box display="flex" justifyContent="space-between">
                <Box>
                  <Typography variant="h4" component="div">
                    {mentee.name}
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary">
                    Registration Number: {mentee.registrationNumber}
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary">
                    Email: {mentee.email}
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary">
                    Year: {mentee.year}
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary">
                    Role: {mentee.role}
                  </Typography>
                  {/* Add more mentee details as needed */}
                  <Typography variant="subtitle1" color="textSecondary">
                    Parents' Names: {mentee.parentsNames}
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary">
                    Parents' Occupation: {mentee.parentsOccupation}
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary">
                    Blood Group: {mentee.bloodGroup}
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary">
                    Nationality: {mentee.nationality}
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary">
                    Religion: {mentee.religion}
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary">
                    Address: {mentee.address}
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary">
                    Admission Type: {mentee.admissionType}
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary">
                    Classes Attended: {mentee.classesAttended}
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary">
                    Total Classes: {mentee.totalClasses}
                  </Typography>
                  {/* Add GPA details */}
                  <Typography variant="subtitle1" color="textSecondary">
                    Semester 1 GPA: {mentee.sem1Gpa}
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary">
                    Semester 2 GPA: {mentee.sem2Gpa}
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary">
                    Semester 3 GPA: {mentee.sem3Gpa}
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary">
                    Semester 4 GPA: {mentee.sem4Gpa}
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary">
                    Semester 5 GPA: {mentee.sem5Gpa}
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary">
                    Semester 6 GPA: {mentee.sem6Gpa}
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary">
                    Semester 7 GPA: {mentee.sem7Gpa}
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary">
                    Semester 8 GPA: {mentee.sem8Gpa}
                  </Typography>
                </Box>
                <Avatar src={mentee.photoLink} alt={`${mentee.name}'s profile`} sx={{ width: 150, height: 150 }} />
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
    </Layout>
  );
};

export default MenteeDashboard;
