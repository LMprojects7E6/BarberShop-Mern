import React from "react";
import ButtonForTable from "../Button/ButtonForTable";

const AppointmentTable = ({ dataUsers }) => {
  //Data for creating thead of table
  const employees = [
    "FIRST NAME",
    "LAST NAME",
    "EMAIL",
    "PASSWORD",
    "EDIT",
    "DELETE",
  ];
  const customers = [
    "FIRST NAME",
    "LAST NAME",
    "EMAIL",
    "PASSWORD",
    "EDIT",
    "DELETE",
  ];

  const handleEdit = () => {
    console.log("EDIT");
  };

  const handleDelete = () => {
    console.log("DELETE");
  };

  return (
    <div className="container m-auto px-4 sm:px-8">
      <div className="py-8">
        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
          <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
            <table className="min-w-full leading-normal">
              <thead>
                <tr>
                  {employees.map((user, index) => (
                    <th
                      key={index}
                      className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
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
                        <p className="text-gray-900 whitespace-no-wrap">
                          {email}
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p className="text-gray-900 whitespace-no-wrap">
                          {password}
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <ButtonForTable onClick={handleEdit}>
                          Edit
                        </ButtonForTable>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <ButtonForTable onClick={handleDelete}>
                          Delete
                        </ButtonForTable>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentTable;
