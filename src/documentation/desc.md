Key Decisions
1. State Management with Zustand

Use of Zustand for state management due to its lightweight nature and simplicity compared to more robust state management libraries like Redux. 
This helps us maintain reactive city weather data and handle UI interactions (like switching between cities) with minimal overhead.

2. Component Architecture

I followed the Atomic Design pattern to organize the components:

    Atoms: Basic building blocks like icons, buttons, and text elements.
    Molecules: Groups of atoms forming more complex elements (e.g., weather icons with labels).
    Organisms: Combinations of molecules into more complex UI components (e.g., weather information cards).
    Templates: Higher-level layout components that dictate page structure.

This helps with reusability, maintainability, and separation of concerns.

3. Responsive Design with Tailwind CSS

The application is responsive by design using Tailwind CSS utilities. 
Specific breakpoints were used to adjust UI elements based on the screen size, ensuring the application is accessible on mobile, tablet, and desktop devices.

4. Dynamic City Selection

The city selection is dynamically powered by the Zustand store, where we load weather data from mock JSON data. 
The city dropdown is integrated into the CurrentWeather component and allows users to select different cities, updating the displayed weather information accordingly.

5. Mock Data Integration

The application currently uses a mock data json(simulation of data fetching) for weather conditions, forecasts, and activities. The mock data is stored in JSON format and is initialized into the Zustand store during useInitWeatherData() useEffect hook when it first mounts. 
The func logic is being handled inside this hook, like data mapping , initializing(store/UI) and ui status (loading)
