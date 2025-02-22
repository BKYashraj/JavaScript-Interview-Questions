// Switch Case Statements to clean object mapping ( in more modified way )
function fectchRole(roleId){
    switch(roleId){
        case 1:
            return "Admin"
        case 2:
            return "Special User"
        case 3:
            return "Moderator"
        default:
            return "User"
    }
}

console.log(fectchRole(2))

// More Simplified Way ( Mapping )

function fetchRoleByObj(roleId){
    const createRoleObj = {
        1:'admin',
        2:'Special User',
        3:'Moderator'
    }
    return createRoleObj[roleId] || 'user'
}

console.log(fectchRole(1))