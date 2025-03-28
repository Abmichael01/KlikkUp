export const roadmapItems = [
  { title: "Launch of KLIKK UP", completed: true },
  { title: "Load testing", completed: true },
  { title: "Marketing", completed: false },
  { title: "Social quest", completed: false },
  { title: "Stories task", completed: false },
  { title: "Daily rewards", completed: false },
  { title: "1000 activation", completed: false },
  { title: "Referral bonus withdrawal", completed: false },
  { title: "100k monthly referral bonus begins", completed: false },
  { title: "5000 activation", completed: false },
  { title: "Giveaway", completed: false },
  { title: "10,000 activation", completed: false },
  { title: "YouTube task begins", completed: false },
  { title: "50,000 activation", completed: false },
  { title: "Giveaway", completed: false },
  { title: "100,000 activation", completed: false },
  { title: "200,000 activation", completed: false },
  { title: "500,000 activation", completed: false },
  { title: "End of 100k monthly referral bonus", completed: false },
  { title: "500M Naira giveaway", completed: false },
  { title: "1,000,000 activation", completed: false },
  { title: "Game development", completed: false },
  { title: "Integrating backend services", completed: false },
  { title: "Launching and promotion", completed: false },
  { title: "Project announcement", completed: false },
  { title: "End of KLIKK UP quest", completed: false },
  { title: "Conversion of points to coins", completed: false },
  { title: "Snapshot", completed: false },
  { title: "Community activity", completed: false },
  { title: "Post-launch scaling", completed: false }
]

export const calculateProgress = () => {
  const totalItems = roadmapItems.length
  const completedItems = roadmapItems.filter((item) => item.completed).length

  return Math.round((completedItems / totalItems) * 100)
}
