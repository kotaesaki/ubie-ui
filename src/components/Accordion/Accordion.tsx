'use client';

import { ArrowBDownIcon } from '@ubie/ubie-icons';
import clsx from 'clsx';
import styles from './Accordion.module.css';
import { CustomDataAttributeProps } from '../../types/attributes';
import type { FC, ReactNode } from 'react';

export type Size = 'small' | 'medium';

type Props = {
  /**
   * コンテンツとして表示する内容。開閉で表示・非表示が切り替わる
   */
  children: ReactNode;
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
   * ラッパーであるdetails要素に付与するネイティブ要素の`id`属性。ページで固有のIDを指定
   */
  id?: string;
  /**
   * 開閉をトリガーするsummary要素に付与するネイティブ要素の`id`属性。ページで固有のIDを指定
   */
  buttonId?: string;
  /**
   * 初期状態で開く
   */
  initialOpen?: boolean;
} & CustomDataAttributeProps;

export const Accordion: FC<Props> = ({ header, children, size = 'medium', id, buttonId, initialOpen, ...props }) => {
  return (
    <details className={clsx(styles.container, styles[size])} id={id} {...props} open={initialOpen}>
      <summary id={buttonId} className={styles.button}>
        <span>{header}</span>
        <ArrowBDownIcon aria-hidden className={styles.arrow} />
      </summary>
      <div className={styles.panel}>{children}</div>
    </details>
  );
};
