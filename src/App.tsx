import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
import { MantineProvider } from '@mantine/core';
import { Layout } from './components/templates';
import CurrentWeather from './components/organisms/CurrentWeather/CurrentWeather';
import { WeatherGrid } from './components/templates/WeatherGrid';
import { useInitWeatherData } from './hooks/useInitWeatherData';

function App() {

  const { loading, cityWeather, components, selectedBg } = useInitWeatherData(); //hook to init the weather data and components
  return (
    <MantineProvider>
      <Layout selectedBg={selectedBg} loading={loading}>
        {cityWeather && //if cityWeather is not null or undefined , but doesn't look pretty should be handled better
          <>
            <CurrentWeather {...cityWeather.currentWeather} />
            <WeatherGrid
              components={components}
            />
          </>
        }
      </Layout>
    </MantineProvider>
  )
}

export default App