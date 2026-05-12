const developers = [
 {
   id: 1,
   name: "Amara Johnson",
   track: "Frontend",
   skills: ["HTML", "CSS", "JavaScript", "React"],
   projects: { completed: 8, ongoing: 2 },
   isAvailable: true,
   mentor: { name: "Sarah Chen", specialty: "React" }
 },
 {
   id: 2,
   name: "Chidi Okafor",
   track: "Backend",
   skills: ["Python", "Django", "SQL"],
   projects: { completed: 5, ongoing: 3 },
   isAvailable: false,
   mentor: { name: "James Udo", specialty: "System Design" }
 },
 {
   id: 3,
   name: "Fatima Hassan",
   track: "Frontend",
   skills: ["HTML", "CSS", "JavaScript", "Vue", "TypeScript"],
   projects: { completed: 10, ongoing: 1 },
   isAvailable: true,
   mentor: null
 },
 {
   id: 4,
   name: "Emeka Nwosu",
   track: "Mobile",
   skills: ["Dart", "Flutter"],
   projects: { completed: 3, ongoing: 1 },
   isAvailable: true,
   mentor: { name: "Femi Adeyemi", specialty: "Mobile Architecture" }
 },
 {
   id: 5,
   name: "Zara Ahmed",
   track: "Backend",
   skills: ["Node.js", "Express", "MongoDB", "GraphQL"],
   projects: { completed: 7, ongoing: 2 },
   isAvailable: true,
   mentor: null
 },
 {
   id: 6,
   name: "Grace Eze",
   track: "Frontend",
   skills: [],
   projects: { completed: 0, ongoing: 0 },
   isAvailable: false,
   mentor: { name: "Sarah Chen", specialty: "React" }
 }
];

const buildProfileCard = ({
  name,
  track,
  skills,
  projects,
  isAvailable,
  mentor
}) => {
  // Ternary for availability
  const availabilityStatus = isAvailable 
    ? "Available ✅" 
    : "Not Available ❌";
  
  // Optional chaining and nullish coalescing for mentor
  const mentorInfo = mentor?.name ?? "No mentor assigned";
  
  // Check if skills array is empty
  const skillsList = skills.length === 0 
    ? "No skills listed yet" 
    : skills.join(", ");
  
  // Return formatted string using template literals
  return `

   ${name}
   Track: ${track}
   Status: ${availabilityStatus}
    Skills: ${skillsList}
   Projects: ${projects.completed} completed, 
              ${projects.ongoing} ongoing
   Mentor: ${mentorInfo}

  `.trim();
};

// Apply to all developers using .map()
developers.map(buildProfileCard).forEach(card => {
  console.log(card);
});


// Approach 1: Using flatMap (recommended - more concise)
const getAllUniqueSkills = () => {
  const allSkills = developers.flatMap(dev => dev.skills);
  const uniqueSkills = [...new Set(allSkills)];
  return uniqueSkills.sort();
};

// Approach 2: Using map() + flat() (alternative)
const getAllUniqueSkillsAlt = () => {
  const allSkills = developers.map(dev => dev.skills).flat();
  return [...new Set(allSkills)].sort();
};

// One-liner version 🚀
const uniqueSkills = [...new Set(developers.flatMap(d => d.skills))].sort();

// Building Profile Cards
const buildProfileCard = ({
  name,
  track,
  skills,
  projects,
  isAvailable,
  mentor
}) => {
  const availabilityStatus = isAvailable
    ? "Available ✅"
    : "Not Available ❌";

  const mentorInfo = mentor?.name ?? "No mentor assigned";

  const skillsList =
    skills.length === 0 ? "No skills listed yet" : skills.join(", ");

  return `

   ${name}
   Track: ${track}
   Status: ${availabilityStatus}
   Skills: ${skillsList}
   Projects: ${projects.completed} completed,
              ${projects.ongoing} ongoing
   Mentor: ${mentorInfo}

`.trim();
};

// Apply to all developers using .map()
developers.map(buildProfileCard).forEach(card => {
  console.log(card);
});


