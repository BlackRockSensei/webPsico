import { Pressable, StyleSheet, Text, View } from 'react-native';
import type { NavigateToSection } from './types';

type SiteHeaderProps = {
  isWide: boolean;
  onNavigate: NavigateToSection;
};

export function SiteHeader({ isWide, onNavigate }: SiteHeaderProps) {
  return (
    <View style={styles.header}>
      <View style={styles.inner}>
        <Pressable onPress={() => onNavigate('profile')} accessibilityRole="link">
          <Text style={styles.logo}>María<Text style={styles.coral}>.</Text></Text>
        </Pressable>
        {isWide && (
          <View style={styles.navigation}>
            <Pressable onPress={() => onNavigate('profile')} accessibilityRole="link">
              <Text style={styles.navigationText}>La psicóloga</Text>
            </Pressable>
            <Pressable onPress={() => onNavigate('practice')} accessibilityRole="link">
              <Text style={styles.navigationText}>La consulta</Text>
            </Pressable>
            <Pressable onPress={() => onNavigate('contact')} accessibilityRole="link">
              <Text style={styles.navigationText}>Contacto</Text>
            </Pressable>
          </View>
        )}
        <Pressable onPress={() => onNavigate('contact')} style={styles.cta} accessibilityRole="link">
          <Text style={styles.ctaText}>Pedir una cita</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: { borderBottomWidth: 1, borderBottomColor: '#e8dce1' },
  inner: { width: '100%', maxWidth: 1280, alignSelf: 'center', minHeight: 82, paddingHorizontal: 28, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  logo: { color: '#4b1f32', fontFamily: 'Georgia', fontSize: 29 },
  coral: { color: '#e8dce1' },
  navigation: { flexDirection: 'row', alignItems: 'center', gap: 38 },
  navigationText: { color: '#6e5661', fontSize: 14 },
  cta: { paddingVertical: 12, paddingHorizontal: 18, borderWidth: 1, borderColor: '#4b1f32', borderRadius: 3 },
  ctaText: { color: '#4b1f32', fontSize: 13, fontWeight: '600' },
});