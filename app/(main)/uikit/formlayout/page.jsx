'use client';

import React from 'react';

const FormLayoutDemo = () => {
  return (
    <div className="sm:grid sm:grid-cols-2 gap-4 pb-5">
      <div className="card sm:col-span-1">
        <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
          <h5 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
            Vertical
          </h5>
          <div className="mb-4">
            <label
              htmlFor="name1"
              className="block text-gray-700 dark:text-gray-300 mb-2"
            >
              Name
            </label>
            <input
              id="name1"
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 hover:border-blue-400 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600 dark:focus:border-blue-500 dark:focus:ring-blue-200 dark:hover:border-blue-400"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email1"
              className="block text-gray-700 dark:text-gray-300 mb-2"
            >
              Email
            </label>
            <input
              id="email1"
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 hover:border-blue-400 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600 dark:focus:border-blue-500 dark:focus:ring-blue-200 dark:hover:border-blue-400"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="age1"
              className="block text-gray-700 dark:text-gray-300 mb-2"
            >
              Age
            </label>
            <input
              id="age1"
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 hover:border-blue-400 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600 dark:focus:border-blue-500 dark:focus:ring-blue-200 dark:hover:border-blue-400"
            />
          </div>
        </div>
      </div>
      <div className="mb-8 sm:col-span-1">
        <div className="card p-4">
          <h5 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
            Vertical Grid
          </h5>
          <div className="flex gap-2">
            <div className="mb-4 sm:w-1/2">
              <label
                htmlFor="name1"
                className="block text-gray-700 dark:text-gray-300 mb-2"
              >
                Name
              </label>
              <input
                id="name1"
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 hover:border-blue-400 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600 dark:focus:border-blue-500 dark:focus:ring-blue-200 dark:hover:border-blue-400"
              />
            </div>
            <div className="mb-4 sm:w-1/2">
              <label
                htmlFor="email1"
                className="block text-gray-700 dark:text-gray-300 mb-2"
              >
                Email
              </label>
              <input
                id="email1"
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 hover:border-blue-400 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600 dark:focus:border-blue-500 dark:focus:ring-blue-200 dark:hover:border-blue-400"
              />
            </div>
          </div>
        </div>
        <div className="card p-4">
          <h5 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
            Horizontal
          </h5>
          <div className="space-y-4">
            <div className="flex items-center">
              <label
                htmlFor="name3"
                className="text-gray-700 dark:text-gray-300 mr-4 w-16"
              >
                Name
              </label>
              <div className="flex-1">
                <input
                  id="name3"
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 hover:border-blue-400 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600 dark:focus:border-blue-500 dark:focus:ring-blue-200 dark:hover:border-blue-400"
                />
              </div>
            </div>
            <div className="flex items-center">
              <label
                htmlFor="email3"
                className="text-gray-700 dark:text-gray-300 mr-4 w-16"
              >
                Email
              </label>
              <div className="flex-1">
                <input
                  id="email3"
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 hover:border-blue-400 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600 dark:focus:border-blue-500 dark:focus:ring-blue-200 dark:hover:border-blue-400"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="card sm:col-span-1">
        <div className="formgroup-inline p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
          <h5 className='className="text-lg font-semibold mb-4 text-gray-900 dark:text-white"'>
            Inline
          </h5>
          <div className="flex flex-wrap gap-2">
            <div className="">
              <label htmlFor="firstname1" className="p-sr-only">
                Firstname
              </label>
              <input
                id="firstname1"
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 hover:border-blue-400 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600 dark:focus:border-blue-500 dark:focus:ring-blue-200 dark:hover:border-blue-400"
                placeholder="Firstname"
              />
            </div>
            <div className="field">
              <label htmlFor="lastname1" className="p-sr-only">
                Lastname
              </label>
              <input
                id="lastname1"
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 hover:border-blue-400 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600 dark:focus:border-blue-500 dark:focus:ring-blue-200 dark:hover:border-blue-400"
                placeholder="Lastname"
              />
            </div>
            <button
              label="Submit"
              className="items-end justify-end px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
      <div className="card sm:col-span-1">
        <div className="field p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
          <h5 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
            Help Text
          </h5>
          <label
            htmlFor="username"
            className="block text-gray-700 dark:text-gray-300 mb-2"
          >
            Username
          </label>
          <input
            id="username"
            type="text"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 hover:border-blue-400 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600 dark:focus:border-blue-500 dark:focus:ring-blue-200 dark:hover:border-blue-400"
            placeholder="Enter username"
          />
          <small className="text-gray-500 dark:text-gray-400 block mt-1">
            Enter your username to reset your password.
          </small>
        </div>
      </div>
      <div className="card sm:col-span-2">
        <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
          <h5 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
            Advanced
          </h5>
          <div className="formgrid grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="field">
              <label
                htmlFor="firstname1"
                className="block text-gray-700 dark:text-gray-300 mb-2"
              >
                Firstname
              </label>
              <input
                id="firstname1"
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 hover:border-blue-400 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600 dark:focus:border-blue-500 dark:focus:ring-blue-200 dark:hover:border-blue-400"
                placeholder="Enter firstname"
              />
            </div>
            <div className="field">
              <label
                htmlFor="lastname1"
                className="block text-gray-700 dark:text-gray-300 mb-2"
              >
                Lastname
              </label>
              <input
                id="lastname1"
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 hover:border-blue-400 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600 dark:focus:border-blue-500 dark:focus:ring-blue-200 dark:hover:border-blue-400"
                placeholder="Enter lastname"
              />
            </div>
          </div>
          <div className="mb-4">
            <label
              htmlFor="address"
              className="block text-gray-700 dark:text-gray-300 mb-2"
            >
              Address
            </label>
            <textarea
              id="address"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 hover:border-blue-400 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600 dark:focus:border-blue-500 dark:focus:ring-blue-200 dark:hover:border-blue-400"
              rows="4"
              placeholder="Enter address"
            ></textarea>
          </div>
          <div className="formgrid grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="field">
              <label
                htmlFor="city"
                className="block text-gray-700 dark:text-gray-300 mb-2"
              >
                City
              </label>
              <input
                id="city"
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 hover:border-blue-400 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600 dark:focus:border-blue-500 dark:focus:ring-blue-200 dark:hover:border-blue-400"
                placeholder="Enter city"
              />
            </div>
            <div className="field">
              <label
                htmlFor="state"
                className="block text-gray-700 dark:text-gray-300 mb-2"
              >
                State
              </label>
              <select
                id="state"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 hover:border-blue-400 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600 dark:focus:border-blue-500 dark:focus:ring-blue-200 dark:hover:border-blue-400"
              >
                <option value="Select">Select</option>
                <option value="Option 1">Option 1</option>
                <option value="Option 2">Option 2</option>
                <option value="Option 3">Option 3</option>
              </select>
            </div>
            <div className="field">
              <label
                htmlFor="zip"
                className="block text-gray-700 dark:text-gray-300 mb-2"
              >
                Zip
              </label>
              <input
                id="zip"
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 hover:border-blue-400 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600 dark:focus:border-blue-500 dark:focus:ring-blue-200 dark:hover:border-blue-400"
                placeholder="Enter zip code"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormLayoutDemo;
