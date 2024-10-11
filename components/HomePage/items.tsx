import React from 'react';

const LivrosEmDestaque: React.FC = () => {
  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6">Livros em Destaque</h1>
        <div className="flex items-center">
          <button className="p-2 border rounded-full mr-4">
            <i className="fas fa-chevron-left"></i>
          </button>
          <div className="flex space-x-6 overflow-x-auto">
            {livros.map((livro, index) => (
              <div key={index} className="flex-shrink-0 w-48">
                <img
                  alt={livro.titulo}
                  className="w-full mb-2"
                  height={200}
                  src={livro.imagem}
                  width={150}
                />
                <h2 className="text-sm font-bold">{livro.titulo}</h2>
                <p className="text-sm text-gray-600">{livro.autor}</p>
                <p className="text-sm text-gray-600">{livro.tipoCapa}</p>
                <p className="text-lg font-bold text-orange-600">
                  R${livro.preco}
                  <span className="line-through text-gray-500">
                    R${livro.precoAntigo}
                  </span>
                </p>
                <p className="text-sm text-gray-600">{livro.paginas}</p>
                <div className="text-orange-500">
                  {Array.from({ length: livro.avaliacao }, (_, i) => (
                    <i key={i} className="fas fa-star"></i>
                  ))}
                  {livro.avaliacao % 1 !== 0 && <i className="fas fa-star-half-alt"></i>}
                </div>
              </div>
            ))}
          </div>
          <button className="p-2 border rounded-full ml-4">
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

const livros = [
  {
    titulo: "Princípios milenares: 10 leis espirituais para uma vida de paz e prosperidade",
    autor: "Tiago Brunet",
    tipoCapa: "Capa comum",
    preco: "45,85",
    precoAntigo: "62,90",
    paginas: "283",
    imagem: "https://storage.googleapis.com/a1aa/image/CfDmfRBDKkkogUN7NggcqjSwlumpg48XAeMTxRGgkyNx2EKnA.jpg",
    avaliacao: 4.5,
  },
  {
    titulo: "Quarta asa: Edição Especial Limitada",
    autor: "Rebecca Yarros",
    tipoCapa: "Capa dura",
    preco: "134,90",
    precoAntigo: "179,90",
    paginas: "2,723",
    imagem: "https://storage.googleapis.com/a1aa/image/BzAAFxNNy8ZDFRF39LC9jEBCEnEGJrePxL8D3cO73b2uNhyJA.jpg",
    avaliacao: 4.5,
  },
  // Adicione os outros livros aqui seguindo o mesmo padrão...
];

export default LivrosEmDestaque;
