const { username } = require("../config.json");
const { status } = require("../config.json");
client.on('ready', () => {
	console.log('Teafell - PID / User & Status Set');
	client.user.setUsername(username);
	client.user.setActivity(status, {
		type:"PLAYING"
//		url: "https://www.youtube.com/watch?v=0bZ0hkiIKt0"
// rickroll.com
	});
});
// omg, the status!!!!
// do the rickroll, do the rickroll!!!
// classic bot moment