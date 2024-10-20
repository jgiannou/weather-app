import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
import { MantineProvider } from '@mantine/core';
import { Layout } from './components/templates';
import CurrentWeather from './components/organisms/CurrentWeather/CurrentWeather';
import { WeatherGrid } from './components/templates/WeatherGrid';
import { WeatherComponentType } from './enums/WeatherComponentType';
import { SidebarItemType } from './enums/SidebarItemType';
import activity1 from './assets/activity1.png';
import activity2 from './assets/activity2.png';
import activity3 from './assets/activity3.png';
import activity4 from './assets/activity4.png';

function App() {

  const sidebarItems = [
    SidebarItemType.Weather,
    SidebarItemType.Explore,
    SidebarItemType.Cities,
    SidebarItemType.Settings,
  ];

  const activitiesData = [
    { imageUrl: activity1, distance: '2km' },
    { imageUrl: activity2, distance: '1.5km' },
    { imageUrl: activity3, distance: '500m' },
    { imageUrl: activity4, distance: '3km' },
  ];


  const forecastData = [
    { time: 'Now', temperature: 26, windSpeed: '11.7 km/h' },
    { time: '22:00', temperature: 26, windSpeed: '9.3 km/h' },
    { time: '00:00', temperature: 22, windSpeed: '12 km/h' },
    { time: '02:00', temperature: 16, windSpeed: '15 km/h' },
    { time: '04:00', temperature: 20, windSpeed: '15 km/h' },
    { time: '06:00', temperature: 22, windSpeed: '15 km/h' },
    { time: '08:00', temperature: 16, windSpeed: '15 km/h' },
  ];

  const dailyForecastData = [
    { day: 'SUN', time: '8:00 PM GMT', realFeel: 30, windSpeed: 0.8, chanceOfRain: 2, uvIndex: 4, weatherCondition: 'cloudy' },
    { day: 'MON', time: '8:00 PM GMT', realFeel: 28, windSpeed: 1.0, chanceOfRain: 10, uvIndex: 5, weatherCondition: 'sunny' },
    { day: 'TUE', time: '8:00 PM GMT', realFeel: 25, windSpeed: 1.5, chanceOfRain: 5, uvIndex: 3, weatherCondition: 'rainy' },
    { day: 'WED', time: '8:00 PM GMT', realFeel: 32, windSpeed: 0.6, chanceOfRain: 1, uvIndex: 6, weatherCondition: 'cloudy' },
    { day: 'THU', time: '8:00 PM GMT', realFeel: 27, windSpeed: 1.2, chanceOfRain: 8, uvIndex: 4, weatherCondition: 'rainy' },
    { day: 'FRI', time: '8:00 PM GMT', realFeel: 29, windSpeed: 1.3, chanceOfRain: 0, uvIndex: 5, weatherCondition: 'sunny' },
    { day: 'SAT', time: '8:00 PM GMT', realFeel: 31, windSpeed: 1.1, chanceOfRain: 2, uvIndex: 5, weatherCondition: 'sunny' },
  ];

  return (
    <MantineProvider
      theme={{
        other: {
          colorScheme: 'light'
        },
      }}
    >
      <Layout>
        <CurrentWeather {
          ...{
            city: 'London',
            temperature: 20,
            weatherCondition: 'Cloudy',
            date: 'Sunday | 12 Dec 2023'
          }
        } />
        <WeatherGrid
          components={[
            { type: WeatherComponentType.WeatherSidebar, props: { items: sidebarItems }, column: 1 }, // Sidebar in column 1
            { type: WeatherComponentType.ActivitiesList, props: { activities: activitiesData }, column: 2 }, // Activities in column 2
            { type: WeatherComponentType.HourlyForecast, props: { forecastData: forecastData }, column: 2 }, // Hourly forecast in column 2
            { type: WeatherComponentType.DailyForecast, props: { dailyForecastData }, column: 3 }, // Daily forecast in column 3
          ]}
        />
      </Layout>
    </MantineProvider>
  )
}

export default App