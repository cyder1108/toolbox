const test = require(`ava`);
const { only } = require(`./index`)

test( "hoge",  async t => {

  let obj = {
    name: "taro",
    password: "hoge",
    age: 19,
    sex: "male",
    nickname: [ "t", "tarokun" ],
  }

  let obj2 = only("name", "age")( obj )

  t.is( obj2.name, "taro" )
  t.is( obj2.age, 19 )
  t.is( obj2.password, void(0) )
})
