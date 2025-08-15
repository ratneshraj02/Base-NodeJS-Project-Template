const express = require('express');


const apiRoutes = require('./routes');
const { serverConfig, logger } = require('./config');


const app = express();

app.use('/api', apiRoutes);


app.listen(serverConfig.PORT, () => {
	console.log(`app is listening port ${serverConfig.PORT}`);
	logger.info('Successfully started the server');
});
