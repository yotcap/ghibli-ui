import React from 'react';
import styles from './Switch.module.less';

export interface SwitchProps {
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  size?: 'sm' | 'md' | 'lg';
  label?: string;
}

const Switch: React.FC<SwitchProps> = ({
  checked,
  defaultChecked,
  onChange,
  disabled = false,
  size = 'md',
  label,
}) => {
  const [internalChecked, setInternalChecked] = React.useState(
    defaultChecked ?? false
  );

  const isControlled = checked !== undefined;
  const isChecked = isControlled ? checked : internalChecked;

  const handleClick = () => {
    if (disabled) return;
    const next = !isChecked;
    if (!isControlled) setInternalChecked(next);
    onChange?.(next);
  };

  return (
    <label className={[styles.wrapper, styles[`wrapper--${size}`], disabled ? styles['wrapper--disabled'] : ''].filter(Boolean).join(' ')}>
      <button
        type="button"
        role="switch"
        aria-checked={isChecked}
        className={[styles.track, isChecked ? styles['track--on'] : ''].filter(Boolean).join(' ')}
        onClick={handleClick}
        disabled={disabled}
      >
        <span className={[styles.thumb, isChecked ? styles['thumb--on'] : ''].filter(Boolean).join(' ')} />
      </button>
      {label && <span className={styles.label}>{label}</span>}
    </label>
  );
};

export default Switch;
