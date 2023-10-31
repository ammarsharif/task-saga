import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const UserView = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.UserData.data);
  useEffect(() => {
    dispatch({ type: 'UserData/fetchUsers' });
  }, [dispatch]);

  return (
    <div style={{ margin: '1em' }}>
      <h1 style={{ marginLeft: '0.5em' }}>User Data</h1>
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
