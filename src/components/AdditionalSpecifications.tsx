"use client";
import specificationsData from "../data/specificationsData";

const AdditionalSpecifications = () => (
  <div className="grid md:grid-cols-2 gap-8">
    {Object.entries(specificationsData.additional).map(([title, items]) => (
      <div
        key={title}
        className="bg-white dark:bg-slate-900 rounded-xl p-6 shadow-md"
      >
        <h4 className="text-lg font-bold text-slate-800 dark:text-white mb-4">
          {title}
        </h4>
        <ul className="space-y-3">
          {items.map(({ item, details }, idx) => (
            <li key={idx}>
              <strong className="block text-slate-700 dark:text-slate-200">
                {item}
              </strong>
              <p className="text-slate-600 dark:text-slate-400 text-sm">
                {details}
              </p>
            </li>
          ))}
        </ul>
      </div>
    ))}
  </div>
);

export default AdditionalSpecifications;
