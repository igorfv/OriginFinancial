import Title from '@origin-financial/title';
import SavingsSimulator from '@origin-financial/savings-simulator';

import { ReactComponent as Icon } from './buy-a-house.svg';

export function Index() {
  const icon = (<Icon title="buy-a-house"/>);

  return (
    <>
      <Title>Let&lsquo;s plan your <strong>saving goal.</strong></Title>
      <SavingsSimulator icon={icon} goal='Buy a house' />
    </>
  );
}

export interface IMeta {
  title: string,
  description: string,
}

Index.getInitialProps = async () => {
  const meta: IMeta = {
    title: 'Origin - Buy a house',
    description: 'Plan your saving goal',
  };

  return {
    meta,
  };
};

export default Index;
