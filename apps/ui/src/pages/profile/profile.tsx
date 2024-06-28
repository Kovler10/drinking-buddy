import { useMemo, useState } from 'react';
import { PieChart } from '@mantine/charts';
import { ActionIcon, Flex, Text } from '@mantine/core';
import { IconBottle, IconCoffee, IconCup } from '@tabler/icons-react';

import { PageHeader } from '../../components/page-header/page-header';

const baseData = [
  { name: 'amount drank', value: 0, color: '#0066cc' },
  { name: 'amount to drink', value: 3700, color: 'grey' },
];

const Profile: React.FC = () => {
  const [chartData, setChartData] = useState(baseData);

  const updateChart = (amount: number) => {
    setChartData((prev) => [
      { ...prev[0], value: prev[0].value + amount },
      { ...prev[1], value: prev[1].value - amount },
    ]);
  };

  const reachedRecommendedAmount = useMemo(
    () => chartData[1].value <= 0,
    [chartData],
  );

  return (
    <Flex direction={'column'} mb={'80px'}>
      <PageHeader title="Profile" />

      <PieChart
        strokeWidth={2}
        data={chartData}
        styles={{ root: { height: '500px' } }}
      />

      <Flex justify={'center'} my={'sm'}>
        {reachedRecommendedAmount ? (
          <Text size={'sm'}>
            You have reached the recommended amount of water!
          </Text>
        ) : (
          <Text size={'sm'}>
            Click to log the amount of water you drink today
          </Text>
        )}
      </Flex>

      <Flex justify={'center'}>
        <Flex direction={'column'} mx={'sm'} align={'center'}>
          <ActionIcon
            size={'xl'}
            radius={'lg'}
            onClick={() => updateChart(750)}
            disabled={reachedRecommendedAmount}
          >
            <IconBottle />
          </ActionIcon>
          <Text>750ml</Text>
        </Flex>
        <Flex direction={'column'} mx={'sm'} align={'center'}>
          <ActionIcon
            size={'xl'}
            radius={'lg'}
            onClick={() => updateChart(30)}
            disabled={reachedRecommendedAmount}
          >
            <IconCoffee />
          </ActionIcon>
          <Text>30ml</Text>
        </Flex>
        <Flex direction={'column'} mx="sm" align={'center'}>
          <ActionIcon
            size={'xl'}
            radius={'lg'}
            onClick={() => updateChart(250)}
            disabled={reachedRecommendedAmount}
          >
            <IconCup />
          </ActionIcon>
          <Text>250ml</Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export { Profile };
