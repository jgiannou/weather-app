import { useState, useEffect } from 'react';
import { THREELETTER_WEEK_DAYS } from '../constants/weatherConstants';

/**
 * Hook to get the current day in three-letter uppercase format (e.g., 'MON', 'TUE').
 *
 * @returns {string} - The current day in uppercase three-letter format (e.g., 'MON').
 *
 * @example
 * const currentDay = useCurrentDay();
 */
export const useCurrentDay = (): string => {
    const [currentDay, setCurrentDay] = useState<string>('');

    useEffect(() => {
        const getCurrentDay = () => {
            const daysOfWeek = [
                THREELETTER_WEEK_DAYS.SUN,
                THREELETTER_WEEK_DAYS.MON,
                THREELETTER_WEEK_DAYS.TUE,
                THREELETTER_WEEK_DAYS.WED,
                THREELETTER_WEEK_DAYS.THU,
                THREELETTER_WEEK_DAYS.FRI,
                THREELETTER_WEEK_DAYS.SAT];
            const currentDate = new Date();
            return daysOfWeek[currentDate.getDay()];
        };

        setCurrentDay(getCurrentDay());
    }, []);

    return currentDay;
};
