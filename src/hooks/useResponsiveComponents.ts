// useResponsiveComponents.ts
import { useMediaQuery } from '@mantine/hooks';
import { WeatherComponentType } from '../enums/WeatherComponentType';

export const useResponsiveComponents = (components) => {
    const isTabletOrLarger = useMediaQuery('(min-width: 640px)');

    return components.filter(component => {
        if (
            (component.type === WeatherComponentType.ActivitiesList ||
                component.type === WeatherComponentType.WeatherSidebar) &&
            !isTabletOrLarger) {
            return false;
        }
        return true;
    });
};