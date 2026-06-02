import { AlertTriangle, Users, HandHeart } from "lucide-react";

export const features = [
  {
    id: 1,
    title: "Transparent System for Complaints and Tracking",
    desc: "Report issues, monitor progress in real-time, and ensure accountability at every stage of the procecss",
    points: [
      "Real-time complaint status updates",
      "Track progress at every stage",
      "No hidden actions or delays",
    ],
  },
  {
    id: 2,
    title: "Share your ideas to Shape the Future of TN",
    desc: "Contribute to Urban planing, education reforms, local governance through proposals",
    points: [
      "Submit ideas directly to government",
      "Vote and support community ideas",
      "Help improve policies and services",
    ],
  },
  {
    id: 3,
    title: "No Middleman. Direct Access",
    desc: "Apply, Track and receive your documents without delays, hidden process, or middleman involvement",
    points: [
      "Connect directly with officials",
      "Faster response and resolution",
      "No agents or extra charges",
    ],
  },
];

export const navItems = [
  {
    title: "Dashboard",
    path: "/dashboard",
  },
  {
    title: "Complaints",
    path: "/complaints",
  },
  {
    title: "Services",
    path: "/services",
  },
  {
    title: "Updates",
    path: "/updates",
  },
  {
    title: "Community",
    path: "/community",
  },
  {
    title: "Profile",
    path: "/profile",
  },
  {
    title: "Settings",
    path: "/settings",
  },
];

export const INTERESTS = [
  "education",
  "health",
  "transport",
  "corruption",
  "infrastructure",
  "employment",
  "agriculture",
  "women_welfare",
  "youth_development",
  "digital_governance",
];

export const IDENTITY_TYPES = ["aadhaar", "pan", "voterId"];

export const COMPLAINT_CATEGORY_OPTIONS = [
  {
    value: "ROAD",
    label: "Road Issues",
  },
  {
    value: "WATER",
    label: "Water Supply",
  },
  {
    value: "DRAINAGE",
    label: "Drainage",
  },
  {
    value: "STREET_LIGHT",
    label: "Street Light",
  },
  {
    value: "GARBAGE",
    label: "Garbage Collection",
  },
  {
    value: "ELECTRICITY",
    label: "Electricity",
  },
  {
    value: "PUBLIC_SAFETY",
    label: "Public Safety",
  },
  {
    value: "CORRUPTION",
    label: "Corruption",
  },
  {
    value: "OTHER",
    label: "Other",
  },
];

export const QUICK_ACTIONS = [
  {
    title: "Report Civic Issues",
    description:
      "Raise complaints about roads, drainage, street lights, garbage collection and other public infrastructure concerns.",
    buttonText: "Create Complaint",
    link: "/complaints/create",
    icon: AlertTriangle,
  },

  {
    title: "Strengthen Your Community",
    description:
      "Bring attention to local challenges and help improve public services in your constituency.",
    buttonText: "Raise Complaint",
    link: "/complaints/create",
    icon: Users,
  },

  {
    title: "Support Local Change",
    description:
      "Discover issues raised by fellow citizens and support the concerns that matter most to your area.",
    buttonText: "View Community",
    link: "/community",
    icon: HandHeart,
  },
];

export const tamilNaduData = {
  Ariyalur: ["Ariyalur", "Jayankondam"],

  Chengalpattu: [
    "Tambaram",
    "Pallavaram",
    "Chengalpattu",
    "Thiruporur",
    "Cheyyur",
    "Madurantakam",
    "Uthiramerur",
  ],

  Chennai: [
    "Dr. Radhakrishnan Nagar",
    "Perambur",
    "Kolathur",
    "Villivakkam",
    "Thiru-Vi-Ka Nagar",
    "Egmore",
    "Royapuram",
    "Harbour",
    "Chepauk-Thiruvallikeni",
    "Thousand Lights",
    "Anna Nagar",
    "Virugampakkam",
    "Saidapet",
    "T. Nagar",
    "Mylapore",
    "Velachery",
  ],

  Coimbatore: [
    "Mettuppalayam",
    "Sulur",
    "Kavundampalayam",
    "Coimbatore North",
    "Thondamuthur",
    "Coimbatore South",
    "Singanallur",
    "Kinathukadavu",
    "Pollachi",
    "Valparai",
  ],

  Cuddalore: [
    "Tittakudi",
    "Vriddhachalam",
    "Neyveli",
    "Panruti",
    "Cuddalore",
    "Kurinjipadi",
    "Bhuvanagiri",
    "Chidambaram",
    "Kattumannarkoil",
  ],

  Dharmapuri: [
    "Palacodu",
    "Pennagaram",
    "Dharmapuri",
    "Pappireddippatti",
    "Harur",
  ],

  Dindigul: [
    "Palani",
    "Oddanchatram",
    "Athoor",
    "Nilakkottai",
    "Natham",
    "Dindigul",
    "Vedasandur",
  ],

  Erode: [
    "Erode East",
    "Erode West",
    "Modakkurichi",
    "Dharapuram",
    "Kangeyam",
    "Perundurai",
    "Bhavani",
    "Anthiyur",
    "Gobichettipalayam",
  ],

  Kallakurichi: [
    "Gangavalli",
    "Attur",
    "Yercaud",
    "Kallakurichi",
    "Rishivandiyam",
    "Sankarapuram",
  ],

  Kanchipuram: ["Kanchipuram", "Arakkonam", "Sriperumbudur", "Kundrathur"],

  Kanniyakumari: [
    "Kanniyakumari",
    "Nagercoil",
    "Colachel",
    "Padmanabhapuram",
    "Vilavancode",
    "Killiyoor",
  ],

  Karur: ["Karur", "Krishnarayapuram", "Kulithalai", "Aravakurichi"],

  Krishnagiri: [
    "Bargur",
    "Krishnagiri",
    "Veppanahalli",
    "Hosur",
    "Thalli",
    "Uthangarai",
  ],

  Madurai: [
    "Melur",
    "Madurai East",
    "Sholavandan",
    "Madurai North",
    "Madurai South",
    "Madurai Central",
    "Madurai West",
    "Thiruparankundram",
    "Tirumangalam",
    "Usilampatti",
  ],

  Mayiladuthurai: ["Mayiladuthurai", "Poompuhar", "Sirkazhi"],

  Nagapattinam: ["Nagapattinam", "Kilvelur", "Vedaranyam"],

  Namakkal: [
    "Rasipuram",
    "Senthamangalam",
    "Namakkal",
    "Paramathi Velur",
    "Tiruchengodu",
    "Kumarapalayam",
  ],

  Nilgiris: ["Udhagamandalam", "Gudalur", "Coonoor"],

  Perambalur: ["Perambalur", "Kunnam"],

  Pudukkottai: [
    "Gandharvakottai",
    "Viralimalai",
    "Pudukkottai",
    "Thirumayam",
    "Alangudi",
    "Aranthangi",
  ],

  Ramanathapuram: [
    "Tiruvadanai",
    "Ramanathapuram",
    "Mudukulathur",
    "Paramakudi",
  ],

  Ranipet: ["Arcot", "Ranipet", "Sholingur"],

  Salem: [
    "Gangavalli",
    "Attur",
    "Yercaud",
    "Omalur",
    "Mettur",
    "Edappadi",
    "Sankari",
    "Salem West",
    "Salem North",
    "Salem South",
    "Veerapandi",
  ],

  Sivaganga: ["Karaikudi", "Tiruppattur", "Sivaganga", "Manamadurai"],

  Tenkasi: [
    "Sankarankovil",
    "Vasudevanallur",
    "Kadayanallur",
    "Tenkasi",
    "Alangulam",
  ],

  Thanjavur: [
    "Orathanadu",
    "Papanasam",
    "Thiruvaiyaru",
    "Thanjavur",
    "Pattukkottai",
    "Peravurani",
  ],

  Theni: ["Bodinayakanur", "Cumbum", "Andipatti", "Periyakulam"],

  Thoothukudi: [
    "Kovilpatti",
    "Ottapidaram",
    "Thoothukkudi",
    "Tiruchendur",
    "Srivaikuntam",
    "Vilathikulam",
  ],

  Tiruchirappalli: [
    "Manachanallur",
    "Srirangam",
    "Tiruchirappalli West",
    "Tiruchirappalli East",
    "Thiruverumbur",
    "Lalgudi",
    "Manapparai",
    "Musiri",
  ],

  Tirunelveli: [
    "Tirunelveli",
    "Palayamkottai",
    "Ambasamudram",
    "Nanguneri",
    "Radhapuram",
  ],

  Tirupattur: ["Jolarpet", "Tirupattur", "Ambur", "Vaniyambadi"],

  Tiruppur: [
    "Avanashi",
    "Tiruppur North",
    "Tiruppur South",
    "Palladam",
    "Udumalpet",
    "Madathukulam",
  ],

  Tiruvallur: [
    "Gummidipoondi",
    "Ponneri",
    "Tiruttani",
    "Thiruvallur",
    "Poonamallee",
    "Avadi",
    "Madavaram",
  ],

  Tiruvannamalai: [
    "Chengam",
    "Tiruvannamalai",
    "Kilpennathur",
    "Kalasapakkam",
    "Polur",
    "Arani",
    "Cheyyar",
    "Vandavasi",
  ],

  Tiruvarur: ["Nannilam", "Thiruvarur", "Tiruthuraipoondi", "Mannargudi"],

  Vellore: ["Anaikattu", "Vellore", "K. V. Kuppam", "Gudiyatham", "Katpadi"],

  Viluppuram: ["Vanur", "Villupuram", "Vikravandi", "Tindivanam", "Mailam"],

  Virudhunagar: [
    "Rajapalayam",
    "Srivilliputhur",
    "Sattur",
    "Sivakasi",
    "Virudhunagar",
    "Aruppukkottai",
    "Tiruchuli",
  ],
};
