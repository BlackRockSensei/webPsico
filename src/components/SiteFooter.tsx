import { StyleSheet, Text, View } from 'react-native';

export function SiteFooter() {
  return (
    <View style={styles.footer}>
      <Text style={styles.logo}>María<Text style={styles.coral}>.</Text></Text>
      <Text style={styles.text}>Psicología cercana, a tu ritmo.</Text>
      <Text style={styles.text}>© 2026 María Moreno</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: { minHeight: 76, paddingHorizontal: 28, paddingVertical: 18, backgroundColor: '#f0e6e9', flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 10 },
  logo: { color: '#4b1f32', fontFamily: 'Georgia', fontSize: 21 },
  coral: { color: '#e8dce1' },
  text: { color: '#6e5661', fontSize: 12 },
});