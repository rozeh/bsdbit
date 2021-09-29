import namor from 'namor'
import { useState } from 'react'

const range = len => {
  const arr = []
  for (let i = 0; i < len; i++) {
    arr.push(i)
  }
  return arr
}

const newPerson = id => {
  const statusChance = Math.random()
  const [ num, setNum ] = useState(1)
  const [docs, setDocs] = useState([])
  useEffect(()=> {
      docsList().then((res)=>{
          return setDocs(res.data.list)
      })
  },[])

  return {
    id,
    username: namor.generate({ words: 1, numbers: 0 }),
    age: Math.floor(Math.random() * 30),
    visits: Math.floor(Math.random() * 100),
    progress: Math.floor(Math.random() * 100),
    status:
      statusChance > 0.66
        ? 'relationship'
        : statusChance > 0.33
        ? 'complicated'
        : 'single',
  }
}

export default function makeData(...lens) {
  const makeDataLevel = (depth = 0) => {
    const len = lens[depth]
    return range(len).map(i => {
      return {
        ...newPerson(i+1),
        subRows: lens[depth + 1] ? makeDataLevel(depth + 1) : undefined,
      }
    })
  }

  return makeDataLevel()
}