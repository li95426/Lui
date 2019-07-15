var Base = {}

Base.traverse = (list) => {
    let arr = []
    for(let i in list) {
        arr.push(list[i])
        if(list[i].children) {
            traverse(list[i].children)
        }
    }
    console.log(arr)
}
export default Base