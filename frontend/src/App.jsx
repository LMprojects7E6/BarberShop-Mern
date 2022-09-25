import { Toaster } from "react-hot-toast";
import Router from "./router/Router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SessionProvider } from "./context/SessionContext";
const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <SessionProvider>
        <Router></Router>
        <Toaster position="bottom-right" reverseOrder={false} />
      </SessionProvider>
    </QueryClientProvider>
  );
}
export default App;
