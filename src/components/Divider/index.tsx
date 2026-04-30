import React from 'react';
import styles from './Divider.module.less';

export interface DividerProps {
  orientation?: 'horizontal' | 'vertical';
  children?: React.ReactNode;
  dashed?: boolean;
  color?: string;
  spacing?: 'sm' | 'md' | 'lg';
}

const Divider: React.FC<DividerProps> = ({
  orientation = 'horizontal',
  children,
  dashed = false,
  color,
  spacing = 'md',
}) => {
  const style = color ? { borderColor: color } : undefined;

  if (children) {
    return (
      <div
        className={[
          styles.divider,
          styles[`divider--${orientation}`],
          styles[`divider--${spacing}`],
          dashed ? styles['divider--dashed'] : '',
        ].filter(Boolean).join(' ')}
      >
        <span className={styles.text}>{children}</span>
      </div>
    );
  }

  return (
    <div
      className={[
        styles.divider,
        styles[`divider--${orientation}`],
        styles[`divider--${spacing}`],
        dashed ? styles['divider--dashed'] : '',
      ].filter(Boolean).join(' ')}
      style={style}
    />
  );
};

export default Divider;
