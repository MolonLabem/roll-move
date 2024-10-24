// src/config.js

const CONFIG = {
    REACT_APP_PORT: import.meta.env.REACT_APP_PORT || 3000, // Default React app port
    API_PORT: import.meta.env.API_PORT || 7071, // Default Azure Functions port
};

export default CONFIG;
