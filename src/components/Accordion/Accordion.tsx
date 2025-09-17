'use client';

import { ArrowBDownIcon } from '@ubie/ubie-icons';
import clsx from 'clsx';
import { FC, PropsWithChildren } from 'react';
import styles from './Accordion.module.css';

export type Size = 'small' | 'medium';

type Props = {
  /**
   * 見出しに表示するテキスト
   */
  header: string;
  /**
   * サイズ
   * @default medium
   */
  size?: Size;
  /**
   * クリック時のイベントハンドラ
   */
  onClick?: () => void;
};

export const Accordion: FC<PropsWithChildren<Props>> = ({ header, children, size = 'medium', onClick }) => {
  return (
    <details className={clsx(styles.container, styles[size])} onToggle={onClick}>
      <summary className={styles.button}>
        <span>{header}</span>
        <ArrowBDownIcon aria-hidden className={styles.arrow} />
      </summary>
      <div className={styles.panel}>{children}</div>
    </details>
  );
};
