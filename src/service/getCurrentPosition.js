import axios from 'axios';
// fixed warning

export const getCurrentPosition = async ({ latitude, longitude }) => {
  const apiKey = '7b1eb8fcc52c45d3a605bf55a79da5f2';
  //const apiKey = 'd4683b09d0c94ec0aebf0b2e043decbf';
  // const apiKey = 'tzDy6aIAhsw5ghil4aQ4S69bGDYgTFy5';
  const urlPosition = `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${apiKey}&language=en`;

  const { data } = await axios.get(urlPosition); // response
  //console.log(data);
  return data;
};
