import React, { FunctionComponent } from 'react';
import Head from 'next/head';
import { PRODUCT_NAME } from '@utils/constants';

export interface Props {
  /** Document title to appear as the tab name */
  title: string;
  /** Content for the `<meta name="description">` tag */
  description: string;
  /** Header at the top of the page */
  header?: string;
}

export const Page: FunctionComponent<Props> = ({
  title,
  description,
  header,
  children,
}) => {
  const h1 = header ? <h1>{header}</h1> : undefined;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="Description" content={description} />
      </Head>
      <div>
        <main>
          {h1}
          {children}
        </main>
      </div>
    </>
  );
};
