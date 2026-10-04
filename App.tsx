import { StatusBar } from 'expo-status-bar';
import { useRef, useState } from 'react';
import { ScrollView, StyleSheet, View, useWindowDimensions } from 'react-native';
import { ContactSection } from './src/components/ContactSection';
import { PracticeSection } from './src/components/PracticeSection';
import { ProfileSection } from './src/components/ProfileSection';
import { SiteFooter } from './src/components/SiteFooter';
import { SiteHeader } from './src/components/SiteHeader';
import { StatementBand } from './src/components/StatementBand';
import type { SectionId } from './src/components/types';

export default function App() {
  const scrollRef = useRef<ScrollView>(null);
  const [sectionOffsets, setSectionOffsets] = useState<Partial<Record<SectionId, number>>>({});
  const isWide = useWindowDimensions().width >= 860;
  const goToSection = (section: SectionId) => {
    scrollRef.current?.scrollTo({ y: sectionOffsets[section] ?? 0, animated: true });
  };
  const trackSectionLayout = (section: SectionId, y: number) => {
    setSectionOffsets((current) => ({ ...current, [section]: y }));
  };

  return (
    <View style={styles.app}>
      <StatusBar style="dark" />
      <ScrollView ref={scrollRef} contentContainerStyle={styles.page}>
        <SiteHeader isWide={isWide} onNavigate={goToSection} />
        <ProfileSection isWide={isWide} onNavigate={goToSection} onSectionLayout={trackSectionLayout} />
        <StatementBand isWide={isWide} />
        <PracticeSection isWide={isWide} onSectionLayout={trackSectionLayout} />
        <ContactSection isWide={isWide} onSectionLayout={trackSectionLayout} />
        <SiteFooter />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  app: { flex: 1, backgroundColor: '#faf7f7' },
  page: { width: '100%', alignSelf: 'center' },
});
