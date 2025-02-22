const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

const createNotification = ((notification) => {
  return admin.firestore().collection('notifications')
    .add(notification)
    .then(doc => console.log('notification added', doc));
});


exports.projectCreated = functions.firestore
  .document('projects/{projectId}')
  .onCreate(doc => {

    const project = doc.data();
    const notification = {
      content: 'Added a new project',
      user: `${project.authorFirstName} ${project.authorLastName}`
    }

    return createNotification(notification);

  });

exports.userJoined = functions.firestore.document("users/{uid}")
  .onCreate(doc => {
    const user = doc.data();
    const notification = {
      content: "Joined the party",
      user: `${user.firstName} ${user.lastName}`
    };
    return createNotification(notification);
  });