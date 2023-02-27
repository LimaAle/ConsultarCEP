import { LinearGradient } from 'expo-linear-gradient';
import React, { ReactNode } from 'react'
import { StyleSheet } from 'react-native'
import useHomeViewModel from '../../pages/home/view.model';
import { COLORS } from '../colors';
import NoInternet from './no_internet';
interface Props {
  children: ReactNode;
}
export default function AppBackground({ children }: Props) {
  const { hasInternet } = useHomeViewModel();
  return (

    <LinearGradient
      style={styles.container}
      colors={[COLORS.primary, COLORS.secondary, COLORS.accent, COLORS.accentSecondary]}
    >
      {children}
      {!hasInternet ? <NoInternet /> : null}
    </LinearGradient>

  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
});