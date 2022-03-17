export default function getToken() {
    if(window.sessionStorage.role == 'admin'){
        return true
    } else {
        return false
    }
}
