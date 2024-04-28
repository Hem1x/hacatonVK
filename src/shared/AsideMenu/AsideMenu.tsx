import { useNavigate } from 'react-router-dom';
import { Button, Menu } from 'antd';
import Sider from 'antd/es/layout/Sider';
import { ReactComponent as TeacherIcon } from '../../icons/teacher.svg';
import { ReactComponent as AdminIcon } from '../../icons/admin.svg';
import { ReactComponent as MetodistIcon } from '../../icons/metodist.svg';
import { useState } from 'react';
import s from './AsideMenu.module.scss';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { UrlEnum } from '../../App.types';
import classNames from 'classnames/bind';
import Logo from '/GeekBrains.png';
import LogoCollapsed from '../../../public/collapsed.jpeg';

const cn = classNames.bind(s);

const AsideMenu = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [activeKey, setActiveKey] = useState<UrlEnum>(UrlEnum.adminUrl);
  const navigate = useNavigate();

  const items = [
    {
      key: UrlEnum.adminUrl,
      icon: <AdminIcon />,
      label: 'Панель админа',
    },
    {
      key: UrlEnum.metodistUrl,
      icon: <MetodistIcon />,
      label: 'Панель методиста',
    },
    {
      key: UrlEnum.teacherUrl,
      icon: <TeacherIcon />,
      label: 'Панель преподавателя',
    },
  ];

  return (
    <Sider
      width={290}
      theme="light"
      className={cn('nav-panel')}
      trigger={null}
      collapsible
      collapsed={collapsed}>
      {!collapsed ? (
        <img
          style={{ paddingInline: 20, width: '100%', margin: '0 auto' }}
          src={Logo}
          alt="logo"
        />
      ) : (
        <img
          style={{ paddingInline: 20, width: '100%', margin: '0 auto' }}
          src={LogoCollapsed}
          alt="logo"
        />
      )}
      <Menu
        className={cn('nav-panel__menu')}
        mode="inline"
        selectedKeys={[activeKey]}
        items={items}
        onClick={(e) => {
          setActiveKey(e.key as UrlEnum);
          navigate(e.key);
        }}
      />
      <Button
        type="text"
        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        onClick={() => setCollapsed(!collapsed)}
        className={cn('nav-panel__collapse-button')}
        style={{
          right: collapsed ? '30%' : '50%',
        }}
      />
    </Sider>
  );
};

export default AsideMenu;
