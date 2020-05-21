import React, { useState } from 'react'
import Events from '../pages/Events';
import logo from '../logo.svg';
import Transition from "./Transition";
import { NavLink } from 'react-router-dom';

const Layout = props => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  console.log('props', props)
  return (
    <div>
      <div className="bg-gray-800 pb-32">
        <nav className="bg-gray-800">
          <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div className="border-b border-gray-700">
              <div className="flex items-center justify-between h-16 px-4 sm:px-0">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <img className="h-8 w-8 App-logo" src={logo} alt="Workflow logo" />
                  </div>
                  <div className="hidden md:block">
                    <div className="ml-10 flex items-baseline text-gray-300 font-medium">
                    <NavLink className="px-3 py-2 rounded-md text-sm  hover:text-white hover:bg-gray-700" activeClassName="text-white bg-gray-900" exact to="/">Dashboard</NavLink>
                    <NavLink className="ml-4 px-3 py-2 rounded-md text-sm hover:text-white hover:bg-gray-700" activeClassName="text-white bg-gray-900" to="/events">Events</NavLink>
                    <NavLink className="ml-4 px-3 py-2 rounded-md text-sm hover:text-white hover:bg-gray-700" activeClassName="text-white bg-gray-900" to="/event">Event</NavLink>
                    <NavLink className="ml-4 px-3 py-2 rounded-md text-sm hover:text-white hover:bg-gray-700" activeClassName="text-white bg-gray-900" to="/team">Team</NavLink>
                    <NavLink className="ml-4 px-3 py-2 rounded-md text-sm hover:text-white hover:bg-gray-700" activeClassName="text-white bg-gray-900" to="/projects">Projects</NavLink>
                    <NavLink className="ml-4 px-3 py-2 rounded-md text-sm hover:text-white hover:bg-gray-700" activeClassName="text-white bg-gray-900" to="/reports">Reports</NavLink>

                    </div>
                  </div>
                </div>
                <div className="hidden md:block">
                  <div className="ml-4 flex items-center md:ml-6">
                    <button className="p-1 border-2 border-transparent text-gray-400 rounded-full hover:text-white focus:outline-none focus:text-white focus:bg-gray-700" aria-label="Notifications">
                      <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                      </svg>
                    </button>

                    <div className="ml-3 relative">
                      <div>
                        <button className="max-w-xs flex items-center text-sm rounded-full text-white focus:outline-none focus:shadow-solid" id="user-menu" aria-label="User menu" aria-haspopup="true" onClick={() => setIsProfileOpen(!isProfileOpen)}>
                          <img className="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                        </button>
                      </div>
                      <Transition
                        show={isProfileOpen}
                        enter="transition ease-out duration-100 transform"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="transition ease-in duration-75 transform"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                      >
                        <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg">
                          <div className="py-1 rounded-md bg-white shadow-xs">
                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Your Profile</a>
                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Settings</a>
                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Sign out</a>
                          </div>
                        </div>
                      </Transition>
                    </div>
                  </div>
                </div>
                <div className="-mr-2 flex md:hidden">
                  <button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    <svg className={`${isMenuOpen ? "hidden" : "block"} h-6 w-6`} stroke="currentColor" fill="none" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                    <svg className={`${isMenuOpen ? "block" : "hidden"} h-6 w-6`} stroke="currentColor" fill="none" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className={`${isMenuOpen ? "block" : "hidden"} border-b border-gray-700 md:hidden`}>
            <div className="px-2 py-3 sm:px-3">
              <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700">Dashboard</a>
              <a href="#" className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700">Team</a>
              <a href="#" className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700">Projects</a>
              <a href="#" className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700">Calendar</a>
              <a href="#" className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700">Reports</a>
            </div>
            <div className="pt-4 pb-3 border-t border-gray-700">
              <div className="flex items-center px-5">
                <div className="flex-shrink-0">
                  <img className="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                </div>
                <div className="ml-3">
                  <div className="text-base font-medium leading-none text-white">Tom Cook</div>
                  <div className="mt-1 text-sm font-medium leading-none text-gray-400">tom@example.com</div>
                </div>
              </div>
              <div className="mt-3 px-2" role="menu" aria-orientation="vertical" aria-labelledby="user-menu">
                <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700" role="menuitem">Your Profile</a>
                <a href="#" className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700" role="menuitem">Settings</a>
                <a href="#" className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700" role="menuitem">Sign out</a>
              </div>
            </div>
          </div>
        </nav>
        <header className="py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl leading-9 font-bold text-white">
              Dashboard
          </h1>
          </div>
        </header>
      </div>

      <main className="-mt-32">
        <div className="max-w-7xl mx-auto pb-12 px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow px-5 py-6 sm:px-6">
            {props.children}
          </div>
        </div>
      </main>
    </div>
  )
}

export default Layout
