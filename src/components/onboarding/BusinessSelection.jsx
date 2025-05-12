// import { useState, useRef, useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// const BusinessSelection = ({ name, onContinue }) => {
//   // const router = useRouter();
//   const navigate = useNavigate();
//   const [selectedCategory, setSelectedCategory] = useState(null);
//   const [showModal, setShowModal] = useState(false);
//   const [showDetailForm, setShowDetailForm] = useState(false);
//   const [showCallRoutingSetup, setShowCallRoutingSetup] = useState(false);
//   const [selectedDays, setSelectedDays] = useState([]);
//   const [dayFilter, setDayFilter] = useState("All Days");
//   const [phoneNumber, setPhoneNumber] = useState("");
//   const [description, setDescription] = useState("");

//   // Time picker states
//   const [showFromTimePicker, setShowFromTimePicker] = useState(false);
//   const [showToTimePicker, setShowToTimePicker] = useState(false);
//   const [fromTime, setFromTime] = useState({
//     hour: "12",
//     minute: "00",
//     period: "AM",
//   });
//   const [toTime, setToTime] = useState({
//     hour: "12",
//     minute: "00",
//     period: "PM",
//   });

//   const fromTimePickerRef = useRef(null);
//   const toTimePickerRef = useRef(null);

//   // Close time pickers when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (
//         fromTimePickerRef.current &&
//         !fromTimePickerRef.current.contains(event.target)
//       ) {
//         setShowFromTimePicker(false);
//       }
//       if (
//         toTimePickerRef.current &&
//         !toTimePickerRef.current.contains(event.target)
//       ) {
//         setShowToTimePicker(false);
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

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
//     setShowDetailForm(true);
//   };

//   const handleDetailFormContinue = () => {
//     setShowDetailForm(false);
//     setShowCallRoutingSetup(true);
//   };

//   const handleCallRoutingContinue = () => {
//     // Navigate to dashboard
//     // router.push("/dashboard");
//     navigate("/dashboard");
//   };

//   const handleDayClick = (day) => {
//     if (selectedDays.includes(day)) {
//       setSelectedDays(selectedDays.filter((d) => d !== day));
//     } else {
//       setSelectedDays([...selectedDays, day]);
//     }
//   };

//   const handleDayFilter = (filter) => {
//     setDayFilter(filter);

//     if (filter === "All Days") {
//       setSelectedDays(["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"]);
//     } else if (filter === "Weekdays") {
//       setSelectedDays(["MON", "TUE", "WED", "THU", "FRI"]);
//     } else if (filter === "Weekend") {
//       setSelectedDays(["SAT", "SUN"]);
//     } else if (filter === "Clear") {
//       setSelectedDays([]);
//     }
//   };

//   const formatTime = (timeObj) => {
//     return `${timeObj.hour}:${timeObj.minute} ${timeObj.period}`;
//   };

//   const handleTimeChange = (type, field, value) => {
//     if (type === "from") {
//       setFromTime({ ...fromTime, [field]: value });
//     } else {
//       setToTime({ ...toTime, [field]: value });
//     }
//   };

//   const clearTime = (type) => {
//     if (type === "from") {
//       setFromTime({ hour: "12", minute: "00", period: "AM" });
//     } else {
//       setToTime({ hour: "12", minute: "00", period: "PM" });
//     }
//   };

//   const renderModalFields = () => {
//     switch (selectedCategory) {
//       case "Clinics":
//         return (
//           <>
//             <InputField label="Clinic Name" bg="dark" />
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

//   const renderDetailForm = () => {
//     switch (selectedCategory) {
//       case "Clinics":
//         return (
//           <div className="mt-12 space-y-6">
//             <h2 className="text-xl font-semibold">
//               Details to personalize call handling for your clinic
//             </h2>

//             <div>
//               <label className="block text-sm font-medium mb-1">
//                 Number of Doctors
//               </label>
//               <input
//                 type="text"
//                 className="w-full px-4 py-2 bg-[#2c2e3e] border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-medium mb-1">
//                 Reception Operating Hours
//               </label>
//               <div className="bg-[#2c2e3e] p-4 rounded-md">
//                 <p className="text-sm mb-2">Operating Hours</p>
//                 <div className="flex flex-wrap gap-2 mb-4">
//                   <FilterButton
//                     label="All Days"
//                     active={dayFilter === "All Days"}
//                     onClick={() => handleDayFilter("All Days")}
//                   />
//                   <FilterButton
//                     label="Weekdays"
//                     active={dayFilter === "Weekdays"}
//                     onClick={() => handleDayFilter("Weekdays")}
//                   />
//                   <FilterButton
//                     label="Weekend"
//                     active={dayFilter === "Weekend"}
//                     onClick={() => handleDayFilter("Weekend")}
//                   />
//                   <FilterButton
//                     label="Clear"
//                     active={dayFilter === "Clear"}
//                     onClick={() => handleDayFilter("Clear")}
//                   />
//                 </div>

//                 <div className="flex flex-wrap gap-2 mb-4">
//                   {["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"].map(
//                     (day) => (
//                       <DayButton
//                         key={day}
//                         day={day}
//                         selected={selectedDays.includes(day)}
//                         onClick={() => handleDayClick(day)}
//                       />
//                     )
//                   )}
//                 </div>

//                 <div className="grid grid-cols-2 gap-4">
//                   <div>
//                     <p className="cursor-pointer text-sm mb-1">From</p>
//                     <div className="relative" ref={fromTimePickerRef}>
//                       <button
//                         className="cursor-pointer flex items-center justify-between w-full px-4 py-2 bg-[#1a1c2c] border border-gray-600 rounded-md text-gray-300"
//                         onClick={() =>
//                           setShowFromTimePicker(!showFromTimePicker)
//                         }
//                       >
//                         <span>
//                           {fromTime.hour === ""
//                             ? "Select time..."
//                             : formatTime(fromTime)}
//                         </span>
//                         <svg
//                           xmlns="http://www.w3.org/2000/svg"
//                           fill="none"
//                           viewBox="0 0 24 24"
//                           strokeWidth="1.5"
//                           stroke="currentColor"
//                           className="size-4"
//                         >
//                           <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
//                           />
//                         </svg>
//                       </button>

//                       {showFromTimePicker && (
//                         <div className="absolute z-10 mt-1 w-full">
//                           <TimePicker
//                             time={fromTime}
//                             onChange={(field, value) =>
//                               handleTimeChange("from", field, value)
//                             }
//                             onClear={() => clearTime("from")}
//                             onCancel={() => setShowFromTimePicker(false)}
//                             onOk={() => setShowFromTimePicker(false)}
//                           />
//                         </div>
//                       )}
//                     </div>
//                   </div>
//                   <div>
//                     <p className="cursor-pointer text-sm mb-1">To</p>
//                     <div className="relative" ref={toTimePickerRef}>
//                       <button
//                         className="cursor-pointer flex items-center justify-between w-full px-4 py-2 bg-[#1a1c2c] border border-gray-600 rounded-md text-gray-300"
//                         onClick={() => setShowToTimePicker(!showToTimePicker)}
//                       >
//                         <span>
//                           {toTime.hour === ""
//                             ? "Select time..."
//                             : formatTime(toTime)}
//                         </span>
//                         <svg
//                           xmlns="http://www.w3.org/2000/svg"
//                           fill="none"
//                           viewBox="0 0 24 24"
//                           strokeWidth="1.5"
//                           stroke="currentColor"
//                           className="size-4"
//                         >
//                           <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
//                           />
//                         </svg>
//                       </button>

//                       {showToTimePicker && (
//                         <div className="absolute z-10 mt-1 w-full">
//                           <TimePicker
//                             time={toTime}
//                             onChange={(field, value) =>
//                               handleTimeChange("to", field, value)
//                             }
//                             onClear={() => clearTime("to")}
//                             onCancel={() => setShowToTimePicker(false)}
//                             onOk={() => setShowToTimePicker(false)}
//                           />
//                         </div>
//                       )}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div>
//               <label className="block text-sm font-medium mb-1">
//                 Upload Clinic Documents (e.g., forms, brochures)
//               </label>
//               <div>
//                 <label className="block text-sm font-medium mb-1">
//                   Group Name
//                 </label>
//                 <input
//                   type="text"
//                   className="w-full px-4 py-2 bg-[#2c2e3e] border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 mb-4"
//                 />
//               </div>

//               <div>
//                 <p className="text-sm mb-1">Files (10 Max)</p>
//                 <div className="border border-dashed border-gray-600 rounded-md p-8 flex flex-col items-center justify-center">
//                   <div className="bg-transparent p-2 rounded-full mb-2">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       strokeWidth="1.5"
//                       stroke="currentColor"
//                       className="size-6"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
//                       />
//                     </svg>
//                   </div>
//                   <p className="text-purple-500 font-medium">Upload a file</p>
//                   <p className="text-xs text-gray-400">or drag and drop</p>
//                   <p className="text-xs text-gray-400 mt-1">
//                     PDF, PNG, JPG, JPEG (MAX 30MB)
//                   </p>
//                 </div>
//               </div>
//             </div>

//             <div>
//               <label className="block text-sm font-medium mb-1">
//                 Description
//               </label>
//               <textarea className="w-full px-4 py-2 bg-[#2c2e3e] border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 h-24" />
//             </div>

//             <div className="flex justify-between mt-6">
//               <button
//                 onClick={() => setShowDetailForm(false)}
//                 className="cursor-pointer text-sm text-gray-300 hover:underline"
//               >
//                 Back
//               </button>
//               <button
//                 onClick={handleDetailFormContinue}
//                 className="cursor-pointer bg-purple-600 hover:bg-purple-700 text-white px-5 py-2 rounded-md"
//               >
//                 Continue
//               </button>
//             </div>
//           </div>
//         );
//       case "Hotels":
//         return (
//           <div className="mt-12 space-y-6">
//             <h2 className="text-xl font-semibold">
//               Details to personalize call handling for your hotel
//             </h2>

//             <div>
//               <label className="block text-sm font-medium mb-1">
//                 Number of Rooms
//               </label>
//               <input
//                 type="text"
//                 className="w-full px-4 py-2 bg-[#2c2e3e] border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-medium mb-1">
//                 Reception Operating Hours
//               </label>
//               <div className="bg-[#2c2e3e] p-4 rounded-md">
//                 <p className="text-sm mb-2">Operating Hours</p>
//                 <div className="flex flex-wrap gap-2 mb-4">
//                   <FilterButton
//                     label="All Days"
//                     active={dayFilter === "All Days"}
//                     onClick={() => handleDayFilter("All Days")}
//                   />
//                   <FilterButton
//                     label="Weekdays"
//                     active={dayFilter === "Weekdays"}
//                     onClick={() => handleDayFilter("Weekdays")}
//                   />
//                   <FilterButton
//                     label="Weekend"
//                     active={dayFilter === "Weekend"}
//                     onClick={() => handleDayFilter("Weekend")}
//                   />
//                   <FilterButton
//                     label="Clear"
//                     active={dayFilter === "Clear"}
//                     onClick={() => handleDayFilter("Clear")}
//                   />
//                 </div>

//                 <div className="flex flex-wrap gap-2 mb-4">
//                   {["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"].map(
//                     (day) => (
//                       <DayButton
//                         key={day}
//                         day={day}
//                         selected={selectedDays.includes(day)}
//                         onClick={() => handleDayClick(day)}
//                       />
//                     )
//                   )}
//                 </div>

//                 <div className="grid grid-cols-2 gap-4">
//                   <div>
//                     <p className="text-sm mb-1">From</p>
//                     <div className="relative" ref={fromTimePickerRef}>
//                       <button
//                         className="flex items-center justify-between w-full px-4 py-2 bg-[#1a1c2c] border border-gray-600 rounded-md text-gray-300"
//                         onClick={() =>
//                           setShowFromTimePicker(!showFromTimePicker)
//                         }
//                       >
//                         <span>
//                           {fromTime.hour === ""
//                             ? "Select time..."
//                             : formatTime(fromTime)}
//                         </span>
//                         <svg
//                           xmlns="http://www.w3.org/2000/svg"
//                           fill="none"
//                           viewBox="0 0 24 24"
//                           strokeWidth="1.5"
//                           stroke="currentColor"
//                           className="size-4"
//                         >
//                           <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
//                           />
//                         </svg>
//                       </button>

//                       {showFromTimePicker && (
//                         <div className="absolute z-10 mt-1 w-full">
//                           <TimePicker
//                             time={fromTime}
//                             onChange={(field, value) =>
//                               handleTimeChange("from", field, value)
//                             }
//                             onClear={() => clearTime("from")}
//                             onCancel={() => setShowFromTimePicker(false)}
//                             onOk={() => setShowFromTimePicker(false)}
//                           />
//                         </div>
//                       )}
//                     </div>
//                   </div>
//                   <div>
//                     <p className="text-sm mb-1">To</p>
//                     <div className="relative" ref={toTimePickerRef}>
//                       <button
//                         className="flex items-center justify-between w-full px-4 py-2 bg-[#1a1c2c] border border-gray-600 rounded-md text-gray-300"
//                         onClick={() => setShowToTimePicker(!showToTimePicker)}
//                       >
//                         <span>
//                           {toTime.hour === ""
//                             ? "Select time..."
//                             : formatTime(toTime)}
//                         </span>
//                         <svg
//                           xmlns="http://www.w3.org/2000/svg"
//                           fill="none"
//                           viewBox="0 0 24 24"
//                           strokeWidth="1.5"
//                           stroke="currentColor"
//                           className="size-4"
//                         >
//                           <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
//                           />
//                         </svg>
//                       </button>

//                       {showToTimePicker && (
//                         <div className="absolute z-10 mt-1 w-full">
//                           <TimePicker
//                             time={toTime}
//                             onChange={(field, value) =>
//                               handleTimeChange("to", field, value)
//                             }
//                             onClear={() => clearTime("to")}
//                             onCancel={() => setShowToTimePicker(false)}
//                             onOk={() => setShowToTimePicker(false)}
//                           />
//                         </div>
//                       )}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div>
//               <label className="block text-sm font-medium mb-1">
//                 Upload Hotel Documents (e.g., brochures, menus)
//               </label>
//               <div>
//                 <label className="block text-sm font-medium mb-1">
//                   Group Name
//                 </label>
//                 <input
//                   type="text"
//                   className="w-full px-4 py-2 bg-[#2c2e3e] border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 mb-4"
//                 />
//               </div>

//               <div>
//                 <p className="text-sm mb-1">Files (10 Max)</p>
//                 <div className="border border-dashed border-gray-600 rounded-md p-8 flex flex-col items-center justify-center">
//                   <div className="bg-transparent p-2 rounded-full mb-2">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       strokeWidth="1.5"
//                       stroke="currentColor"
//                       className="size-6"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
//                       />
//                     </svg>
//                   </div>
//                   <p className="text-purple-500 font-medium">Upload a file</p>
//                   <p className="text-xs text-gray-400">or drag and drop</p>
//                   <p className="text-xs text-gray-400 mt-1">
//                     PDF, PNG, JPG, JPEG (MAX 30MB)
//                   </p>
//                 </div>
//               </div>
//             </div>

//             <div>
//               <label className="block text-sm font-medium mb-1">
//                 Description
//               </label>
//               <textarea className="w-full px-4 py-2 bg-[#2c2e3e] border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 h-24" />
//             </div>

//             <div className="flex justify-between mt-6">
//               <button
//                 onClick={() => setShowDetailForm(false)}
//                 className="cursor-pointer text-sm text-gray-300 hover:underline"
//               >
//                 Back
//               </button>
//               <button
//                 onClick={handleDetailFormContinue}
//                 className="cursor-pointer bg-purple-600 hover:bg-purple-700 text-white px-5 py-2 rounded-md"
//               >
//                 Continue
//               </button>
//             </div>
//           </div>
//         );
//       case "Event Organizers":
//         return (
//           <div className="mt-12 space-y-6">
//             <h2 className="text-xl font-semibold">
//               Details to personalize call handling for your event business
//             </h2>

//             <div>
//               <label className="block text-sm font-medium mb-1">
//                 Number of Event Managers
//               </label>
//               <input
//                 type="text"
//                 className="w-full px-4 py-2 bg-[#2c2e3e] border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-medium mb-1">
//                 Business Operating Hours
//               </label>
//               <div className="bg-[#2c2e3e] p-4 rounded-md">
//                 <p className="text-sm mb-2">Operating Hours</p>
//                 <div className="flex flex-wrap gap-2 mb-4">
//                   <FilterButton
//                     label="All Days"
//                     active={dayFilter === "All Days"}
//                     onClick={() => handleDayFilter("All Days")}
//                   />
//                   <FilterButton
//                     label="Weekdays"
//                     active={dayFilter === "Weekdays"}
//                     onClick={() => handleDayFilter("Weekdays")}
//                   />
//                   <FilterButton
//                     label="Weekend"
//                     active={dayFilter === "Weekend"}
//                     onClick={() => handleDayFilter("Weekend")}
//                   />
//                   <FilterButton
//                     label="Clear"
//                     active={dayFilter === "Clear"}
//                     onClick={() => handleDayFilter("Clear")}
//                   />
//                 </div>

//                 <div className="flex flex-wrap gap-2 mb-4">
//                   {["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"].map(
//                     (day) => (
//                       <DayButton
//                         key={day}
//                         day={day}
//                         selected={selectedDays.includes(day)}
//                         onClick={() => handleDayClick(day)}
//                       />
//                     )
//                   )}
//                 </div>

//                 <div className="grid grid-cols-2 gap-4">
//                   <div>
//                     <p className="text-sm mb-1">From</p>
//                     <div className="relative" ref={fromTimePickerRef}>
//                       <button
//                         className="flex items-center justify-between w-full px-4 py-2 bg-[#1a1c2c] border border-gray-600 rounded-md text-gray-300"
//                         onClick={() =>
//                           setShowFromTimePicker(!showFromTimePicker)
//                         }
//                       >
//                         <span>
//                           {fromTime.hour === ""
//                             ? "Select time..."
//                             : formatTime(fromTime)}
//                         </span>
//                         <svg
//                           xmlns="http://www.w3.org/2000/svg"
//                           fill="none"
//                           viewBox="0 0 24 24"
//                           strokeWidth="1.5"
//                           stroke="currentColor"
//                           className="size-4"
//                         >
//                           <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
//                           />
//                         </svg>
//                       </button>

//                       {showFromTimePicker && (
//                         <div className="absolute z-10 mt-1 w-full">
//                           <TimePicker
//                             time={fromTime}
//                             onChange={(field, value) =>
//                               handleTimeChange("from", field, value)
//                             }
//                             onClear={() => clearTime("from")}
//                             onCancel={() => setShowFromTimePicker(false)}
//                             onOk={() => setShowFromTimePicker(false)}
//                           />
//                         </div>
//                       )}
//                     </div>
//                   </div>
//                   <div>
//                     <p className="text-sm mb-1">To</p>
//                     <div className="relative" ref={toTimePickerRef}>
//                       <button
//                         className="flex items-center justify-between w-full px-4 py-2 bg-[#1a1c2c] border border-gray-600 rounded-md text-gray-300"
//                         onClick={() => setShowToTimePicker(!showToTimePicker)}
//                       >
//                         <span>
//                           {toTime.hour === ""
//                             ? "Select time..."
//                             : formatTime(toTime)}
//                         </span>
//                         <svg
//                           xmlns="http://www.w3.org/2000/svg"
//                           fill="none"
//                           viewBox="0 0 24 24"
//                           strokeWidth="1.5"
//                           stroke="currentColor"
//                           className="size-4"
//                         >
//                           <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
//                           />
//                         </svg>
//                       </button>

//                       {showToTimePicker && (
//                         <div className="absolute z-10 mt-1 w-full">
//                           <TimePicker
//                             time={toTime}
//                             onChange={(field, value) =>
//                               handleTimeChange("to", field, value)
//                             }
//                             onClear={() => clearTime("to")}
//                             onCancel={() => setShowToTimePicker(false)}
//                             onOk={() => setShowToTimePicker(false)}
//                           />
//                         </div>
//                       )}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div>
//               <label className="block text-sm font-medium mb-1">
//                 Upload Event Documents (e.g., packages, portfolios)
//               </label>
//               <div>
//                 <label className="block text-sm font-medium mb-1">
//                   Group Name
//                 </label>
//                 <input
//                   type="text"
//                   className="w-full px-4 py-2 bg-[#2c2e3e] border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 mb-4"
//                 />
//               </div>

//               <div>
//                 <p className="text-sm mb-1">Files (10 Max)</p>
//                 <div className="border border-dashed border-gray-600 rounded-md p-8 flex flex-col items-center justify-center">
//                   <div className="bg-transparent p-2 rounded-full mb-2">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       strokeWidth="1.5"
//                       stroke="currentColor"
//                       className="size-6"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
//                       />
//                     </svg>
//                   </div>
//                   <p className="text-purple-500 font-medium">Upload a file</p>
//                   <p className="text-xs text-gray-400">or drag and drop</p>
//                   <p className="text-xs text-gray-400 mt-1">
//                     PDF, PNG, JPG, JPEG (MAX 30MB)
//                   </p>
//                 </div>
//               </div>
//             </div>

//             <div>
//               <label className="block text-sm font-medium mb-1">
//                 Description
//               </label>
//               <textarea className="w-full px-4 py-2 bg-[#2c2e3e] border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 h-24" />
//             </div>

//             <div className="flex justify-between mt-6">
//               <button
//                 onClick={() => setShowDetailForm(false)}
//                 className="cursor-pointer text-sm text-gray-300 hover:underline"
//               >
//                 Back
//               </button>
//               <button
//                 onClick={handleDetailFormContinue}
//                 className="cursor-pointer bg-purple-600 hover:bg-purple-700 text-white px-5 py-2 rounded-md"
//               >
//                 Continue
//               </button>
//             </div>
//           </div>
//         );
//       case "Others":
//         return (
//           <div className="space-y-6">
//             <h2 className="mt-12 text-xl font-semibold">
//               Details to personalize call handling for your business
//             </h2>

//             <div>
//               <label className="block text-sm font-medium mb-1">
//                 Number of Team Members
//               </label>
//               <input
//                 type="text"
//                 className="w-full px-4 py-2 bg-[#2c2e3e] border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-medium mb-1">
//                 Business Operating Hours
//               </label>
//               <div className="bg-[#2c2e3e] p-4 rounded-md">
//                 <p className="text-sm mb-2">Operating Hours</p>
//                 <div className="flex flex-wrap gap-2 mb-4">
//                   <FilterButton
//                     label="All Days"
//                     active={dayFilter === "All Days"}
//                     onClick={() => handleDayFilter("All Days")}
//                   />
//                   <FilterButton
//                     label="Weekdays"
//                     active={dayFilter === "Weekdays"}
//                     onClick={() => handleDayFilter("Weekdays")}
//                   />
//                   <FilterButton
//                     label="Weekend"
//                     active={dayFilter === "Weekend"}
//                     onClick={() => handleDayFilter("Weekend")}
//                   />
//                   <FilterButton
//                     label="Clear"
//                     active={dayFilter === "Clear"}
//                     onClick={() => handleDayFilter("Clear")}
//                   />
//                 </div>

//                 <div className="flex flex-wrap gap-2 mb-4">
//                   {["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"].map(
//                     (day) => (
//                       <DayButton
//                         key={day}
//                         day={day}
//                         selected={selectedDays.includes(day)}
//                         onClick={() => handleDayClick(day)}
//                       />
//                     )
//                   )}
//                 </div>

//                 <div className="grid grid-cols-2 gap-4">
//                   <div>
//                     <p className="text-sm mb-1">From</p>
//                     <div className="relative" ref={fromTimePickerRef}>
//                       <button
//                         className="flex items-center justify-between w-full px-4 py-2 bg-[#1a1c2c] border border-gray-600 rounded-md text-gray-300"
//                         onClick={() =>
//                           setShowFromTimePicker(!showFromTimePicker)
//                         }
//                       >
//                         <span>
//                           {fromTime.hour === ""
//                             ? "Select time..."
//                             : formatTime(fromTime)}
//                         </span>
//                         <svg
//                           xmlns="http://www.w3.org/2000/svg"
//                           fill="none"
//                           viewBox="0 0 24 24"
//                           strokeWidth="1.5"
//                           stroke="currentColor"
//                           className="size-4"
//                         >
//                           <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
//                           />
//                         </svg>
//                       </button>

//                       {showFromTimePicker && (
//                         <div className="absolute z-10 mt-1 w-full">
//                           <TimePicker
//                             time={fromTime}
//                             onChange={(field, value) =>
//                               handleTimeChange("from", field, value)
//                             }
//                             onClear={() => clearTime("from")}
//                             onCancel={() => setShowFromTimePicker(false)}
//                             onOk={() => setShowFromTimePicker(false)}
//                           />
//                         </div>
//                       )}
//                     </div>
//                   </div>
//                   <div>
//                     <p className="text-sm mb-1">To</p>
//                     <div className="relative" ref={toTimePickerRef}>
//                       <button
//                         className="flex items-center justify-between w-full px-4 py-2 bg-[#1a1c2c] border border-gray-600 rounded-md text-gray-300"
//                         onClick={() => setShowToTimePicker(!showToTimePicker)}
//                       >
//                         <span>
//                           {toTime.hour === ""
//                             ? "Select time..."
//                             : formatTime(toTime)}
//                         </span>
//                         <svg
//                           xmlns="http://www.w3.org/2000/svg"
//                           fill="none"
//                           viewBox="0 0 24 24"
//                           strokeWidth="1.5"
//                           stroke="currentColor"
//                           className="size-4"
//                         >
//                           <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
//                           />
//                         </svg>
//                       </button>

//                       {showToTimePicker && (
//                         <div className="absolute z-10 mt-1 w-full">
//                           <TimePicker
//                             time={toTime}
//                             onChange={(field, value) =>
//                               handleTimeChange("to", field, value)
//                             }
//                             onClear={() => clearTime("to")}
//                             onCancel={() => setShowToTimePicker(false)}
//                             onOk={() => setShowToTimePicker(false)}
//                           />
//                         </div>
//                       )}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div>
//               <label className="block text-sm font-medium mb-1">
//                 Upload Business Documents
//               </label>
//               <div>
//                 <label className="block text-sm font-medium mb-1">
//                   Group Name
//                 </label>
//                 <input
//                   type="text"
//                   className="w-full px-4 py-2 bg-[#2c2e3e] border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 mb-4"
//                 />
//               </div>

//               <div>
//                 <p className="text-sm mb-1">Files (10 Max)</p>
//                 <div className="border border-dashed border-gray-600 rounded-md p-8 flex flex-col items-center justify-center">
//                   <div className="bg-transparent p-2 rounded-full mb-2">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       strokeWidth="1.5"
//                       stroke="currentColor"
//                       className="size-6"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
//                       />
//                     </svg>
//                   </div>
//                   <p className="text-purple-500 font-medium">Upload a file</p>
//                   <p className="text-xs text-gray-400">or drag and drop</p>
//                   <p className="text-xs text-gray-400 mt-1">
//                     PDF, PNG, JPG, JPEG (MAX 30MB)
//                   </p>
//                 </div>
//               </div>
//             </div>

//             <div>
//               <label className="block text-sm font-medium mb-1">
//                 Description
//               </label>
//               <textarea className="w-full px-4 py-2 bg-[#2c2e3e] border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 h-24" />
//             </div>

//             <div className="flex justify-between mt-6">
//               <button
//                 onClick={() => setShowDetailForm(false)}
//                 className="cursor-pointer text-sm text-gray-300 hover:underline"
//               >
//                 Back
//               </button>
//               <button
//                 onClick={handleDetailFormContinue}
//                 className="cursor-pointer bg-purple-600 hover:bg-purple-700 text-white px-5 py-2 rounded-md"
//               >
//                 Continue
//               </button>
//             </div>
//           </div>
//         );
//       default:
//         return null;
//     }
//   };

//   // Header section that remains consistent across all views
//   const renderHeader = () => (
//     <>
//       <h1 className="text-3xl font-bold">Hello, I'm AgukenAI.</h1>
//       <p className="mt-2">
//         I'm an AI Agent helping you handle reception and support calls using
//         GenAI-based phone call automation.
//       </p>

//       <div className="bg-gray-800 p-4 mt-6 rounded-lg">
//         <p className="text-gray-300">Nice to meet you, I'm</p>
//         <p className="text-xl font-semibold">{name}</p>
//       </div>
//     </>
//   );

//   // Call Routing Setup screen
//   const renderCallRoutingSetup = () => (
//     <div className="space-y-6">
//       <h2 className="text-xl font-semibold mt-8">Call Routing Setup</h2>

//       <div className="bg-[#1a1c2c] p-6 rounded-lg">
//         <div className="mb-6">
//           <label className="block text-sm font-medium mb-1">
//             Phone Numbers to Forward Calls To{" "}
//             <span className="text-red-500">*</span>
//           </label>
//           <div className="mb-1">
//             <label className="block text-sm mb-1">Phone Number</label>
//             <div className="flex">
//               <div className="relative">
//                 <button className="flex items-center justify-between px-4 py-2 bg-[#2c2e3e] border border-gray-600 rounded-l-md text-white">
//                   <span className="flex items-center">
//                     <span className="mr-1">IN</span>
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       strokeWidth="1.5"
//                       stroke="currentColor"
//                       className="size-4"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         d="m19.5 8.25-7.5 7.5-7.5-7.5"
//                       />
//                     </svg>
//                   </span>
//                 </button>
//               </div>
//               <div className="flex-1">
//                 <div className="flex items-center">
//                   <span className="px-3 py-2 bg-[#2c2e3e] border-t border-b border-gray-600 text-gray-300">
//                     +91
//                   </span>
//                   <input
//                     type="text"
//                     placeholder="Enter phone number"
//                     value={phoneNumber}
//                     onChange={(e) => setPhoneNumber(e.target.value)}
//                     className="w-full px-4 py-2 bg-[#2c2e3e] border border-gray-600 rounded-r-md focus:outline-none focus:ring-2 focus:ring-purple-600 text-white"
//                   />
//                 </div>
//               </div>
//             </div>
//             <p className="text-xs text-gray-400 mt-1">
//               Format: +91 xxxxx xxxxx
//             </p>
//           </div>
//         </div>

//         <div className="mb-6">
//           <label className="block text-sm font-medium mb-1">Description</label>
//           <textarea
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//             className="w-full px-4 py-2 bg-[#2c2e3e] border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 h-24 text-white"
//           />
//         </div>

//         <button className="bg-black text-white px-4 py-2 rounded-md">
//           Add
//         </button>

//         <div className="flex justify-between mt-6">
//           <button
//             onClick={() => setShowCallRoutingSetup(false)}
//             className="cursor-pointer text-sm text-gray-300 hover:underline"
//           >
//             Back
//           </button>
//           <button
//             onClick={handleCallRoutingContinue}
//             className="cursor-pointer bg-purple-600 hover:bg-purple-700 text-white px-5 py-2 rounded-md"
//           >
//             Continue
//           </button>
//         </div>
//       </div>
//     </div>
//   );

//   return (
//     <div className="p-6 text-white bg-[#0a0b14] min-h-screen">
//       {renderHeader()}

//       {!showDetailForm && !showCallRoutingSetup ? (
//         <>
//           <h2 className="text-xl mt-8 font-semibold">
//             Lovely to meet you {name}.
//           </h2>
//           <p className="mt-2">
//             Please select the type of business you want to use receptionAI for:
//           </p>

//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
//             {categories.map((cat, idx) => (
//               <div
//                 key={idx}
//                 className={`bg-gray-800 py-8 px-4 rounded-lg hover:ring-2 cursor-pointer ${
//                   selectedCategory === cat.title ? "ring-2 ring-purple-500" : ""
//                 }`}
//                 onClick={() => setSelectedCategory(cat.title)}
//               >
//                 <div className="flex justify-center">
//                   <div className="bg-gray-300 p-2 rounded-full text-black">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       strokeWidth="1.5"
//                       stroke="currentColor"
//                       className="size-6"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
//                       />
//                     </svg>
//                   </div>
//                 </div>
//                 <h3 className="text-lg font-bold text-center my-4">
//                   {cat.title}
//                 </h3>
//                 <p className="text-sm text-gray-400">{cat.desc}</p>
//               </div>
//             ))}
//           </div>

//           {selectedCategory && (
//             <div className="flex justify-between mt-6">
//               <button
//                 className="cursor-pointer text-sm text-gray-400"
//                 onClick={() => setSelectedCategory(null)}
//               >
//                 Back
//               </button>
//               <button
//                 onClick={handleContinue}
//                 className="cursor-pointer bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-700"
//               >
//                 Continue
//               </button>
//             </div>
//           )}
//         </>
//       ) : showDetailForm ? (
//         renderDetailForm()
//       ) : (
//         renderCallRoutingSetup()
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

// const InputField = ({
//   label,
//   bg = "dark",
//   type = "text",
//   options = [],
//   className = "",
// }) => {
//   const bgColor =
//     bg === "light" ? "bg-white text-black" : "bg-[#2c2e3e] text-white";

//   return (
//     <div className="mb-4">
//       <label className="block text-sm font-medium mb-1">{label}</label>
//       {type === "select" ? (
//         <select
//           className={`w-full px-4 py-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 ${bgColor} ${className}`}
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
//           className={`w-full px-4 py-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 ${bgColor} ${className}`}
//         />
//       )}
//     </div>
//   );
// };

// const FilterButton = ({ label, active, onClick }) => {
//   return (
//     <button
//       className={`cursor-pointer px-3 py-1 text-xs rounded-md ${
//         active ? "bg-purple-600 text-white" : "bg-gray-700 text-gray-300"
//       }`}
//       onClick={onClick}
//     >
//       {label}
//     </button>
//   );
// };

// const DayButton = ({ day, selected, onClick }) => {
//   return (
//     <button
//       className={`cursor-pointer w-10 h-10 rounded-full flex items-center justify-center ${
//         selected ? "bg-purple-600 text-white" : "bg-gray-800 text-gray-300"
//       }`}
//       onClick={onClick}
//     >
//       {day}
//     </button>
//   );
// };

// const TimePicker = ({ time, onChange, onClear, onCancel, onOk }) => {
//   const hours = Array.from({ length: 12 }, (_, i) =>
//     String(i + 1).padStart(1, "0")
//   );
//   const minutes = ["00", "15", "30", "45"];

//   return (
//     <div className="bg-[#1a1c2c] rounded-lg shadow-lg overflow-hidden">
//       <div className="p-4">
//         <p className="text-center text-sm mb-2">Enter time</p>

//         <div className="flex items-center justify-center gap-2 mb-4">
//           <div className="bg-purple-700 p-3 rounded-lg w-16 text-center">
//             <p className="text-xl font-bold">{time.hour}</p>
//             <p className="text-xs text-gray-300">Hour</p>
//           </div>

//           <div className="text-xl font-bold">:</div>

//           <div className="bg-gray-800 p-3 rounded-lg w-16 text-center">
//             <p className="text-xl font-bold">{time.minute}</p>
//             <p className="text-xs text-gray-300">Minute</p>
//           </div>

//           <div className="flex flex-col gap-1 ml-2">
//             <button
//               className={`cursor-pointer px-4 py-1 rounded-md text-sm ${
//                 time.period === "AM"
//                   ? "bg-pink-500 text-white"
//                   : "bg-gray-700 text-gray-300"
//               }`}
//               onClick={() => onChange("period", "AM")}
//             >
//               AM
//             </button>
//             <button
//               className={`cursor-pointer px-4 py-1 rounded-md text-sm ${
//                 time.period === "PM"
//                   ? "bg-pink-500 text-white"
//                   : "bg-gray-700 text-gray-300"
//               }`}
//               onClick={() => onChange("period", "PM")}
//             >
//               PM
//             </button>
//           </div>
//         </div>

//         <div className="mb-4">
//           <p className="text-xs mb-1">Hour</p>
//           <div className="grid grid-cols-4 gap-2">
//             {hours.map((hour) => (
//               <button
//                 key={hour}
//                 className={`cursor-pointer p-2 rounded ${
//                   time.hour === hour
//                     ? "cursor-pointer bg-purple-700 text-white"
//                     : "cursor-pointer bg-gray-800 text-gray-300"
//                 }`}
//                 onClick={() => onChange("hour", hour)}
//               >
//                 {hour}
//               </button>
//             ))}
//           </div>
//         </div>

//         <div className="mb-4">
//           <p className="text-xs mb-1">Minute</p>
//           <div className="grid grid-cols-4 gap-2">
//             {minutes.map((minute) => (
//               <button
//                 key={minute}
//                 className={`cursor-pointer p-2 rounded ${
//                   time.minute === minute
//                     ? "cursor-pointer bg-purple-700 text-white"
//                     : "cursor-pointer bg-gray-800 text-gray-300"
//                 }`}
//                 onClick={() => onChange("minute", minute)}
//               >
//                 {minute}
//               </button>
//             ))}
//           </div>
//         </div>

//         <div className="flex items-center justify-between">
//           <button
//             className="cursor-pointer flex items-center text-sm text-gray-400"
//             onClick={onCancel}
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               strokeWidth="1.5"
//               stroke="currentColor"
//               className="size-4 mr-1"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M6 18L18 6M6 6l12 12"
//               />
//             </svg>
//             Cancel
//           </button>

//           <button
//             className="cursor-pointer bg-gray-700 px-3 py-1 rounded text-sm"
//             onClick={onClear}
//           >
//             Clear
//           </button>

//           <button
//             className="cursor-pointer bg-purple-600 px-3 py-1 rounded text-sm"
//             onClick={onOk}
//           >
//             OK
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BusinessSelection;

import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const BusinessSelection = ({ name, onContinue }) => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showDetailForm, setShowDetailForm] = useState(false);
  const [showCallRoutingSetup, setShowCallRoutingSetup] = useState(false);
  const [selectedDays, setSelectedDays] = useState([]);
  const [dayFilter, setDayFilter] = useState("All Days");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [description, setDescription] = useState("");
  const [phoneNumbers, setPhoneNumbers] = useState([]);
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [groupName, setGroupName] = useState("");
  const [detailDescription, setDetailDescription] = useState("");
  const [isDragging, setIsDragging] = useState(false);

  // File input ref
  const fileInputRef = useRef(null);

  // Time picker states
  const [showFromTimePicker, setShowFromTimePicker] = useState(false);
  const [showToTimePicker, setShowToTimePicker] = useState(false);
  const [fromTime, setFromTime] = useState({
    hour: "12",
    minute: "00",
    period: "AM",
  });
  const [toTime, setToTime] = useState({
    hour: "12",
    minute: "00",
    period: "PM",
  });

  const fromTimePickerRef = useRef(null);
  const toTimePickerRef = useRef(null);

  // Close time pickers when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        fromTimePickerRef.current &&
        !fromTimePickerRef.current.contains(event.target)
      ) {
        setShowFromTimePicker(false);
      }
      if (
        toTimePickerRef.current &&
        !toTimePickerRef.current.contains(event.target)
      ) {
        setShowToTimePicker(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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

  const handleDetailFormContinue = () => {
    setShowDetailForm(false);
    setShowCallRoutingSetup(true);
  };

  const handleCallRoutingContinue = () => {
    // Navigate to dashboard
    navigate("/dashboard");
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

  const formatTime = (timeObj) => {
    return `${timeObj.hour}:${timeObj.minute} ${timeObj.period}`;
  };

  const handleTimeChange = (type, field, value) => {
    if (type === "from") {
      setFromTime({ ...fromTime, [field]: value });
    } else {
      setToTime({ ...toTime, [field]: value });
    }
  };

  const clearTime = (type) => {
    if (type === "from") {
      setFromTime({ hour: "12", minute: "00", period: "AM" });
    } else {
      setToTime({ hour: "12", minute: "00", period: "PM" });
    }
  };

  // File upload handlers
  const handleFileUploadClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    if (files.length > 0) {
      addFiles(files);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);

    const files = Array.from(e.dataTransfer.files);
    if (files.length > 0) {
      addFiles(files);
    }
  };

  const addFiles = (files) => {
    // Check if adding these files would exceed the 10 file limit
    if (uploadedFiles.length + files.length > 10) {
      alert("You can only upload a maximum of 10 files.");
      return;
    }

    // Check file types and sizes
    const validFileTypes = [
      "application/pdf",
      "image/png",
      "image/jpeg",
      "image/jpg",
    ];
    const maxSize = 30 * 1024 * 1024; // 30MB

    const validFiles = files.filter((file) => {
      if (!validFileTypes.includes(file.type)) {
        alert(
          `File type not supported: ${file.name}. Only PDF, PNG, JPG, and JPEG files are allowed.`
        );
        return false;
      }

      if (file.size > maxSize) {
        alert(`File too large: ${file.name}. Maximum file size is 30MB.`);
        return false;
      }

      return true;
    });

    if (validFiles.length > 0) {
      setUploadedFiles((prev) => [...prev, ...validFiles]);
    }
  };

  const removeFile = (index) => {
    setUploadedFiles((prev) => prev.filter((_, i) => i !== index));
  };

  // Add phone number to the list
  const addPhoneNumber = () => {
    if (!phoneNumber.trim()) {
      alert("Please enter a phone number.");
      return;
    }

    // Simple validation for Indian phone numbers
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phoneNumber.trim())) {
      alert("Please enter a valid 10-digit phone number.");
      return;
    }

    const newPhoneEntry = {
      number: `+91 ${phoneNumber}`,
      description: description,
    };

    setPhoneNumbers([...phoneNumbers, newPhoneEntry]);
    setPhoneNumber("");
    setDescription("");
  };

  // Remove phone number from the list
  const removePhoneNumber = (index) => {
    setPhoneNumbers(phoneNumbers.filter((_, i) => i !== index));
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
          <div className="space-y-6">
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
                    <div className="relative" ref={fromTimePickerRef}>
                      <button
                        className="flex items-center justify-between w-full px-4 py-2 bg-[#1a1c2c] border border-gray-600 rounded-md text-gray-300 cursor-pointer hover:bg-[#252738]"
                        onClick={() =>
                          setShowFromTimePicker(!showFromTimePicker)
                        }
                      >
                        <span>
                          {fromTime.hour === ""
                            ? "Select time..."
                            : formatTime(fromTime)}
                        </span>
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
                      </button>

                      {showFromTimePicker && (
                        <div className="absolute z-10 mt-1 w-full">
                          <TimePicker
                            time={fromTime}
                            onChange={(field, value) =>
                              handleTimeChange("from", field, value)
                            }
                            onClear={() => clearTime("from")}
                            onCancel={() => setShowFromTimePicker(false)}
                            onOk={() => setShowFromTimePicker(false)}
                          />
                        </div>
                      )}
                    </div>
                  </div>
                  <div>
                    <p className="text-sm mb-1">To</p>
                    <div className="relative" ref={toTimePickerRef}>
                      <button
                        className="flex items-center justify-between w-full px-4 py-2 bg-[#1a1c2c] border border-gray-600 rounded-md text-gray-300 cursor-pointer hover:bg-[#252738]"
                        onClick={() => setShowToTimePicker(!showToTimePicker)}
                      >
                        <span>
                          {toTime.hour === ""
                            ? "Select time..."
                            : formatTime(toTime)}
                        </span>
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
                      </button>

                      {showToTimePicker && (
                        <div className="absolute z-10 mt-1 w-full">
                          <TimePicker
                            time={toTime}
                            onChange={(field, value) =>
                              handleTimeChange("to", field, value)
                            }
                            onClear={() => clearTime("to")}
                            onCancel={() => setShowToTimePicker(false)}
                            onOk={() => setShowToTimePicker(false)}
                          />
                        </div>
                      )}
                    </div>
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
                  value={groupName}
                  onChange={(e) => setGroupName(e.target.value)}
                  className="w-full px-4 py-2 bg-[#2c2e3e] border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 mb-4"
                />
              </div>

              <div>
                <p className="text-sm mb-1">
                  Files ({uploadedFiles.length}/10)
                </p>
                <div
                  className={`border border-dashed ${
                    isDragging ? "border-purple-500" : "border-gray-600"
                  } rounded-md p-8 flex flex-col items-center justify-center cursor-pointer hover:border-purple-500 transition-colors`}
                  onClick={handleFileUploadClick}
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                >
                  <input
                    type="file"
                    ref={fileInputRef}
                    className="hidden"
                    onChange={handleFileChange}
                    multiple
                    accept=".pdf,.png,.jpg,.jpeg"
                  />
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

                {/* Display uploaded files */}
                {uploadedFiles.length > 0 && (
                  <div className="mt-4 space-y-2">
                    <p className="text-sm font-medium">Uploaded Files:</p>
                    <div className="bg-[#1a1c2c] rounded-md p-2">
                      {uploadedFiles.map((file, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between py-2 px-3 hover:bg-[#252738] rounded-md"
                        >
                          <div className="flex items-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              className="size-5 mr-2 text-gray-400"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                              />
                            </svg>
                            <span className="text-sm truncate max-w-[200px]">
                              {file.name}
                            </span>
                          </div>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              removeFile(index);
                            }}
                            className="text-gray-400 hover:text-red-500"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              className="size-5"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                              />
                            </svg>
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Description
              </label>
              <textarea
                value={detailDescription}
                onChange={(e) => setDetailDescription(e.target.value)}
                className="w-full px-4 py-2 bg-[#2c2e3e] border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 h-24"
              />
            </div>

            <div className="flex justify-between mt-6">
              <button
                onClick={() => setShowDetailForm(false)}
                className="cursor-pointer text-sm text-gray-300 hover:underline"
              >
                Back
              </button>
              <button
                onClick={handleDetailFormContinue}
                className="cursor-pointer bg-purple-600 hover:bg-purple-700 text-white px-5 py-2 rounded-md"
              >
                Continue
              </button>
            </div>
          </div>
        );
      case "Hotels":
        return (
          <div className="space-y-6">
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
                    <div className="relative" ref={fromTimePickerRef}>
                      <button
                        className="flex items-center justify-between w-full px-4 py-2 bg-[#1a1c2c] border border-gray-600 rounded-md text-gray-300 cursor-pointer hover:bg-[#252738]"
                        onClick={() =>
                          setShowFromTimePicker(!showFromTimePicker)
                        }
                      >
                        <span>
                          {fromTime.hour === ""
                            ? "Select time..."
                            : formatTime(fromTime)}
                        </span>
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
                      </button>

                      {showFromTimePicker && (
                        <div className="absolute z-10 mt-1 w-full">
                          <TimePicker
                            time={fromTime}
                            onChange={(field, value) =>
                              handleTimeChange("from", field, value)
                            }
                            onClear={() => clearTime("from")}
                            onCancel={() => setShowFromTimePicker(false)}
                            onOk={() => setShowFromTimePicker(false)}
                          />
                        </div>
                      )}
                    </div>
                  </div>
                  <div>
                    <p className="text-sm mb-1">To</p>
                    <div className="relative" ref={toTimePickerRef}>
                      <button
                        className="flex items-center justify-between w-full px-4 py-2 bg-[#1a1c2c] border border-gray-600 rounded-md text-gray-300 cursor-pointer hover:bg-[#252738]"
                        onClick={() => setShowToTimePicker(!showToTimePicker)}
                      >
                        <span>
                          {toTime.hour === ""
                            ? "Select time..."
                            : formatTime(toTime)}
                        </span>
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
                      </button>

                      {showToTimePicker && (
                        <div className="absolute z-10 mt-1 w-full">
                          <TimePicker
                            time={toTime}
                            onChange={(field, value) =>
                              handleTimeChange("to", field, value)
                            }
                            onClear={() => clearTime("to")}
                            onCancel={() => setShowToTimePicker(false)}
                            onOk={() => setShowToTimePicker(false)}
                          />
                        </div>
                      )}
                    </div>
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
                  value={groupName}
                  onChange={(e) => setGroupName(e.target.value)}
                  className="w-full px-4 py-2 bg-[#2c2e3e] border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 mb-4"
                />
              </div>

              <div>
                <p className="text-sm mb-1">
                  Files ({uploadedFiles.length}/10)
                </p>
                <div
                  className={`border border-dashed ${
                    isDragging ? "border-purple-500" : "border-gray-600"
                  } rounded-md p-8 flex flex-col items-center justify-center cursor-pointer hover:border-purple-500 transition-colors`}
                  onClick={handleFileUploadClick}
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                >
                  <input
                    type="file"
                    ref={fileInputRef}
                    className="hidden"
                    onChange={handleFileChange}
                    multiple
                    accept=".pdf,.png,.jpg,.jpeg"
                  />
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

                {/* Display uploaded files */}
                {uploadedFiles.length > 0 && (
                  <div className="mt-4 space-y-2">
                    <p className="text-sm font-medium">Uploaded Files:</p>
                    <div className="bg-[#1a1c2c] rounded-md p-2">
                      {uploadedFiles.map((file, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between py-2 px-3 hover:bg-[#252738] rounded-md"
                        >
                          <div className="flex items-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              className="size-5 mr-2 text-gray-400"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                              />
                            </svg>
                            <span className="text-sm truncate max-w-[200px]">
                              {file.name}
                            </span>
                          </div>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              removeFile(index);
                            }}
                            className="text-gray-400 hover:text-red-500"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              className="size-5"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                              />
                            </svg>
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Description
              </label>
              <textarea
                value={detailDescription}
                onChange={(e) => setDetailDescription(e.target.value)}
                className="w-full px-4 py-2 bg-[#2c2e3e] border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 h-24"
              />
            </div>

            <div className="flex justify-between mt-6">
              <button
                onClick={() => setShowDetailForm(false)}
                className="cursor-pointer text-sm text-gray-300 hover:underline"
              >
                Back
              </button>
              <button
                onClick={handleDetailFormContinue}
                className="cursor-pointer bg-purple-600 hover:bg-purple-700 text-white px-5 py-2 rounded-md"
              >
                Continue
              </button>
            </div>
          </div>
        );
      case "Event Organizers":
        return (
          <div className="space-y-6">
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
                    <div className="relative" ref={fromTimePickerRef}>
                      <button
                        className="flex items-center justify-between w-full px-4 py-2 bg-[#1a1c2c] border border-gray-600 rounded-md text-gray-300 cursor-pointer hover:bg-[#252738]"
                        onClick={() =>
                          setShowFromTimePicker(!showFromTimePicker)
                        }
                      >
                        <span>
                          {fromTime.hour === ""
                            ? "Select time..."
                            : formatTime(fromTime)}
                        </span>
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
                      </button>

                      {showFromTimePicker && (
                        <div className="absolute z-10 mt-1 w-full">
                          <TimePicker
                            time={fromTime}
                            onChange={(field, value) =>
                              handleTimeChange("from", field, value)
                            }
                            onClear={() => clearTime("from")}
                            onCancel={() => setShowFromTimePicker(false)}
                            onOk={() => setShowFromTimePicker(false)}
                          />
                        </div>
                      )}
                    </div>
                  </div>
                  <div>
                    <p className="text-sm mb-1">To</p>
                    <div className="relative" ref={toTimePickerRef}>
                      <button
                        className="flex items-center justify-between w-full px-4 py-2 bg-[#1a1c2c] border border-gray-600 rounded-md text-gray-300 cursor-pointer hover:bg-[#252738]"
                        onClick={() => setShowToTimePicker(!showToTimePicker)}
                      >
                        <span>
                          {toTime.hour === ""
                            ? "Select time..."
                            : formatTime(toTime)}
                        </span>
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
                      </button>

                      {showToTimePicker && (
                        <div className="absolute z-10 mt-1 w-full">
                          <TimePicker
                            time={toTime}
                            onChange={(field, value) =>
                              handleTimeChange("to", field, value)
                            }
                            onClear={() => clearTime("to")}
                            onCancel={() => setShowToTimePicker(false)}
                            onOk={() => setShowToTimePicker(false)}
                          />
                        </div>
                      )}
                    </div>
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
                  value={groupName}
                  onChange={(e) => setGroupName(e.target.value)}
                  className="w-full px-4 py-2 bg-[#2c2e3e] border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 mb-4"
                />
              </div>

              <div>
                <p className="text-sm mb-1">
                  Files ({uploadedFiles.length}/10)
                </p>
                <div
                  className={`border border-dashed ${
                    isDragging ? "border-purple-500" : "border-gray-600"
                  } rounded-md p-8 flex flex-col items-center justify-center cursor-pointer hover:border-purple-500 transition-colors`}
                  onClick={handleFileUploadClick}
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                >
                  <input
                    type="file"
                    ref={fileInputRef}
                    className="hidden"
                    onChange={handleFileChange}
                    multiple
                    accept=".pdf,.png,.jpg,.jpeg"
                  />
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

                {/* Display uploaded files */}
                {uploadedFiles.length > 0 && (
                  <div className="mt-4 space-y-2">
                    <p className="text-sm font-medium">Uploaded Files:</p>
                    <div className="bg-[#1a1c2c] rounded-md p-2">
                      {uploadedFiles.map((file, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between py-2 px-3 hover:bg-[#252738] rounded-md"
                        >
                          <div className="flex items-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              className="size-5 mr-2 text-gray-400"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                              />
                            </svg>
                            <span className="text-sm truncate max-w-[200px]">
                              {file.name}
                            </span>
                          </div>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              removeFile(index);
                            }}
                            className="text-gray-400 hover:text-red-500"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              className="size-5"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                              />
                            </svg>
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Description
              </label>
              <textarea
                value={detailDescription}
                onChange={(e) => setDetailDescription(e.target.value)}
                className="w-full px-4 py-2 bg-[#2c2e3e] border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 h-24"
              />
            </div>

            <div className="flex justify-between mt-6">
              <button
                onClick={() => setShowDetailForm(false)}
                className="cursor-pointer text-sm text-gray-300 hover:underline"
              >
                Back
              </button>
              <button
                onClick={handleDetailFormContinue}
                className="cursor-pointer bg-purple-600 hover:bg-purple-700 text-white px-5 py-2 rounded-md"
              >
                Continue
              </button>
            </div>
          </div>
        );
      case "Others":
        return (
          <div className="space-y-6">
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
                    <div className="relative" ref={fromTimePickerRef}>
                      <button
                        className="flex items-center justify-between w-full px-4 py-2 bg-[#1a1c2c] border border-gray-600 rounded-md text-gray-300 cursor-pointer hover:bg-[#252738]"
                        onClick={() =>
                          setShowFromTimePicker(!showFromTimePicker)
                        }
                      >
                        <span>
                          {fromTime.hour === ""
                            ? "Select time..."
                            : formatTime(fromTime)}
                        </span>
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
                      </button>

                      {showFromTimePicker && (
                        <div className="absolute z-10 mt-1 w-full">
                          <TimePicker
                            time={fromTime}
                            onChange={(field, value) =>
                              handleTimeChange("from", field, value)
                            }
                            onClear={() => clearTime("from")}
                            onCancel={() => setShowFromTimePicker(false)}
                            onOk={() => setShowFromTimePicker(false)}
                          />
                        </div>
                      )}
                    </div>
                  </div>
                  <div>
                    <p className="text-sm mb-1">To</p>
                    <div className="relative" ref={toTimePickerRef}>
                      <button
                        className="flex items-center justify-between w-full px-4 py-2 bg-[#1a1c2c] border border-gray-600 rounded-md text-gray-300 cursor-pointer hover:bg-[#252738]"
                        onClick={() => setShowToTimePicker(!showToTimePicker)}
                      >
                        <span>
                          {toTime.hour === ""
                            ? "Select time..."
                            : formatTime(toTime)}
                        </span>
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
                      </button>

                      {showToTimePicker && (
                        <div className="absolute z-10 mt-1 w-full">
                          <TimePicker
                            time={toTime}
                            onChange={(field, value) =>
                              handleTimeChange("to", field, value)
                            }
                            onClear={() => clearTime("to")}
                            onCancel={() => setShowToTimePicker(false)}
                            onOk={() => setShowToTimePicker(false)}
                          />
                        </div>
                      )}
                    </div>
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
                  value={groupName}
                  onChange={(e) => setGroupName(e.target.value)}
                  className="w-full px-4 py-2 bg-[#2c2e3e] border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 mb-4"
                />
              </div>

              <div>
                <p className="text-sm mb-1">
                  Files ({uploadedFiles.length}/10)
                </p>
                <div
                  className={`border border-dashed ${
                    isDragging ? "border-purple-500" : "border-gray-600"
                  } rounded-md p-8 flex flex-col items-center justify-center cursor-pointer hover:border-purple-500 transition-colors`}
                  onClick={handleFileUploadClick}
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                >
                  <input
                    type="file"
                    ref={fileInputRef}
                    className="hidden"
                    onChange={handleFileChange}
                    multiple
                    accept=".pdf,.png,.jpg,.jpeg"
                  />
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

                {/* Display uploaded files */}
                {uploadedFiles.length > 0 && (
                  <div className="mt-4 space-y-2">
                    <p className="text-sm font-medium">Uploaded Files:</p>
                    <div className="bg-[#1a1c2c] rounded-md p-2">
                      {uploadedFiles.map((file, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between py-2 px-3 hover:bg-[#252738] rounded-md"
                        >
                          <div className="flex items-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              className="size-5 mr-2 text-gray-400"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                              />
                            </svg>
                            <span className="text-sm truncate max-w-[200px]">
                              {file.name}
                            </span>
                          </div>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              removeFile(index);
                            }}
                            className="text-gray-400 hover:text-red-500"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              className="size-5"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                              />
                            </svg>
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Description
              </label>
              <textarea
                value={detailDescription}
                onChange={(e) => setDetailDescription(e.target.value)}
                className="w-full px-4 py-2 bg-[#2c2e3e] border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 h-24"
              />
            </div>

            <div className="flex justify-between mt-6">
              <button
                onClick={() => setShowDetailForm(false)}
                className="cursor-pointer text-sm text-gray-300 hover:underline"
              >
                Back
              </button>
              <button
                onClick={handleDetailFormContinue}
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

  // Header section that remains consistent across all views
  const renderHeader = () => (
    <>
      <h1 className="text-3xl font-bold">Hello, I'm AgukenAI.</h1>
      <p className="mt-2">
        I'm an AI Agent helping you handle reception and support calls using
        GenAI-based phone call automation.
      </p>

      <div className="bg-gray-800 p-4 mt-6 rounded-lg">
        <p className="text-gray-300">Nice to meet you, I'm</p>
        <p className="text-xl font-semibold">{name}</p>
      </div>
    </>
  );

  // Call Routing Setup screen
  const renderCallRoutingSetup = () => (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold mt-8">Call Routing Setup</h2>

      <div className="bg-[#1a1c2c] p-6 rounded-lg">
        <div className="mb-6">
          <label className="block text-sm font-medium mb-1">
            Phone Numbers to Forward Calls To{" "}
            <span className="text-red-500">*</span>
          </label>
          <div className="mb-1">
            <label className="block text-sm mb-1">Phone Number</label>
            <div className="flex">
              <div className="relative">
                <button className="flex items-center justify-between px-4 py-2 bg-[#2c2e3e] border border-gray-600 rounded-l-md text-white cursor-pointer">
                  <span className="flex items-center">
                    <span className="mr-1">IN</span>
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
                        d="m19.5 8.25-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </span>
                </button>
              </div>
              <div className="flex-1">
                <div className="flex items-center">
                  <span className="px-3 py-2 bg-[#2c2e3e] border-t border-b border-gray-600 text-gray-300">
                    +91
                  </span>
                  <input
                    type="text"
                    placeholder="Enter phone number"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="w-full px-4 py-2 bg-[#2c2e3e] border border-gray-600 rounded-r-md focus:outline-none focus:ring-2 focus:ring-purple-600 text-white"
                  />
                </div>
              </div>
            </div>
            <p className="text-xs text-gray-400 mt-1">
              Format: +91 xxxxx xxxxx
            </p>
          </div>
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium mb-1">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full px-4 py-2 bg-[#2c2e3e] border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 h-24 text-white"
          />
        </div>

        <button
          onClick={addPhoneNumber}
          className="bg-black text-white px-4 py-2 rounded-md cursor-pointer hover:bg-gray-900"
        >
          Add
        </button>

        {/* Display added phone numbers */}
        {phoneNumbers.length > 0 && (
          <div className="mt-6 space-y-2">
            <p className="text-sm font-medium">Added Phone Numbers:</p>
            <div className="bg-[#252738] rounded-md p-2">
              {phoneNumbers.map((entry, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between py-2 px-3 hover:bg-[#2c2e3e] rounded-md"
                >
                  <div>
                    <p className="text-sm font-medium">{entry.number}</p>
                    {entry.description && (
                      <p className="text-xs text-gray-400">
                        {entry.description}
                      </p>
                    )}
                  </div>
                  <button
                    onClick={() => removePhoneNumber(index)}
                    className="text-gray-400 hover:text-red-500"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                      />
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="flex justify-between mt-6">
          <button
            onClick={() => setShowCallRoutingSetup(false)}
            className="cursor-pointer text-sm text-gray-300 hover:underline"
          >
            Back
          </button>
          <button
            onClick={handleCallRoutingContinue}
            className="cursor-pointer bg-purple-600 hover:bg-purple-700 text-white px-5 py-2 rounded-md"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="p-6 text-white bg-[#0a0b14] min-h-screen">
      {renderHeader()}

      {!showDetailForm && !showCallRoutingSetup ? (
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
      ) : showDetailForm ? (
        renderDetailForm()
      ) : (
        renderCallRoutingSetup()
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
          className={`w-full px-4 py-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 ${bgColor} ${className} cursor-pointer`}
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
      className={`px-3 py-1 text-xs rounded-md cursor-pointer ${
        active
          ? "bg-purple-600 text-white"
          : "bg-gray-700 text-gray-300 hover:bg-gray-600"
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
      className={`w-10 h-10 rounded-full flex items-center justify-center cursor-pointer ${
        selected
          ? "bg-purple-600 text-white"
          : "bg-gray-800 text-gray-300 hover:bg-gray-700"
      }`}
      onClick={onClick}
    >
      {day}
    </button>
  );
};

const TimePicker = ({ time, onChange, onClear, onCancel, onOk }) => {
  const hours = Array.from({ length: 12 }, (_, i) =>
    String(i + 1).padStart(1, "0")
  );
  const minutes = ["00", "15", "30", "45"];

  return (
    <div className="bg-[#1a1c2c] rounded-lg shadow-lg overflow-hidden">
      <div className="p-4">
        <p className="text-center text-sm mb-2">Enter time</p>

        <div className="flex items-center justify-center gap-2 mb-4">
          <div className="bg-purple-700 p-3 rounded-lg w-16 text-center">
            <p className="text-xl font-bold">{time.hour}</p>
            <p className="text-xs text-gray-300">Hour</p>
          </div>

          <div className="text-xl font-bold">:</div>

          <div className="bg-gray-800 p-3 rounded-lg w-16 text-center">
            <p className="text-xl font-bold">{time.minute}</p>
            <p className="text-xs text-gray-300">Minute</p>
          </div>

          <div className="flex flex-col gap-1 ml-2">
            <button
              className={`px-4 py-1 rounded-md text-sm cursor-pointer ${
                time.period === "AM"
                  ? "bg-pink-500 text-white"
                  : "bg-gray-700 text-gray-300 hover:bg-gray-600"
              }`}
              onClick={() => onChange("period", "AM")}
            >
              AM
            </button>
            <button
              className={`px-4 py-1 rounded-md text-sm cursor-pointer ${
                time.period === "PM"
                  ? "bg-pink-500 text-white"
                  : "bg-gray-700 text-gray-300 hover:bg-gray-600"
              }`}
              onClick={() => onChange("period", "PM")}
            >
              PM
            </button>
          </div>
        </div>

        <div className="mb-4">
          <p className="text-xs mb-1">Hour</p>
          <div className="grid grid-cols-4 gap-2">
            {hours.map((hour) => (
              <button
                key={hour}
                className={`p-2 rounded cursor-pointer ${
                  time.hour === hour
                    ? "bg-purple-700 text-white"
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                }`}
                onClick={() => onChange("hour", hour)}
              >
                {hour}
              </button>
            ))}
          </div>
        </div>

        <div className="mb-4">
          <p className="text-xs mb-1">Minute</p>
          <div className="grid grid-cols-4 gap-2">
            {minutes.map((minute) => (
              <button
                key={minute}
                className={`p-2 rounded cursor-pointer ${
                  time.minute === minute
                    ? "bg-purple-700 text-white"
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                }`}
                onClick={() => onChange("minute", minute)}
              >
                {minute}
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between">
          <button
            className="flex items-center text-sm text-gray-400 cursor-pointer hover:text-gray-300"
            onClick={onCancel}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-4 mr-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
            Cancel
          </button>

          <button
            className="bg-gray-700 px-3 py-1 rounded text-sm cursor-pointer hover:bg-gray-600"
            onClick={onClear}
          >
            Clear
          </button>

          <button
            className="bg-purple-600 px-3 py-1 rounded text-sm cursor-pointer hover:bg-purple-700"
            onClick={onOk}
          >
            OK
          </button>
        </div>
      </div>
    </div>
  );
};

export default BusinessSelection;
