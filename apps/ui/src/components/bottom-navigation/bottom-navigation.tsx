import { Tabs } from '@mantine/core';
import { useNavigate, useParams } from 'react-router-dom';
import { IconBrandFeedly, IconChartBar, IconBottle } from '@tabler/icons-react';

const BottomNavigation: React.FC = () => {
  const navigate = useNavigate();
  const { tabValue } = useParams();

  return (
    <Tabs
      styles={{
        root: { width: '100%' },
        list: {
          width: '100%',
          display: 'flex',
        },
        tab: {
          width: '33.333%',
        },
      }}
      inverted
      value={tabValue}
      onChange={(value) => navigate(`/${value}`)}
    >
      <Tabs.List justify="center">
        <Tabs.Tab value={'stats'}>
          <IconChartBar /> <p>stats</p>
        </Tabs.Tab>
        <Tabs.Tab value={'follow'}>
          <IconBrandFeedly />
          <p>friends</p>
        </Tabs.Tab>
        <Tabs.Tab value={'profile'}>
          <IconBottle /> <p>profile</p>
        </Tabs.Tab>
      </Tabs.List>
    </Tabs>
  );
};

export { BottomNavigation };
