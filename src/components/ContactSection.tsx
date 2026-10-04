import { Linking, Pressable, StyleSheet, Text, View } from 'react-native';
import type { TrackSectionLayout } from './types';

type ContactSectionProps = {
  isWide: boolean;
  onSectionLayout: TrackSectionLayout;
};

export function ContactSection({ isWide, onSectionLayout }: ContactSectionProps) {
  return (
    <View onLayout={(event) => onSectionLayout('contact', event.nativeEvent.layout.y)} style={styles.section}>
      <View style={[styles.inner, isWide && styles.wideInner]}>
        <View style={styles.copy}>
          <Text style={styles.kicker}>EL PRIMER PASO</Text>
          <Text style={[styles.title, !isWide && styles.smallTitle]}>¿Lo hablamos?</Text>
          <Text style={styles.description}>Cuéntame brevemente qué necesitas. Te responderé personalmente para resolver tus dudas y encontrar un buen momento.</Text>
        </View>
        <View style={styles.mailBlock}>
          <Pressable
            onPress={() => Linking.openURL('mailto:hola@elenariospsicologia.es?subject=Consulta%20de%20primera%20cita')}
            style={styles.mailButton}
            accessibilityRole="link"
            accessibilityLabel="Escribir un correo para pedir una primera cita"
          >
            <Text style={styles.mailButtonText}>Escríbeme un correo <Text style={styles.arrow}>↗</Text></Text>
          </Pressable>
          <Text style={styles.email}>hola@elenariospsicologia.es</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  section: { backgroundColor: '#faf7f7' },
  inner: { width: '100%', maxWidth: 1280, alignSelf: 'center', paddingHorizontal: 28, paddingVertical: 66, gap: 30, justifyContent: 'space-between' },
  wideInner: { flexDirection: 'row', alignItems: 'center' },
  copy: { maxWidth: 580 },
  kicker: { color: '#e8dce1', fontSize: 10, fontWeight: '700', letterSpacing: 1.2 },
  title: { color: '#4b1f32', fontFamily: 'Georgia', fontSize: 48, lineHeight: 58, marginTop: 14 },
  smallTitle: { fontSize: 41, lineHeight: 50 },
  description: { maxWidth: 520, color: '#69575f', fontSize: 15, lineHeight: 25, marginTop: 12 },
  mailBlock: { alignItems: 'flex-start', gap: 12 },
  mailButton: { backgroundColor: '#6e5661', borderRadius: 3, paddingVertical: 16, paddingHorizontal: 22 },
  mailButtonText: { color: '#fff', fontSize: 14, fontWeight: '600' },
  arrow: { color: '#fff' },
  email: { color: '#6e5661', fontSize: 13 },
});