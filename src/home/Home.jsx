import profile from '../assets/imgs/perfil.jpeg';
import img1 from '../assets/imgs/criandDataBase.png';
import img2 from '../assets/imgs/importando.png';
import img3 from '../assets/imgs/collectionPopulada.png';
import img4 from '../assets/imgs/primeiraConsulta.png';
import img5 from '../assets/imgs/SegundaConsulta.png';
import img6 from '../assets/imgs/terceiraConsulta.png';
import img7 from '../assets/imgs/criandoIndices.png';
import img8 from '../assets/imgs/primeiraConsultaIndice.png';
import img9 from '../assets/imgs/indiceComposto.png';

import { MainContainer } from './HomeStyle';

export function Home () {
    return (
        <MainContainer>
            <div className="subContainerProfile">
                <img className="profile" src={profile} alt="" />
                <span>Autor: Pedro Henrique</span>
            </div>

            <div className="subContainer">
                <h1>Projeto pessoal sobre MongoDB</h1>

                <div>
                    <img src={img1} alt="" />
                    <span>Criando o DataBase e também a collection.</span>
                </div>
                
                <div>
                    <img src={img2} alt="" />
                    <span>Importando o arquivo da amazon que foi disponibilizado para dowload.</span>
                </div>
                
                <div>
                    <img src={img3} alt="" />
                    <span>Collection populada.</span>
                </div>
            </div>

            <div className="subContainer">
                <div>
                    <img src={img4} alt="" />
                    <span>Executando a primeira consulta com finalidade de entender quantos documents foram importados para a collection.</span>
                </div>
                
                <div>
                    <img src={img5} alt="" />
                    <span>Executando uma segunda consulta com base na finalidade de um possível calculo da média de "overall" das análises de um crítico expecífico no caso o "Michael".</span>
                </div>
                
                <div>
                    <img src={img6} alt="" />
                    <span>Executando uma terceira consulta com finalidade de ter uma base de quantas avaliações(overall) negativas(abaixo da média) existem na collection e nos documents.</span>
                </div>

                <h3>Todas as consultas foram realizadas de forma rápida, até porque acredito que o número de documents que existem na collection não chegam a alterar praticamente em nada na performance das pesquisas.</h3>
            </div>

            <div className="subContainer">
                <div>
                    <img src={img7} alt="" />
                    <span>Criação dos primeiros índices para os dados "reviewerName" e "overall".</span>
                </div>
                
                <div>
                    <img src={img8} alt="" />
                    <span>Como apresentado na imagem, logo na primeira consulta após a criação do índice, 
                    executando o teste com "explain()" já pude perceber que o índice potencializa e deixa mais objetiva a consulta.</span>
                </div>
                
                <div>
                    <img src={img9} alt="" />
                    <span>E também criando um índice composto com os argumentos "reviewerName" e "overall" deixando ainda mais objetiva a busca, 
                    executando o mesmo teste percebe-se que esse índice ganhou do primeiro criado no requisito de performance.</span>
                </div>

                <h3>Criando esses índices e também em pesquisas sobre o assunto, percebi e entendi que os índices são essencíais poís eles potencializam muito as consultas no banco, porém nós desenvolvedores temos
                    que ter objetivo e critério na hora de criá-los, poís a criação excessiva e sem objetivo de índices pode gerar problemas de performance nas operações de inclusão, alteração ou exclusão. 
                </h3>
            </div>
        </MainContainer>
    )
};