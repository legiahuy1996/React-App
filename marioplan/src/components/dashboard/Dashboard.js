import React, { Component } from 'react'
import ProjectList from '../projects/ProjectList'
import Notifications from './Notification'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'

class Dashboard extends Component {
  render() {
    const { projects, auth, authIsLoaded, notifications } = this.props;
    console.log('notifications : ',notifications);
    if (!auth.uid) return <Redirect to='/signin' />
    if (!authIsLoaded) return <span></span>
    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6">
            <ProjectList projects={projects} />
          </div>
          <div className="col s12 m5 offset-m1">
            <Notifications notifications={notifications} />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    projects: state.firestore.ordered.projects,
    auth: state.firebase.auth,
    authIsLoaded: state.firebase.auth && state.firebase.auth.isLoaded,
    notifications: state.firestore.ordered.notifications
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect(() => ['projects',{ collection: 'notifications', limit: 3 }])
)(Dashboard)