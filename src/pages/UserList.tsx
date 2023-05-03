import { useLoaderData } from "react-router-dom";

import UserList from "../components/UserList/UserList";

const UserListPage: React.FC = () => {
  const data: {
    results: {
      id: { name: string };
      name: { title: string; first: string; last: string };
      location: { country: string };
      email: string;
      phone: string;
    }[];
  } = useLoaderData() as {
    results: {
      id: { name: string };
      name: { title: string; first: string; last: string };
      location: { country: string };
      email: string;
      phone: string;
    }[];
  };

  console.log(data);

  return <UserList users={data.results} />;
};

export default UserListPage;

export async function loader() {
  const response = await fetch("https://randomuser.me/api/");

  console.log(response);
  if (!response.ok) {
    console.log("Wrong request");
  }

  return response;
}
