import AppointmentTable from "./components/Table/Table";
import { dataTableCustomer, currency } from "./data.js";

function App() {
  return (
    <>
      <div className="h-screen bg-fuchsia-800 flex justify-center items-center">
        <h1 className="text-5xl text-white">BARBER SHOP TEST WITH TAILWIND</h1>
      </div>
      <AppointmentTable dataTableCustomer={dataTableCustomer} currency={currency}/>
    </>
  );
}

export default App;
