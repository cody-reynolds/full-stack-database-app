import React from 'react';

class Header extends React.Component {
    render() {
        const {context} = this.props;
        const authUser = context.authenticatedUser;
        return(
            <header>
            <div class="wrap header--flex">
                <h1 class="header--logo"><a href="index.html">Courses</a></h1>
                <nav>
                    {authUser ?
                        <ul class="header--signedin">
                            <li>Hello, ${authUser.name}</li>
                            <li><a href="sign-out.html">Sign Out</a></li>
                        </ul>
                    :
                        <ul class="header--signedout">
                            <li><a href="sign-up.html">Sign Up</a></li>
                            <li><a href="sign-in.html">Sign In</a></li>
                        </ul>
                    }
                </nav>
            </div>
            </header>
        )
    }
}

export default Header;