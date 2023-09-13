import Toast from 'react-native-toast-message';
//Redux
// import { AppProvider } from './Context/appContext';
import { Provider } from 'react-redux';
import store from './Redux/store';
import { LogBox } from 'react-native';
//Context api
import Auth from './Context/store/Auth';

import { NavigationContainer } from '@react-navigation/native';

//Navigators
import MainStackNavigator from './Navigators/MainStackNavigator';


// export default function App() {
//   return (
//     <AppProvider>
//       <Provider store={store}>
//         <NavigationContainer>
//           <Header />
//           <Main />
//           <Toast />
//         </NavigationContainer>
//       </Provider>
//     </AppProvider>
//   );
// }

export default function App() {
  LogBox.ignoreAllLogs();
  return (
    <Auth>
      <Provider store={store}>
        <NavigationContainer>
          <MainStackNavigator />
          <Toast />
        </NavigationContainer>
      </Provider>
    </Auth>
  );
}
