import Modal from "../modal/Modal";
import EditButton from "../buttons/EditButton";

const Table = ({ dataUsers, isEmployee }) => {
  console.log(isEmployee === "truee");

  //Data for creating thead of table
  const tHead = ["FIRST NAME", "LAST NAME", "EMAIL", "PASSWORD", "", ""];

  return (
    <div className=" overflow-x-auto">
      <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
        <table className="min-w-full leading-normal">
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
            {dataUsers.map((user) => {
              const { _id, first_name, last_name, email, password, role } =
                user;
              return (
                <tr key={_id.$oid}>
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
                    <p className="text-gray-900 whitespace-no-wrap">
                      {password}
                    </p>
                  </td>

                  <>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      {/* {isEmployee === "true" && ( */}
                      <Modal
                        modalTitle={"EDIT EMPLOYEE DATA"}
                        buttonType={"edit"}
                        button={EditButton}
                      >
                        <div>EDIT MODAL</div>
                      </Modal>
                      {/* )} */}
                    </td>
                  </>

                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <Modal
                      modalTitle={"DELETE EMPLOYEE"}
                      buttonType={"delete"}
                      button={EditButton}
                    >
                      <div>Are you sure you want to delete this employee:</div>
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
