"use client";
import React from 'react';
import './eventstyle.css';
import { useForm, Controller } from 'react-hook-form';
import { TextField, FormControl, InputLabel, Select, MenuItem, Checkbox, Button, FormControlLabel } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';


const EventForm = ({ setEventsArray }: any) => {
  const { handleSubmit, control, reset } = useForm();

  const onSubmitData = (data: any) => {
    setEventsArray(prev => [...prev, data]);
    console.log(data);
    reset();
  };

  return (
    <section>
      <form onSubmit={handleSubmit(onSubmitData)}>
        <div>
          <Controller
            name="description"
            control={control}
            defaultValue=""
            render={({ field }) => <TextField label="Event Description" sx={{width: 300}} {...field} />}
          />
        </div>
        <div>
          <FormControl>
            <InputLabel>Type of Event</InputLabel>
            <Controller
              name="eventType"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <Select label="Type of Event" sx={{width: 200}} {...field}>
                  <MenuItem value="Private" >Private</MenuItem>
                  <MenuItem value="Company" >Company</MenuItem>
                </Select>
              )}
            />
          </FormControl>
        </div>
        <div>
          <Controller
            name="eventDate"
            control={control}
            defaultValue={null}
            //Event Date is required otherwise there will be an error
            rules={{ required: 'Event Date is required otherwise there will be an error' }}
            render={({ field }) => <DatePicker label="Event Date" sx={{width: 300}} {...field} />}
          />
        </div>
        <div>
        <Controller
          name="yearlyRepetition"
          control={control}
          defaultValue={false}
          render={({ field }) => (
          <FormControlLabel
            control={<Checkbox {...field} />}
            label="Yearly Repetition"
            name="yearlyRepetition"
          />
          )}
        />
        </div>
        <Button type="submit" variant="contained" color="primary" size="large">Submit</Button>
      </form>
    </section>
  );
};

export default EventForm;