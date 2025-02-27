import GlobalStyles from "styles/GlobalStyles";
import { RouterProvider } from "react-router-dom";
import routes from "routes";

function App() {
  return (
    <>
      <GlobalStyles />
      <RouterProvider router={routes} />
    </>
  )
}

export default App
