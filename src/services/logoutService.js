function logout() {
    let storage = window.sessionStorage
    storage.setItem('role', 'invited')
    window.userAddress = null;
    window.localStorage.removeItem("userAddress");
    console.log(window.userAddress)
}

export default logout;