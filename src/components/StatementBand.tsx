import { StyleSheet, Text, View } from 'react-native';

type StatementBandProps = {
  isWide: boolean;
};

export function StatementBand({ isWide }: StatementBandProps) {
  return (
    <View style={styles.band}>
      <View style={[styles.inner, isWide && styles.wideInner]}>
        <Text style={styles.label}>01 / ACOMPAÑAMIENTO</Text>
        <Text style={styles.statement}>A veces, dar el primer paso es simplemente tener un espacio donde poder hablar.</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  band: { backgroundColor: '#f0e6e9' },
  inner: { width: '100%', maxWidth: 1280, alignSelf: 'center', paddingHorizontal: 28, paddingVertical: 38, gap: 14 },
  wideInner: { flexDirection: 'row', alignItems: 'center' },
  label: { color: '#765e69', fontSize: 10, fontWeight: '700', letterSpacing: 1 },
  statement: { color: '#4b1f32', fontFamily: 'Georgia', fontSize: 25, lineHeight: 35, flex: 1, maxWidth: 720 },
});