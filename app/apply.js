function initFilters(){
return []
}

function updateFilters(state,action){
if(action==="clear")return []
if(action.type==="add")state.push(action.value)
if(action.type==="remove")state.pop()
return state
}
