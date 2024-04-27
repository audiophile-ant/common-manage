import Flowchart from '@/components/Flowchart';
import Introduction from '@/components/introduction';
import { PageContainer } from '@ant-design/pro-components';
import styles from './index.less';

const HomePage: React.FC = () => {
  const workflowData = [
    { id: 1, name: '单位工程建设', status: 5 },
    { id: 2, name: '工程启动运行验收', status: 5 },
    { id: 3, name: '工程移交生产', status: 3 },
    { id: 4, name: '生产单位验收', status: 1 },
    { id: 5, name: '工程竣工验收', status: 1 },
  ];

  const introduceData = [
    { id: 1, color: 'gray', introduce: '未进行' },
    { id: 2, color: 'blue', introduce: '进行中' },
    { id: 3, color: 'purple', introduce: '验收中' },
    { id: 4, color: 'cyan', introduce: '推动审批中' },
    { id: 5, color: 'green', introduce: '成功结束' },
  ];

  return (
    <PageContainer ghost>
      <Introduction data={introduceData} />
      <div className={styles.container}>
        <Flowchart data={workflowData} />
      </div>
    </PageContainer>
  );
};

export default HomePage;
