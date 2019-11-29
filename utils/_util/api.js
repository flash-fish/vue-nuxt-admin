const outItem = {}
const master = {
  base: '/api/',
  list: {
    templateList: 'templateList'
  }
}

function addBase(url) {
  const api = {}

  _.forIn(url, (v, k) => {
    join(v.base ? v.list : v, v.base || '')
  })

  function join(list, base) {
    _.forIn(list, (val, key) => {
      api[key] = base + val
    })
  }

  return api
}

const urls = addBase({
  outItem,
  master
})

export { urls }
