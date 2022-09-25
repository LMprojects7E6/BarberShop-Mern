const CustomerTable = ({ dataUsers }) => {
  console.log(dataUsers);
  //Data for creating thead of table
  const tHead = ["ID", "FIRST NAME", "LAST NAME", "EMAIL", ""];

  const handleEdit = () => {
    console.log("EDIT");
  };

  return (
    <div>
      {" "}
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
                const { _id, first_name, last_name, email } = user;
                return (
                  <tr key={_id.$oid}>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap">{_id}</p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap">
                        {first_name}
                      </p>
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
                      {/* <ButtonForTable onClick={handleEdit}>
                        Appointment
                      </ButtonForTable> */}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CustomerTable;
