const hash = (username, password) => {
  let hashCode = (username.length + password.length) + 112 + Math.floor(Math.random() * 42000) + username.charAt(Math.floor(Math.random() * username.length)) + password.charAt(Math.floor(Math.random() * password.length)) + characters.charAt(Math.floor(Math.random() * 108))
  if (localStorage.getItem(hashCode)) {
    hash(username, password)
  }

  return hashCode
}
