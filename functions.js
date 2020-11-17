'use strict';

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



const configDispenser = async (req, res) => {

	console.log(`Starting add FUNCTION`);

	console.log(`req.body:`);
	console.log(req.body);
	
	res.status(200).send({
		result: true,
		dispenser: {
			id: req.body.newDispenserId,
			name: req.body.name,
			level: Math.floor(Math.random() * 25) + 75,
			date: getDate().dateES,
			// date: new Date()
		},
		// newDispenserId: body.newDispenserId,
		// info: 'updating dispenser + connecting to new wifi... PETTED!',
		// date: getDate().dateES,
		// values: req.body
		// body: req.body
	});
	
}



const getTime = (req, res) => {

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

	// console.log(`now:\n${JSON.stringify(now, null, 2)}`);

	res.status(200).send({
		output: true,
		date: now,
		dateES: now.toLocaleDateString('es-DE', options)
	});
}


module.exports = {
	configDispenser,
	getTime,
}
