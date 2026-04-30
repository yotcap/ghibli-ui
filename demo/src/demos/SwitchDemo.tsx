import React, { useState } from 'react';
import { Switch } from '../../../src/index';

const SwitchDemo: React.FC = () => {
  const [checked, setChecked] = useState(false);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
      <section>
        <h2 style={{ fontSize: 18, fontWeight: 800, marginBottom: 16, color: '#5C4A32' }}>Sizes</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 20, alignItems: 'center' }}>
          <Switch size="sm" label="Small" />
          <Switch size="md" label="Medium" />
          <Switch size="lg" label="Large" />
        </div>
      </section>

      <section>
        <h2 style={{ fontSize: 18, fontWeight: 800, marginBottom: 16, color: '#5C4A32' }}>States</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 20, alignItems: 'center' }}>
          <Switch defaultChecked label="Default checked" />
          <Switch label={`Controlled: ${checked ? 'On' : 'Off'}`} checked={checked} onChange={setChecked} />
          <Switch disabled label="Disabled off" />
          <Switch defaultChecked disabled label="Disabled on" />
        </div>
      </section>
    </div>
  );
};

export default SwitchDemo;
