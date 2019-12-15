import React from 'react'

const Notification = (props) => {
    const { notifications } = props;

    return (
        <div className="section">
            <div className="card z-depth-0">
                <div className="card-content">
                    <div className="card-title">Notifications</div>
                    <ul className="notifications">
                        { notifications && notifications.map(notification => {
                            return <li key={notification.id}>
                                <span className="pink-text">{notification.user}</span>
                                <span>{notification.content}</span>
                                <div className="grey-text note-date"></div>
                            </li>
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Notification