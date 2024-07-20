const connect = require('./db');
const app = require('./index');
require("dotenv").config();
const PORT = process.env.PORT ;


app.listen(PORT, async () => {
    try {
        await connect();
        console.log(`Server is running on ${PORT}`);

    } catch (error) {
        console.log(error.message);
    }
});