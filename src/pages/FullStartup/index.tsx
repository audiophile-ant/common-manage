import {
  MinusCircleOutlined,
  PlusOutlined,
  SaveOutlined,
} from '@ant-design/icons';
import { Button, Col, Input, Row, Select, Space, Typography } from 'antd';
import React, { useState } from 'react';
import styles from './index.less';

const { TextArea } = Input;
const { Option } = Select;
const { Text } = Typography;

interface Generator {
  id: number;
  name: string;
  status: string;
  note: string;
}

const App: React.FC = () => {
  const [generators, setGenerators] = useState<Generator[]>([]);
  const [nextId, setNextId] = useState<number>(1);

  const addGenerator = () => {
    const newGenerator: Generator = {
      id: nextId,
      name: '',
      status: '运行中',
      note: '',
    };
    setGenerators([...generators, newGenerator]);
    setNextId(nextId + 1);
  };

  const removeGenerator = (id: number) => {
    setGenerators(generators.filter((generator) => generator.id !== id));
  };

  const updateGenerator = (
    id: number,
    field: keyof Generator,
    value: string,
  ) => {
    setGenerators(
      generators.map((generator) => {
        if (generator.id === id) {
          return { ...generator, [field]: value };
        }
        return generator;
      }),
    );
  };

  return (
    <div className={styles.app}>
      <Space
        direction="horizontal"
        style={{ width: '100%' }}
        className={styles.container}
      >
        {generators.map((generator) => (
          <div key={generator.id} className={styles.box}>
            <Row gutter={16} className={styles.formRow}>
              <Col className="gutter-row" offset={2} span={6}>
                <label>子系统名称</label>
              </Col>
              <Col className="gutter-row" span={14}>
                <Input
                  placeholder="名称"
                  //    value={generator.name}
                  className={styles.input}
                  onChange={(e) =>
                    updateGenerator(generator.id, 'name', e.target.value)
                  }
                />
              </Col>
            </Row>
            <Row gutter={16} className={styles.formRow}>
              <Col className="gutter-row" offset={2} span={6}>
                <label>简介</label>
              </Col>
              <Col className="gutter-row" span={14}>
                <Input
                  placeholder="简介"
                  //    value={generator.name}
                  className={styles.input}
                  onChange={(e) =>
                    updateGenerator(generator.id, 'name', e.target.value)
                  }
                />
              </Col>
            </Row>
            <Row gutter={16} className={styles.formRow}>
              <Col className="gutter-row" offset={2} span={6}>
                <label>技术人员id</label>
              </Col>
              <Col className="gutter-row" span={14}>
                <Input
                  placeholder="技术人员id"
                  //    value={generator.name}
                  className={styles.input}
                  onChange={(e) =>
                    updateGenerator(generator.id, 'name', e.target.value)
                  }
                />
              </Col>
            </Row>
            <Row gutter={16} className={styles.formRow}>
              <Col className="gutter-row" offset={2} span={6}>
                <label>验收人员id</label>
              </Col>
              <Col className="gutter-row" span={14}>
                <Input
                  placeholder="验收人员id"
                  //    value={generator.name}
                  className={styles.input}
                  onChange={(e) =>
                    updateGenerator(generator.id, 'name', e.target.value)
                  }
                />
              </Col>
            </Row>
            <Row gutter={16} className={styles.formRow}>
              <Col className="gutter-row" offset={2} span={6}>
                <label>状态</label>
              </Col>
              <Col className="gutter-row" span={14}>
                <Select
                  placeholder="请选择该系统状态"
                  // value={generator.status}
                  onChange={(value) =>
                    updateGenerator(generator.id, 'status', value)
                  }
                >
                  <Option value="1">施工中中</Option>
                  <Option value="2">启动验收中</Option>
                  <Option value="3">生产验收中</Option>
                  <Option value="4">竣工验收中</Option>
                  <Option value="5">施工完成</Option>
                </Select>
              </Col>
            </Row>
            <Row gutter={16} className={styles.formRow}>
              <Col className="gutter-row" offset={2} span={6}>
                <label>备注</label>
              </Col>
              <Col className="gutter-row" span={14}>
                <TextArea
                  placeholder="备注"
                  //  value={generator.note}
                  onChange={(e) =>
                    updateGenerator(generator.id, 'note', e.target.value)
                  }
                />
              </Col>
            </Row>
            <Row gutter={16} className={styles.formRow}>
              <Col className="gutter-row" offset={3} span={8}>
                <Button
                  type="primary"
                  icon={<SaveOutlined />}
                  onClick={() => removeGenerator(generator.id)}
                >
                  保存
                </Button>
              </Col>
              <Col className="gutter-row" offset={3} span={8}>
                <Button
                  type="primary"
                  danger
                  icon={<MinusCircleOutlined />}
                  onClick={() => removeGenerator(generator.id)}
                >
                  删除
                </Button>
              </Col>
            </Row>
          </div>
        ))}
        <div className={styles.box} onClick={addGenerator}>
          <div className={styles.addBox}>
            <Text type="success" style={{ cursor: 'pointer' }}>
              <PlusOutlined /> 添加
            </Text>
          </div>
        </div>
      </Space>
    </div>
  );
};

export default App;
