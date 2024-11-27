import React, { useState } from 'react';
import { 
  Paper, 
  Rating, 
  TextField, 
  Button, 
  Typography 
} from '@mui/material';

function ReviewForm({ bookingId }) {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add API call to save review
    const review = {
      bookingId,
      rating,
      comment,
      timestamp: new Date()
    };
    // await saveReview(review);
  };

  return (
    <Paper sx={{ p: 3, maxWidth: 400, margin: 'auto', mt: 4 }}>
      <Typography variant="h5" gutterBottom>Rate Your Trip</Typography>
      <form onSubmit={handleSubmit}>
        <Rating
          name="rating"
          value={rating}
          onChange={(event, newValue) => {
            setRating(newValue);
          }}
          size="large"
          sx={{ mb: 2 }}
        />
        <TextField
          fullWidth
          multiline
          rows={4}
          label="Your Comments"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          margin="normal"
        />
        <Button 
          fullWidth 
          variant="contained" 
          type="submit"
          sx={{ mt: 2 }}
        >
          Submit Review
        </Button>
      </form>
    </Paper>
  );
}

export default ReviewForm; 