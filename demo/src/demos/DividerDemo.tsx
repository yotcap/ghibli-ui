import React from 'react';
import { Divider } from '../../../src/index';

const DividerDemo: React.FC = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
      <section>
        <h2 style={{ fontSize: 18, fontWeight: 800, marginBottom: 16, color: '#5C4A32' }}>Basic</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <p style={{ color: '#8B7355', fontSize: 14 }}>Above the divider</p>
          <Divider />
          <p style={{ color: '#8B7355', fontSize: 14 }}>Below the divider</p>
        </div>
      </section>

      <section>
        <h2 style={{ fontSize: 18, fontWeight: 800, marginBottom: 16, color: '#5C4A32' }}>With Text</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <Divider>Studio Ghibli</Divider>
          <Divider>Film List</Divider>
        </div>
      </section>

      <section>
        <h2 style={{ fontSize: 18, fontWeight: 800, marginBottom: 16, color: '#5C4A32' }}>Dashed</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <Divider dashed />
          <Divider dashed>Chapter One</Divider>
        </div>
      </section>

      <section>
        <h2 style={{ fontSize: 18, fontWeight: 800, marginBottom: 16, color: '#5C4A32' }}>Spacing</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <Divider spacing="sm" />
          <Divider spacing="md" />
          <Divider spacing="lg" />
        </div>
      </section>

      <section>
        <h2 style={{ fontSize: 18, fontWeight: 800, marginBottom: 16, color: '#5C4A32' }}>Vertical</h2>
        <div style={{ display: 'flex', flexDirection: 'row', gap: 16, alignItems: 'center', height: 80 }}>
          <span style={{ color: '#5C4A32', fontWeight: 700 }}>Totoro</span>
          <Divider orientation="vertical" />
          <span style={{ color: '#5C4A32', fontWeight: 700 }}>Chihiro</span>
          <Divider orientation="vertical" />
          <span style={{ color: '#5C4A32', fontWeight: 700 }}>Howl</span>
        </div>
      </section>
    </div>
  );
};

export default DividerDemo;
