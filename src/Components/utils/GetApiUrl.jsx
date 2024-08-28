const isProduction = false;
// Set to true for production, false for local

const apiConfig = {
  production: "https://api-srishikharji.vercel.app",
  local: "http://localhost:5000",
};

const apiUrl = isProduction ? apiConfig.production : apiConfig.local;

export default apiUrl;
