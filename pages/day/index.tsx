import PageShell from "../../components/village/PageShell";
import Day from "../../components/village/Day";

export default function DayPage() {
  return (
    <PageShell
      title="A Day at Ayurvana | Daily Rhythm at the Wellness Village, Salem"
      description="An illustrative day at Ayurvana: yoga at sunrise, physician-guided treatments, Sattvic meals, craft workshops and evenings at the amphitheatre."
      bgImage="/images/bg.webp"
      heading={
        <>
          A day in{" "}
          <span className="italic text-gold-light">Ayurvana</span>
        </>
      }
    >
      <Day />
    </PageShell>
  );
}