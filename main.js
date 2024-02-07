const getRandEvent = () => {
    // The scope of `random` is now limited to the `getRandEvent` function
    const random = Math.floor(Math.random() * 3);
  
    if (random === 0) {
      return 'Marathon';
    } else if (random === 1) {
      return 'Triathlon';
    } else if (random === 2) {
      return 'Pentathlon';
    }
  };
  
  const getTrainingDays = event => {
    // Declare `days` at the function scope
    let days;
  
    if (event === 'Marathon') {
      days = 50;
    } else if (event === 'Triathlon') {
      days = 100;
    } else if (event === 'Pentathlon') {
      days = 200;
    }
  
    return days;
  };
  
  const logEvent = (name, event) => {
    // Removed the local `name` declaration. Now `name` is a parameter
    console.log(`${name}'s event is: ${event}`);
  };
  
  const logTime = (name, days) => {
    // Removed the local `name` declaration. Now `name` is a parameter
    console.log(`${name}'s time to train is: ${days} days`);
  };
  
  // Define a `name` variable.
  const name = 'Nala';
  const event = getRandEvent();
  const days = getTrainingDays(event);
  
  // Pass `name` as an argument
  logEvent(name, event);
  logTime(name, days);
  
const event2 = getRandEvent();
const days2 = getTrainingDays(event2);
const name2 = 'Warren';
 
logEvent(name2, event2);
logTime(name2, days2);
