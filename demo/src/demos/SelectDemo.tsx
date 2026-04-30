import React, { useState } from 'react';
import { Select } from '../../../src/index';
import type { SelectOption } from '../../../src/index';

const OPTIONS: SelectOption[] = [
  { label: 'Howl Moving Castle', value: 'howl' },
  { label: 'My Neighbor Totoro', value: 'totoro' },
  { label: 'Princess Mononoke', value: 'mononoke' },
  { label: 'Spirited Away', value: 'spirited' },
  { label: 'Kiki\'s Delivery Service', value: 'kiki' },
  { label: 'Ponyo', value: 'ponyo' },
  { label: 'Porco Rosso', value: 'rosso' },
  { label: 'Castle in the Sky', value: 'sky' },
];

const SelectDemo: React.FC = () => {
  const [val, setVal] = useState('');

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
      <section>
        <h2 style={{ fontSize: 18, fontWeight: 800, marginBottom: 16, color: '#5C4A32' }}>Sizes</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, maxWidth: 360 }}>
          <Select size="sm" options={OPTIONS} placeholder="Small select" />
          <Select size="md" options={OPTIONS} placeholder="Medium select" />
          <Select size="lg" options={OPTIONS} placeholder="Large select" />
        </div>
      </section>

      <section>
        <h2 style={{ fontSize: 18, fontWeight: 800, marginBottom: 16, color: '#5C4A32' }}>States</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, maxWidth: 360 }}>
          <Select options={OPTIONS} placeholder="Choose a film..." />
          <Select options={OPTIONS} value={val} onChange={(e: any) => setVal(e.target.value)} placeholder="Controlled" />
          <Select options={OPTIONS} error />
          <Select options={OPTIONS} disabled placeholder="Disabled" />
        </div>
      </section>
    </div>
  );
};

export default SelectDemo;
