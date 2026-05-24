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

// Step 1: Profile Cards

const buildProfileCard = ({
  name,
  track,
  skills,
  projects,
  isAvailable,
  mentor
}) => {
  const availability = isAvailable ? "Available" : "Not Available";
  const mentorName = mentor?.name ?? "No mentor assigned";
  const skillList =
    skills.length > 0 ? skills.join(", ") : "No skills listed yet";

  return `
Name: ${name}
Track: ${track}
Status: ${availability}
Skills: ${skillList}
Projects Completed: ${projects.completed}
Projects Ongoing: ${projects.ongoing}
Mentor: ${mentorName}
------------------------------`;
};

developers.map(buildProfileCard).forEach(card => console.log(card));

// Step 2: Unique Skills Pool

const uniqueSkills = [
  ...new Set(developers.flatMap(({ skills }) => skills))
].sort();

console.log("Unique Skills Pool:", uniqueSkills);

// Step 3: Track Summary

const tracks = [...new Set(developers.map(({ track }) => track))];

const trackSummary = tracks.map(track => {
  const devsInTrack = developers.filter(dev => dev.track === track);

  const availableCount = devsInTrack.filter(
    ({ isAvailable }) => isAvailable
  ).length;

  const totalCompleted = devsInTrack.reduce(
    (sum, { projects }) => sum + projects.completed,
    0
  );

  return `${track} → Developers: ${devsInTrack.length}, Available: ${availableCount}, Projects Completed: ${totalCompleted}`;
});

trackSummary.forEach(summary => console.log(summary));

// Step 4: Add a New Developer

const addDeveloper = (devs, newDeveloper) => [...devs, newDeveloper];

const newDeveloper = {
  id: 7,
  name: "Daniel Adebayo",
  track: "Mobile",
  skills: ["Kotlin", "Android"],
  projects: { completed: 2, ongoing: 1 },
  isAvailable: true,
  mentor: null
};

const extendedDevelopers = addDeveloper(developers, newDeveloper);

console.log("Original length:", developers.length);
console.log("New length:", extendedDevelopers.length);

// Step 5: Update a Developer
const updateDeveloper = (devs, id, updates) =>
  devs.map(dev =>
    dev.id === id ? { ...dev, ...updates } : dev
  );

const updatedDevelopers = updateDeveloper(developers, 4, {
  skills: ["Dart", "Flutter", "Firebase"],
  isAvailable: false
});

console.log(
  "Updated Emeka:",
  updatedDevelopers.find(({ id }) => id === 4)
);

// Step 6: Mentor Workload

const mentorWorkload = developers.reduce((acc, { mentor }) => {
  const mentorName = mentor?.name ?? "Unassigned";
  acc[mentorName] = (acc[mentorName] ?? 0) + 1;
  return acc;
}, {});

console.log("Mentor Workload:", mentorWorkload);

// Step 7: Experience Ranking

const rankedDevelopers = [...developers]
  .sort(
    (
      { projects: a },
      { projects: b }
    ) =>
      b.completed + b.ongoing - (a.completed + a.ongoing)
  )
  .map((dev, index) => {
    const medal =
      index === 0
        ? ""
        : index === 1
        ? ""
        : index === 2
        ? ""
        : "";

    return `${index + 1}. ${dev.name} (${dev.projects.completed + dev.projects.ongoing} projects) ${medal}`;
  });

rankedDevelopers.forEach(rank => console.log(rank));