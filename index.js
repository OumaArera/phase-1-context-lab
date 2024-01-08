/* Your Code Here */

const createEmployeeRecord = employeeArray => {
    return {
      firstName: employeeArray[0],
      familyName: employeeArray[1],
      title: employeeArray[2],
      payPerHour: employeeArray[3],
      timeInEvents: [],
      timeOutEvents: [],
    };
  }
const createEmployeeRecords = arrays => arrays.map(createEmployeeRecord);

const createTimeInEvent = (dateStamp) => {
  let timeInEvents = [];
  const [date, time] = dateStamp.split(' ');
  const [year, month, day] = date.split('-');
  // const [hour, minute] = time.split('');

  const timeInEvent = {
    type: "TimeIn",
    hour: `${time}`,
    date: `${year}-${month}-${day}`,
  };
  timeInEvents.push(timeInEvent);
  return employee;
}

// const createTimeOutEvent = (employeeRecord, dateStamp) => {
//     const [date, time] = dateStamp.split(' ');
//     const [year, month, day] = date.split('-');
//     const [hour, minute] = time.split(':');
  
//     const timeOutEvent = {
//       type: "TimeOut",
//       hour: parseInt(hour),
//       date: `${year}-${month}-${day}`,
//     };
//     employeeRecord.timeOutEvents.push(timeOutEvent)
//     return employeeRecord;
// }

// const hoursWorkedOnDate = (employeeRecord, date) => {
//     const timeInEvent = employeeRecord.timeInEvents.find(event => event.date === date);
//     const timeOutEvent = employeeRecord.timeOutEvents.find(event => event.date === date);
  
//     if (!timeInEvent || !timeOutEvent) {
//       return 0;
//     }
  
//     const timeInHour = timeInEvent.hour;
//     const timeOutHour = timeOutEvent.hour;
  
//     return ((timeOutHour - timeInHour)/100);
//   }

// const wagesEarnedOnDate = (employeeRecord, date) => {
// const hoursWorked = hoursWorkedOnDate(employeeRecord, date);
// const payRate = employeeRecord.payPerHour;

// return hoursWorked * payRate;
// }


/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = () => {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

