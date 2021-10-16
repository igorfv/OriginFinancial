import Title from '@origin-financial/title'

export function Index() {
  return (
    <Title>Let&lsquo;s plan your <strong>saving goal.</strong></Title>
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
  }

  return {
    meta,
  }
}

export default Index;
