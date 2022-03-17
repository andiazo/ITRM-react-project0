function getRole(address) {

    let storage = window.sessionStorage;
    if(!storage.getItem('role')){
        storage.setItem('role', 'invited')
    }

    if(address){ 
    if(address.startsWith('0x24')){
        storage.setItem('role', 'admin')
        console.log(storage.getItem('role'))
        return('admin')
    }
    else {
        storage.setItem('role', 'user')
        console.log(storage.getItem('role'))
        return('user')
    }}
    else console.log(storage.getItem('role'))
}

export default getRole;