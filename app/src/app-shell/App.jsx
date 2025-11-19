
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './Layout'
import Home from '../screens/Home'
import Login  from '../screens/auth/Login'
import ProtectedRoute  from '../routes/ProtectedRoute'
import Onboarding from '../screens/auth/Onboarding'
import Friends from '../screens/Friends'
import Clubs from '../screens/Clubs'
import Events from '../screens/Events'
import FullProfile from '../screens/FullProfile'
import Settings from '../screens/settings/Settings'
import PartyPlayWithMicAnimation from '../animated-ui/PartyPlayWithMicAnimation'
import CourtPickerWithRadar from '../animated-ui/CourtPickerWithRadar'
import BLEDeviceScanner from '../animated-ui/BLEDeviceScanner'
import AutoNextPicker from '../next-game-picker/AutoNextPicker'

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/partyplay" element={<PartyPlayWithMicAnimation />} />
        <Route path="/court-picker" element={<CourtPickerWithRadar />} />
        <Route path="/roc-device" element={<BLEDeviceScanner />} />
        <Route path="/next" element={<AutoNextPicker />} />
        <Route path="/login" element={<Login />} />
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/profile" element={
          <ProtectedRoute>
            <FullProfile />
          </ProtectedRoute>
        }
        />

        <Route path="/friends" element={<ProtectedRoute>
          <Friends />
        </ProtectedRoute>} />
        <Route path="/clubs" element={<ProtectedRoute>
          <Clubs />
        </ProtectedRoute>} />

      </Routes>
    </Layout>
  )
}
