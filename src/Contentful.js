const contentful = require("contentful");

export default contentful.createClient({
  space:"p67rdkvueduw",
  accessToken : "39_YkXZo-sB9E6b3o179XKTnL2_Ym9fJve85PisjKOs"
  // space: process.env.REACT_APP_API_SPACE,
  // accessToken: process.env.REACT_APP_ACCESS_TOKEN
});
