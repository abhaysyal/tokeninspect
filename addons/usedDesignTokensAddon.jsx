// .storybook/addons/usedDesignTokensAddon.js
import React from 'react';
import { addons, types } from '@storybook/manager-api';
import { useParameter } from '@storybook/api';
import { Panel } from '@storybook/components';
import { collectTokens } from '../../src/utils/tokenUtil'; // Adjust path as necessary

const UsedDesignTokensPanel = () => {
  const parameters = useParameter('designTokens', {});
  const tokens = parameters?.tokens || [];

  return (
    <Panel style={{ padding: '10px', height: '100%' }}>
      <strong>Used Design Tokens:</strong>
      <ul>
        {tokens.map((token, index) => (
          <li key={index}>{token}</li>
        ))}
      </ul>
    </Panel>
  );
};

addons.add('used-design-tokens', {
  title: 'Used Design Tokens',
  type: types.PANEL,
  render: ({ active, key }) => (
    <div key={key} style={{ height: '100%' }}>
      {active ? <UsedDesignTokensPanel /> : null}
    </div>
  ),
  paramKey: 'designTokens',
});
