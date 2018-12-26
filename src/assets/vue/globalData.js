/* 全局变量 */
const obj = {
    name: '张三',
    age: 44
}
Object.defineProperty(obj,'age',{
    value: 46,
    writable:false,
})
export default obj