import { Link } from "react-router-dom";

interface UsersProps {
  users: {
    id: { name: string };
    name: { title: string; first: string; last: string };
    location: { country: string };
    email: string;
    phone: string;
  }[];
}

const UserTable: React.FC<UsersProps> = ({ users }) => {
  return (
    <section className="flex flex-col items-center space-y-8 px-2 overflow-x-auto sm:text-lg">
      <table className="table-auto text-center bg-white rounded-md">
        <thead className="border-b-2">
          <tr>
            <th>Full Name</th>
            <th>Country</th>
            <th>Email Address</th>
            <th>Phone Number</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id.name}>
              <td>
                <Link to={user.id.name}>
                  {user.name.title + user.name.first + user.name.last}
                </Link>
              </td>
              <td>{user.location.country}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="w-full flex justify-center space-x-4 mb-4 text-base">
        <button className="px-5 py-1 text-[#f97729] uppercase font-bold border-2 border-[#f97729] rounded-md transition-colors duration-200 hover:text-white hover:bg-[#f97729]">
          Previous
        </button>
        <button className="px-5 py-1 text-[#f97729] uppercase font-bold border-2 border-[#f97729] rounded-md transition-colors duration-200 hover:text-white hover:bg-[#f97729]">
          Next
        </button>
      </div>
    </section>
  );
};

export default UserTable;
