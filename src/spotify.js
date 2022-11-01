// https://developer.spotify.com/documentation/web-playback-sdk/quick-start/#
export const authEndpoint = "https://accounts.spotify.com/authorize";//this is the endpoint where you have to send the user to login
//like if you click on the first page or the home page it will redirect you the spotify login page after you login there it will bring you back to the 
//redirected url

const clientId = "cff76213089a4e228206c8bf120d67cb";//03021b6b4c194e28b60ce15e47328b81
const redirectUri = "http://localhost:3000/";
const scopes = [//these are the things which you are giving the user to take that as an action as you cant delete any song from that site these are sent by the api 

  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

export const getTokenFromResponse = () => {//it is going on the site and puling the access token
  return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial, item) => {
      var parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);

      return initial;
    }, {});
};

export const accessUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;
