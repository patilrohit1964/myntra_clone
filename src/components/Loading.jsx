import React from 'react'
import Spinner from 'react-bootstrap/esm/Spinner'
const Loading = () => {
    return (
        <div>
            <div className='loading-spinners text-center'>
                <Spinner animation="border" variant="primary" />
                <Spinner animation="border" variant="secondary" />
                <Spinner animation="border" variant="success" />
            </div>
        </div>
    )
}

export default Loading