import React from 'react';
import { Collapse } from '../../../src/index';

const CollapseDemo: React.FC = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
      <section>
        <h2 style={{ fontSize: 18, fontWeight: 800, marginBottom: 16, color: '#5C4A32' }}>Default (multiple open)</h2>
        <div style={{ maxWidth: 500 }}>
          <Collapse
            panels={[
              {
                header: '🌲 My Neighbor Totoro (1988)',
                children: (
                  <p style={{ lineHeight: 1.7, color: '#8B7355' }}>
                    When Satsuki and Mei move to a new home near a forest, they befriend friendly forest spirits including the giant creature Totoro.
                  </p>
                ),
              },
              {
                header: '🛤️ Princess Mononoke (1997)',
                children: (
                  <p style={{ lineHeight: 1.7, color: '#8B7355' }}>
                    Prince Ashitaka contracts a curse and journeys to find a cure, becoming entangled in a conflict between forest gods and humans exploiting the land.
                  </p>
                ),
              },
              {
                header: '✨ Spirited Away (2001)',
                children: (
                  <p style={{ lineHeight: 1.7, color: '#8B7355' }}>
                    Chihiro is trapped in a mysterious bathhouse for spirits after her parents are transformed into pigs. She must work to free herself and them.
                  </p>
                ),
              },
            ]}
          />
        </div>
      </section>

      <section>
        <h2 style={{ fontSize: 18, fontWeight: 800, marginBottom: 16, color: '#5C4A32' }}>Accordion (one at a time)</h2>
        <div style={{ maxWidth: 500 }}>
          <Collapse
            accordion
            defaultActiveKey={['0']}
            panels={[
              { header: 'Howl\'s Moving Castle (2004)', children: 'A curse turns a young woman into an old lady. She seeks refuge in a wizard\'s moving castle.' },
              { header: 'Kiki\'s Delivery Service (1989)', children: 'A young witch starts a flying broom delivery service in a coastal town.' },
              { header: 'Ponyo (2008)', children: 'A goldfish princess escapes the ocean and befriends a boy, causing chaos in the world.' },
            ]}
          />
        </div>
      </section>

      <section>
        <h2 style={{ fontSize: 18, fontWeight: 800, marginBottom: 16, color: '#5C4A32' }}>Ghost Style</h2>
        <div style={{ maxWidth: 500 }}>
          <Collapse
            ghost
            panels={[
              { header: 'Castle in the Sky (1986)', children: 'A girl with a magical stone is pursued by pirates and government agents.' },
              { header: 'The Wind Rises (2013)', children: 'The life of Jiro Horikoshi, the designer of Japanese fighter planes during WWII.' },
            ]}
          />
        </div>
      </section>
    </div>
  );
};

export default CollapseDemo;
