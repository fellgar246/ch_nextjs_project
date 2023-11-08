import { TemplateString } from 'next/dist/lib/metadata/types/metadata-types';
import React from 'react';

type HeaderProps = {
  title: string | TemplateString | null | undefined;
};

const Header: React.FC<HeaderProps> = ({ title }) => {
 const titleString = typeof title === 'string' ? title : title?.toString() || '';
  return (
    <header>
      <h1>{titleString}</h1>
    </header>
  );
};

export default Header;
