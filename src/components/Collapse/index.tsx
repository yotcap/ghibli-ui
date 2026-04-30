import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import styles from './Collapse.module.less';

export interface CollapsePanelProps {
  key?: string;
  header: React.ReactNode;
  children?: React.ReactNode;
  disabled?: boolean;
  defaultOpen?: boolean;
}

export interface CollapseProps {
  panels: CollapsePanelProps[];
  accordion?: boolean;
  defaultActiveKey?: string[];
  onChange?: (activeKeys: string[]) => void;
  ghost?: boolean;
}

const CollapsePanel: React.FC<CollapsePanelProps & {
  isOpen: boolean;
  onToggle: () => void;
  ghost?: boolean;
}> = ({ header, children, disabled, isOpen, onToggle, ghost }) => {
  if (disabled) {
    return (
      <div className={[styles.panel, styles['panel--disabled']].join(' ')}>
        <div className={styles.header}>{header}</div>
      </div>
    );
  }

  return (
    <div className={[styles.panel, ghost ? styles['panel--ghost'] : ''].filter(Boolean).join(' ')}>
      <button
        className={styles.header}
        onClick={onToggle}
        aria-expanded={isOpen}
        type="button"
      >
        <span className={styles.headerText}>{header}</span>
        <ChevronDown
          size={18}
          className={[styles.arrow, isOpen ? styles['arrow--open'] : ''].filter(Boolean).join(' ')}
        />
      </button>
      <div className={[styles.body, isOpen ? styles['body--open'] : ''].filter(Boolean).join(' ')}>
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  );
};

const Collapse: React.FC<CollapseProps> = ({
  panels,
  accordion = false,
  defaultActiveKey = [],
  onChange,
  ghost = false,
}) => {
  const [internalActive, setInternalActive] = useState<string[]>(defaultActiveKey);

  const isControlled = false; // no controlled mode for now

  const activeKeys = internalActive;

  const handleToggle = (key: string) => {
    let next: string[];
    if (accordion) {
      next = activeKeys.includes(key) ? [] : [key];
    } else {
      next = activeKeys.includes(key)
        ? activeKeys.filter((k) => k !== key)
        : [...activeKeys, key];
    }
    setInternalActive(next);
    onChange?.(next);
  };

  return (
    <div className={styles.collapse}>
      {panels.map((panel, idx) => {
        const key = panel.key ?? String(idx);
        return (
          <CollapsePanel
            key={key}
            {...panel}
            isOpen={activeKeys.includes(key)}
            onToggle={() => handleToggle(key)}
            ghost={ghost}
          />
        );
      })}
    </div>
  );
};

export default Collapse;
