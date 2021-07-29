import React from 'react';

// Component that displays any time a user navigates to a non-existent URL.
export default function UnhandledError() {
    return(
        <div className="wrap">
                <h2>Error</h2>
                <p>Sorry! We just encountered an unexpected error.</p>
        </div>
    )
}