export default function ItemsHeader() {
  return (
    <div className="flex justify-center font-titilliumWeb">
      <ul className="bg flex list-none space-x-16 text-center ">
        <li className="cursor-pointer text-yellow-800 transition-colors duration-300 ease-in hover:text-yellow-700">
          Início
        </li>
        <li className="cursor-pointer text-gray-50 transition-colors duration-300 ease-in hover:text-yellow-800">
          Serviços
        </li>
        <li className="cursor-pointer text-gray-50 transition-colors duration-300 ease-in hover:text-yellow-800">
          Sobre Nós
        </li>
        <li className="cursor-pointer text-gray-50 transition-colors duration-300 ease-in hover:text-yellow-800">
          Contato
        </li>
        <li className="cursor-pointer text-gray-50 transition-colors duration-300 ease-in hover:text-yellow-800">
          Nossos projetos
        </li>
      </ul>
    </div>
  )
}
