import React from 'react';
import styles from './Badge.module.less';

export type BadgeVariant = 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'ghost';
export type BadgeSize = 'sm' | 'md';

export interface BadgeProps {
  variant?: BadgeVariant;
  size?: BadgeSize;
  children?: React.ReactNode;
  dot?: boolean;
  count?: number;
  maxCount?: number;
  showZero?: boolean;
}

const Badge: React.FC<BadgeProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  dot = false,
  count,
  maxCount = 99,
  showZero = false,
}) => {
  const displayCount =
    count !== undefined
      ? count > maxCount ? `${maxCount}+` : count
      : undefined;

  const isHidden = count === 0 && !showZero && displayCount !== undefined;

  if (isHidden && !children) return null;

  if (dot) {
    return (
      <span
        className={[styles.badge, styles[`badge--${variant}`], styles[`badge--${size}`], styles['badge--dot']].join(' ')}
      >
        {children}
      </span>
    );
  }

  if (count !== undefined) {
    return (
      <span
        className={[styles.badge, styles[`badge--${variant}`], styles[`badge--${size}`], styles['badge--count']].join(' ')}
      >
        {displayCount}
      </span>
    );
  }

  return (
    <span className={[styles.badge, styles[`badge--${variant}`], styles[`badge--${size}`]].join(' ')}>
      {children}
    </span>
  );
};

export default Badge;
