export function Index() {
  return (
    <div>Hello</div>
  );
}

interface IMeta {
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
