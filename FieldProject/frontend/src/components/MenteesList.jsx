import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Grid, Card, CardContent, Typography, CircularProgress } from '@mui/material';
import { getMenteesByYear } from '../api';
import MiniLayout from './MiniLayout';
import { useMentee } from '../MenteeContext';

const MenteesList = () => {
  const { year } = useParams();
  const navigate = useNavigate();
  const { setMenteeId } = useMentee();
  const [mentees, setMentees] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMentees = async () => {
      try {
        const yearMentees = await getMenteesByYear(year);
        setMentees(yearMentees);
        setLoading(false);
      } catch (error) {
        console.error(`Failed to fetch mentees for year ${year}:`, error);
        setLoading(false);
      }
    };

    fetchMentees();
  }, [year]);

  const handleMenteeClick = (menteeId) => {
    setMenteeId(menteeId);
    navigate(`/menteedashboard`);
    };

  if (loading) {
    return <CircularProgress />;
  }

  return (
    <MiniLayout>
      <Container>
        <Grid container spacing={2}>
          {mentees.map((mentee) => (
            <Grid item xs={12} sm={6} md={3} key={mentee._id}>
            <Card style={{ width: 'auto', height: '350px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', borderRadius: '8px' }} onClick={() => handleMenteeClick(mentee._id)}>
              <CardContent style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', width: '100%' }}>
                <img src={mentee.photoLink} alt={`${mentee.name}'s profile`} style={{ width: 'auto', height: '200px', objectFit: 'cover', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)', marginBottom: '20px' }} />
                <Typography variant="h6" component="div">
                  Name - {mentee.name}
                </Typography>
                <Typography color="textSecondary">
                  Registration - {mentee.registrationNumber}
                </Typography>
                <Typography color="textSecondary">
                  Class - {mentee.class1}
                </Typography>
                <Typography color="textSecondary">
                  Phone - {mentee.phone}
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

export default MenteesList;
