'use strict';

const test = async (req, res) => {

	// return res.json({ output: true });
	// console.log(`req:`);
	// console.log(req);
	// console.log(`res:`);
	// console.log(res);
	
	console.log(`###########################################################################################`);
	console.log(`###########################################################################################`);
	console.log(`###########################################################################################`);

	const now = new Date();
	const options = {
		weekday: 'long',
		year: 'numeric',
		month: 'long',
		day: 'numeric',
		hour: 'numeric',
		minute: 'numeric',
		second: 'numeric'
	};

	now.toLocaleDateString('es-DE', options)

	console.log(`now:\n${JSON.stringify(now, null, 2)}`);

	return res.status(200).send({
		output: true,
		date: now,
		dateES: now.toLocaleDateString('es-DE', options)
	})

};


const dispenserAdd = async (req, res) => {

	// console.log(`req:`);
	// console.log(req);

	// name
	// ssid
	// pwd

	const now = new Date();
	
	console.log(`Estamos en la funcion de Añadir Dispensador`);

	// { name: 'Recepcion', ssid: 'Eurheka', pwd: 'este_es_el_pwd' }

	console.log(`now:\n${JSON.stringify(now, null, 2)}`);

	return res.status(200).send({
		output: true,
		date: now,
		params: req.params
		// dateES: now.toLocaleDateString('es-DE', options)
	})

};


const getDate = () => {
	const now = new Date();
	const options = {
		weekday: 'long',
		year: 'numeric',
		month: 'long',
		day: 'numeric',
		hour: 'numeric',
		minute: 'numeric',
		second: 'numeric'
	};

	now.toLocaleDateString('es-DE', options)

	console.log(`now:\n${JSON.stringify(now, null, 2)}`);

	return {
		date: now,
		dateES: now.toLocaleDateString('es-DE', options)
	}
}



const add = async (req, res) => {

	console.log(`Starting add FUNCTION`);

  // try {

	console.log(`req.body:`);
	console.log(req.body);

	// config_wifi


	const https = require('https');

	const API_URL = `https://eurheka.loca.lt/api/dispensers/${req.body.newDispenserId}`;

	req.body.enabled = true;

	console.log(`add ### req.body:\n${JSON.stringify(req.body, null, 2)}`);
	
	https.put(API_URL, (resp) => {
		let data = '';

		// A chunk of data has been recieved.
		resp.on('data', (chunk) => {
			data += chunk;
		});

		// The whole response has been received. Print out the result.
		resp.on('end', () => {
			console.log(`dispenser # explanation:\n${JSON.stringify(JSON.parse(data).explanation, null, 2)}`);
			// console.log(JSON.parse(data).explanation);
		});

	}).on("error", (err) => {

		console.log(`dispenser # Error calling ${API_URL}: ` + err.message);

	});
	
	// console.log(`req:`);
	// console.log(req);

// {
// 	"name": "Gate 1",
// 	"client.id": "00003",
// 	"client.name": "CAMP NOU",
// 	"wifiName": "CAMPNOU_LAN",
// 	"wifiPassword": "0123400003",
// }

	res.status(200).send({
		result: true,
		// date: getDate().dateES,
		// values: req.body
	});

    // const { name, wifiName, wifiPassword, level, client } = req.body;

    // const newDispenser = new Dispenser({
    //   name,
    //   wifiName,
    //   wifiPassword,
    //   client: {
    //     _id: client.id,
    //     name: client.name
    //   },
    //   level: level?level:0,
    //   // client: {
    //   //   id: clientId
    //   // },
    //   // jets: [ []] ],
    //   // level: Number,
    //   // wifi: wifiConfig,
		// });
		
		// console.log(`Will add the dispenser`);

		// console.log(`newDispenser:\n${JSON.stringify(newDispenser, null, 2)}`);

		// res.status(200).send({
		// 	result: 'DEVELOP NOT FINISHED',
		// 	newDispenser
		// });










    // // console.log(`newDispenser:\n${JSON.stringify(newDispenser, null, 2)}`);

    // if (client.id) {
      
    //   // console.log(`Search client by clientId:\n${JSON.stringify(clientId, null, 2)}`);
      
    //   // const client = await Client.findById(clientId)

    //   // newDispenser.client = client._id

    //   const savedDispenser = await newDispenser.save({ new: true });

    //   res.status(200).send(newDispenser);

    // } else {

    //   newDispenser.client = null
    //   res.status(400).send({ message: 'Can not create a dispenser without associate it to a client' })

    // }

  // } catch (error) {
    
  //   console.log(`error:\n${JSON.stringify(error, null, 2)}`);
    
  //   res.status(400).send({ message: error });

  // }
  
}

const getTime = (req, res) => {
	console.log(`Yeppp... estamos en getTime`);
	res.status(200).send({ date: new Date(), output: 'ueeeeeeep' })
}


module.exports = {
	test,
	dispenserAdd,
	add,
	getTime
}
