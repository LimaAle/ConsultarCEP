import { LinearGradient } from 'expo-linear-gradient';
import React, { ReactNode } from 'react'
import { StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS } from '../colors';
interface Props {
  children: ReactNode;
}
export default function AppBackground({ children }: Props) {
  return (
    <SafeAreaView style={{flex:1}}>
      <LinearGradient
        style={styles.container}
        colors={[COLORS.primary, COLORS.secondary, COLORS.accent, COLORS.accentSecondary]}
      >
        {children}
      </LinearGradient>
    </SafeAreaView>
  )
  // '#e4dfda'
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});