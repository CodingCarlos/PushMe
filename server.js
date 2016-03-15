var gcm = require('node-gcm');

var message = new gcm.Message();

message.addData('title', 'Gamify');
message.addData('message', 'Sean ha comentado en tu logro El tamaño importa.');
message.addData('count', '5 mensajes');
// message.addNotification('title', 'Alert!!!');
// message.addNotification('body', 'Abnormal data access');
// message.addNotification('icon', 'ic_launcher');

// as object
// message.addNotification({
// 	title: 'Alert!!!',
// 	body: 'Abnormal data access',
// 	icon: 'ic_launcher'
// });

var regTokens = ['ftztK76Zxpc:APA91bGsmbZIm_-EhjzMFTDKbgoCKvOURYEjBLmvxVKZj_UVciyUcK89n1GDt2I8tFGFw75eBuraoa9VDNcaz7eosf-UF5c2FV07OCL9ayT0J-a19w4vAs8O5sJCkBbW3N5w8baRpYjI'];

// Set up the sender with you API key
var sender = new gcm.Sender('AIzaSyDPdHdK7q891A50fMyOWjPgI81a6M_F1vg');

// Now the sender can be used to send messages
sender.send(message, { registrationTokens: regTokens }, function (err, response) {
	if(err) console.error(err);
	else    console.log(response);
});

// // Send to a topic, with no retry this time
// sender.sendNoRetry(message, { topic: '/topics/global' }, function (err, response) {
// 	if(err) console.error(err);
// 	else    console.log(response);
// });