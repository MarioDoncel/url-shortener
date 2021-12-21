require('dotenv/config');
interface IEnvironmentVariables{
    API_URL:any,
    MONGO_CONNECTION:any
}

const environmentVariables:IEnvironmentVariables = {
    API_URL: process.env.API_URL,
    MONGO_CONNECTION:process.env.MONGO_CONNECTION
}

export default environmentVariables