import log from "../log"
let getItemConfig = (week, time, day) => {

  for (let item of log) {
    if (item.weeks.includes(week) && item.day === day && item.sections.includes(time)) {
      item.show = true
      return item
    }
  }
  for (let item of log) {
    if (item.day === day && item.sections.includes(time)) {
      item.show = false
      return item
    }
  }
  return null
}
export default getItemConfig