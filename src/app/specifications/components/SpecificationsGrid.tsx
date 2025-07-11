"use client";

import TimelineItem from "./TimelineItem";

// Inline types
interface SpecificationItem {
  item: string;
  details: string;
}

interface Specification {
  title: string;
  image: string;
  items: SpecificationItem[];
}

export default function SpecificationsGrid({ data }: { data: Specification[] }) {
  return (
    <div className="relative mx-auto max-w-6xl">
      {/* Center vertical timeline line */}
      <div className="hidden lg:block absolute left-1/2 top-0 h-full border-l-2 border-indigo-300 dark:border-indigo-600 z-0" />

      {/* Timeline entries */}
      <div className="flex flex-col items-center">
        {data.map((spec, index) => (
          <TimelineItem key={index} spec={spec} index={index} />
        ))}
      </div>
    </div>
  );
}
