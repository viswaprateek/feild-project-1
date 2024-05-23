import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Grid, Card, CardContent, Typography } from '@mui/material';
import MiniLayout from '../components/MiniLayout';
const years = [2020, 2021, 2022, 2023]; // You might fetch this dynamically

const MentorDashboard = () => {
  const navigate = useNavigate();

  const handleYearClick = (year) => {
    navigate(`/mentees/year/${year}`);
  };

  return (
    <MiniLayout>
    <Container>
      <Grid container spacing={3}>
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
