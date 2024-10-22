import { useState, useEffect } from 'react';

/**
 * Hook to get the current day in three-letter uppercase format (e.g., 'MON', 'TUE').
 *
 * @returns {string} - The current day in uppercase three-letter format (e.g., 'MON').
 *
 * @example
 * const currentDay = useCurrentDay();
 * console.log(currentDay); // Output: 'MON'
 */
export const useCurrentDay = (): string => {
    const [currentDay, setCurrentDay] = useState<string>('');

    useEffect(() => {
        const getCurrentDay = () => {
            const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']; // Uppercase abbreviated day names
            const currentDate = new Date();
            return daysOfWeek[currentDate.getDay()]; // Get the current day in uppercase three-letter format
        };

        setCurrentDay(getCurrentDay());
    }, []);

    return currentDay;
};
