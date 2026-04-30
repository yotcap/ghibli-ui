import React from 'react';
import styles from './Card.module.less';

export interface CardProps {
  children?: React.ReactNode;
  title?: string;
  subtitle?: string;
  cover?: React.ReactNode;
  footer?: React.ReactNode;
  hoverable?: boolean;
  padding?: 'none' | 'sm' | 'md' | 'lg';
  className?: string;
}

const Card: React.FC<CardProps> = ({
  children,
  title,
  subtitle,
  cover,
  footer,
  hoverable = false,
  padding = 'md',
  className = '',
}) => {
  return (
    <div
      className={[
        styles.card,
        hoverable ? styles['card--hoverable'] : '',
        className,
      ].filter(Boolean).join(' ')}
    >
      {cover && <div className={styles.cover}>{cover}</div>}
      {(title || subtitle) && (
        <div className={styles.header}>
          {title && <h4 className={styles.title}>{title}</h4>}
          {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        </div>
      )}
      <div className={[styles.body, styles[`body--${padding}`]].join(' ')}>
        {children}
      </div>
      {footer && <div className={styles.footer}>{footer}</div>}
    </div>
  );
};

export default Card;
