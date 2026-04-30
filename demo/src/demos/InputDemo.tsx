import React, { useState } from 'react';
import { Input } from '../../../src/index';

const InputDemo: React.FC = () => {
  const [val, setVal] = useState('');

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
      <section>
        <h2 style={{ fontSize: 18, fontWeight: 800, marginBottom: 16, color: '#5C4A32' }}>Sizes</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, maxWidth: 360 }}>
          <Input size="sm" placeholder="Small input" />
          <Input size="md" placeholder="Medium input" />
          <Input size="lg" placeholder="Large input" />
        </div>
      </section>

      <section>
        <h2 style={{ fontSize: 18, fontWeight: 800, marginBottom: 16, color: '#5C4A32' }}>States</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, maxWidth: 360 }}>
          <Input placeholder="Default" />
          <Input value={val} onChange={(e: any) => setVal(e.target.value)} placeholder="Controlled" />
          <Input error="This field is required" placeholder="With error" />
          <Input disabled placeholder="Disabled" />
        </div>
      </section>

      <section>
        <h2 style={{ fontSize: 18, fontWeight: 800, marginBottom: 16, color: '#5C4A32' }}>With Prefix / Suffix</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, maxWidth: 360 }}>
          <Input addonBefore="📧" placeholder="Email address" />
          <Input addonAfter="@ghibli.com" placeholder="Username" />
        </div>
      </section>
    </div>
  );
};

export default InputDemo;
