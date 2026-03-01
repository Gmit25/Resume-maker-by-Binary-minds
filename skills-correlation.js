// Skill Correlation Dataset
// This maps each skill to related skills the user should learn

const skillCorrelations = {
  // Cognitive & Thinking Skills
  "Critical Thinking": ["Logical Reasoning", "Problem Decomposition", "Systems Thinking", "Data Analysis"],
  "Logical Reasoning": ["Critical Thinking", "DSA", "Pattern Recognition", "Problem Decomposition"],
  "Systems Thinking": ["Architecture Design", "Backend Development", "Database Design", "Cloud Basics"],
  "Problem Solving": ["Critical Thinking", "DSA", "Debugging", "System Design"],
  "Decision Making": ["Data Analysis", "Analytics Interpretation", "Strategic Thinking"],

  // Technical & Programming Skills
  "Python": ["Data Science", "Machine Learning", "Backend Development", "Automation"],
  "Java": ["Backend Development", "System Design", "OOP", "Spring Framework"],
  "JavaScript": ["Frontend Development", "React", "Node.js", "API Integration"],
  "React": ["JavaScript", "UI/UX Design", "Frontend Development", "API Integration"],
  "Node.js": ["Backend Development", "Express", "Database Design", "API Integration"],
  "Express": ["Node.js", "Backend Development", "API Integration", "Database Design"],
  "SQL": ["Database Design", "Data Analysis", "Backend Development"],
  "MongoDB": ["Database Design", "Backend Development", "NoSQL"],
  "Database Design": ["SQL", "MongoDB", "Backend Development", "System Design"],
  "Git": ["Team Collaboration", "DevOps", "Version Control"],
  "API Integration": ["Backend Development", "Third-party Services", "Automation"],
  "Backend Development": ["Database Design", "System Design", "API Integration", "DevOps"],
  "Frontend Development": ["React", "UI/UX Design", "JavaScript", "CSS/HTML"],
  "Data Structures & Algorithms": ["System Design", "Backend Development", "Competitive Programming", "Problem Solving"],
  "DSA": ["System Design", "Backend Development", "Competitive Programming", "Logical Reasoning"],
  "System Design": ["Backend Development", "Database Design", "Scalability", "Architecture Design"],
  "Debugging": ["Problem Solving", "Testing", "DevOps"],
  "Linux": ["DevOps", "Cloud Basics", "System Administration"],
  "Cloud Basics": ["Cloud Computing", "AWS", "Azure", "DevOps"],
  "AWS": ["Cloud Computing", "DevOps", "Serverless", "Cloud Architecture"],
  "Azure": ["Cloud Computing", "DevOps", ".NET", "Cloud Architecture"],
  "Docker": ["DevOps", "Containerization", "Kubernetes", "Cloud Basics"],
  "Kubernetes": ["DevOps", "Container Orchestration", "Scalability", "Docker"],
  "DevOps": ["Docker", "Kubernetes", "CI/CD", "System Administration"],
  "CI/CD": ["DevOps", "Automation", "Testing", "Git"],

  // Data & AI Skills
  "Data Analysis": ["SQL", "Excel", "Statistics", "Data Visualization"],
  "Data Science": ["Python", "Machine Learning", "Statistics", "Data Analysis"],
  "Machine Learning": ["Python", "Data Science", "Statistics", "Deep Learning"],
  "AI/ML": ["Machine Learning", "Python", "Deep Learning", "Neural Networks"],
  "Statistics": ["Data Analysis", "Probability", "Machine Learning"],
  "Excel": ["Data Analysis", "Spreadsheets", "Business Intelligence"],
  "Data Visualization": ["Data Analysis", "Tableau", "Power BI", "Python"],
  "Tableau": ["Data Visualization", "Business Intelligence", "Analytics"],
  "Power BI": ["Data Visualization", "Business Intelligence", "Analytics"],

  // Web & Mobile Development
  "HTML": ["CSS", "JavaScript", "Frontend Development", "Web Design"],
  "CSS": ["HTML", "UI Design", "Frontend Development", "Design Systems"],
  "UI/UX Design": ["Frontend Development", "Graphic Design", "User Research", "Figma"],
  "Figma": ["UI/UX Design", "Graphic Design", "Prototyping"],
  "Mobile Development": ["React Native", "Flutter", "iOS", "Android"],
  "React Native": ["Mobile Development", "JavaScript", "iOS", "Android"],
  "Flutter": ["Mobile Development", "Dart", "Cross-platform"],
  "iOS": ["Swift", "Mobile Development", "Objective-C"],
  "Android": ["Kotlin", "Java", "Mobile Development"],

  // Business & Consulting Skills
  "Business Analysis": ["Data Analysis", "Communication", "Problem Solving"],
  "Product Management": ["User Research", "Communication", "Strategic Thinking"],
  "Strategic Thinking": ["Decision Making", "Business Analysis", "Market Research"],
  "Market Research": ["Data Analysis", "Strategic Thinking", "Business Analysis"],
  "Communication": ["Public Speaking", "Writing", "Presentation Skills"],
  "Public Speaking": ["Communication", "Presentation Skills", "Confidence"],
  "Negotiation": ["Communication", "Sales Psychology", "Persuasion"],
  "Sales": ["Negotiation", "Communication", "Persuasion"],
  "Persuasion": ["Sales Psychology", "Communication", "Copywriting"],
  "Project Management": ["Leadership", "Time Management", "Communication", "Problem Solving"],
  "Leadership": ["Communication", "Decision Making", "Team Management"],
  "Team Management": ["Leadership", "Communication", "Conflict Resolution"],

  // Design & Creative Skills
  "Graphic Design": ["UI/UX Design", "Color Theory", "Typography", "Figma"],
  "Color Theory": ["Graphic Design", "UI/UX Design", "Design Thinking"],
  "Typography": ["Graphic Design", "UI/UX Design", "Design Systems"],
  "Design Thinking": ["Problem Solving", "Creative Thinking", "User Research"],
  "Creativity": ["Design Thinking", "Ideation", "Innovation"],

  // Soft Skills & Professional Development
  "Time Management": ["Productivity", "Project Management", "Organization"],
  "Leadership": ["Communication", "Team Management", "Decision Making"],
  "Conflict Resolution": ["Communication", "Emotional Intelligence", "Active Listening"],
  "Emotional Intelligence": ["Communication", "Conflict Resolution", "Empathy"],
  "Teamwork": ["Communication", "Collaboration", "Conflict Resolution"],
  "Collaboration": ["Teamwork", "Communication", "Git"],
  "Presentation Skills": ["Public Speaking", "Communication", "Design"],
  "Writing": ["Communication", "Copywriting", "Technical Writing"],
  "Technical Writing": ["Documentation", "Writing", "Communication"],

  // Specialized Skills
  "SEO": ["Content Marketing", "Data Analysis", "Web Analytics"],
  "Content Marketing": ["Copywriting", "SEO", "Communication"],
  "Copywriting": ["Persuasion", "Communication", "Marketing"],
  "Cybersecurity": ["Network Security", "Linux", "System Administration"],
  "Network Security": ["Cybersecurity", "Linux", "Infrastructure"],
  "Testing": ["QA", "Debugging", "Automation"],
  "QA": ["Testing", "Debugging", "Organization"],
  "Automation": ["Python", "Scripting", "DevOps"],
  "Scripting": ["Automation", "Bash", "PowerShell"],
  "Competitive Programming": ["DSA", "Problem Solving", "Algorithms"],
  "Blockchain": ["Cryptography", "System Design", "Security"],
  "Web3": ["Blockchain", "Smart Contracts", "Cryptocurrency"],
  "Smart Contracts": ["Blockchain", "Solidity", "Web3"],
  "Solidity": ["Smart Contracts", "Web3", "Programming"],

  // Generic tech skills that correlate broadly
  "Programming": ["Problem Solving", "Logic", "Debugging", "DSA"],
  "Coding": ["Programming", "Problem Solving", "Computer Science"],
  "Problem Decomposition": ["Critical Thinking", "Problem Solving", "Systems Thinking"],
  "OOP": ["Java", "Programming", "System Design"],
  "Functional Programming": ["Programming", "Python", "JavaScript"],
  "Architecture Design": ["System Design", "Scalability", "Best Practices"],
  "Scalability": ["System Design", "Architecture Design", "DevOps"],
  "Performance Optimization": ["System Design", "Debugging", "Profiling"],
  "Security": ["Cybersecurity", "Encryption", "Best Practices"],
};

/**
 * Get recommended skills based on current skills
 * @param {Array<string>} currentSkills - Array of skills the user has
 * @returns {Array<{skill: string, relatedTo: string, relevance: number}>} Recommended skills sorted by relevance
 */
function getRecommendedSkills(currentSkills) {
  const recommendedMap = {};
  const relevanceMap = {};

  // For each skill the user has
  currentSkills.forEach((skill) => {
    const normalizedSkill = normalizeSkill(skill);
    const relatedSkills = skillCorrelations[normalizedSkill] || [];

    // Add related skills to recommendations
    relatedSkills.forEach((relatedSkill) => {
      // Don't recommend skills they already have
      if (!currentSkills.some((s) => normalizeSkill(s) === relatedSkill)) {
        if (!recommendedMap[relatedSkill]) {
          recommendedMap[relatedSkill] = [];
          relevanceMap[relatedSkill] = 0;
        }
        recommendedMap[relatedSkill].push(normalizedSkill);
        relevanceMap[relatedSkill]++;
      }
    });
  });

  // Convert to array and sort by relevance
  const recommendations = Object.keys(recommendedMap).map((skill) => ({
    skill,
    relatedTo: recommendedMap[skill],
    relevance: relevanceMap[skill],
  }));

  return recommendations.sort((a, b) => b.relevance - a.relevance);
}

/**
 * Normalize skill name (trim, lowercase for comparison, but preserve original case)
 */
function normalizeSkill(skill) {
  if (!skill) return '';
  const trimmed = skill.trim();
  // Return the key as it exists in skillCorrelations, or the original if not found
  const lowerTrimmed = trimmed.toLowerCase();
  
  for (const key in skillCorrelations) {
    if (key.toLowerCase() === lowerTrimmed) {
      return key;
    }
  }
  return trimmed;
}

/**
 * Get unique recommended skills with their connections
 */
function getUniqueRecommendations(currentSkills) {
  const recommendations = getRecommendedSkills(currentSkills);
  const uniqueMap = {};

  recommendations.forEach(({ skill, relatedTo, relevance }) => {
    if (!uniqueMap[skill]) {
      uniqueMap[skill] = {
        skill,
        relatedTo: [...new Set(relatedTo)],
        relevance,
      };
    }
  });

  return Object.values(uniqueMap).sort((a, b) => b.relevance - a.relevance);
}
