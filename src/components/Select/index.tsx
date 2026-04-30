import React, { SelectHTMLAttributes, forwardRef } from 'react';
import { ChevronDown } from 'lucide-react';
import styles from './Select.module.less';

export interface SelectOption {
  label: string;
  value: string | number;
  disabled?: boolean;
}

export interface SelectProps extends Omit<SelectHTMLAttributes<HTMLSelectElement>, 'size'> {
  size?: 'sm' | 'md' | 'lg';
  options: SelectOption[];
  placeholder?: string;
  error?: boolean | string;
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ size = 'md', options, placeholder, error = false, disabled, className = '', ...rest }, ref) => {
    const classes = [
      styles.select,
      styles[`select--${size}`],
      error ? styles['select--error'] : '',
      disabled ? styles['select--disabled'] : '',
      className,
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <div className={styles.wrapper}>
        <select ref={ref} className={classes} disabled={disabled} {...rest}>
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {options.map((opt) => (
            <option key={opt.value} value={opt.value} disabled={opt.disabled}>
              {opt.label}
            </option>
          ))}
        </select>
        <ChevronDown size={16} className={styles.icon} />
        {error && <span className={styles.errorMsg}>{error}</span>}
      </div>
    );
  }
);

Select.displayName = 'GhibliSelect';
export default Select;
