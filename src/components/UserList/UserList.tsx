import { useEffect, useState } from "react";
import User from "./User";
import styles from "./style.module.css";

const URL = "https://jsonplaceholder.typicode.com/users";

const UserList = () => {
  const [userList, setUserList] = useState<Array<User>>([]);

  useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        setUserList(data);
      });
  }, []);

  return (
    <>
      <h1>Пользователи</h1>
      {userList.length !== 0 && (
        <div className={styles.container}>
          {userList.map((user) => (
            <div className={styles.user} key={user.id}>
              {user.name}
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default UserList;
