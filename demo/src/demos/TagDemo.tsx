import React, { useState } from 'react';
import { Tag } from '../../../src/index';

const TagDemo: React.FC = () => {
  const [tags, setTags] = useState(['Ghibli', 'Magic', 'Forest 🌲']);

  const removeTag = (tag: string) => setTags(tags.filter((t) => t !== tag));

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
      <section>
        <h2 style={{ fontSize: 18, fontWeight: 800, marginBottom: 16, color: '#5C4A32' }}>Variants</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, alignItems: 'center' }}>
          <Tag variant="primary">Primary</Tag>
          <Tag variant="secondary">Forest</Tag>
          <Tag variant="success">Success</Tag>
          <Tag variant="warning">Warning</Tag>
          <Tag variant="danger">Danger</Tag>
          <Tag variant="ghost">Ghost</Tag>
        </div>
      </section>

      <section>
        <h2 style={{ fontSize: 18, fontWeight: 800, marginBottom: 16, color: '#5C4A32' }}>Sizes</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, alignItems: 'center' }}>
          <Tag variant="primary" size="sm">Small</Tag>
          <Tag variant="secondary" size="md">Medium</Tag>
          <Tag variant="warning" size="lg">Large</Tag>
        </div>
      </section>

      <section>
        <h2 style={{ fontSize: 18, fontWeight: 800, marginBottom: 16, color: '#5C4A32' }}>Closable</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, alignItems: 'center' }}>
          {tags.map((tag) => (
            <Tag key={tag} variant="primary" closable onClose={() => removeTag(tag)}>
              {tag}
            </Tag>
          ))}
        </div>
      </section>

      <section>
        <h2 style={{ fontSize: 18, fontWeight: 800, marginBottom: 16, color: '#5C4A32' }}>Custom Color</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, alignItems: 'center' }}>
          <Tag color="#C97B5D">Terracotta</Tag>
          <Tag color="#6B8E6B">Forest Green</Tag>
          <Tag color="#B8D4E3">Sky Blue</Tag>
          <Tag color="#9B6B9E">Lavender</Tag>
        </div>
      </section>
    </div>
  );
};

export default TagDemo;
