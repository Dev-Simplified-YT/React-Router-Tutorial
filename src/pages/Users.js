import { useNavigate } from "react-router-dom";

const Users = () => {
  const navigation = useNavigate();

  return (
    <h1 onClick={() => navigation(`/users/1234`)}>This is the users page</h1>
  )
}

export default Users;