import React, { useState } from 'react';
import './App.css';
import ButtonDemo from './demos/ButtonDemo';
import InputDemo from './demos/InputDemo';
import SelectDemo from './demos/SelectDemo';
import SwitchDemo from './demos/SwitchDemo';
import ModalDemo from './demos/ModalDemo';
import TooltipDemo from './demos/TooltipDemo';
import BadgeDemo from './demos/BadgeDemo';
import TagDemo from './demos/TagDemo';
import CardDemo from './demos/CardDemo';
import DividerDemo from './demos/DividerDemo';
import CollapseDemo from './demos/CollapseDemo';
import AvatarDemo from './demos/AvatarDemo';

type ComponentName =
  | 'Button'
  | 'Input'
  | 'Select'
  | 'Switch'
  | 'Modal'
  | 'Tooltip'
  | 'Badge'
  | 'Tag'
  | 'Card'
  | 'Divider'
  | 'Collapse'
  | 'Avatar';

const COMPONENTS: { name: ComponentName; description: string }[] = [
  { name: 'Button', description: 'Sticker-style action buttons' },
  { name: 'Input', description: 'Text input fields' },
  { name: 'Select', description: 'Dropdown selector' },
  { name: 'Switch', description: 'Toggle switch control' },
  { name: 'Modal', description: 'Overlay dialog' },
  { name: 'Tooltip', description: 'Hover hint tooltip' },
  { name: 'Badge', description: 'Status label badges' },
  { name: 'Tag', description: 'Categorization tags' },
  { name: 'Card', description: 'Content card container' },
  { name: 'Divider', description: 'Section separator' },
  { name: 'Collapse', description: 'Expand/collapse panels' },
  { name: 'Avatar', description: 'User avatar display' },
];

const DEMOS: Record<ComponentName, React.FC> = {
  Button: ButtonDemo,
  Input: InputDemo,
  Select: SelectDemo,
  Switch: SwitchDemo,
  Modal: ModalDemo,
  Tooltip: TooltipDemo,
  Badge: BadgeDemo,
  Tag: TagDemo,
  Card: CardDemo,
  Divider: DividerDemo,
  Collapse: CollapseDemo,
  Avatar: AvatarDemo,
};

const App: React.FC = () => {
  const [active, setActive] = useState<ComponentName>('Button');
  const [activeTab, setActiveTab] = useState<'preview' | 'code'>('preview');
  const DemoComponent = DEMOS[active];

  return (
    <div className="app">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="sidebar__header">
          <span className="sidebar__logo">🌿</span>
          <div>
            <div className="sidebar__title">Ghibli UI</div>
            <div className="sidebar__subtitle">Component Library</div>
          </div>
        </div>
        <nav className="sidebar__nav">
          {COMPONENTS.map((c) => (
            <button
              key={c.name}
              className={`sidebar__item ${active === c.name ? 'sidebar__item--active' : ''}`}
              onClick={() => setActive(c.name)}
            >
              <span className="sidebar__item-name">{c.name}</span>
              <span className="sidebar__item-desc">{c.description}</span>
            </button>
          ))}
        </nav>
        <div className="sidebar__footer">
          <div className="sidebar__footer-text">v0.1.0 — Made with 🌿</div>
        </div>
      </aside>

      {/* Main */}
      <main className="main">
        <div className="main__header">
          <div>
            <h1 className="main__title">{active}</h1>
            <p className="main__desc">
              {COMPONENTS.find((c) => c.name === active)?.description}
            </p>
          </div>
          <div className="tabs">
            <button
              className={`tabs__tab ${activeTab === 'preview' ? 'tabs__tab--active' : ''}`}
              onClick={() => setActiveTab('preview')}
            >
              Preview
            </button>
            <button
              className={`tabs__tab ${activeTab === 'code' ? 'tabs__tab--active' : ''}`}
              onClick={() => setActiveTab('code')}
            >
              Code
            </button>
          </div>
        </div>

        <div className="main__content">
          {activeTab === 'preview' ? (
            <DemoComponent />
          ) : (
            <pre className="code-block">{getCode(active)}</pre>
          )}
        </div>
      </main>
    </div>
  );
};

function getCode(name: ComponentName): string {
  const codes: Record<ComponentName, string> = {
    Button: `import { Button } from 'ghibli-ui';

<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="danger">Danger</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="link">Link</Button>
<Button size="sm">Small</Button>
<Button size="lg">Large</Button>
<Button loading>Loading</Button>`,
    Input: `import { Input } from 'ghibli-ui';

<Input placeholder="Enter text..." />
<Input size="sm" placeholder="Small" />
<Input size="lg" placeholder="Large" />
<Input error="This field is required" />
<Input prefix="📧" placeholder="Email" />`,
    Select: `import { Select } from 'ghibli-ui';

<Select
  placeholder="Choose..."
  options={[
    { label: 'Apple', value: 'apple' },
    { label: 'Banana', value: 'banana' },
    { label: 'Cherry', value: 'cherry' },
  ]}
/>`,
    Switch: `import { Switch } from 'ghibli-ui';

<Switch label="Enable notifications" />
<Switch size="sm" defaultChecked />
<Switch size="lg" label="Full access" />`,
    Modal: `import { Modal, Button } from 'ghibli-ui';

const [open, setOpen] = useState(false);

<Button onClick={() => setOpen(true)}>Open Modal</Button>
<Modal
  open={open}
  onClose={() => setOpen(false)}
  title="Ghibli Modal"
  footer={<Button onClick={() => setOpen(false)}>Close</Button>}
>
  Welcome to the forest! 🌲
</Modal>`,
    Tooltip: `import { Tooltip } from 'ghibli-ui';

<Tooltip content="This is a hint" placement="top">
  <button>Hover me</button>
</Tooltip>`,
    Badge: `import { Badge } from 'ghibli-ui';

<Badge variant="primary">Primary</Badge>
<Badge variant="success">Success</Badge>
<Badge variant="warning">Warning</Badge>
<Badge variant="danger">5</Badge>
<Badge variant="ghost" count={0} showZero />`,
    Tag: `import { Tag } from 'ghibli-ui';

<Tag>Default</Tag>
<Tag variant="success">Ghibli Forest</Tag>
<Tag variant="warning">Magic</Tag>
<Tag variant="danger" closable onClose={...}>Removable</Tag>`,
    Card: `import { Card, Button } from 'ghibli-ui';

<Card
  title="My Neighbor Totoro"
  subtitle="Studio Ghibli, 1988"
  hoverable
  footer={<Button size="sm">Watch Now</Button>}
>
  <p>Two sisters move to the country...</p>
</Card>`,
    Divider: `import { Divider } from 'ghibli-ui';

<Divider />
<Divider dashed />
<Divider orientation="vertical" />
<Divider>with text</Divider>`,
    Collapse: `import { Collapse } from 'ghibli-ui';

<Collapse
  panels={[
    { header: 'Chapter 1', children: 'Once upon a time...' },
    { header: 'Chapter 2', children: 'The adventure begins.' },
  ]}
/>`,
    Avatar: `import { Avatar } from 'ghibli-ui';

<Avatar name="Satsuki Kusakabe" />
<Avatar name="Mei Kusakabe" size="xl" status="online" />
<Avatar src="/totoro.png" alt="Totoro" size="lg" />`,
  };
  return codes[name] || '// coming soon';
}

export default App;
