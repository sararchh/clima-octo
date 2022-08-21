import React from 'react';
import Link from 'next/link';

// import { Container } from './styles';

const Header: React.FC = () => {

    return (
        <div className="flex w-full h-[80px] justify-center items-center bg-white">
            <div className="flex flex-1/2 justify-center">
                <img className="object-contain h-[60px] w-['auto']" src='/logo.png' />
            </div>
            <nav className="flex-1 w-full items-start">
                <Link href="/">
                    <a className="text-sm text-slate-600 mx-1 hover:text-slate-800 hover:font-semibold hover:scale-110 transition ease-in">Home</a>
                </Link>
                <Link href="/pesquisar">
                    <a className="text-sm text-slate-600 mx-1 hover:text-slate-800 hover:font-semibold hover:scale-110 transition ease-in">Pesquisar</a>
                </Link>
                <Link href="/contato">
                    <a className="text-sm text-slate-600 mx-1 hover:text-slate-800 hover:font-semibold hover:scale-110 transition ease-in">Contato</a>
                </Link>
            </nav>
        </div>
    );


}

export default Header;