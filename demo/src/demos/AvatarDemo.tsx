import React from 'react';
import { Avatar } from '../../../src/index';

const AvatarDemo: React.FC = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
      <section>
        <h2 style={{ fontSize: 18, fontWeight: 800, marginBottom: 16, color: '#5C4A32' }}>Sizes</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, alignItems: 'center' }}>
          <Avatar name="Totoro" size="sm" />
          <Avatar name="Satsuki Kusakabe" size="md" />
          <Avatar name="Mei Kusakabe" size="lg" />
          <Avatar name="Calcifer" size="xl" />
        </div>
      </section>

      <section>
        <h2 style={{ fontSize: 18, fontWeight: 800, marginBottom: 16, color: '#5C4A32' }}>With Status</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, alignItems: 'center' }}>
          <Avatar name="Totoro" status="online" />
          <Avatar name="Chihiro" status="busy" />
          <Avatar name="Howl" status="offline" />
          <Avatar name="No Face" size="lg" status="online" />
        </div>
      </section>

      <section>
        <h2 style={{ fontSize: 18, fontWeight: 800, marginBottom: 16, color: '#5C4A32' }}>Avatar Group (simulated)</h2>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div style={{ display: 'flex' }}>
            {['Totoro', 'Chihiro', 'Howl', 'Kiki'].map((name, i) => (
              <div key={name} style={{ marginLeft: i === 0 ? 0 : -10, zIndex: 4 - i }}>
                <Avatar name={name} size="md" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <h2 style={{ fontSize: 18, fontWeight: 800, marginBottom: 16, color: '#5C4A32' }}>Shape</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, alignItems: 'center' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
            <Avatar name="Princess Mononoke" shape="circle" size="lg" />
            <span style={{ fontSize: 12, color: '#A89880' }}>Circle</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
            <Avatar name="Haku" shape="square" size="lg" />
            <span style={{ fontSize: 12, color: '#A89880' }}>Square</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AvatarDemo;
