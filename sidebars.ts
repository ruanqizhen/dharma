import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  bookSidebar: [
    {
      type: 'category',
      label: '序卷 · 时间的共轭',
      items: ['c01', 'c02', 'c03', 'c04', 'c05'],
    },
    {
      type: 'category',
      label: '第一卷 · 北邙的石头与神仙药',
      items: ['c06', 'c07', 'c08', 'c09', 'c10', 'c11', 'c12'],
    },
    {
      type: 'category',
      label: '第二卷 · 强因果律的铁壁',
      items: ['c13', 'c14', 'c15'],
    },
    {
      type: 'category',
      label: '第三卷 · 襄阳棒喝与拦不住的战车',
      items: ['c16', 'c17', 'c18', 'c19'],
    },
    {
      type: 'category',
      label: '第四卷 · 石旁添人',
      items: ['c20', 'c21', 'c22', 'c23', 'c24'],
    },
    {
      type: 'category',
      label: '第五卷 · 永不篡改的代码',
      items: ['c25', 'c26', 'c27'],
    },
  ],
};

export default sidebars;
