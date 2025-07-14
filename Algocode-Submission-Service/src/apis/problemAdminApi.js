// const axiosInstance = require('../config/axiosInstance');
// const { PROBLEM_ADMIN_SERVICE_URL } = require('../config/serverConfig');

// const PROBLEM_ADMIN_API_URL = `${PROBLEM_ADMIN_SERVICE_URL}/api/v1`;

// async function fetchProblemDetails(problemId) {
//     try {
//         const uri = PROBLEM_ADMIN_API_URL + `/problems/${problemId}`;
//         const response = await axiosInstance.get(uri);
//         console.log("Api response: ", response.data);
//         return response.data;
//     } catch (error) {
//         console.log("Something went wrong while fetching problem details");
//         console.log(error);
//     }
// }

// module.exports = {
//     fetchProblemDetails
// }


const axiosInstance = require('../config/axiosInstance');
const { PROBLEM_ADMIN_SERVICE_URL } = require('../config/serverConfig');

if (!PROBLEM_ADMIN_SERVICE_URL) {
    throw new Error('PROBLEM_ADMIN_SERVICE_URL is not defined');
}

const PROBLEM_ADMIN_API_URL = `${PROBLEM_ADMIN_SERVICE_URL}/api/v1`;

async function fetchProblemDetails(problemId) {
    try {
        if (!problemId) {
            throw new Error('problemId is not defined');
        }

        const uri = `${PROBLEM_ADMIN_API_URL}/problems/${problemId}`;
        console.log("Request URI:", uri);

        const response = await axiosInstance.get(uri);
        console.log("API response: ", response.data);
        return response.data;
    } catch (error) {
        console.log("Something went wrong while fetching problem details");
        console.log(error.message);

        // Additional error details (optional)
        if (error.response) {
            console.log("Response data:", error.response.data);
            console.log("Response status:", error.response.status);
            console.log("Response headers:", error.response.headers);
        } else if (error.request) {
            console.log("Request made but no response received:", error.request);
        } else {
            console.log("Error in setting up the request:", error.message);
        }
    }
}

module.exports = {
    fetchProblemDetails
};
