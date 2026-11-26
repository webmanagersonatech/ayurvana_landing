import PageShell from "../../components/village/PageShell";
import { Stay } from "../../components/village";

export default function Page() {
  return (
    <PageShell
      title="Stay at Ayurvana | Rooms, Cottages & Tariff in Salem"
      description="Rooms, private cottages, She Room and He Room, and the Ayurvana tariff."
      heading={<>Stay at <span className="italic text-gold-light">Ayurvana</span></>}
    >
      <Stay />
    </PageShell>
  );
}
