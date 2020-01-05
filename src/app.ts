import express = require("express");

import * as HelloController from './controllers/hello';

const app = express();
app.set("port", process.env.PORT || 3000);

app.get('/', HelloController.hi);
app.post('/hello', HelloController.hello);

export default app;