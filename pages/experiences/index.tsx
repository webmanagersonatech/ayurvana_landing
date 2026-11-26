import PageShell from "../../components/village/PageShell";
import { Dining, Unwind, Beyond, ProShop } from "../../components/village";

export default function Page() {
  return (
    <PageShell
      title="Experiences at Ayurvana | Sattvic Dining, Pond, Amphitheatre & Pro Shop"
      description="Sattvic dining, the pond and amphitheatre, day trips around Salem and the Ayurvana Pro Shop."
      heading={<>Life at <span className="italic text-gold-light">Ayurvana</span></>}
    >
      <Dining />
      <Unwind />
      <Beyond />
      <ProShop />
    </PageShell>
  );
}
