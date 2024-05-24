import React, { useState, useEffect } from 'react';
import { Container, Grid, Card, CardContent, Typography, CircularProgress } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import MiniLayout from '../components/MiniLayout';
import { fetchMentorById } from '../api'; // Import the API function
import { useAuth } from '../AuthContext'; // Import useAuth to get user information

const years = [2020, 2021, 2022, 2023]; // You might fetch this dynamically

const MentorDashboard = () => {
  const { userId } = useAuth(); // Access userId from AuthContext
  const [mentor, setMentor] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const handleYearClick = (year) => {
    navigate(`/mentees/year/${year}`);
  };

  useEffect(() => {
    const getMentor = async () => {
      try {
        const mentorData = await fetchMentorById(userId);
        setMentor(mentorData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching mentor:', error);
        setLoading(false);
      }
    };

    getMentor();
  }, [userId]);

  if (loading) {
    return (
      <MiniLayout>
        <Container>
          <CircularProgress />
        </Container>
      </MiniLayout>
    );
  }

  if (!mentor) {
    return (
      <MiniLayout>
        <Container>
          <Typography variant="h5" component="div">
            Mentor not found.
          </Typography>
        </Container>
      </MiniLayout>
    );
  }

  return (
    <MiniLayout>
      <Container>
        <Card>
          <CardContent>
            <Typography variant="h5" component="div">
              Welcome! {mentor.name}
            </Typography>
            <Typography variant="body1" component="div">
              Registration Number: {mentor.registrationNumber} 
            </Typography>
            <Typography variant="body1" component="div">
              Year: {mentor.year}
            </Typography>
            <Typography variant="body1" component="div">
              Email: {mentor.email}
            </Typography>
            <Typography variant="body1" component="div">
              Role: {mentor.role}
            </Typography>
            {mentor.photoLink && (
              <img src={mentor.photoLink} alt={mentor.name} style={{ width: '100%', height: 'auto', marginTop: '1rem' }} />
            )}
          </CardContent>
        </Card>

        <Grid container spacing={3} style={{ marginTop: '20px' }}>
          {years.map((year) => (
            <Grid item xs={12} key={year}>
              <Card onClick={() => handleYearClick(year)}>
                <CardContent>
                  <Typography variant="h5" component="div">
                    {year}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </MiniLayout>
  );
};

export default MentorDashboard;
