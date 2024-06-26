import { Route, Routes, useLocation } from 'react-router-dom';
import './App.scss';
import { UrlEnum } from './App.types';
import MetodistPanel from './pages/MetodistPanel/MetodistPanel';
import TeacherPanel from './pages/TeacherPanel/TeacherPanel';
import AdminPanel from './pages/AdminPanel/AdminPanel';
import { Layout } from 'antd';
import AsideMenu from './shared/AsideMenu/AsideMenu';

export type ActiveKeyType = UrlEnum | 'top';

const App = () => {
  return (
    <main>
      <Layout>
        <AsideMenu />
        <Layout>
          <Layout.Content
            className="content"
            id="content"
            style={{ overflowY: 'scroll' }}>
            <Routes>
              <Route path={UrlEnum.metodistUrl} element={<MetodistPanel />} />
              <Route path={UrlEnum.teacherUrl} element={<TeacherPanel />} />
              <Route path={UrlEnum.adminUrl} element={<AdminPanel />} />
              <Route path={'/*'} element={<AdminPanel />} />
            </Routes>
          </Layout.Content>
        </Layout>
      </Layout>
    </main>
  );
};

export default App;
