
import { AppContextProvider } from './src/context/';
import {StackRoutes} from './src/routes'
export default function App() {
  return (
    <AppContextProvider>
      <StackRoutes/>
    </AppContextProvider>
  );
}


