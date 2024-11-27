import React, { useState } from 'react';
import { 
  Paper, 
  TextField, 
  Button, 
  Typography, 
  Select, 
  MenuItem,
  FormControl,
  InputLabel 
} from '@mui/material';

function BookingForm() {
  const [booking, setBooking] = useState({
    pickup: '',
    destination: '',
    date: '',
    time: '',
    passengers: 1,
    matatu: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add API call to save booking
  };

  return (
    <Paper sx={{ p: 3, maxWidth: 600, margin: 'auto', mt: 4 }}>
      <Typography variant="h5" gutterBottom>Book a Matatu</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Pickup Location"
          value={booking.pickup}
          onChange={(e) => setBooking({...booking, pickup: e.target.value})}
          margin="normal"
        />
        <TextField
          fullWidth
          label="Destination"
          value={booking.destination}
          onChange={(e) => setBooking({...booking, destination: e.target.value})}
          margin="normal"
        />
        <TextField
          fullWidth
          type="date"
          label="Date"
          InputLabelProps={{ shrink: true }}
          value={booking.date}
          onChange={(e) => setBooking({...booking, date: e.target.value})}
          margin="normal"
        />
        <TextField
          fullWidth
          type="time"
          label="Time"
          InputLabelProps={{ shrink: true }}
          value={booking.time}
          onChange={(e) => setBooking({...booking, time: e.target.value})}
          margin="normal"
        />
        <FormControl fullWidth margin="normal">
          <InputLabel>Number of Passengers</InputLabel>
          <Select
            value={booking.passengers}
            onChange={(e) => setBooking({...booking, passengers: e.target.value})}
          >
            {[1,2,3,4,5,6,7,8].map(num => (
              <MenuItem key={num} value={num}>{num}</MenuItem>
            ))}
          </Select>
        </FormControl>
        <Button 
          fullWidth 
          variant="contained" 
          type="submit"
          sx={{ mt: 2 }}
        >
          Book Now
        </Button>
      </form>
    </Paper>
  );
}

export default BookingForm; 