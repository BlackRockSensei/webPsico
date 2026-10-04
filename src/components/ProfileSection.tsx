import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import type { NavigateToSection, TrackSectionLayout } from './types';

type ProfileSectionProps = {
  isWide: boolean;
  onNavigate: NavigateToSection;
  onSectionLayout: TrackSectionLayout;
};

export function ProfileSection({ isWide, onNavigate, onSectionLayout }: ProfileSectionProps) {
  return (
    <View onLayout={(event) => onSectionLayout('profile', event.nativeEvent.layout.y)} style={[styles.section, isWide && styles.wideSection]}>
      <View style={[styles.copy, isWide && styles.wideCopy]}>
        <Text style={styles.kicker}><Text style={styles.dot}>●</Text> PSICOLOGÍA CON CALMA Y CERCANÍA</Text>
        <Text style={[styles.name, !isWide && styles.smallName]}>María Moreno</Text>
        <Text style={styles.role}>Psicóloga · Terapia para adultos</Text>
        <Text style={styles.intro}>Un espacio para escucharte, entender lo que estás viviendo y encontrar nuevas formas de sentirte mejor.</Text>
        <Pressable onPress={() => onNavigate('contact')} style={styles.button} accessibilityRole="link">
          <Text style={styles.buttonText}>Hablemos de ti <Text style={styles.coral}>↗</Text></Text>
        </Pressable>
        <Text style={styles.smallNote}>Presencial en Madrid y online</Text>
        <Text style={styles.motto}>Un proceso a tu ritmo, sin juicios.</Text>
      </View>
      <View style={styles.portraitFrame}>
        <Image
          source={{ uri: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=1200&q=85' }}
          style={styles.portrait}
          resizeMode="cover"
          accessibilityLabel="Retrato de la psicóloga María Moreno"
        />
        <View style={styles.caption}>
          <Text style={styles.captionKicker}>UN LUGAR PARA TI</Text>
          <Text style={styles.captionText}>Escucha · confianza · cambio</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  section: { width: '100%', maxWidth: 1280, alignSelf: 'center', paddingHorizontal: 28, paddingTop: 46, paddingBottom: 70, gap: 38 },
  wideSection: { flexDirection: 'row', alignItems: 'center' },
  copy: { width: '100%' },
  wideCopy: { flex: 0.9 },
  kicker: { color: '#755967', fontSize: 10, fontWeight: '700', letterSpacing: 1, marginBottom: 22 },
  dot: { color: '#e8dce1' },
  name: { color: '#4b1f32', fontFamily: 'Georgia', fontSize: 76, lineHeight: 86 },
  smallName: { fontSize: 54, lineHeight: 64 },
  role: { color: '#755967', fontSize: 16, marginTop: 7 },
  intro: { maxWidth: 475, color: '#51434a', fontSize: 18, lineHeight: 30, marginTop: 27 },
  button: { alignSelf: 'flex-start', backgroundColor: '#4b1f32', borderRadius: 3, paddingVertical: 16, paddingHorizontal: 23, marginTop: 28 },
  buttonText: { color: '#fff', fontSize: 14, fontWeight: '600' },
  coral: { color: '#e8dce1' },
  smallNote: { color: '#78656d', fontSize: 13, marginTop: 13 },
  motto: { color: '#76636b', fontSize: 13, marginTop: 38, borderLeftWidth: 2, borderLeftColor: '#d66e58', paddingLeft: 12 },
  portraitFrame: { width: '100%', height: 410, position: 'relative', overflow: 'hidden', borderRadius: 4 },
  portrait: { width: '100%', height: '100%' },
  caption: { position: 'absolute', right: 0, bottom: 0, left: 0, paddingHorizontal: 20, paddingVertical: 16, backgroundColor: 'rgba(75, 31, 50, 0.9)' },
  captionKicker: { color: '#f1b199', fontSize: 10, fontWeight: '700', letterSpacing: 1 },
  captionText: { color: '#fff', fontFamily: 'Georgia', fontSize: 16, marginTop: 5 },
});