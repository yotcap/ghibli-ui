import React from 'react';
import styles from './Avatar.module.less';

export interface AvatarProps {
  src?: string;
  alt?: string;
  name?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  shape?: 'circle' | 'square';
  status?: 'online' | 'offline' | 'busy';
}

const getInitials = (name: string): string => {
  const parts = name.trim().split(/\s+/);
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
};

const COLORS = [
  '#E8C47C', '#A8C5A0', '#E8B4B8', '#B8D4E3', '#C97B5D', '#6B8E6B',
];

const getColor = (name: string): string => {
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  return COLORS[Math.abs(hash) % COLORS.length];
};

const Avatar: React.FC<AvatarProps> = ({
  src,
  alt,
  name,
  size = 'md',
  shape = 'circle',
  status,
}) => {
  const initials = name ? getInitials(name) : '?';
  const bgColor = name ? getColor(name) : '#ccc';

  return (
    <div className={[styles.wrapper, styles[`wrapper--${size}`], styles[`wrapper--${shape}`]].join(' ')}>
      <div
        className={styles.avatar}
        style={src ? undefined : { backgroundColor: bgColor }}
      >
        {src ? (
          <img src={src} alt={alt || name || 'avatar'} className={styles.img} />
        ) : (
          <span className={styles.initials}>{initials}</span>
        )}
      </div>
      {status && (
        <span className={[styles.status, styles[`status--${status}`]].join(' ')} />
      )}
    </div>
  );
};

export default Avatar;
