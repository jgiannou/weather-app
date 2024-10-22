import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
import { MantineProvider } from '@mantine/core';
import { Layout } from './components/templates';
import CurrentWeather from './components/organisms/CurrentWeather/CurrentWeather';
import { WeatherGrid } from './components/templates/WeatherGrid';
import { WeatherComponentType } from './enums/WeatherComponentType';
import { SidebarItemType } from './enums/SidebarItemType';
import { useResponsiveComponents } from './hooks/useResponsiveComponents';
import { useWeatherStore } from './store';
import { useEffect } from 'react';
import mockData from "./mock/mockData.json";

function App() {

  const sidebarItems = [
    SidebarItemType.Weather,
    SidebarItemType.Explore,
    SidebarItemType.Cities,
    SidebarItemType.Settings,
  ];

  const { initializeData, selectedCity, getCityWeather } = useWeatherStore();  // Initialize the store when the component mounts
  useEffect(() => {
    initializeData(mockData.cities);
  }, [initializeData]);

  const cityWeather = getCityWeather(selectedCity);
  const components = [
    { type: WeatherComponentType.WeatherSidebar, props: { items: sidebarItems }, column: 1 },
    { type: WeatherComponentType.ActivitiesList, props: { activities: cityWeather?.activities }, column: 2 },
    { type: WeatherComponentType.HourlyForecast, props: { forecastData: cityWeather?.hourlyForecast }, column: 2 },
    { type: WeatherComponentType.DailyForecast, props: { dailyForecastData: cityWeather?.dailyForecast }, column: 3 },
  ];

  const filteredComponents = useResponsiveComponents(components);

  if (!cityWeather) return <div>Loading...</div>;

  return (
    <MantineProvider
      theme={{
        other: {
          colorScheme: 'light'
        },
      }}
    >
      <Layout>
        <CurrentWeather {...cityWeather.currentWeather} />
        <WeatherGrid
          components={filteredComponents}
        />
      </Layout>
    </MantineProvider>
  )
}

export default App