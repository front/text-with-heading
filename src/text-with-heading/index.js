/**
 * External dependencies
 */
import React from 'react';
import { i18n, editor } from 'wp';

/**
 * Internal dependencies
 */
import './style.scss';

const { __ } = i18n;

const { InnerBlocks } = editor;

/**
 * Constants
 */
const TEMPLATE = [
  [ 'core/heading', {
    level: 1,
    align: 'left',
    placeholder: 'Title...',
    className: 'wp-block-cloudblocks-text-with-heading__title',
  } ],
  [ 'core/paragraph', {
    align: 'left',
    placeholder: 'Content...',
  } ],
];

export const name = 'text-with-heading';

export const settings = {
  title: __('Text with heading'),

  // description: __('A custom block for Gutenberg Cloud'),

  icon: 'schedule',

  attributes: {},

  edit ({ className }) {
    return (
      <div className={ className }>
        <InnerBlocks
          template={ TEMPLATE }
        />
      </div>
    );
  },

  save () {
    return (
      <div>
        <InnerBlocks.Content />
      </div>
    );
  },
};
