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


module.exports = {
	test,
	dispenserAdd
}
