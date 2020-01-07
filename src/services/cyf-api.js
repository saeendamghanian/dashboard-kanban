import mock_students from './mocks/students.json';

// to simulate network connection lag, we need a timeout
const simulateNetworkLag = () => new Promise(resolve => setTimeout(resolve, Math.random() * 600 + 100));


/**
 * Get the list of all students
 * 
 * @returns {Promise} Array of Students
 */
export const getStudents = async () => {
    await simulateNetworkLag();
    return mock_students;
}

/**
 * Get a single student by its ID
 * 
 * @param {string} studentId 
 * 
 * @returns {object} Student
 */
export const getStudentById = async (studentId) => {
    await simulateNetworkLag();
    return mock_students.find(({_id}) => _id === studentId);
};
