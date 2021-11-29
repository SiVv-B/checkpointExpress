module.exports = {
  availabe: {
    frequency: '0 9 * * 1-5',
    handler: 'handlers/sayhello',
  },
  NoAvailableweekDays: {
    frequency: '0 17 * * 1-5',
    handler: 'handlers/weekNotAv',
  },
  NoAvailableWeekends: {
    frequency: '0 0 * * 6,0',
    handler: 'handlers/weekendNotAv',
  },
}
