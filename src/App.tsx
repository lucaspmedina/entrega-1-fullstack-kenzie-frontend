import { ToastContainer } from "react-toastify";
import { AuthProvider } from "./contexts/UserContext/UserContext";
import { RoutesMain } from "./routes";
import Global from "./styles/global";

function App() {
    return (
        <>
            <Global />

            <AuthProvider>
                <RoutesMain />
            </AuthProvider>

            <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss={false}
                draggable
                pauseOnHover
                theme="dark"
            />
        </>
    );
}

export default App;
