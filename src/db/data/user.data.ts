import { User } from '../types/user.type';
const users: Array<User> = [];

for (let i = 1; i <= 100; i++) {
  const user = {
    id: i,
    name: `test-user-${i}`,
    email: `test-${i}@gamil.com`,
  };
  users.push(user);
}
export default users;
