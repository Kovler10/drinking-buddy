import { Flex, Tabs } from '@mantine/core';
import { useNavigate, useParams } from 'react-router-dom';
import { IconBrandFeedly, IconChartBar, IconBottle } from '@tabler/icons-react';

const BottomNavigation: React.FC = () => {
  const navigate = useNavigate();
  const { tabValue } = useParams();

  return (
    <Tabs inverted value={tabValue} onChange={(value) => navigate(`/${value}`)}>
      <Tabs.List grow>
        <Tabs.Tab value={'stats'}>
          <Flex direction={'column'} align={'center'}>
            <IconChartBar />
            <p>stats</p>
          </Flex>
        </Tabs.Tab>
        <Tabs.Tab value={'follow'}>
          <Flex direction={'column'} align={'center'}>
            <IconBrandFeedly />
            <p>friends</p>
          </Flex>
        </Tabs.Tab>
        <Tabs.Tab value={'profile'}>
          <Flex direction={'column'} align={'center'}>
            <IconBottle />
            <p>profile</p>
          </Flex>
        </Tabs.Tab>
      </Tabs.List>
    </Tabs>
  );
};

export { BottomNavigation };
