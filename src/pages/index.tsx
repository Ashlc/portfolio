import WorkCard from "@/components/workCard";
import { works } from "@/service/works";


export default function Index() {
  return (
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="w-full gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {works.map((work) => <WorkCard key={work.id} work={work} />)}
        </div>
      </section>
  );
}
