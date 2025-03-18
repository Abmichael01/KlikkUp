export const phases = [
  {
    name: "Phase 1: Foundation",
    description: "Building the core platform and community",
    items: [
      { title: "Launch of The KlikkUp points farming", completed: true },
      { title: "Launch of referral program", completed: false },
      { title: "Social quest", completed: false },
      { title: "Load testing", completed: false },
      { title: "Building community", completed: false },
    ],
  },
  {
    name: "Phase 2: Growth",
    description: "Expanding user base and platform capabilities",
    items: [
      { title: "5,000 Activations", completed: false },
      { title: "10,000 Activations", completed: false },
      { title: "50,000 Activations", completed: false },
      { title: "100,000 Activations", completed: false },
      { title: "Daily rewards", completed: false },
    ],
  },
  {
    name: "Phase 3: Development",
    description: "Building and testing the initial project",
    items: [
      { title: "Building of initial project", completed: false },
      { title: "Test running the initial project", completed: false },
      { title: "1,000,000 Activations", completed: false },
      { title: "Eligibility checking", completed: false },
      { title: "Conversion of points to $Coins", completed: false },
    ],
  },
  {
    name: "Phase 4: Launch",
    description: "Official launch and beyond",
    items: [
      { title: "Social launch of the initial project", completed: false },
      { title: "End of KlikkUp farming program", completed: false },
      { title: "Journey to the initial project", completed: false },
      { title: "Launching on App Store", completed: false },
      { title: "Initial project Airdrop and Listing Q3 2030", completed: false },
    ],
  },
]

export const roadmapItems = [
  { title: "Launch of klikk up points farming", completed: true },
  { title: "Load testing", completed: true },
  { title: "Marketing", completed: false },
  { title: "Social quest", completed: false },
  { title: "Stories task", completed: false },
  { title: "Daily rewards", completed: false },
  { title: "Airtime Airdrop", completed: false },
  { title: "1000 activation", completed: false },
  { title: "100k monthly referral bonus activation", completed: false },
  { title: "5000 Activation", completed: false },
  { title: "Airtime Airdrop", completed: false },
  { title: "10,000 Activation", completed: false },
  { title: "YouTube task", completed: false },
  { title: "50,000 Activation", completed: false },
  { title: "Airtime Airdrop", completed: false },
  { title: "End of 100k monthly referral bonus activation", completed: false },
  { title: "Airtime Airdrop", completed: false },
  { title: "100,000 Activation", completed: false },
  { title: "Seasonal Naira Airdrop", completed: false },
  { title: "200,000 Activation", completed: false },
  { title: "Airtime Airdrop", completed: false },
  { title: "500k Activation", completed: false },
  { title: "1,000,000 Activation", completed: false },
  { title: "Seasonal Naira Airdrop", completed: false },
  { title: "Building of Game Fi", completed: false },
  { title: "Test running Game Fi", completed: false },
  { title: "Web3 Connections", completed: false },
  { title: "Partnership", completed: false },
  { title: "Project Announcement", completed: false },
  { title: "Social launch of Gamefi", completed: false },
  { title: "Launching on App store", completed: false },
  { title: "End of klikkUp farming program", completed: false },
  { title: "Eligibility checking", completed: false },
  { title: "Conversion of points to $Coins", completed: false },
  { title: "Snapshot", completed: false },
  { title: "Community activity", completed: false },
  { title: "Initial project Airdrop and listing Q4 2030", completed: false },
]

export const calculateProgress = () => {
  const totalItems = roadmapItems.length
  const completedItems = roadmapItems.filter((item) => item.completed).length

  return Math.round((completedItems / totalItems) * 100)
}
