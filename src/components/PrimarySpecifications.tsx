"use client";
import specificationsData from "../data/specificationsData";

const PrimarySpecifications = () => (
  <>
    {Object.entries(specificationsData.primary).map(([title, items]) => (
      <div
        key={title}
        className="bg-white dark:bg-slate-900 rounded-2xl shadow-md overflow-hidden"
      >
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-4 text-white font-bold text-xl font-playfair">
          {title}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 p-6">
          {items.map(({ item, details }, idx) => (
            <div
              key={idx}
              className="text-sm text-slate-700 dark:text-slate-200"
            >
              <span className="font-medium block">{item}</span>
              <span className="text-slate-600 dark:text-slate-400">
                {details}
              </span>
            </div>
          ))}
        </div>
      </div>
    ))}
  </>
);

export default PrimarySpecifications;
