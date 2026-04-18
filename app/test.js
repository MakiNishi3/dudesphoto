function setFilter(list){
return list.map(f=>f.type+":"+f.value)
}

function addFilter(list,filter){
list.push(filter)
return list
}

function removeFilter(list){
list.pop()
return list
}
