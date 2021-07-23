// Will provide access to Data functions to all the different components in the app
// Will include Sign Up, Sign In, and Sign Out actions of its own

import React, { Component } from 'react';
import Data from './Data';

import Cookies from 'js-cookie';

const Context = React.createContext();

export class Provider extends Component {

    state = {
        authenticatedUser: Cookies.getJSON('authenticatedUser') || null
    };

    constructor(){
        super();
        this.data = new Data();
    }

    render() {
        const {authenticatedUser} = this.state;
        const value = {
            authenticatedUser,
            data: this.data,
            actions: {
                signIn: this.signIn,
                signOut: this.signOut
            }
        };

        return(
            <Context.Provider value={value}>
                {this.props.children}
            </Context.Provider>
        );
    }

    /*
        Below are Context's helper methods for signIn and signOut
    */


    // Sign In function
    signIn = async (username, password) => {
        const user = await this.data.getUser(username, password);
        if (user !== null) {
            this.setState(() => {
                return {
                    authenticatedUser: user,
                };
            });
            Cookies.set('authenticatedUser', JSON.stringify(user), {expires: 1});
        }
        return user;
    }

    // Sign Out function
    signOut = () => {
        this.setState(() => {
            return {
                authenticatedUser: null,
            };
        });
        Cookies.remove('authenticatedUser');
    }
}

/*
    Context also needs to export two additional components:
    The Consumer component, and the withContext higher order component
    That will wrap and enhance the components that need to subscribe
    to Context in a Consumer so they have access to Context's
    state and actions.
*/

export const Consumer = Context.Consumer;

export default function withContext(Component) {
    return function ContextComponent(props) {
        return (
            <Context.Consumer>
                {context => <Component {...props} context={context} />}
            </Context.Consumer>
        );
    }
}