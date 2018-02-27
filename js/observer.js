
let data = {
  name: 'hunger',
  friends: [1, 2]
}
observe(data)

data.name = 'valley'
data.friends[0] = '3'



function observe(data) {
  if(!data || typeof data !== 'object') return
  Object.keys(data).forEach(key=> {
    let val = data[key]
    Object.defineProperty(data, key, {
      enumerable: true,
      configurable: false,
      get() {
        return val
      },
      set(newVal) {
        console.log(`changes happen: ${val} => ${newVal}`)
        val = newVal
      }
    })
    observe(val)
  })
}

