
$(document).ready(function() {

    $('#register').on('click', function() {
        // jeje
        console.log('no hago nada');
    })

    var push = PushNotification.init({
        android: {
            senderID: "214060846526"
        },
        ios: {
            alert: "true",
            badge: "true",
            sound: "true"
        },
        windows: {}
    });

    push.on('registration', function(data) {
        // data.registrationId
        alert(data);
        alert(data.registrationId);
        $("#gcm_id").html(data.registrationId);
    });

    push.on('notification', function(data) {
        // data.message,
        // data.title,
        // data.count,
        // data.sound,
        // data.image,
        // data.additionalData
        $("#notifications").prepend('<li> ' + data.message + ' : ' + data.message + ' - (' + data.count + ') img: ' + data.image + '. additionalData: ' + data.additionalData + '</li>');
    });

    push.on('error', function(e) {
        // e.message
        $("#notifications").prepend('<li class="error"> ' + e.message + '</li>');
    });

});
