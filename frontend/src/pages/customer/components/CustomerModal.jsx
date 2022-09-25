import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { createAppointment } from "../../../Api/appointment";
const CustomerModal = ({ showModal, setShowModal, employee }) => {
  const queryClient = useQueryClient();
  //create mutation
  const addAppointmentMutation = useMutation(createAppointment, {
    onSuccess: (res) => {
      toast.success(res.message, { style: { padding: "4px 3px" } });
      setShowModal(false);
      queryClient.invalidateQueries(["employees"]);
    },
    onError: (error) => {
      toast.error(error.errorMsg);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const { date } = Object.fromEntries(data);
    //use mutation
    addAppointmentMutation.mutate({
      employeeID: employee._id,
      appointment: { date: date, price: 50 },
    });
  };
  return (
    <>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">Modal Title</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  {" "}
                  <form onSubmit={handleSubmit}>
                    <input type="datetime-local" name="date" required />
                    <button className="btn-save" type="submit">
                      Make appointment
                    </button>{" "}
                  </form>
                </div>{" "}
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="btn-close"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};

export default CustomerModal;
