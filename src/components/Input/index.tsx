import React, { InputHTMLAttributes, forwardRef } from 'react';
import styles from './Input.module.less';

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  size?: 'sm' | 'md' | 'lg';
  error?: boolean | string;
  addonBefore?: React.ReactNode;
  addonAfter?: React.ReactNode;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ size = 'md', error, addonBefore, addonAfter, className = '', disabled, ...rest }, ref) => {
    const errMsg = typeof error === 'string' ? error : undefined;
    const hasError = Boolean(error);

    const classes = [
      styles.input,
      styles[`input--${size}`],
      hasError ? styles['input--error'] : '',
      disabled ? styles['input--disabled'] : '',
      addonBefore ? styles['input--has-prefix'] : '',
      addonAfter ? styles['input--has-suffix'] : '',
      className,
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <div className={styles.wrapper}>
        {addonBefore && <span className={styles.prefix}>{addonBefore}</span>}
        <input ref={ref} className={classes} disabled={disabled} {...rest} />
        {addonAfter && <span className={styles.suffix}>{addonAfter}</span>}
        {errMsg && <span className={styles.errorMsg}>{errMsg}</span>}
      </div>
    );
  }
);

Input.displayName = 'GhibliInput';
export default Input;
