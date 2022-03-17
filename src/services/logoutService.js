function logout() {
    window.userAddress = null;
    window.localStorage.removeItem("userAddress");
    console.log(window.userAddress)
}

export default logout;