import { Image, StyleSheet, Text, View } from 'react-native';
import type { TrackSectionLayout } from './types';

type PracticeSectionProps = {
  isWide: boolean;
  onSectionLayout: TrackSectionLayout;
};

export function PracticeSection({ isWide, onSectionLayout }: PracticeSectionProps) {
  return (
    <View onLayout={(event) => onSectionLayout('practice', event.nativeEvent.layout.y)} style={styles.section}>
      <View style={[styles.inner, isWide && styles.wideInner]}>
        <View style={styles.imageFrame}>
          <Image
            source={{ uri: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85' }}
            style={styles.image}
            resizeMode="cover"
            accessibilityLabel="Interior cálido y luminoso de una consulta"
          />
          <Text style={styles.imageIndex}>01 — 03</Text>
        </View>
        <View style={[styles.copy, isWide && styles.wideCopy]}>
          <Text style={styles.kicker}>LA CONSULTA</Text>
          <Text style={styles.title}>Un espacio seguro para volver a ti.</Text>
          <Text style={styles.description}>Cada historia es distinta. Trabajamos desde la escucha y la colaboración para comprender lo que necesitas, sin prisa y con objetivos que tengan sentido para ti.</Text>
          <View style={styles.details}>
            <View style={styles.detail}>
              <Text style={styles.detailLabel}>A QUIÉN ACOMPAÑO</Text>
              <Text style={styles.detailText}>Adultos · Ansiedad · Cambios vitales</Text>
            </View>
            <View style={styles.detail}>
              <Text style={styles.detailLabel}>FORMATO</Text>
              <Text style={styles.detailText}>Presencial en Madrid · Online</Text>
            </View>
            <View style={styles.detail}>
              <Text style={styles.detailLabel}>DURACIÓN</Text>
              <Text style={styles.detailText}>Sesiones individuales de 50 minutos</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  section: { backgroundColor: '#4b1f32' },
  inner: { width: '100%', maxWidth: 1280, alignSelf: 'center', paddingHorizontal: 28, paddingVertical: 60, gap: 42 },
  wideInner: { flexDirection: 'row', alignItems: 'center' },
  imageFrame: { width: '100%', height: 320, position: 'relative', overflow: 'hidden', borderRadius: 4 },
  image: { width: '100%', height: '100%' },
  imageIndex: { position: 'absolute', bottom: 0, left: 0, paddingVertical: 11, paddingHorizontal: 14, color: '#fff', backgroundColor: '#d66e58', fontSize: 10, fontWeight: '700', letterSpacing: 1 },
  copy: { width: '100%' },
  wideCopy: { flex: 1 },
  kicker: { color: '#e9a18a', fontSize: 10, fontWeight: '700', letterSpacing: 1.2 },
  title: { color: '#faf7f7', fontFamily: 'Georgia', fontSize: 38, lineHeight: 48, marginTop: 18 },
  description: { color: '#eadde2', fontSize: 15, lineHeight: 26, marginTop: 18 },
  details: { marginTop: 27, borderTopWidth: 1, borderTopColor: '#795c69' },
  detail: { paddingVertical: 13, borderBottomWidth: 1, borderBottomColor: '#795c69', gap: 6 },
  detailLabel: { color: '#d3bdc7', fontSize: 9, fontWeight: '700', letterSpacing: 1 },
  detailText: { color: '#fff', fontSize: 14, lineHeight: 21 },
});