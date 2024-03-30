import { RootProvider } from "./contexts/Root"
import Reservation from "./pages/Reservation"

const App = () => {
  return (
    <RootProvider>
      <Reservation/>
    </RootProvider>
  )
}

export default App