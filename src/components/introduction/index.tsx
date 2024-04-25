import styles from './index.less';

interface Node {
  color: string;
  introduce: string;
}

interface Introduce {
  data: Node[];
}

const Introduction = ({ data }: Introduce) => {
  const IntroduceItem = ({ color, introduce }: Node) => {
    const boxStyle = {
      backgroundColor: color,
    };
    return (
      <div className={styles.itemBox}>
        <div className={styles.colorBox} style={boxStyle}></div>
        <p className={styles.introduceBox}>{introduce}</p>
      </div>
    );
  };

  return (
    <div className={styles.container}>
      {data.map((item) => {
        return (
          <IntroduceItem
            key={item.color}
            color={item.color}
            introduce={item.introduce}
          />
        );
      })}
    </div>
  );
};

export default Introduction;
