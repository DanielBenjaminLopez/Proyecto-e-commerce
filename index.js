const server = require("./src/server");
//require("dotenv").config();
const PORT = 3001;
server.listen(PORT, console.log(`Server listened in por ${PORT}`));
