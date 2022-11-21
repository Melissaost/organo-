import './Rodape.css'

const Rodape = () => {
    return (
        <footer className='rodape'>
            <div className='icones'>
                <a href="facebook.com" target="_blank">
                    <img src="./imagens/fb.png" alt='Icone Facebook' />
                </a>
                <a href="facebook.com" target="_blank">
                    <img src="./imagens/tw.png" alt='Icone Twitter' />
                </a>
                <a href="facebook.com" target="_blank">
                    <img src="./imagens/ig.png" alt='Icone Instagram' />
                </a>
            </div>
            <div className='logo'>
                <img src="./imagens/logo.png" alt='Icone Logo' />
            </div>
            <div>
                <p>Desenvolvido por Melissa Ost</p>
            </div>
        </footer>
    )
}

export default Rodape;