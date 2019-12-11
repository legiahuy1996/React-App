import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signIn } from '../../store/action/authAction'
import { Redirect } from 'react-router-dom'

export class SignIn extends Component {

    state = {
        'email': '',
        'password': ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.signIn(this.state);
    }

    render() {
        const { authErr, auth, authIsLoaded } = this.props;
        if (auth.uid) return <Redirect to='/' />
        if (!authIsLoaded) return <span></span>
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">
                        Sign In
                    </h5>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">Login</button>
                    </div>
                    <div className="red-text center">
                        {authErr ? <p>{authErr}</p> : null}
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        authErr: state.auth.authError,
        auth: state.firebase.auth,
        authIsLoaded: state.firebase.auth && state.firebase.auth.isLoaded
    }
}

const mapDispathToProps = (dispatch) => {
    return {
        signIn: (creds) => dispatch(signIn(creds))
    }
}

export default connect(mapStateToProps, mapDispathToProps)(SignIn)
