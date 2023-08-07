import './BuscarCEP.css'

function BuscarCEP() {

  function buscarCep() {
    let cep = document.querySelector('input').value;

    if(cep.length !== 8){
      alert('CEP Inválido');
      return;
    }
  
  let url = `https://viacep.com.br/ws/${cep}/json/`;

  fetch(url).then(function(response){
    response.json().then(function(data){
      console.log(data)
      exibirEndereco(data);
    })
  })
 }


 
 let resultado = document.querySelector('h3');
 
 function exibirEndereco(dados) {
   let resultado = document.querySelector('h3');
  resultado.innerHTML = `${dados.localidade}/${dados.uf}`
 }

function apagar() {
  resultado.innerHTML = ''
}

  return (
    <>
     <div className='search'>
      <h1>Consultar seu CEP:</h1>
      <input type="number" placeholder='Digite aqui seu CEP' />
     <div className='result'>
     <h2>Endereço:</h2>
     <h3></h3>
     </div>
      <div className="buttons">
      <button className='buscar' onClick={() => {buscarCep()}}>Buscar</button>

<button className='apagar' onClick={() => {apagar()}}>Apagar</button>
      </div>
     </div>
       
    </>
  )
}

export default BuscarCEP
