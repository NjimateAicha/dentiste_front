import { SidebarProvider ,SidebarTrigger} from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/SideBar/app-sidebar.tsx"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ColorPage from "@/pages/theme-colors.tsx";

function App() {


  return (
      <Router>
          <SidebarProvider>
              <AppSidebar />
              <main className="w-full">
                  <SidebarTrigger/>
                  <Routes>
                      <Route path="" element={<ColorPage/>}/>
                  </Routes>
              </main>
          </SidebarProvider>
      </Router>
  )
}

export default App
