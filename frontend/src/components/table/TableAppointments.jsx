import React from "react";
import DeleteAppointment from "../../pages/customer/deleteAppointment/DeleteAppointment";
import dateFormat from "../../utils/dateFormat";
import Modal from "../modal/Modal";

const TableAppointments = ({ appointmentsData, isCustomer }) => {
  //Data for creating thead of table
  const tHead = ["DATE", "TIME", "PRICE", "", ""];
  return (
    <div className=" overflow-x-auto">
      <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
        <table className=" table-auto min-w-full leading-normal mb-10">
          <thead>
            <tr>
              {tHead.map((header, index) => (
                <th
                  key={index}
                  className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-head text-left  font-semibold text-gray-600 uppercase tracking-wider"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {appointmentsData.map((appointment) => {
              const { date, price } = appointment;
              const { date: dateAppointment, time } = dateFormat(date);
              return (
                <tr>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <div className="flex items-center">
                      <div className="ml-3">
                        <p className="text-gray-900 whitespace-no-wrap">
                          {dateAppointment}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">{time}</p>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">
                      {price} €
                    </p>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm"></td>
                  {isCustomer && (
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <Modal
                        modalTitle={"DELETE APPOINTMENT"}
                        buttonType={"delete"}
                      >
                        <DeleteAppointment />
                      </Modal>
                    </td>
                  )}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableAppointments;
