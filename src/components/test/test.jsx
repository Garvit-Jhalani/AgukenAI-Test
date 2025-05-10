// import React, { useState } from "react";

// const BusinessSelection = ({ name, onContinue }) => {
//   const [selectedCategory, setSelectedCategory] = useState(null);
//   const [showModal, setShowModal] = useState(false);

//   const categories = [
//     {
//       title: "Hotels",
//       desc: "Boutique Hotels, Business Hotels, 4 star + Hotels",
//     },
//     {
//       title: "Clinics",
//       desc: "Medical Clinics, Dental Clinics, Specialty Clinics",
//     },
//     {
//       title: "Event Organizers",
//       desc: "Wedding Planners, Corporate Event Managers, Concert Organizers",
//     },
//     {
//       title: "Others",
//       desc: "For individuals, micro-businesses, or other industries like BFSI, IT, BPOs, etc.",
//     },
//   ];

//   const handleContinue = () => {
//     setShowModal(true);
//   };

//   const handleSubmitDetails = () => {
//     setShowModal(false);
//     onContinue?.(); // call parent if provided
//   };

//   const renderModalFields = () => {
//     switch (selectedCategory) {
//       case "Clinics":
//         return (
//           <>
//             <InputField label="Clinic Name" bg="dark" />
//             {/* <InputField label="Clinic Size" bg="light" /> */}
//             <InputField
//               className="cursor-pointer"
//               label="Clinic Size"
//               bg="light"
//               type="select"
//               options={["2-10", "11-50", "51+"]}
//             />
//             <InputField label="Clinic Location" bg="dark" />
//           </>
//         );
//       case "Hotels":
//         return (
//           <>
//             <InputField label="Hotel Name" bg="dark" />
//             {/* <InputField label="Hotel Size" bg="light" /> */}
//             <InputField
//               className="cursor-pointer"
//               label="Hotel Size"
//               bg="light"
//               type="select"
//               options={["2-10", "11-50", "51+"]}
//             />
//             <InputField label="Hotel Location" bg="dark" />
//           </>
//         );
//       case "Event Organizers":
//         return (
//           <>
//             <InputField label="Company Name" bg="dark" />
//             {/* <InputField label="Team Size" bg="light" /> */}
//             <InputField
//               className="cursor-pointer"
//               label="Team Size"
//               bg="light"
//               type="select"
//               options={["2-10", "11-50", "51+"]}
//             />
//             <InputField label="Office Location" bg="dark" />
//           </>
//         );
//       case "Others":
//         return (
//           <>
//             <InputField label="Your Name or Business Name" bg="dark" />
//             <InputField label="Industry or Nature of Work" bg="dark" />
//             {/* <InputField label="Team Size(If Applicable)" bg="light" /> */}
//             <InputField
//               className="cursor-pointer"
//               label="Team Size(If Applicable)"
//               bg="light"
//               type="select"
//               options={["2-10", "11-50", "51+"]}
//             />
//             <InputField label="Your Location" bg="dark" />
//           </>
//         );
//       default:
//         return null;
//     }
//   };

//   return (
//     <div className="p-6 text-white">
//       <h1 className="text-3xl font-bold">Hello, I'm AgukenAI.</h1>
//       <p className="mt-2">
//         I'm an AI Agent helping you handle reception and support calls using
//         GenAI-based phone call automation.
//       </p>

//       <div className="bg-gray-800 p-4 mt-6 rounded-lg">
//         <p className="text-gray-300">Nice to meet you, I'm</p>
//         <p className="text-xl font-semibold">{name}</p>
//       </div>

//       <h2 className="text-xl mt-8 font-semibold">Lovely to meet you {name}.</h2>
//       <p className="mt-2">
//         Please select the type of business you want to use receptionAI for:
//       </p>

//       <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
//         {categories.map((cat, idx) => (
//           <div
//             key={idx}
//             className={`bg-gray-800 py-8 px-4 rounded-lg hover:ring-2 cursor-pointer ${
//               selectedCategory === cat.title ? "ring-2 ring-purple-500" : ""
//             }`}
//             onClick={() => setSelectedCategory(cat.title)}
//           >
//             <div className="flex justify-center">
//               <div className="bg-gray-300 p-2 rounded-full text-black">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   strokeWidth="1.5"
//                   stroke="currentColor"
//                   className="size-6"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
//                   />
//                 </svg>
//               </div>
//             </div>
//             <h3 className="text-lg font-bold text-center my-4">{cat.title}</h3>
//             <p className="text-sm text-gray-400">{cat.desc}</p>
//           </div>
//         ))}
//       </div>

//       {selectedCategory && (
//         <div className="flex justify-between mt-6">
//           <button
//             className="cursor-pointer text-sm text-gray-400"
//             onClick={() => setSelectedCategory(null)}
//           >
//             Back
//           </button>
//           <button
//             onClick={handleContinue}
//             className="cursor-pointer bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-700"
//           >
//             Continue
//           </button>
//         </div>
//       )}

//       {/* Modal */}
//       {showModal && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
//           <div className="bg-[#1a1c2c] text-white p-6 rounded-lg shadow-lg w-full max-w-md">
//             <h2 className="text-lg font-semibold mb-4">
//               Let's start with general details about your {selectedCategory}
//             </h2>

//             {renderModalFields()}

//             <div className="flex justify-between items-center mt-6">
//               <button
//                 onClick={() => setShowModal(false)}
//                 className="cursor-pointer text-sm text-gray-300 hover:underline"
//               >
//                 Back
//               </button>
//               <button
//                 onClick={handleSubmitDetails}
//                 className="cursor-pointer bg-purple-600 hover:bg-purple-700 text-white px-5 py-2 rounded-md"
//               >
//                 Continue
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// const InputField = ({ label, bg = "dark", type = "text", options = [] }) => {
//   const bgColor =
//     bg === "light" ? "bg-white text-black" : "bg-[#2c2e3e] text-white";

//   return (
//     <div className="mb-4">
//       <label className="block text-sm font-medium mb-1">{label}</label>
//       {type === "select" ? (
//         <select
//           className={`w-full px-4 py-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 ${bgColor}`}
//         >
//           <option value="">Select team size</option>
//           {options.map((opt, idx) => (
//             <option key={idx} value={opt}>
//               {opt}
//             </option>
//           ))}
//         </select>
//       ) : (
//         <input
//           type="text"
//           className={`w-full px-4 py-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 ${bgColor}`}
//         />
//       )}
//     </div>
//   );
// };

// export default BusinessSelection;

import { useState } from "react";

const BusinessSelection = ({ name, onContinue }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showDetailForm, setShowDetailForm] = useState(false);
  const [selectedDays, setSelectedDays] = useState([]);
  const [dayFilter, setDayFilter] = useState("All Days");

  const categories = [
    {
      title: "Hotels",
      desc: "Boutique Hotels, Business Hotels, 4 star + Hotels",
    },
    {
      title: "Clinics",
      desc: "Medical Clinics, Dental Clinics, Specialty Clinics",
    },
    {
      title: "Event Organizers",
      desc: "Wedding Planners, Corporate Event Managers, Concert Organizers",
    },
    {
      title: "Others",
      desc: "For individuals, micro-businesses, or other industries like BFSI, IT, BPOs, etc.",
    },
  ];

  const handleContinue = () => {
    setShowModal(true);
  };

  const handleSubmitDetails = () => {
    setShowModal(false);
    setShowDetailForm(true);
  };

  const handleDayClick = (day) => {
    if (selectedDays.includes(day)) {
      setSelectedDays(selectedDays.filter((d) => d !== day));
    } else {
      setSelectedDays([...selectedDays, day]);
    }
  };

  const handleDayFilter = (filter) => {
    setDayFilter(filter);

    if (filter === "All Days") {
      setSelectedDays(["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"]);
    } else if (filter === "Weekdays") {
      setSelectedDays(["MON", "TUE", "WED", "THU", "FRI"]);
    } else if (filter === "Weekend") {
      setSelectedDays(["SAT", "SUN"]);
    } else if (filter === "Clear") {
      setSelectedDays([]);
    }
  };

  const renderModalFields = () => {
    switch (selectedCategory) {
      case "Clinics":
        return (
          <>
            <InputField label="Clinic Name" bg="dark" />
            <InputField
              className="cursor-pointer"
              label="Clinic Size"
              bg="light"
              type="select"
              options={["2-10", "11-50", "51+"]}
            />
            <InputField label="Clinic Location" bg="dark" />
          </>
        );
      case "Hotels":
        return (
          <>
            <InputField label="Hotel Name" bg="dark" />
            <InputField
              className="cursor-pointer"
              label="Hotel Size"
              bg="light"
              type="select"
              options={["2-10", "11-50", "51+"]}
            />
            <InputField label="Hotel Location" bg="dark" />
          </>
        );
      case "Event Organizers":
        return (
          <>
            <InputField label="Company Name" bg="dark" />
            <InputField
              className="cursor-pointer"
              label="Team Size"
              bg="light"
              type="select"
              options={["2-10", "11-50", "51+"]}
            />
            <InputField label="Office Location" bg="dark" />
          </>
        );
      case "Others":
        return (
          <>
            <InputField label="Your Name or Business Name" bg="dark" />
            <InputField label="Industry or Nature of Work" bg="dark" />
            <InputField
              className="cursor-pointer"
              label="Team Size(If Applicable)"
              bg="light"
              type="select"
              options={["2-10", "11-50", "51+"]}
            />
            <InputField label="Your Location" bg="dark" />
          </>
        );
      default:
        return null;
    }
  };

  const renderDetailForm = () => {
    switch (selectedCategory) {
      case "Clinics":
        return (
          <div className="mt-12 space-y-6">
            <h2 className="text-xl font-semibold">
              Details to personalize call handling for your clinic
            </h2>

            <div>
              <label className="block text-sm font-medium mb-1">
                Number of Doctors
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 bg-[#2c2e3e] border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Reception Operating Hours
              </label>
              <div className="bg-[#2c2e3e] p-4 rounded-md">
                <p className="text-sm mb-2">Operating Hours</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <FilterButton
                    label="All Days"
                    active={dayFilter === "All Days"}
                    onClick={() => handleDayFilter("All Days")}
                  />
                  <FilterButton
                    label="Weekdays"
                    active={dayFilter === "Weekdays"}
                    onClick={() => handleDayFilter("Weekdays")}
                  />
                  <FilterButton
                    label="Weekend"
                    active={dayFilter === "Weekend"}
                    onClick={() => handleDayFilter("Weekend")}
                  />
                  <FilterButton
                    label="Clear"
                    active={dayFilter === "Clear"}
                    onClick={() => handleDayFilter("Clear")}
                  />
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"].map(
                    (day) => (
                      <DayButton
                        key={day}
                        day={day}
                        selected={selectedDays.includes(day)}
                        onClick={() => handleDayClick(day)}
                      />
                    )
                  )}
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm mb-1">From</p>
                    <TimeSelector />
                  </div>
                  <div>
                    <p className="text-sm mb-1">To</p>
                    <TimeSelector />
                  </div>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Upload Clinic Documents (e.g., forms, brochures)
              </label>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Group Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 bg-[#2c2e3e] border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 mb-4"
                />
              </div>

              <div>
                <p className="text-sm mb-1">Files (10 Max)</p>
                <div className="border border-dashed border-gray-600 rounded-md p-8 flex flex-col items-center justify-center">
                  <div className="bg-transparent p-2 rounded-full mb-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
                      />
                    </svg>
                  </div>
                  <p className="text-purple-500 font-medium">Upload a file</p>
                  <p className="text-xs text-gray-400">or drag and drop</p>
                  <p className="text-xs text-gray-400 mt-1">
                    PDF, PNG, JPG, JPEG (MAX 30MB)
                  </p>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Description
              </label>
              <textarea className="w-full px-4 py-2 bg-[#2c2e3e] border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 h-24" />
            </div>

            <div className="flex justify-between mt-6">
              <button
                onClick={() => setShowDetailForm(false)}
                className="cursor-pointer text-sm text-gray-300 hover:underline"
              >
                Back
              </button>
              <button
                onClick={onContinue}
                className="cursor-pointer bg-purple-600 hover:bg-purple-700 text-white px-5 py-2 rounded-md"
              >
                Continue
              </button>
            </div>
          </div>
        );
      case "Hotels":
        return (
          <div className="mt-12 space-y-6">
            <h2 className="text-xl font-semibold">
              Details to personalize call handling for your hotel
            </h2>

            <div>
              <label className="block text-sm font-medium mb-1">
                Number of Rooms
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 bg-[#2c2e3e] border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Reception Operating Hours
              </label>
              <div className="bg-[#2c2e3e] p-4 rounded-md">
                <p className="text-sm mb-2">Operating Hours</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <FilterButton
                    label="All Days"
                    active={dayFilter === "All Days"}
                    onClick={() => handleDayFilter("All Days")}
                  />
                  <FilterButton
                    label="Weekdays"
                    active={dayFilter === "Weekdays"}
                    onClick={() => handleDayFilter("Weekdays")}
                  />
                  <FilterButton
                    label="Weekend"
                    active={dayFilter === "Weekend"}
                    onClick={() => handleDayFilter("Weekend")}
                  />
                  <FilterButton
                    label="Clear"
                    active={dayFilter === "Clear"}
                    onClick={() => handleDayFilter("Clear")}
                  />
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"].map(
                    (day) => (
                      <DayButton
                        key={day}
                        day={day}
                        selected={selectedDays.includes(day)}
                        onClick={() => handleDayClick(day)}
                      />
                    )
                  )}
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm mb-1">From</p>
                    <TimeSelector />
                  </div>
                  <div>
                    <p className="text-sm mb-1">To</p>
                    <TimeSelector />
                  </div>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Upload Hotel Documents (e.g., brochures, menus)
              </label>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Group Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 bg-[#2c2e3e] border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 mb-4"
                />
              </div>

              <div>
                <p className="text-sm mb-1">Files (10 Max)</p>
                <div className="border border-dashed border-gray-600 rounded-md p-8 flex flex-col items-center justify-center">
                  <div className="bg-transparent p-2 rounded-full mb-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
                      />
                    </svg>
                  </div>
                  <p className="text-purple-500 font-medium">Upload a file</p>
                  <p className="text-xs text-gray-400">or drag and drop</p>
                  <p className="text-xs text-gray-400 mt-1">
                    PDF, PNG, JPG, JPEG (MAX 30MB)
                  </p>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Description
              </label>
              <textarea className="w-full px-4 py-2 bg-[#2c2e3e] border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 h-24" />
            </div>

            <div className="flex justify-between mt-6">
              <button
                onClick={() => setShowDetailForm(false)}
                className="cursor-pointer text-sm text-gray-300 hover:underline"
              >
                Back
              </button>
              <button
                onClick={onContinue}
                className="cursor-pointer bg-purple-600 hover:bg-purple-700 text-white px-5 py-2 rounded-md"
              >
                Continue
              </button>
            </div>
          </div>
        );
      case "Event Organizers":
        return (
          <div className="mt-12 space-y-6">
            <h2 className="text-xl font-semibold">
              Details to personalize call handling for your event business
            </h2>

            <div>
              <label className="block text-sm font-medium mb-1">
                Number of Event Managers
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 bg-[#2c2e3e] border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Business Operating Hours
              </label>
              <div className="bg-[#2c2e3e] p-4 rounded-md">
                <p className="text-sm mb-2">Operating Hours</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <FilterButton
                    label="All Days"
                    active={dayFilter === "All Days"}
                    onClick={() => handleDayFilter("All Days")}
                  />
                  <FilterButton
                    label="Weekdays"
                    active={dayFilter === "Weekdays"}
                    onClick={() => handleDayFilter("Weekdays")}
                  />
                  <FilterButton
                    label="Weekend"
                    active={dayFilter === "Weekend"}
                    onClick={() => handleDayFilter("Weekend")}
                  />
                  <FilterButton
                    label="Clear"
                    active={dayFilter === "Clear"}
                    onClick={() => handleDayFilter("Clear")}
                  />
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"].map(
                    (day) => (
                      <DayButton
                        key={day}
                        day={day}
                        selected={selectedDays.includes(day)}
                        onClick={() => handleDayClick(day)}
                      />
                    )
                  )}
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm mb-1">From</p>
                    <TimeSelector />
                  </div>
                  <div>
                    <p className="text-sm mb-1">To</p>
                    <TimeSelector />
                  </div>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Upload Event Documents (e.g., packages, portfolios)
              </label>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Group Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 bg-[#2c2e3e] border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 mb-4"
                />
              </div>

              <div>
                <p className="text-sm mb-1">Files (10 Max)</p>
                <div className="border border-dashed border-gray-600 rounded-md p-8 flex flex-col items-center justify-center">
                  <div className="bg-transparent p-2 rounded-full mb-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
                      />
                    </svg>
                  </div>
                  <p className="text-purple-500 font-medium">Upload a file</p>
                  <p className="text-xs text-gray-400">or drag and drop</p>
                  <p className="text-xs text-gray-400 mt-1">
                    PDF, PNG, JPG, JPEG (MAX 30MB)
                  </p>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Description
              </label>
              <textarea className="w-full px-4 py-2 bg-[#2c2e3e] border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 h-24" />
            </div>

            <div className="flex justify-between mt-6">
              <button
                onClick={() => setShowDetailForm(false)}
                className="cursor-pointer text-sm text-gray-300 hover:underline"
              >
                Back
              </button>
              <button
                onClick={onContinue}
                className="cursor-pointer bg-purple-600 hover:bg-purple-700 text-white px-5 py-2 rounded-md"
              >
                Continue
              </button>
            </div>
          </div>
        );
      case "Others":
        return (
          <div className="mt-12 space-y-6">
            <h2 className="text-xl font-semibold">
              Details to personalize call handling for your business
            </h2>

            <div>
              <label className="block text-sm font-medium mb-1">
                Number of Team Members
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 bg-[#2c2e3e] border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Business Operating Hours
              </label>
              <div className="bg-[#2c2e3e] p-4 rounded-md">
                <p className="text-sm mb-2">Operating Hours</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <FilterButton
                    label="All Days"
                    active={dayFilter === "All Days"}
                    onClick={() => handleDayFilter("All Days")}
                  />
                  <FilterButton
                    label="Weekdays"
                    active={dayFilter === "Weekdays"}
                    onClick={() => handleDayFilter("Weekdays")}
                  />
                  <FilterButton
                    label="Weekend"
                    active={dayFilter === "Weekend"}
                    onClick={() => handleDayFilter("Weekend")}
                  />
                  <FilterButton
                    label="Clear"
                    active={dayFilter === "Clear"}
                    onClick={() => handleDayFilter("Clear")}
                  />
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"].map(
                    (day) => (
                      <DayButton
                        key={day}
                        day={day}
                        selected={selectedDays.includes(day)}
                        onClick={() => handleDayClick(day)}
                      />
                    )
                  )}
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm mb-1">From</p>
                    <TimeSelector />
                  </div>
                  <div>
                    <p className="text-sm mb-1">To</p>
                    <TimeSelector />
                  </div>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Upload Business Documents
              </label>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Group Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 bg-[#2c2e3e] border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 mb-4"
                />
              </div>

              <div>
                <p className="text-sm mb-1">Files (10 Max)</p>
                <div className="border border-dashed border-gray-600 rounded-md p-8 flex flex-col items-center justify-center">
                  <div className="bg-transparent p-2 rounded-full mb-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
                      />
                    </svg>
                  </div>
                  <p className="text-purple-500 font-medium">Upload a file</p>
                  <p className="text-xs text-gray-400">or drag and drop</p>
                  <p className="text-xs text-gray-400 mt-1">
                    PDF, PNG, JPG, JPEG (MAX 30MB)
                  </p>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Description
              </label>
              <textarea className="w-full px-4 py-2 bg-[#2c2e3e] border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 h-24" />
            </div>

            <div className="flex justify-between mt-6">
              <button
                onClick={() => setShowDetailForm(false)}
                className="cursor-pointer text-sm text-gray-300 hover:underline"
              >
                Back
              </button>
              <button
                onClick={onContinue}
                className="cursor-pointer bg-purple-600 hover:bg-purple-700 text-white px-5 py-2 rounded-md"
              >
                Continue
              </button>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="p-6 text-white">
      <h1 className="text-3xl font-bold">Hello, I'm AgukenAI.</h1>
      <p className="mt-2">
        I'm an AI Agent helping you handle reception and support calls using
        GenAI-based phone call automation.
      </p>

      <div className="bg-gray-800 p-4 mt-6 rounded-lg">
        <p className="text-gray-300">Nice to meet you, I'm</p>
        <p className="text-xl font-semibold">{name}</p>
      </div>

      {!showDetailForm ? (
        <>
          <h2 className="text-xl mt-8 font-semibold">
            Lovely to meet you {name}.
          </h2>
          <p className="mt-2">
            Please select the type of business you want to use receptionAI for:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            {categories.map((cat, idx) => (
              <div
                key={idx}
                className={`bg-gray-800 py-8 px-4 rounded-lg hover:ring-2 cursor-pointer ${
                  selectedCategory === cat.title ? "ring-2 ring-purple-500" : ""
                }`}
                onClick={() => setSelectedCategory(cat.title)}
              >
                <div className="flex justify-center">
                  <div className="bg-gray-300 p-2 rounded-full text-black">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                      />
                    </svg>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-center my-4">
                  {cat.title}
                </h3>
                <p className="text-sm text-gray-400">{cat.desc}</p>
              </div>
            ))}
          </div>

          {selectedCategory && (
            <div className="flex justify-between mt-6">
              <button
                className="cursor-pointer text-sm text-gray-400"
                onClick={() => setSelectedCategory(null)}
              >
                Back
              </button>
              <button
                onClick={handleContinue}
                className="cursor-pointer bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-700"
              >
                Continue
              </button>
            </div>
          )}
        </>
      ) : (
        renderDetailForm()
      )}

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
          <div className="bg-[#1a1c2c] text-white p-6 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-lg font-semibold mb-4">
              Let's start with general details about your {selectedCategory}
            </h2>

            {renderModalFields()}

            <div className="flex justify-between items-center mt-6">
              <button
                onClick={() => setShowModal(false)}
                className="cursor-pointer text-sm text-gray-300 hover:underline"
              >
                Back
              </button>
              <button
                onClick={handleSubmitDetails}
                className="cursor-pointer bg-purple-600 hover:bg-purple-700 text-white px-5 py-2 rounded-md"
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const InputField = ({
  label,
  bg = "dark",
  type = "text",
  options = [],
  className = "",
}) => {
  const bgColor =
    bg === "light" ? "bg-white text-black" : "bg-[#2c2e3e] text-white";

  return (
    <div className="mb-4">
      <label className="block text-sm font-medium mb-1">{label}</label>
      {type === "select" ? (
        <select
          className={`w-full px-4 py-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 ${bgColor} ${className}`}
        >
          <option value="">Select team size</option>
          {options.map((opt, idx) => (
            <option key={idx} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      ) : (
        <input
          type="text"
          className={`w-full px-4 py-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 ${bgColor} ${className}`}
        />
      )}
    </div>
  );
};

const FilterButton = ({ label, active, onClick }) => {
  return (
    <button
      className={`px-3 py-1 text-xs rounded-md ${
        active ? "bg-purple-600 text-white" : "bg-gray-700 text-gray-300"
      }`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

const DayButton = ({ day, selected, onClick }) => {
  return (
    <button
      className={`w-10 h-10 rounded-full flex items-center justify-center ${
        selected ? "bg-purple-600 text-white" : "bg-gray-800 text-gray-300"
      }`}
      onClick={onClick}
    >
      {day}
    </button>
  );
};

const TimeSelector = () => {
  return (
    <div className="relative">
      <div className="flex items-center justify-between px-4 py-2 bg-[#1a1c2c] border border-gray-600 rounded-md text-gray-300">
        <span>Select time...</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
      </div>
    </div>
  );
};

export default BusinessSelection;
