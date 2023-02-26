
import { AppContextProvider } from './src/context/';
import HomeView from './src/pages/home/view';

export default function App() {
  return (
    <AppContextProvider>
      <HomeView />
    </AppContextProvider>
  );
}


