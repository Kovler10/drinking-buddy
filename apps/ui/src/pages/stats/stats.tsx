import { Flex } from '@mantine/core';
import { PageHeader } from '../../components/page-header/page-header';

const Stats: React.FC = () => {
  return (
    <Flex direction={'column'}>
      <PageHeader title={'Stats'} />
    </Flex>
  );
};

export { Stats };
