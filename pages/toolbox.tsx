import React, { Fragment } from 'react';

import { Container } from 'layouts/Container';
import { GetStaticProps } from 'next';
import { StickyColumn } from 'layouts/StickyColumn';
import { renderBlocks } from '@/lib/renderBlocks';

export default function Toolbox({ toolboxContent }) {
  return (
    <Container>
      <h1>
        <span className="block text-base font-semibold tracking-wide text-center text-teal-500 uppercase dark:text-teal-400">
          Toolbox
        </span>
        <span className="block max-w-2xl mx-auto mt-2 text-4xl font-bold leading-10 text-center sm:text-5xl">
          Here's what I use daily.
        </span>
      </h1>
      <StickyColumn>
        <div className="col-span-8 mt-12">
          <div className="space-y-16">
            {/* {toolboxContent.map((block) => (
              <Fragment key={block.id}>{renderBlocks(block)}</Fragment>
            ))} */}
          </div>
        </div>
      </StickyColumn>
    </Container>
  );
}
