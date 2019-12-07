import React from 'react'

const ProjectDetails = (props) => {
    const id = props.match.params.id;
    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Project Title - {id}</span>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto mollitia, debitis dolorum quaerat quis veniam consequatur possimus, expedita accusamus vitae explicabo? Maiores, mollitia! Ea consectetur doloribus error sapiente quae impedit?</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>Posted by Peter Parker</div>
                    <div>7th December , 7am</div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails