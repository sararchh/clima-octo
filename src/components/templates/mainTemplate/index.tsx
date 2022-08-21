import React from 'react';
import Header from '../../atoms/header';

type Props = {
  content: React.ReactNode;
}

const MainTemplate: React.FC<Props> = ({ content }) => {
  return (
    <div className='flex flex-col items-center w-full h-screen bg-slate-100 '>
      <Header/>
      {content}
    </div>
  )
}

export default MainTemplate;