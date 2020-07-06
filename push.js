var webPush = require('web-push');
 
const vapidKeys = {
   "publicKey": "BMiHA91-rOrTB5yBSFyuDvc8sZhZYCM_jaVmxawQxA6D7MyW5BqPjbGlplrIoP5sfJOJvq7u4xy4c9YfssiJX10",
   "privateKey": "go1upL0mNJSPnxKYk-x7SPpXQJJeFT00yCbXBU28vIA"
};
 
 
webPush.setVapidDetails(
   'mailto:gennardo@mail.ugm.ac.id',
   vapidKeys.publicKey,
   vapidKeys.privateKey
)
var pushSubscription = {
    "endpoint": "https://fcm.googleapis.com/fcm/send/d4EqYCORlkw:APA91bGT7zxUw8rBgWvXuaPimFE4i7s8-pEB7KKMtQIQi5zmD21t60Z3PAbDL5ZCboRUWLZ7cT7ncFoDx3wOycjJ2P7U-6QuFg6_uZqpvRDP5sF0CXhpuAmJ-FECuMC0_03qo38Ytr1x",
    "keys": {
        "p256dh": "BIPCK53keOuoqZpitBWGQVsMhtnUZ5H402OhEhqHRGS+rOXr32jAtYPd4+nKFOlkShYObrofXLw3jXzL07RvY0A=",
        "auth": "yuE/KCzKvR/qOYQUZxMCcw=="
    }
};
var payload = 'Selamat! Aplikasi Anda sudah dapat menerima push notifikasi!';
 
var options = {
   gcmAPIKey: '1012625780872',
   TTL: 60
};
webPush.sendNotification(
   pushSubscription,
   payload,
   options
);