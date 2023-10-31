import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const UserView = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.UserData.data);
  console.log(users);
  useEffect(() => {
    dispatch({ type: 'UserData/fetchUsers' });
  }, [dispatch]);

  return (
    <div>
      <h1>UserView</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {' '}
            {user.id} :{user.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserView;
