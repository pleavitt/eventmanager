import React, { createContext, useState, useContext, useEffect } from 'react';
import { useToast } from '../components/ToastContext';
import { api } from '../utils/API';

// const eventsData = [
//   {
//     id: 1,
//     name: 'State of Origin',
//     start: new Date(),
//     capacity: 50000,
//     startLocation: 'Suncorp Stadium',
//     attendees: [
//       {
//         name: 'Wendell Barnes',
//         company: 'John Holland',
//         guests: 3,
//         tickets: [1, 2, 3, 4],
//         image: '',
//       },
//       {
//         name: 'Darren Lockyer',
//         company: 'Brisbane Broncos',
//         guests: 0,
//         tickets: [5],

//         image: '',
//       },
//       {
//         name: 'Damon Wayans',
//         guests: 10,
//         tickets: [6, 7, 8, 9, 10, 11, 12, 13, 88, 106],
//         image: '',
//       },
//     ],
//   },
//   {
//     id: 2,
//     name: 'Boat Cruise',
//     start: new Date(),
//     capacity: 100,
//     startLocation: 'Big Boat',
//     attendees: [],
//   },
//   {
//     id: 3,
//     name: 'WWE',
//     start: new Date(),
//     capacity: 30000,
//     startLocation: 'ANZ Stadium',
//     attendees: [],
//   },
//   {
//     id: 4,
//     name: 'Catalina Wine Mixer',
//     start: new Date(),
//     capacity: 50,
//     startLocation: 'Napa Valley',
//     attendees: [],
//   },
// ];

const newAttendee = {
  name: 'Wendy Winkler',
  company: 'Coca Cola',
  guests: 2,
  image: '',
};

const EventContext = createContext();

// This component retrieves the Events from the API so they can be read by all components
// This component also receives Events and updates the list so other components can see the new list
export const EventProvider = (props) => {
  const [events, setEvents] = useState([]);
  const { addToast } = useToast();

  // on creation, get the location of the user
  const getEvent = (id) => {
    return events.find((event) => event.id === parseInt(id, 10));
  };

  useEffect(() => {
    api
      .get('/Events')
      .then(({ data }) => {
        console.log('fetching api data', data);
        setEvents([...data]);
      })
      .catch((error) => {
        addToast(`Unable to Retrieve Events`);
        console.log('Unable to Retrieve Events', error);
      });

    api
      .get('/TodoLists')
      .then(({ data }) => {
        console.log('api data', data);
      })
      .catch((error) => {
        addToast(`Unable to Retrieve TodoLists`);
        console.log('Unable to Retrieve TodoLists', error);
      });
  }, []);

  useEffect(() => {}, [events]);

  const getAttendee = () => {
    return newAttendee;
  };

  const addEvent = (event) => {
    event.name && setEvents(events.concat(event));
  };

  const addAttendee = (attendee) => {
    console.log('this', this);
    console.log('attendee', attendee);
  };

  return (
    <EventContext.Provider
      value={{ events, addEvent, getEvent, addAttendee, getAttendee }}
      {...props}
    />
  );
};

export const useEvents = () => useContext(EventContext);
export default EventProvider;
