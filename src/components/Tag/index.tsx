import React from 'react';
import { CloseIcon } from '../../icons/GhibliIcons';
import styles from './Tag.module.less';

export interface TagProps {
  children?: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  closable?: boolean;
  onClose?: () => void;
  onClick?: () => void;
  color?: string;
}

const Tag: React.FC<TagProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  closable = false,
  onClose,
  onClick,
  color,
}) => {
  const style = color ? { backgroundColor: color, borderColor: color, color: '#fff' } : undefined;

  return (
    <span
      className={[
        styles.tag,
        styles[`tag--${variant}`],
        styles[`tag--${size}`],
        onClick ? styles['tag--clickable'] : '',
      ].filter(Boolean).join(' ')}
      style={style}
      onClick={onClick}
    >
      {children}
      {closable && (
        <button
          className={styles.closeBtn}
          onClick={(e: React.MouseEvent) => { e.stopPropagation(); onClose?.(); }}
          aria-label="remove tag"
        >
          <CloseIcon size={12} />
        </button>
      )}
    </span>
  );
};

export default Tag;
