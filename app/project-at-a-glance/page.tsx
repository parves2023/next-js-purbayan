import React from "react";

const projectHighlights = [
  { label: "Total Area", value: "500 Acres" },
  { label: "Location", value: "Purbayan City, Purbachal, Dhaka" },
  { label: "Blocks", value: "A, B, C, D" },
  { label: "Ready Plots", value: "Only 20 plots left in Block A" },
  { label: "Connectivity", value: "5-min to Dhaka–Sylhet Highway & Metro Rail Access" },
  { label: "Key Facilities", value: "Wedding Resorts, Medical College, Sports Zones, Research Institute" },
  { label: "Sustainability", value: "Eco-friendly design with green corridors & natural airflow" },
];

const ProjectAtAGlancePage = () => {
  return (
    <main className="max-w-4xl mx-auto px-4 py-20">
      <h1 className="text-3xl font-bold mb-8 text-center">Project at a Glance</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {projectHighlights.map(({ label, value }) => (
          <div
            key={label}
            className="bg-gray-900 p-6 rounded-lg shadow-md text-white"
          >
            <h3 className="text-lg font-semibold mb-2">{label}</h3>
            <p className="text-gray-300">{value}</p>
          </div>
        ))}
      </div>
    </main>
  );
};

export default ProjectAtAGlancePage;
