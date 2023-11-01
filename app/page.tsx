"use client";
import EventForm from './componets/eventform';
import EventDataDisplay from './componets/eventdatadisplay';
import React, { useState } from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';


const Home = () => {
  const [eventsArray, setEventsArray] = useState([]);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <EventForm setEventsArray={setEventsArray} />
      {eventsArray.map(event => (
        <EventDataDisplay 
          description={event.description}
          eventType={event.eventType}
          eventDate={event.eventDate}
          yearlyRepetition={event.yearlyRepetition} 
        />
      ))}
    </LocalizationProvider>
  );
};

export default Home;