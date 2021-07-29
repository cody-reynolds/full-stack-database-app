import React from 'react';

// Component that displays any time a user navigates to a non-existent URL.
export default function Forbidden() {
    return(
        <div className="wrap">
                <h2>Error</h2>
                <p>Uh-Oh! You can't access this page.</p>
        </div>
    )
}