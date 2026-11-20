import ProfileBanner from './ProfileBanner'
import AboutSection from './AboutSection'
import StatisticsSection from './StatisticsSection'
import PanelFeaturesSection from './PanelFeaturesSection'

export default function AboutPage() {
  return (
    <>
      <ProfileBanner />
      <AboutSection />
      <StatisticsSection aboutPage />
      <PanelFeaturesSection />
    </>
  )
}
