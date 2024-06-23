import { Tabs } from '@mantine/core';
import { useNavigate, useParams } from 'react-router-dom';
import { IconBrandFeedly, IconChartBar, IconBottle } from '@tabler/icons-react';

const BottomNavigation: React.FC = () => {
  const navigate = useNavigate();
  const { tabValue } = useParams();

  return (
    <Tabs value={tabValue} onChange={(value) => navigate(`/${value}`)}>
      <Tabs.List grow>
        <Tabs.Tab value={'stats'}>
          <IconChartBar />
        </Tabs.Tab>
        <Tabs.Tab value={'follow'}>
          <IconBrandFeedly />
        </Tabs.Tab>
        <Tabs.Tab value={'profile'}>
          <IconBottle />
        </Tabs.Tab>
      </Tabs.List>
    </Tabs>
  );
};

export { BottomNavigation };
