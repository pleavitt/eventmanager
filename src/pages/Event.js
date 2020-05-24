import React, { useEffect, useState } from 'react';
import { useParams } from "react-router";
import { format } from 'date-fns';
import { useEvents } from '../context/EventContext';

const Attendee = ({ name, company, guests, tickets }) => {
  return (
    <li className="border-t border-gray-200">
      <a
        href="#"
        className="block hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition duration-150 ease-in-out"
      >
        <div className="px-4 py-4 flex items-center sm:px-6">
          <div className="min-w-0 flex-1 sm:flex sm:items-center sm:justify-between">
            <div>
              <div className="text-sm leading-5 font-medium text-indigo-600 truncate">
                {name}
                <span className="ml-1 font-normal text-gray-500">
                  {company && `from ${company}`}
                </span>
              </div>
              <div className="mt-2 flex">
                <div className="flex items-center text-sm leading-5 text-gray-500">
                  {guests > 0 && (
                    <>
                      <svg
                        className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                          clipRule="evenodd"
                          fillRule="evenodd"
                        />
                      </svg>
                      <span>{`+ ${guests} guests`}</span>
                    </>
                  )}
                </div>
              </div>
            </div>
            <div className="mt-4 flex-shrink-0 sm:mt-0">
              <div className="flex overflow-hidden">
                {tickets.map((ticket) => (
                  <div className="ml-2 flex-shrink-0 flex">
                    <span className="px-2 inline-flex text-xxs leading-5 font-semibold rounded-full bg-indigo-100 text-indigo-800">
                      <svg
                        className="mx-1 h-7 w-7"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M2 6a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 100 4v2a2 2 0 01-2 2H4a2 2 0 01-2-2v-2a2 2 0 100-4V6z" />
                        <text
                          x="50%"
                          y="55%"
                          dominantBaseline="middle"
                          className="text-indigo-100"
                          fontSize="smaller"
                          textAnchor="middle"
                        >
                          {ticket}
                        </text>
                      </svg>
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="ml-5 flex-shrink-0">
            <svg
              className="h-5 w-5 text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </a>
    </li>
  );
};

const Event = () => {
  const { events, getEvent, addAttendee } = useEvents();
  const [event, setEvent] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    setEvent(getEvent(id));
  }, [events, id]);

  if (!event) {
    return <div>Loading...</div>;
  }
  return (
    <div className="bg-white overflow-hidden sm:rounded-lg">
      <div className="px-4 py-5 sm:px-6">
        <div className="-ml-4 -mt-2 flex items-center justify-between flex-wrap sm:flex-no-wrap">
          <div className="ml-4 mt-2">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              {event.name}
            </h3>
          </div>
          <div className="ml-4 mt-2 flex-shrink-0">
            <span className="inline-flex rounded-md shadow-sm">
              <button
                type="button"
                className="inline-flex items-center mr-4 px-4 py-2 border border-gray-300 text-sm leading-5 font-medium rounded-md text-gray-700 bg-white hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:text-gray-800 active:bg-gray-50 transition duration-150 ease-in-out"
              >
                <svg
                  className="-ml-1 mr-2 h-5 w-5 text-gray-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                </svg>
                Edit
              </button>
            </span>
            <span className="inline-flex rounded-md shadow-sm">
              <button
                onClick={() => addAttendee(event.attendees[1])}
                type="button"
                className="relative inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline-indigo focus:border-indigo-700 active:bg-indigo-700"
              >
                <svg
                  className="-ml-1 mr-2 h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z" />
                </svg>
                Add Attendees
              </button>
            </span>
          </div>
        </div>
      </div>
      <div className="px-4 py-5 sm:px-6">
        <dl className="grid grid-cols-1 col-gap-4 row-gap-8 sm:grid-cols-2">
          <div className="sm:col-span-1">
            <dt className="text-sm leading-5 font-medium text-gray-500">
              Location
            </dt>
            <dd className="mt-1 text-sm leading-5 text-gray-900">
              {event.startLocation}
            </dd>
          </div>
          <div className="sm:col-span-1">
            <dt className="text-sm leading-5 font-medium text-gray-500">
              Capacity
            </dt>
            <dd className="mt-1 text-sm leading-5 text-gray-900">
              {event.capacity}
            </dd>
          </div>
          <div className="sm:col-span-1">
            <dt className="text-sm leading-5 font-medium text-gray-500">
              Date
            </dt>
            <dd className="mt-1 text-sm leading-5 text-gray-900">
              {format(event.start, 'dd MMMM yyyy h:mma', {
                useAdditionalWeekYearTokens: true,
              })}
            </dd>
          </div>
          <div className="sm:col-span-1">
            <dt className="text-sm leading-5 font-medium text-gray-500">
              Spots Left
            </dt>
            <dd className="mt-1 text-sm leading-5 text-gray-900">13460</dd>
          </div>
          <div className="sm:col-span-2">
            <dt className="text-sm leading-5 font-medium text-gray-500">
              Notes
            </dt>
            <dd className="mt-1 text-sm leading-5 text-gray-900">
              {event.notes}
            </dd>
          </div>
          <div className="sm:col-span-2">
            <dt className="text-sm leading-5 font-medium text-gray-500">
              Attendees
            </dt>
            {event.attendees.length > 0 ? (
              <div className="bg-white shadow overflow-hidden sm:rounded-md">
                <ul>
                  {event.attendees.map((attendee) => (
                    <Attendee {...attendee} />
                  ))}
                </ul>
              </div>
            ) : (
              <div>No Attendees Currently</div>
            )}
          </div>
        </dl>
      </div>
    </div>
  );
};

export default Event;
