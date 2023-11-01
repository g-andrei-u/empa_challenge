"use client";
import './eventstyle.css';
import { Paper, Typography } from '@mui/material';


const EventDataDisplay = ({ description, eventType, eventDate, yearlyRepetition }: any) => {
  console.log(description)
  return (
    <section className='event-display'>
      <Paper>
        <Typography variant="h6">Event Details</Typography>
        <Typography>Event Description: {description}</Typography>
        <Typography>Type of Event: {eventType}</Typography>
        <Typography>Event Date: {eventDate.toString()}</Typography>
        <Typography>Yearly Repetition: {yearlyRepetition ? 'Yes' : 'No'}</Typography>
      </Paper>
    </section>
  );
};

export default EventDataDisplay;