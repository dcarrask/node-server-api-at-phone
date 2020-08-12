'use strict';

const test = async (req, res) => {

	// return res.json({ output: true });
	return res.status(200).send({ output: true })
	
};


module.exports = {
	test
}
