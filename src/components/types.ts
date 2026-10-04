export type SectionId = 'profile' | 'practice' | 'contact';

export type NavigateToSection = (section: SectionId) => void;

export type TrackSectionLayout = (section: SectionId, y: number) => void;