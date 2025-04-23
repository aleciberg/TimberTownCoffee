import EmailCard from "../components/EmailCard";
import MapCard from "../components/MapCard";
import InfoCard from "./InfoCard";

export default function Contact() {
  return (
    <section className="bg-taupe text-white-smoke flex flex-wrap justify-center gap-y-6 py-10">
      <div className="w-full sm:w-1/3 min-h-[25vh] flex justify-center items-center">
        <EmailCard />
      </div>
      <div className="w-full sm:w-1/3 min-h-[25vh] flex justify-center items-center">
        <MapCard />
      </div>
      <div className="w-full sm:w-1/3 min-h-[25vh] flex justify-center items-center">
        <InfoCard />
      </div>
    </section>
  );
}
