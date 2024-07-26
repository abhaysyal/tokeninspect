// src/components/Button.tsx

import React, { useEffect, useState } from 'react';
import './button.css';
import { typography } from '../tokens';
import { collectTokens } from '../utils/getUsedTokens';

export interface ButtonProps {
  primary?: boolean;
  backgroundColor?: string;
  size?: 'small' | 'medium' | 'large';
  label: string;
  onClick?: () => void;
  fontSize?: string;
}

export const Button = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  fontSize = typography.fontSizeMedium,
  ...props
}: ButtonProps) => {
  const [usedTokens, setUsedTokens] = useState<string[]>([]);
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  const style = { backgroundColor, fontSize };

  useEffect(() => {
    const tokens = collectTokens(style);
    setUsedTokens(tokens);
    console.log('Used Tokens:', tokens);
  }, [style]);

  return (
    <div>
      <button
        type="button"
        className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
        style={style}
        {...props}
      >
        {label}
      </button>
      {usedTokens.length > 0 && (
        <div style={{ marginTop: '10px', fontSize: '12px', color: '#555' }}>
          <strong>Used Tokens:</strong> {usedTokens.join(', ')}
        </div>
      )}
    </div>
  );
};
