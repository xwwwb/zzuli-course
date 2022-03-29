let log = [{
  "name": "大学英语A4",
  "position": "二教楼316",
  "teacher": "刘冬玲",
  "weeks": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
  "day": 1,
  "sections": [1, 2]
}, {
  "name": "计算机网络A",
  "position": "二教楼314",
  "teacher": "吴雪丽",
  "weeks": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
  "day": 4,
  "sections": [1, 2]
}, {
  "name": "数据库系统原理",
  "position": "一教楼607",
  "teacher": "张保威",
  "weeks": [1, 3, 5, 7, 9, 11, 13],
  "day": 5,
  "sections": [1, 2]
}, {
  "name": "计算机组成原理",
  "position": "一教楼303",
  "teacher": "郭功兵",
  "weeks": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
  "day": 3,
  "sections": [3, 4]
}, {
  "name": "计算机组成原理",
  "position": "一教楼303",
  "teacher": "郭功兵",
  "weeks": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
  "day": 1,
  "sections": [3, 4]
}, {
  "name": "数据结构",
  "position": "一教楼309",
  "teacher": "金保华",
  "weeks": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
  "day": 2,
  "sections": [3, 4]
}, {
  "name": "数据结构",
  "position": "一教楼309",
  "teacher": "金保华",
  "weeks": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
  "day": 4,
  "sections": [3, 4]
}, {
  "name": "计算机网络A",
  "position": "二教楼314",
  "teacher": "吴雪丽",
  "weeks": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
  "day": 2,
  "sections": [5, 6]
}, {
  "name": "数据库系统原理",
  "position": "一教楼309",
  "teacher": "张保威",
  "weeks": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
  "day": 3,
  "sections": [5, 6]
}, {
  "name": "FPGA系统设计(硬件设计方向）",
  "position": "二教楼714",
  "teacher": "李端",
  "weeks": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
  "day": 5,
  "sections": [5, 6]
}, {
  "name": "大学语文",
  "position": "一教楼303",
  "teacher": "吕晓洁",
  "weeks": [1, 2, 3, 4, 5, 6, 7, 8],
  "day": 3,
  "sections": [9, 10]
}, {
  "name": "大学英语A4",
  "position": "二教楼716",
  "teacher": "刘冬玲",
  "weeks": [2, 4, 6, 8, 10],
  "day": 5,
  "sections": [3, 4]
}, {
  "name": "马克思主义基本原理",
  "position": "三教楼406",
  "teacher": "冯合国",
  "weeks": [4, 5, 6, 7, 8, 10, 11, 12, 13, 14, 15],
  "day": 2,
  "sections": [1, 2]
}, {
  "name": "马克思主义基本原理",
  "position": "三教楼406",
  "teacher": "冯合国",
  "weeks": [5, 7, 11, 13, 15],
  "day": 5,
  "sections": [3, 4]
}, {
  "name": "大学英语六级",
  "position": "三教楼108",
  "teacher": "王丽颜",
  "weeks": [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
  "day": 3,
  "sections": [7, 8]
}, {
  "name": "形势与政策4",
  "position": "一教楼303",
  "teacher": "陈勇",
  "weeks": [5, 6, 7, 8],
  "day": 1,
  "sections": [9, 10]
}]
let getColor = () => {
  let num = Math.floor(Math.random() * 10 + 1)
  if (num === 1) {
    return "#FAE6C1"
  } else if (num === 2) {
    return "#FAE6C1"
  } else if (num === 3) {
    return "#E3ECFD"
  } else if (num === 4) {
    return "#E3ECFD"
  } else if (num === 5) {
    return "#FBE6D6"
  } else if (num === 6) {
    return "#FBE6D6"
  } else if (num === 7) {
    return "#D7FBF5"
  } else if (num === 8) {
    return "#D7FBF5"
  } else if (num === 9) {
    return "#E9E7FE"
  } else if (num === 10) {
    return "#E9E7FE"
  }
}

let newLog = log.map(item => {
  // console.log(item)
  item.color = getColor()
  return item
})

console.log(newLog)