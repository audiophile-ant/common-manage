// 运行时配置
import { LogoutOutlined } from '@ant-design/icons';
import { RequestConfig, RunTimeLayoutConfig, history } from '@umijs/max';
import { Dropdown, MenuProps, message } from 'antd';
// 全局初始化数据配置，用于 Layout 用户信息和权限初始化
// 更多信息见文档：https://umijs.org/docs/api/runtime-config#getinitialstate
export async function getInitialState(): Promise<{
  name: string;
  avatar?: string;
}> {
  return {
    name: '小明',
    avatar:
      'https://github.com/XiaoRongwen/imgs/blob/master/avatar.jpg?raw=true',
  };
}

export const layout: RunTimeLayoutConfig = ({ initialState }) => {
  //initialState上面登录函数返回的信息

  const DropdownItems: MenuProps['items'] = [
    {
      key: 'logout',
      icon: <LogoutOutlined />,
      label: '退出登录',
    },
  ];

  const DropdownOnClick: MenuProps['onClick'] = () => {
    history.push('/login');
  };
  return {
    // logo: 'https://github.com/XiaoRongwen/imgs/blob/master/logo.png?raw=true', //左上角Logo
    title: '风电场工程后台管理系统', //左上角Logo后面的名字
    menu: {
      locale: false, //菜单是否国际化
    },
    layout: 'mix', //菜单的方式，有mix,top,side三种，这里用mix
    splitMenus: true, // 这里用了mix才会生效,bia
    avatarProps: {
      src: initialState?.avatar || undefined, //右上角头像
      title: initialState?.name || '用户', //右上角名称
      size: 'small',
      render: (props, dom) => {
        return (
          <Dropdown
            menu={{
              items: DropdownItems,
              onClick: DropdownOnClick,
            }}
          >
            {dom}
          </Dropdown>
        );
      },
    },
  };
};

export const request: RequestConfig = {
  timeout: 1000,
  // other axios options you want
  errorConfig: {
    errorHandler(error: any) {
      const { response } = error;
      if (response && response.status === 500) {
        message.error('请求错误：服务器故障，请稍后再试');
      }
    },
    errorThrower() {},
  },
  // 请求拦截
  requestInterceptors: [
    (config: any) => {
      let token = localStorage.getItem('token') || '';
      if (token.startsWith('"')) {
        token = JSON.parse(token);
      }
      if (token) {
        config.headers.Authorization = 'Bearer ' + token;
      }
      return config;
    },
    (error: any) => {
      return error;
    },
  ],
  // 相应拦截
  responseInterceptors: [
    (response: any) => {
      const { data, message } = response;
      if (!data.success) {
        message.error(message);
      }
      return response;
    },
  ],
};
