import React from 'react'

export default function Member(props) {
    const {data} = props;

    return (
        <div>
            <p>{`Username: ${data.username} E-mail: ${data.email} Role: ${data.role}`}</p>
        </div>
    )
}
