import React, { useState } from 'react';
import '@mobiscroll/react/dist/css/mobiscroll.min.css';
import { Eventcalendar, getJson, toast, localeKo } from '@mobiscroll/react';
import ReserveData from '../data/fakeData.json'


const RangeCalendar = () => {
  const [myEvents, setEvents] = React.useState([]);

  const onEventClick = React.useCallback((event) => {
      toast({
          message: event.event.title
      });
  }, []);
  
  const view = React.useMemo(() => {
      return {
          calendar: { labels: true }
      };
  }, []);

  return (
      <Eventcalendar
          locale={localeKo}
          theme="windows" 
          themeVariant="light"
          clickToCreate={false}
          dragToCreate={false}
          dragToMove={false}
          dragToResize={false}
          height={610}
          data={ReserveData}
          view={view}
          onEventClick={onEventClick}
     />
  ); 
}

export default RangeCalendar;
