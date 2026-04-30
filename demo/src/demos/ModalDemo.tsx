import React, { useState } from 'react';
import { Modal, Button } from '../../../src/index';

const ModalDemo: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [openSm, setOpenSm] = useState(false);
  const [openLg, setOpenLg] = useState(false);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
      <section>
        <h2 style={{ fontSize: 18, fontWeight: 800, marginBottom: 16, color: '#5C4A32' }}>Sizes</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
          <Button onClick={() => setOpenSm(true)}>Small Modal</Button>
          <Button onClick={() => setOpen(true)}>Medium Modal</Button>
          <Button onClick={() => setOpenLg(true)}>Large Modal</Button>
        </div>
      </section>

      <Modal
        open={open}
        onClose={() => setOpen(false)}
        title="Spirited Away"
        footer={
          <div style={{ display: 'flex', gap: 8 }}>
            <Button variant="ghost" onClick={() => setOpen(false)}>Cancel</Button>
            <Button variant="primary" onClick={() => setOpen(false)}>Enter</Button>
          </div>
        }
      >
        <p style={{ lineHeight: 1.7, color: '#8B7355' }}>
          During her family's move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches, and spirits, where humans are changed into beasts.
        </p>
      </Modal>

      <Modal
        open={openSm}
        onClose={() => setOpenSm(false)}
        title="Small Window"
        size="sm"
        footer={<Button size="sm" onClick={() => setOpenSm(false)}>Got it!</Button>}
      >
        <p style={{ lineHeight: 1.7, color: '#8B7355' }}>A compact modal for brief messages.</p>
      </Modal>

      <Modal
        open={openLg}
        onClose={() => setOpenLg(false)}
        title="Studio Ghibli Films"
        size="lg"
        footer={<Button onClick={() => setOpenLg(false)}>Close</Button>}
      >
        <p style={{ lineHeight: 1.7, color: '#8B7355', marginBottom: 12 }}>
          Studio Ghibli was founded in 1985 by Hayao Miyazaki and Isao Takahata. Their films are known for their lush watercolor-style animation, strong storytelling, and themes of nature, mythology, and the magic of childhood.
        </p>
        <p style={{ lineHeight: 1.7, color: '#8B7355' }}>
          Notable films include My Neighbor Totoro, Princess Mononoke, Spirited Away, Howl's Moving Castle, and The Wind Rises.
        </p>
      </Modal>
    </div>
  );
};

export default ModalDemo;
