import React from 'react';
import { Flex } from '@mantine/core';
import { useParams } from 'react-router-dom';

import { Stats } from './stats/stats';
import { Follow } from './follow/follow';
import { Profile } from './profile/profile';
import { BottomNavigation } from '../components/bottom-navigation/bottom-navigation';

const pages: Record<string, React.ReactElement> = {
  follow: <Follow />,
  stats: <Stats />,
  profile: <Profile />,
};

const Page: React.FC = () => {
  const { tabValue } = useParams();

  return (
    <Flex
      styles={{
        root: {
          padding: 0,
          height: '100vh',
          flexDirection: 'column',
          justifyContent: 'space-between',
        },
      }}
    >
      {pages[tabValue ?? 'profile']}
      <BottomNavigation />
    </Flex>
  );
};

export { Page };
