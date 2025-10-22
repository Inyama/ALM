// Tiny DB - localStorage wrapper
export const DB = {
  getUsers: () => JSON.parse(localStorage.getItem('palm_users')) || [],
  
  addUser: (user) => {
    const users = DB.getUsers();
    users.push(user);
    localStorage.setItem('palm_users', JSON.stringify(users));
  },
  
  checkUser: (username, password) => {
    const users = DB.getUsers();
    return users.find(u => u.username === username && u.password === password);
  },
  
  getCurrentUser: () => localStorage.getItem('palm_current_user'),
  
  setCurrentUser: (username) => localStorage.setItem('palm_current_user', username),
  
  logout: () => localStorage.removeItem('palm_current_user')
};