import React from 'react';
import { format } from 'date-fns';
import { useEvents } from '../context/EventContext';

const EventPreview = ({ name, capacity, locationStart, timeStart, id }) => (
  <li>
    <a
      href={`/events/${id}`}
      className="block hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition duration-150 ease-in-out"
    >
      <div className="px-4 py-4 sm:px-6">
        <div className="flex items-center justify-between">
          <div className="text-sm leading-5 font-medium text-indigo-600 truncate">
            {name}
          </div>
          <div className="ml-2 flex-shrink-0 flex">
            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
              20 spots left
            </span>
          </div>
        </div>
        <div className="mt-2 sm:flex sm:justify-between">
          <div className="sm:flex">
            <div className="mr-6 flex items-center text-sm leading-5 text-gray-500">
              <svg
                className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
              </svg>
              {capacity}
            </div>
            <div className="mt-2 flex items-center text-sm leading-5 text-gray-500 sm:mt-0">
              <svg
                className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                />
              </svg>
              {locationStart}
            </div>
          </div>
          <div className="mt-2 flex items-center text-sm leading-5 text-gray-500 sm:mt-0">
            <svg
              className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                clipRule="evenodd"
              />
            </svg>
            <span>
              Commencing
              <time dateTime="2020-01-07">
                {' '}
                {format(new Date(timeStart), 'MMM, dd yyyy')}
              </time>
            </span>
          </div>
        </div>
      </div>
    </a>
  </li>
);

const Events = () => {
  const { events } = useEvents();

  return (
    <div>
      <h1>Events</h1>
      <div className="bg-white shadow overflow-hidden sm:rounded-md">
        <ul>
          {events.map((event) => {
            return <EventPreview key={event.id} {...event} />;
          })}
        </ul>
      </div>
    </div>
  );
};

export default Events;
