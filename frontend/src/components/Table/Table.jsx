import Modal from "../modal/Modal";
import UserUpdate from "../../pages/admin/updateUser/UserUpdate";
import UserDelete from "../../pages/admin/deleteUser";

const Table = ({ usersData, isEmployee }) => {
  //Data for creating thead of table
  const tHead = ["FIRST NAME", "LAST NAME", "EMAIL", "", ""];

  return (
    <div className=" overflow-x-auto">
      <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
        <table className=" table-auto min-w-full leading-normal mb-10">
          <thead>
            <tr>
              {tHead.map((user, index) => (
                <th
                  key={index}
                  className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-head text-left  font-semibold text-gray-600 uppercase tracking-wider"
                >
                  {user}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {usersData.map((user) => {
              const { _id, first_name, last_name, email } = user;
              return (
                <tr key={user._id}>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <div className="flex items-center">
                      <div className="ml-3">
                        <p className="text-gray-900 whitespace-no-wrap">
                          {first_name}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">
                      {last_name}
                    </p>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">{email}</p>
                  </td>

                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    {isEmployee && (
                      <Modal
                        modalTitle={"EDIT EMPLOYEE DATA"}
                        buttonType={"edit"}
                      >
                        <UserUpdate user={user} />
                      </Modal>
                    )}
                  </td>

                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <Modal modalTitle={"DELETE EMPLOYEE"} buttonType={"delete"}>
                      <UserDelete user={user} />
                    </Modal>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
