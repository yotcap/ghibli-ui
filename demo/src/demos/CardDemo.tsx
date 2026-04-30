import React from 'react';
import { Card, Button, Badge } from '../../../src/index';

const CardDemo: React.FC = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
      <section>
        <h2 style={{ fontSize: 18, fontWeight: 800, marginBottom: 16, color: '#5C4A32' }}>Basic Cards</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 20 }}>
          <Card
            title="My Neighbor Totoro"
            subtitle="Studio Ghibli, 1988"
          >
            <p style={{ color: '#8B7355', lineHeight: 1.7, fontSize: 14 }}>
              Two sisters move to the country and encounter forest spirits. A gentle, heartwarming tale of childhood and nature.
            </p>
          </Card>

          <Card
            title="Princess Mononoke"
            subtitle="Studio Ghibli, 1997"
          >
            <p style={{ color: '#8B7355', lineHeight: 1.7, fontSize: 14 }}>
              A prince becomes involved in a struggle between forest gods and a mining colony, exploring themes of nature vs. industry.
            </p>
          </Card>
        </div>
      </section>

      <section>
        <h2 style={{ fontSize: 18, fontWeight: 800, marginBottom: 16, color: '#5C4A32' }}>Hoverable Cards</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 20 }}>
          <Card
            title="Spirited Away"
            subtitle="Academy Award Winner, 2003"
            hoverable
            footer={<Button size="sm" variant="primary">Watch Now</Button>}
          >
            <p style={{ color: '#8B7355', lineHeight: 1.7, fontSize: 14 }}>
              A girl enters a magical bathhouse to rescue her parents. Studio Ghibli's most acclaimed film.
            </p>
          </Card>

          <Card
            title="Howl's Moving Castle"
            subtitle="Studio Ghibli, 2004"
            hoverable
            footer={<Button size="sm" variant="secondary">Watch Now</Button>}
          >
            <p style={{ color: '#8B7355', lineHeight: 1.7, fontSize: 14 }}>
              A girl is cursed into old age by a witch and seeks refuge in a moving castle with a mysterious wizard.
            </p>
          </Card>
        </div>
      </section>

      <section>
        <h2 style={{ fontSize: 18, fontWeight: 800, marginBottom: 16, color: '#5C4A32' }}>Card Padding Variants</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
          <Card title="No padding" padding="none">
            <div style={{ padding: 16, background: '#F7F3E8', fontSize: 13 }}>
              This card has no body padding.
            </div>
          </Card>
          <Card title="Small" padding="sm">
            <p style={{ fontSize: 13, color: '#8B7355' }}>Small padding.</p>
          </Card>
          <Card title="Large" padding="lg">
            <p style={{ fontSize: 13, color: '#8B7355' }}>Large padding here.</p>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default CardDemo;
