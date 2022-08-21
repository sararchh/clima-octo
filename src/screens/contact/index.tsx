import React from 'react';
import MainTemplate from '../../components/templates/mainTemplate';


function ContactScreen() {


    const handleSubmit = (e: any) => {
        e.preventDefault();
        const values = {
            name: e.target.name.value,
            email: e.target.email.value,
            subject: e.target.subject.value,
            message: e.target.message.value,
            file: e.target.file.value,
        };

        console.log("formulario de contato", values);

    }


    return (
        <MainTemplate content={
            <div className="grid-cols-1 w-full">
                <div className="flex flex-col w-full p-10 items-center">

                    <h3 className="text-2xl text-slate-500">Entre em contato conosco 😊</h3>

                    <form
                        className="flex flex-col sm:w-[80vw] md:w-[600px] w-[100%] mt-10 items-center"
                        onSubmit={handleSubmit}
                    >
                        <div className='flex flex-col min-h-[80px] my-2'>
                            <p className="text-sm text-slate-700 text-left">Nome: </p>
                            <input
                                className="sm:w-[80vw] md:w-[600px] w-[100%] h-[50px] text-slate-400 placeholder:italic placeholder:text-md placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 px-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                                placeholder="Nome Completo"
                                type="text"
                                name="name"
                                required={true}
                            />
                        </div>

                        <div className='flex flex-col min-h-[80px] my-2'>
                            <p className="text-sm text-slate-700 text-left">E-mail: </p>
                            <input
                                className="sm:w-[80vw] md:w-[600px] w-[100%] h-[50px] text-slate-400 placeholder:italic placeholder:text-md placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 px-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                                placeholder="Seu melhor e-mail"
                                type="email"
                                name="email"
                                required={true}
                            />
                        </div>

                        <div className='flex flex-col min-h-[80px] my-2'>
                            <p className="text-sm text-slate-700 text-left">Assunto: </p>
                            <input
                                className="sm:w-[80vw] md:w-[600px] w-[100%] h-[50px] text-slate-400 placeholder:italic placeholder:text-md placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 px-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                                placeholder="Assunto"
                                type="text"
                                name="subject"
                                required={true}
                            />
                        </div>

                        <div className='flex flex-col min-h-[80px] my-2'>
                            <p className="text-sm text-slate-700 text-left">Mensagem: </p>
                            <textarea
                                className="sm:w-[80vw] md:w-[600px] w-[100%] mb-5 text-slate-400 placeholder:italic placeholder:text-md placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 px-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                                placeholder="Mensagem"
                                name="message"
                                rows={6}
                                required={true}
                            ></textarea>
                        </div>


                        <input
                                className="sm:w-[80vw] md:w-[600px] w-[100%] h-[50px] text-slate-400 cursor-pointer"
                                placeholder="Enviar Arquivo"
                                type="file"
                                name="file"
                            />



                        <button type='submit' className="mt-[1rem] w-[200px] h-[40px] text-white rounded-md drop-shadow-md bg-gradient-to-b from-blue-400 to-blue-500">Enviar</button>



                    </form>



                </div>
            </div>
        } />
    );


}

export default ContactScreen;