import React from 'react';
import { Steps, Button } from 'antd';
import styles from './index.less';

const { Step } = Steps;

export default function IndexPage() {
  return (
    <main className={styles['main-wrap']}>
      <header className={styles['header']}>
        <img
          src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic1.zhimg.com%2F50%2Fv2-5c845ab0a765fa412b75948102b8f2a8_hd.jpg&refer=http%3A%2F%2Fpic1.zhimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1645195498&t=04c94b43639282a82cfa25c7a56a4e08"
          className={styles['header-img']}
        />
      </header>
      <section className={styles['step-wrap']}>
        <Steps direction="vertical" current={1}>
          <Step title="startTime" description="告警时间" />
          <Step title="responseTime" description="相应时间" />
          <Step title="acceptTime" description="接手时间" />
          <Step title="recoverTime" description="恢复时间" />
          <Step title="closeTime" description="关闭时间" />
        </Steps>
      </section>
      <footer>
        <Button className={styles['action-button']} size="large">
          接手
        </Button>
        <Button className={styles['action-button']} size="large">
          结束
        </Button>
      </footer>
    </main>
  );
}
