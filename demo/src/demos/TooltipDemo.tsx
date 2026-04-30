import React from 'react';
import { Tooltip, Button } from '../../../src/index';

const TooltipDemo: React.FC = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
      <section>
        <h2 style={{ fontSize: 18, fontWeight: 800, marginBottom: 16, color: '#5C4A32' }}>Placement</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, alignItems: 'center' }}>
          <Tooltip content="Top tooltip" placement="top">
            <Button variant="ghost" size="sm">Top</Button>
          </Tooltip>
          <Tooltip content="Bottom tooltip" placement="bottom">
            <Button variant="ghost" size="sm">Bottom</Button>
          </Tooltip>
          <Tooltip content="Left tooltip" placement="left">
            <Button variant="ghost" size="sm">Left</Button>
          </Tooltip>
          <Tooltip content="Right tooltip" placement="right">
            <Button variant="ghost" size="sm">Right</Button>
          </Tooltip>
        </div>
      </section>

      <section>
        <h2 style={{ fontSize: 18, fontWeight: 800, marginBottom: 16, color: '#5C4A32' }}>Interactive</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16 }}>
          <Tooltip content="Click the forest to explore">
            <Button variant="primary">Explore the Forest 🌲</Button>
          </Tooltip>
          <Tooltip content="Magic wand reveals spells">
            <Button variant="secondary">Cast Spell ✨</Button>
          </Tooltip>
          <Tooltip content="Danger zone — handle with care">
            <Button variant="danger">Danger ⚠️</Button>
          </Tooltip>
        </div>
      </section>
    </div>
  );
};

export default TooltipDemo;
