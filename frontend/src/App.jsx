import { Toaster } from "react-hot-toast";
import Router from "./router/Router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router></Router>
      <Toaster position="bottom-right" reverseOrder={false} />
    </QueryClientProvider>
  );
}
export default App;
