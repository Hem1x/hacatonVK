import { Route, Routes, useLocation } from 'react-router-dom';
import './App.scss';
import Analytics from './pages/Analytics/Analytics';
import Chat from './pages/Chat/Chat';
import AsideMenu from './shared/AsideMenu/AsideMenu';
import { UrlEnum } from './App.types';
import MetodistPanel from './pages/MetodistPanel/MetodistPanel';
import TeacherPanel from './pages/TeacherPanel/TeacherPanel';
import AdminPanel from './pages/AdminPanel/AdminPanel';
import { Container } from '@mui/material';

export type ActiveKeyType = UrlEnum | 'top';

const App = () => {
  const { pathname } = useLocation();
  const isChat = pathname === UrlEnum.chat;

  return (
    <main>
      <Container>
        <AsideMenu />
        {/* <Routes>
          <Route path={UrlEnum.analysis} element={<Analytics />} />
          <Route path={UrlEnum.metodistUrl} element={<MetodistPanel />} />
          <Route path={UrlEnum.teacherUrl} element={<TeacherPanel />} />
          <Route path={UrlEnum.adminUrl} element={<AdminPanel />} />
          <Route path={'/*'} element={<AdminPanel />} />
        </Routes> */}
      </Container>
    </main>
  );
};

export default App;
