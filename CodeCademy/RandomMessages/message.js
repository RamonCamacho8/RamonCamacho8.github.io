// Random Tasks generations
const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const hours = ['8:00', '9:00', '10:00', '11:00', '12:00', '13:00'];
const activities = ['Gym', 'Swimming', 'Running', 'Cycling', 'Yoga', 'Pilates', 'Dancing', 'Boxing', 'Meditation', 'Walking'];
const where = ['at home', 'at the gym', 'at the park', 'at the beach', 'at the pool', 'at the studio', 'at the office', 'at the mall', 'at the supermarket', 'at the library'];
const who = ['with your partner', 'with your family', 'with your friends', 'with your colleagues', 'with your classmates', 'with your neighbours', 'with your boss', 'with your teacher', 'with your doctor', 'with your coach'];

// Random Task
const randomTask = () => {
  const day = days[Math.floor(Math.random() * days.length)];
  const hour = hours[Math.floor(Math.random() * hours.length)];
  const activity = activities[Math.floor(Math.random() * activities.length)];
  const whereTo = where[Math.floor(Math.random() * where.length)];
  const withWho = who[Math.floor(Math.random() * who.length)];
  return `On ${day} at ${hour} you should practice ${activity} ${whereTo} ${withWho}.`;
};

console.log(randomTask());