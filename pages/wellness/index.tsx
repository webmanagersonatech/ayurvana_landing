import PageShell from "../../components/village/PageShell";
import { Healing, Spa, SheHealth, Prana } from "../../components/village";

export default function Page() {
  return (
    <PageShell
      title="Wellness at Ayurvana | Ayurveda, Spa, She Health & Yoga in Salem"
      description="Physician-guided Ayurvedic programmes, spa rituals, She Health and the Prana Shala yoga pavilion at Ayurvana, Salem."
      heading={<>Wellness at <span className="italic text-gold-light">Ayurvana</span></>}
    >
      <Healing />
      <Spa />
      <SheHealth />
      <Prana />
    </PageShell>
  );
}
