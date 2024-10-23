export const getCurrentDay = () => {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const currentDate = new Date();
    return daysOfWeek[currentDate.getDay()]; // Returns the current day as a string (e.g., 'Monday')
};


// IMPORTANT: MOVED THIS INTO HOOKS