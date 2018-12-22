module.exports = {
  client: {
    name: "React Next App",
    includes: ["pages/**", "lib/**"],
    service: {
      name: "api",
      url: "http://localhost:4000/api",
      // optional disable SSL validation check
      skipSSLValidation: true
    }
  }
};
