// This file contains the helper methods that perform our API calls.

import config from './config';

export default class Data {

    // API Call helper function
    api (path, method = 'GET', body = null, requiresAuth = false, credentials = null) {
        const url = config.apiBaseUrl + path;

        // Sets the HTTP request type and initializes headers on the request
        const options = {
            method,
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
            },
        };

        // If there is anything on the request body, converts it to JSON string
        if (body !== null) {
            options.body = JSON.stringify(body);
        }

        // If request requires authorization, encodes credentials in base-64 ASCII
        // Adds Authorization header to the HTTP request's options object
        if (requiresAuth) {
            const encodedCredentials = btoa(`${credentials.username}:${credentials.password}`)
            options.headers['Authorization'] = `Basic ${encodedCredentials}`;
        }

        // Performs API call using configuration established above
        // Reminder! Fetch is going to return a Promise.
        return fetch(url, options)
    }


   /*
        Below are the helper methods that perform the various API requests.
        Note to self - All of these are async/await functions.
        Any time we are getting data from an outside source, we are in the land
        of asynchronous JavaScript.
   */


    // getUser - a GET request to api/users, will require authentication
    async getUser(username, password) {
        const response = await this.api(`/users`, 'GET', null, true, {username, password});
        if(response.status === 200) {
            return response.json().then(data => data);
        }
        else if (response.status === 401) {
            return null;
        }
        else {
            throw new Error();
        }
    }

    // createUser - a POST request to api/users
    async createUser(user) {
        const response = await this.api('/users', 'POST', user);
        if (response.status === 201) {
            return [];
        }
        else if (response.status === 400) {
            return response.json().then(data => {
                return data.errors;
            });
        }
        else {
            throw new Error();
        }
    }

    // getCourses - a GET request to api/courses
    async getCourses() {
        const response = await this.api(`/courses`, 'GET', null, false, null);
            if (response.status === 200) {
                return response.json().then(data => data);
            }
            else if (response.status === 400) {
                return response.json().then(data => {
                    return data.errors;
                });
            }
            else {
                throw new Error();
            }
        }

    // createCourse - a POST request to api/courses
    async createCourse(course) {
        const response = await this.api('/users', 'POST', course);
        if (response.status === 201) {
            return [];
        }
        else if (response.status === 400) {
            return response.json().then(data => {
                return data.errors;
            });
        }
        else {
            throw new Error();
        }
    }


    // updateCourse - a PUT request to api/courses/:id
    async updateCourse(courseId, details, username, password) {
        const response = await this.api(`/courses/${courseId}`, 'PUT', details, true, {username, password});
        if (response.status === 204) {
            return response.json().then(data => data);
        }
        else if (response.status === 401) {
            return null;
        }
        else if (response.status === 403) {
            return response.json().then(data => {
                return data.errors;
            });
        }
        else {
            throw new Error();
        }
    }

    // deleteCourse - a DELETE request to api/courses/:id
    async deleteCourse(courseId, username, password) {
        const response = await this.api(`/courses/${courseId}`, 'DELETE', null, true, {username, password});
        if (response.status === 204) {
            return response.json().then(data => data);
        }
        else if (response.status === 401) {
            return null;
        }
        else if (response.status === 403) {
            return response.json().then(data => {
                return data.errors;
            });
        }
        else {
            throw new Error();
        }
    }
}