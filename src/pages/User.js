import { useParams } from "react-router-dom";

const User = () => {
  const { userId } = useParams();

  return (
    <h1>This is the user {userId}</h1>
  )
}

export default User;