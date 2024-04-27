import { LockOutlined, UserOutlined } from '@ant-design/icons';
import {
  LoginFormPage,
  ProFormCheckbox,
  ProFormText,
} from '@ant-design/pro-components';
import { Tabs } from 'antd';
import { useState } from 'react';
import { history } from 'umi';
type LoginType = 'account';

export default () => {
  const items = [{ label: '账户密码登录', key: 'account' }];
  const [loginType, setLoginType] = useState<LoginType>('account');

  const onSubmit = async (formData: any) => {
    console.log(formData);
    history.push('/Home');
  };
  return (
    <div
      style={{
        backgroundColor: 'white',
        height: '100vh',
        width: '100vw',
      }}
    >
      <LoginFormPage
        onFinish={onSubmit}
        backgroundImageUrl="https://gw.alipayobjects.com/zos/rmsportal/FfdJeJRQWjEeGTpqgBKj.png"
        // logo="https://github.githubassets.com/images/modules/logos_page/Octocat.png"
        title="风电场工程管理系统"
        subTitle="让工程管理无懈可击"
        // activityConfig={{
        //   style: {
        //     boxShadow: '0px 0px 8px rgba(0, 0, 0, 0.2)',
        //     color: '#fff',
        //     borderRadius: 8,
        //     backgroundColor: '#1677FF',
        //   },
        //   title: '活动标题，可配置图片',
        //   subTitle: '活动介绍说明文字',
        //   action: (
        //     <Button
        //       size="large"
        //       style={{
        //         borderRadius: 20,
        //         background: '#fff',
        //         color: '#1677FF',
        //         width: 120,
        //       }}
        //     >
        //       去看看
        //     </Button>
        //   ),
        // }}
        actions={
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
            }}
          ></div>
        }
      >
        <Tabs
          centered
          items={items}
          activeKey={loginType}
          onChange={(activeKey) => setLoginType(activeKey as LoginType)}
        ></Tabs>

        {loginType === 'account' && (
          <>
            <ProFormText
              name="username"
              fieldProps={{
                size: 'large',
                prefix: <UserOutlined className={'prefixIcon'} />,
              }}
              placeholder={'请输入账号/邮箱/电话号码'}
              rules={[
                {
                  required: true,
                  message: '请输入用户名!',
                },
              ]}
            />
            <ProFormText.Password
              name="password"
              fieldProps={{
                size: 'large',
                prefix: <LockOutlined className={'prefixIcon'} />,
              }}
              placeholder={'请输入密码'}
              rules={[
                {
                  required: true,
                  message: '请输入密码！',
                },
              ]}
            />
          </>
        )}
        <div style={{ marginBlockEnd: 24 }}>
          <ProFormCheckbox noStyle name="autoLogin">
            自动登录
          </ProFormCheckbox>
          <a style={{ float: 'right' }}>忘记密码 </a>
        </div>
      </LoginFormPage>
    </div>
  );
};
