import React from "react";
import { useUsers } from "../../hooks/useUsers";
import { User } from "../../services/ApiClient/models";
// import { useRandomExercise } from "../../hooks/useRandomExercise";

interface UserListProps {
  users: User[];
}

const UserList: React.FC<UserListProps> = ({ users }: UserListProps) => {
  function displayUser(user: User) {
    return <li>{user.username}</li>;
  }

  return (
    <>
      <ul>
        {users.map(displayUser)}
      </ul>
    </>
  )
}

const Exercise: React.FC = () => {
  const users = useUsers();
  // const [instance, nextExercise] = useRandomExercise();

  return users.length > 0 
    ? <UserList users={users} />
    : <p>Loading..</p>
  // return (
  //   <div>
  //     <h1 className="workout-name">{instance.title}</h1>
  //     <img
  //       className="picture"
  //       alt={instance.imageURL}
  //       src={instance.imageUrl}
  //     />
  //     <p className="description">{instance.description}</p>
  //     <h3 className="number-of-reps">{instance.reps}</h3>
  //     <button className="next" onClick={nextExercise}>
  //       NEXT
  //     </button>
  //   </div>
  // );
};

export default Exercise;
