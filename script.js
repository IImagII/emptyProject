const meetups = [
   { name: 'JavaScript', isActive: true, members: 100 },
   { name: 'Angular', isActive: true, members: 900 },
   { name: 'Java', isActive: false, members: 100 },
   { name: 'React', isActive: true, members: 500 },
];

function memberOnActiv(meetups) {
   return meetups
      .filter((meetup) => meetup.isActive)
      .reduce((acc, elem) => {
         return acc + elem.members;
      }, 0);
}

console.log(memberOnActiv(meetups));
