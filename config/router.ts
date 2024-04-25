const routes = [
  {
    path: '/',
    redirect: '/Login',
  },
  {
    name: '登录',
    path: '/Login',
    component: './Login',
    layout: false,
  },
  {
    name: '工程进度',
    path: '/home',
    component: './Home',
  },
  {
    name: '权限管理',
    path: '/access',
    component: './Access',
    routes: [
      {
        name: '角色权限管理',
        icon: 'TeamOutlined',
        path: '/access/role-permissions',
        component: './Access/RolepPermissions',
      },
      {
        name: '用户角色分配',
        icon: 'FileProtectOutlined',
        path: '/access/user-roles',
        component: './Access/UserRoles',
      },
    ],
  },
  {
    name: '整套启动',
    path: '/full-startup',
    component: './FullStartup',
  },
  {
    name: '人员信息管理',
    path: '/customer-manage',
    component: './CustomerManage',
    routes: [
      {
        name: '技术人员信息管理',
        icon: 'TeamOutlined',
        path: '/customer-manage/technical',
        component: './CustomerManage/Technical',
      },
      {
        name: '生产验收人员信息管理',
        icon: 'FileProtectOutlined',
        path: '/customer-manage/production-inspection',
        component: './CustomerManage/ProductionInspection',
      },
    ],
  },
  {
    name: '验收资料提交',
    path: '/inspection',
    component: './Inspection',
    routes: [
      {
        name: '工程启动运行验收',
        icon: 'TeamOutlined',
        path: '/inspection/initiate',
        component: './Inspection/Initiate',
      },
      {
        name: '生产单位验收',
        icon: 'FileProtectOutlined',
        path: '/inspection/production',
        component: './Inspection/Production',
      },
      {
        name: '工程竣工验收',
        icon: 'TeamOutlined',
        path: '/inspection/completion',
        component: './Inspection/Completion',
      },
    ],
  },
  {
    name: '流程推进申请',
    path: '/propulsion',
    component: './Propulsion',
  },
];

export default routes;
