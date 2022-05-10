const message: string = 'hello world'

console.log(message)

const user: {
  name: string
  age: number
} = {
  name: 'motty',
  age: 100,
}

console.log(user)

type kata = string | number | boolean
// どちらも同じ意味
const arr2: kata[] = [100, 'moji', true]
const arr3: Array<kata> = [100, 'moji', true]

// object in arrayの分割代入
const obj = {
  arr: [100, 'str'],
}
const {
  arr: [foo, bar],
} = obj
console.log(foo)
console.log(bar)

const rest = {
  hoge: 123,
  bar: 'string',
  baz: false,
}
const { hoge, ...restObj } = rest
console.log(hoge)
console.log(restObj)

// method object
const methodObj = {
  double(num: number): number {
    return num * 2
  },
  double2: (num: number): number => num * 2
}
