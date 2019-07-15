var Base = {}

/**
 * 树形结构转为list
 */
Base.treeToList = (list) => { 
    var tree = Base.clone(list)
    var queen = [];
    var out = [];
    queen = queen.concat(tree);
    while(queen.length) {
        var first = queen.shift();
        if (first.children) {
            queen = queen.concat(first.children)
            delete first['children'];
        }
      
      out.push(first);
    }
    return out;
}

/**
 * 深度克隆数组和对象
 */
Base.clone = (value) => {
    return JSON.parse(JSON.stringify(value))
}
/**
 * 遍历树
 */
Base.traverseTree = (tree, key, value) => {
    for(var i in tree){
        tree[i][key] = value;
        if(tree[i].children){
            Base.traverseTree(tree[i].children, key, value)
        }
    }
}
export default Base