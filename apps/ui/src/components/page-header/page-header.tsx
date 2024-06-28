import { IconMenu } from '@tabler/icons-react';
import { ActionIcon, Text, Flex } from '@mantine/core';

interface PageHeaderProps {
  title: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title }) => {
  return (
    <Flex p={'5%'} justify={'space-between'} align={'center'}>
      <Text size={'lg'}>{title}</Text>
      <ActionIcon variant="subtle">
        <IconMenu />
      </ActionIcon>
    </Flex>
  );
};

export { PageHeader };
