function getRole(address) {
    if(address){
    if(address.startsWith('0x24')){
        console.log('admin')
        return('admin')
    }
    else {
        console.log('user')
        return('user')
    }}
    else console.log('No hay conexión')
}

export default getRole;