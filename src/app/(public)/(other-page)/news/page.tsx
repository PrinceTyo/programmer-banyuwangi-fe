import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { news } from "@/lib/data-dummy/news";

export default function NewsPage() {
  return (
    <div
      className="min-h-screen bg-black overflow-x-hidden p-14"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='180' height='180' viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M60 54L60 66M54 60L66 60' stroke='%236B7280' stroke-width='0.5' stroke-opacity='0.7'/%3E%3C/g%3E%3C/svg%3E"), 
        url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M15 15L15 0M15 15L30 15M15 15L15 30M15 15L0 15' stroke='%231F2937' stroke-width='0.5' stroke-opacity='0.6'/%3E%3C/g%3E%3C/svg%3E")`,
      }}
    >
      <h1 className="text-7xl text-white font-bold mb-12">News</h1>

      <Accordion type="single" collapsible className="w-full">
        <Separator />
        {news.map((item) => (
          <AccordionItem
            key={item.id}
            value={`items-${item.id}`}
            className="group text-white"
          >
            <AccordionTrigger className="relative px-2 overflow-hidden cursor-pointer transition-all duration-300">
              <span
                className="absolute inset-0 origin-bottom scale-y-0 transition-transform duration-300 ease-out
                        pointer-events-none bg-white/30 group-hover:scale-y-110 group-data-[state=open]:scale-y-110"
              />
              <div className="space-y-2">
                <p>{item.date}</p>
                <h2 className="text-2xl">{item.title}</h2>
              </div>
            </AccordionTrigger>
            <AccordionContent className="space-y-4 text-lg font-semibold pt-4 px-2 bg-white/30">
              <p>{item.description}</p>
              <img src={item.image} alt={`${item.title} image`} />
              <Link
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                <p>{item.link}</p>
              </Link>
            </AccordionContent>
          </AccordionItem>
        ))}

        <Separator />
      </Accordion>
    </div>
  );
}
