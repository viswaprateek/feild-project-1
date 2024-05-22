import React, { useState } from 'react';
import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
  Paper,
  Grid,
  MenuItem,
  Select,
  FormControl,
  InputLabel
} from '@mui/material';
import { registerMentee, registerMentor } from '../api'; // Import the API functions

const AdminDashboard = () => {
  const [userDetails, setUserDetails] = useState({
    name: '',
    year: '',
    registrationNumber: '',
    email: '',
    role: 'mentee',
    parentsNames: '',
    parentsOccupation: '',
    bloodGroup: '',
    nationality: '',
    religion: '',
    address: '',
    admissionType: '',
    classesAttended: '',
    totalClasses: '',
    sem1Gpa: '',
    sem2Gpa: '',
    sem3Gpa: '',
    sem4Gpa: '',
    sem5Gpa: '',
    sem6Gpa: '',
    sem7Gpa: '',
    sem8Gpa: '',
    mentorName: '',
    mentorRegistrationNumber: '',
    photoLink: '', // Add this line
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (userDetails.role === 'mentee') {
        await registerMentee(userDetails);
      } else {
        await registerMentor(userDetails);
      }
      alert('User registered successfully');
      setUserDetails({
        name: '',
        year: '',
        registrationNumber: '',
        email: '',
        role: 'mentee',
        parentsNames: '',
        parentsOccupation: '',
        bloodGroup: '',
        nationality: '',
        religion: '',
        address: '',
        admissionType: '',
        classesAttended: '',
        totalClasses: '',
        sem1Gpa: '',
        sem2Gpa: '',
        sem3Gpa: '',
        sem4Gpa: '',
        sem5Gpa: '',
        sem6Gpa: '',
        sem7Gpa: '',
        sem8Gpa: '',
        mentorName: '',
        mentorRegistrationNumber: '',
        photoLink: '', // Reset this field as well
      }); // Reset form
    } catch (error) {
      console.error('Failed to register user:', error);
      alert('Failed to register user');
    }
  };

  return (
    <Container component="main" maxWidth="md">
      <Paper elevation={3} sx={{ padding: 4, marginTop: 8 }}>
        <Typography component="h1" variant="h5" align="center" gutterBottom>
          Admin Dashboard
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <FormControl fullWidth variant="outlined">
                <InputLabel id="role-label">Role</InputLabel>
                <Select
                  labelId="role-label"
                  id="role"
                  name="role"
                  value={userDetails.role}
                  onChange={handleChange}
                  label="Role"
                >
                  <MenuItem value="mentee">Mentee</MenuItem>
                  <MenuItem value="mentor">Mentor</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                fullWidth
                label="Name"
                name="name"
                value={userDetails.name}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                fullWidth
                label="Year"
                name="year"
                value={userDetails.year}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                fullWidth
                label="Registration Number"
                name="registrationNumber"
                value={userDetails.registrationNumber}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                fullWidth
                label="Email"
                name="email"
                value={userDetails.email}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                fullWidth
                label="Photo Link"
                name="photoLink"
                value={userDetails.photoLink}
                onChange={handleChange}
              />
            </Grid>
            {userDetails.role === 'mentee' && (
              <>
                <Grid item xs={12} sm={6}>
                  <TextField
                    variant="outlined"
                    fullWidth
                    label="Parents' Names"
                    name="parentsNames"
                    value={userDetails.parentsNames}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    variant="outlined"
                    fullWidth
                    label="Parents' Occupation"
                    name="parentsOccupation"
                    value={userDetails.parentsOccupation}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    variant="outlined"
                    fullWidth
                    label="Blood Group"
                    name="bloodGroup"
                    value={userDetails.bloodGroup}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    variant="outlined"
                    fullWidth
                    label="Nationality"
                    name="nationality"
                    value={userDetails.nationality}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    variant="outlined"
                    fullWidth
                    label="Religion"
                    name="religion"
                    value={userDetails.religion}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    fullWidth
                    label="Address"
                    name="address"
                    multiline
                    rows={4}
                    value={userDetails.address}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    variant="outlined"
                    fullWidth
                    label="Admission Type"
                    name="admissionType"
                    value={userDetails.admissionType}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    variant="outlined"
                    fullWidth
                    label="Classes Attended"
                    name="classesAttended"
                    value={userDetails.classesAttended}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    variant="outlined"
                    fullWidth
                    label="Total Classes"
                    name="totalClasses"
                    value={userDetails.totalClasses}
                    onChange={handleChange}
                  />
                </Grid>
                {Array.from({ length: 8 }, (_, i) => (
                  <Grid item xs={12} sm={6} key={i}>
                    <TextField
                      variant="outlined"
                      fullWidth
                      label={`Semester ${i + 1} GPA`}
                      name={`sem${i + 1}Gpa`}
                      value={userDetails[`sem${i + 1}Gpa`]}
                      onChange={handleChange}
                    />
                  </Grid>
                ))}
                <Grid item xs={12} sm={6}>
                  <TextField
                    variant="outlined"
                    fullWidth
                    label="Mentor Name"
                    name="mentorName"
                    value={userDetails.mentorName}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    variant="outlined"
                    fullWidth
                    label="Mentor Registration Number"
                    name="mentorRegistrationNumber"
                    value={userDetails.mentorRegistrationNumber}
                    onChange={handleChange}
                  />
                </Grid>
              </>
            )}
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mt: 3 }}
          >
            Register
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default AdminDashboard;
