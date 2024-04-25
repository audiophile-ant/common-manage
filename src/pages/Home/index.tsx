import Flowchart from '@/components/Flowchart';
import { PageContainer } from '@ant-design/pro-components';
import styles from './index.less';

const HomePage: React.FC = () => {
  const workflowData = [
    { id: 1, name: '单位工程建设', completed: false },
    { id: 2, name: '工程启动运行验收', completed: false },
    { id: 3, name: '工程移交生产', completed: false },
    { id: 4, name: '生产单位验收', completed: false },
    { id: 5, name: '工程竣工验收', completed: false },
  ];

  return (
    <PageContainer ghost>
      <div className={styles.container}>
        <Flowchart data={workflowData} />
      </div>
    </PageContainer>
  );
};

export default HomePage;
