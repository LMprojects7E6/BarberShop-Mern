import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { deleteUser } from "../../../Api/users";
import Button from "../../../components/buttons/Button";

const UserDelete = ({ user, setShowModal }) => {
  const queryClient = useQueryClient();

  const removeUser = useMutation(deleteUser, {
    onSuccess: (resp) => userDeleted(resp),
  });

  const userDeleted = (data) => {
    const userName = data.first_name;
    queryClient.invalidateQueries(["getCustomers"]);
    queryClient.invalidateQueries(["getEmployees"]);
    setShowModal(false);
    toast.success(`${userName} has been deleted`);
  };

  return (
    <div className="flex flex-col text-center">
      <h2 className="text-2xl mb-3">
        Are you sure you want to delete {user.first_name}?{" "}
      </h2>
      <div className="text-center mt-5">
        <Button onClick={() => removeUser.mutate(user._id)} text={"DELETE"} />
      </div>
    </div>
  );
};

export default UserDelete;
