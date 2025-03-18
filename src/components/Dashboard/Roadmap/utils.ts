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
