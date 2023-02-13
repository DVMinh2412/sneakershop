import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { publicRoutes } from './router';
import DefaultLayout from './Layout/DefaultLayout/DefaultLayout'

function App() {
  return (
      <BrowserRouter>
        <div className="App">
            <Routes>
                {
                  publicRoutes.map((route, index) => {
                    const Page = route.element
                    return (
                      <Route 
                        key={index}
                        path= {route.path}
                        element = {
                            <DefaultLayout>
                              <Page />
                            </DefaultLayout>
                        }
                      />
                    )
                  })
                }
            </Routes>
        </div>
      </BrowserRouter>
  );
}

export default App;
