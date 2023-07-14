import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider } from 'native-base';
import { useFonts, Karla_400Regular, Karla_700Bold } from '@expo-google-fonts/karla';

import { Loading } from '@components/Loading';
import { Routes } from '@routes/index';

import { THEME } from './src/theme';

export default function App() {
  const [fontsLoaded] = useFonts({
    Karla_400Regular,
    Karla_700Bold
  })
  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar 
        style="light"
        backgroundColor="transparent"
        translucent
      />
      {fontsLoaded ? <Routes /> : <Loading />}
    </NativeBaseProvider>
  );
}
