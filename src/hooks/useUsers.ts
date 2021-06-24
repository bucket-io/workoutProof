import { useEffect, useState } from "react";
import { User } from "../services/ApiClient/models";
import { getUsers as getApiUsers } from '../services/ApiClient';

type OnGetUsers = (users: User[]) => void;

async function getUsers(setUsers: OnGetUsers): Promise<void> {
  const users = await getApiUsers();

  setUsers(users);
}

export function useUsers() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    getUsers(setUsers);
  }, [users]);

  return users;
}

