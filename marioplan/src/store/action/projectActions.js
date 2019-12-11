export const createProject = (project) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // make async call to database
    console.log('vao day roi');
    const firestore = getFirestore();
      firestore.collection('projects').add({
        ...project,
        authorFirstName: 'Huy',
        authorLastName: 'Le',
        authorID: 123456,
        createAt: new Date()
      }).then(() => {
        dispatch({ type: 'CREATE_PROJECT', project });
      }).catch((err) => {
        dispatch({ type: 'CREATE_PROJECT_ERROR', err });
      })
    
  }
};