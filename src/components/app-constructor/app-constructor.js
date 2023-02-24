import { Routes, Route, useLocation, Link, useHistory, Redirect } from 'react-router-dom';
import {MainPage, Three3dPage} from '../../pages/index';
const AppConstructor = () => {

  return (
      <div>
        <Routes>
          <Route path='/' element={ <MainPage />} />
          <Route path='/3d' element={<Three3dPage />} />
        </Routes>
      </div>
   );
}
export default AppConstructor;
