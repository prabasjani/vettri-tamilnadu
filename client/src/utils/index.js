export const navItems = [
  {
    name: "Dashboard",
    path: "/dashboard",
  },
  {
    name: "Complaints",
    path: "/complaints",
  },
  {
    name: "Services",
    path: "/services",
  },
  {
    name: "Notifications",
    path: "/notifications",
  },
  {
    name: "Profile",
    path: "/profile",
  },
  {
    name: "Settings",
    path: "/settings",
  },
];

export const capitalizeWords = (text) => {
  return text
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
};

// export const quickAct = [
//   {
//     title: "Report Corruption Safely",
//     desc: "Submit complaints anonymously against bribery and corruption with secure and transparent reporting.",
//     path: "/complaints/new",
//     img: TVK_img1,
//   },
//   {
//     title: "Government Services Without Middlemen",
//     desc: "Access essential government services directly with no agents, no hidden charges, and no delays.",
//     path: "/services/apply",
//     img: TVK_img2,
//   },
//   {
//     title: "Track Every Step Transparently",
//     desc: "Monitor your applications in real time with clear status updates and a fully transparent process.",
//     path: "/services/track",
//     img: TVK_img3,
//   },
// ];

export const complaintCategories = [
  "Corruption",
  "Roads",
  "Water Supply",
  "Electricity",
  "Garbage",
  "Drainage",
  "Government Delay",
  "Public Safety",
  "Others",
];

export const complaintPriorities = ["Low", "Medium", "High", "Emergency"];

// const electionWinners2026 = [
//   {
//     constituencyNo: Number,
//     constituencyName: String,
//     districtName: String,
//     candidateName: String,
//     partyAffiliation: String, // Tamilaga vettri kazhagam
//   }
// ]
