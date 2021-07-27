import React from 'react';
import {Link} from 'react-router-dom';

class Header extends React.Component {
    render() {
        const {context} = this.props;
        const authUser = context.authenticatedUser;
        return(
            <header>
            <div class="wrap header--flex">
                <h1 class="header--logo"><Link to="/">Courses</Link></h1>
                <nav>
                    {authUser ?
                        <ul class="header--signedin">
                            <li>Hello, {authUser.firstName} {authUser.lastName}</li>
                            <li><Link to='/signout'>Sign Out</Link></li>
                        </ul>
                    :
                        <ul class="header--signedout">
                            <li><Link to='/signup'>Sign Up</Link></li>
                            <li><Link to='signin'>Sign In</Link></li>
                        </ul>
                    }
                </nav>
            </div>
            </header>
        )
    }
}

export default Header;