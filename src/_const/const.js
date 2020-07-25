export const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,5})+$/;
export const phoneRegex = /^[6-9]\d{9}$/;
export const flightNoRegex = /^[0-9]{3,6}$/;

export const listCount = 10;

export const indianAirlines = [
  {name: 'Air India', iata: 'AI', icao: 'AIC', label: 'AIRINDIA', value: 0},
  {name: 'Vistara', iata: 'UK', icao: 'VTI', label: 'VISTARA', value: 1},
  {name: 'IndiGo', iata: '6E', icao: 'IGO', label: 'IFLY', value: 2},
  {name: 'GoAir', iata: 'G8', icao: 'GOW', label: 'GOAIR', value: 3},
  {
    name: 'Air India Express',
    iata: 'IX',
    icao: 'AXB',
    label: 'EXPRESSINDIA',
    value: 4,
  },
  {name: 'SpiceJet', iata: 'SG', icao: 'SEJ', label: 'SPICEJET', value: 5},
  {
    name: 'AirAsia India',
    iata: 'I5',
    icao: 'IAD',
    label: 'REDKNIGHT',
    value: 6,
  },
];

export const _role = [
  {label: 'Admin', key: 'admin', value: 0},
  {label: 'Manager', key: 'manager', value: 1},
  {label: 'Pilot', key: 'pilot', value: 2},
  // { name: "Ext. Pilot", key: "externalPilot" },
];

export const checkboxes = [
  {
    name: 'east',
    key: 'east',
    label: 'East',
  },
  {
    name: 'west',
    key: 'west',
    label: 'West',
  },
  {
    name: 'north',
    key: 'north',
    label: 'North',
  },
  {
    name: 'south',
    key: 'south',
    label: 'South',
  },
];
export const posts = [
  {
    label: 'Pilot',
    key: 'p1',
    value: 0,
  },
  {
    label: 'Co-Pilot',
    key: 'p2',
    value: 1,
  },
];
export const designations = [
  {
    label: 'Captain',
    value: 0,
    key: 'captain',
  },
  {
    label: 'Commander',
    key: 'commander',
    value: 1,
  },
  {
    label: 'First Officer',
    key: 'firstOfficer',
    value: 2,
  },
];

export const committeeMembers = [
  {
    name: 'Ravi Shiv Shankar',
    contact: '9350010573',
    email: 'captainravi@hotmail.com',
    region: 'north',
    central: {designation: 'Central Treasurer'},
    regional: {designation: 'Regional President'},
  },
  {
    name: 'Shyam Narayan',
    contact: '9818857321',
    email: 'shyamnarayan29jan@gmail.com',
    region: 'north',
    central: {designation: 'Vice President'},
    regional: {designation: 'Regional Secretary'},
  },
  {
    name: 'T.Praveen Keerthi',
    contact: '9884077088',
    email: 'praveenpilot@gmail.com',
    region: 'south',
    central: {designation: 'General Secretary'},
    regional: {designation: 'Regional Secretary'},
  },
  {
    name: 'Arun Balachandran',
    contact: '9837300320',
    email: 'arunbalachandran21@gmail.com',
    region: 'west',
    central: {designation: 'Committee Member'},
    regional: {designation: 'Regional President'},
  },
  {
    name: 'Kushal Patil',
    contact: '9869651119',
    email: 'kushal173@yahoo.com',
    region: 'west',
    central: {designation: 'Asst. General Secretary'},
    regional: {designation: 'Regional Secretary'},
  },
  {
    name: 'Anup Jain',
    contact: '9830173500',
    email: 'anupjain320@gmail.com',
    region: 'east',
    central: {designation: 'Central President'},
    regional: {designation: 'Regional President'},
  },
  {
    name: 'Ina Roy Chowdhury',
    contact: '9831162222',
    email: 'inarc@rediffmail.com',
    region: 'east',
    central: {designation: 'Committee Member'},
    regional: {designation: 'Regional Secretary'},
  },
  {
    name: 'Raman Kr Sharma',
    contact: '9903476320',
    email: 'ramansharmabh32@yahoo.com',
    region: 'east',
    central: {designation: 'Committee Member'},
    regional: {designation: 'Asst. Regional Secretary'},
  },
];

export const urlMap = {
  letters: 'Letters',
  letter: 'Letters',
  circulars: 'Circulars',
  circular: 'Circulars',
  'flight-safety': 'Flight Safety',
  flighsafety: 'Flight Safety',
};
