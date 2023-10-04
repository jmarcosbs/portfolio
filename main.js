var uninter = document.getElementById("uninter");
var python = document.getElementById("python");
var programacaoDoZero = document.getElementById("programacao-do-zero");
var santanderBootcamp = document.getElementById("santander-bootcamp");
var content = document.querySelector(".study-content");

function trocarcor(idprincipal) {
    document.getElementById(idprincipal).style.backgroundImage = "none";
    document.getElementById(idprincipal).style.backgroundColor = "#ffffff";
}

function voltarcor(id1, id2, id3) {
    document.getElementById(id1).style.backgroundColor = "#181818";
    document.getElementById(id2).style.backgroundColor = "#181818";
    document.getElementById(id3).style.backgroundColor = "#181818";
}

uninter.addEventListener("click", function() {
    content.innerHTML = "<h2>Uninter - Em transição de curso</h2><p>Atualmente, estou matriculado no curso de Tecnólogo em Gestão Financeira na UNINTER. Embora meu curso atual não tenha uma ênfase em tecnologia, estou em processo de transferência interna para um programa de Bacharelado em Tecnologia. Esta mudança é motivada pelo meu desejo de redirecionar meus estudos e minha carreira para o campo da tecnologia, onde vejo oportunidades empolgantes e desafios estimulantes.</p>";
    trocarcor("uninter");
    voltarcor("python", "programacao-do-zero", "santander-bootcamp")
});

python.addEventListener("click", function() {
    content.innerHTML = "<h2>Curso Python 3 - Gustavo Guanabara [40 horas]</h2><p>Este curso foi meu primeiro contato com Python, aprendi fundamentos e usabilidade da linguagem, com uma lista de exercícios práticos que ajudavam a fixar o aprendizado das aulas. </p><p><mark>Python</mark></p>";
    trocarcor("python");
    voltarcor("uninter", "programacao-do-zero", "santander-bootcamp")
});

programacaoDoZero.addEventListener("click", function() {
    content.innerHTML = "<h2>Programação do Zero - Potência Tech Ifood [69 horas]</h2><p>Curso disponibilizado pela Dio.me, um bootcamp de 69 horas que tratou dos princípios da lógica de programação, começando por conceitos introdutórios, desde a exploração de algoritmos, variáveis e estruturas condicionais até a implementação de estruturas de repetição e operadores lógicos e de comparação.</p><p><mark>Javascript</mark></p>";
    trocarcor("programacao-do-zero");
    voltarcor("python", "uninter", "santander-bootcamp")
});

santanderBootcamp.addEventListener("click", function() {
    content.innerHTML = "<h2>Ciência de dados com Python - Santander Bootcamp [89 horas]</h2><p>Bootcamp da Dio.me em parceria com Santander. Aprendizado da linguagem Python e suas aplicações, bancos de dados SQL e NoSQL, visualização e análise de dados com Power BI, e fundamentos e técnicas de machine learning.</p><a target=\"_blank\" href=\"https://drive.google.com/drive/folders/1oYUV0IY-b5kzrOidD8HSV8gdVusctzMm?usp=sharing\"></a><p><mark>Python</mark> <mark>SQL e No SQL</mark> <mark>Power BI</mark> <mark>Machine Learning</mark></p><button class=\"certificacoes\">Certificações</button>";
    trocarcor("santander-bootcamp");
    voltarcor("python", "programacao-do-zero", "uninter")
});


// -----------  ÁREA DE PROJETOS ----------------

var projeto1 = document.getElementById("projeto1");
var projeto2 = document.getElementById("projeto2");
var projeto3 = document.getElementById("projeto3");
var projeto4 = document.getElementById("projeto4");
var contentProject = document.querySelector(".project-content-inner");

function trocarCorProject(idprincipalproject) {
    document.getElementById(idprincipalproject).style.backgroundImage = "none";
    document.getElementById(idprincipalproject).style.backgroundColor = "#ffffff";
    document.getElementById(idprincipalproject).style.color = "#181818";
}

function voltarCorProject(idproject1, idproject2, idproject3) {
    document.getElementById(idproject1).style.backgroundColor = "#181818";
    document.getElementById(idproject2).style.backgroundColor = "#181818";
    document.getElementById(idproject3).style.backgroundColor = "#181818";
}

projeto1.addEventListener("click", function() {
    contentProject.innerHTML = "<a target=\"blank\" href=\"images/gif-portifolio.gif\"><img align=\"right\" src=\"images/gif-portifolio.gif\"/></a><h2>Este portifólio</h2><p>Este portifólio teve seu início na minha imaginação. Para torná-lo autêntico, o objetivo foi evitar o uso de modelos prontos ou outros sites como referência. Partindo apenas de um esboço criado no meu computador, desenvolvi tanto a estrutura quanto o design a partir do zero, utilizando HTML, CSS e JavaScript puros. Ainda tenho muitas melhorias a fazer nele e estou atualizando-o de acordo com o meu progresso nas tecnologias. Tentei aplicar a responsividade usando divs em grade e flexíveis, além de utilizar a media query no CSS.</p><div class=\"buttons\"><img src=\"images/github-mark.png\"/><img src=\"images/link-externo.png\"/></div>";
    /// trocarCorProject("projeto1");
    /// voltarCorProject("projeto2", "projeto3", "projeto4")
    /// voltarCorFontProject("projeto2", "projeto3", "projeto4")
});

projeto2.addEventListener("click", function() {
    contentProject.innerHTML = "<a target=\"blank\" href=\"images/images/regioes.png\"><img align=\"right\" src=\"images/regioes.png\"/></a><h2>Indicador de Análise Gráfica</h2><p>Este foi meu primeiro projeto autêntico em Python, um indicador que procura áreas de congestão nos gráficos de preços. Estou estudando para adicionar mais recursos e técnicas de machine learning no futuro. O objetivo final é migrar esse indicador para as plataformas Metatrader e TradingView. O algoritmo compara metades do intervalo de preços, seleciona a que tem maior pontuação e continua repetindo o processo até não haver mais distância entre as regiões.</p><div class=\"buttons\"><img src=\"images/github-mark.png\"/><img src=\"images/link-externo.png\"/></div>";
    /// trocarCorProject("projeto2");
    /// voltarCorProject("projeto1", "projeto3", "projeto4")
    /// voltarFontCorProject("projeto1", "projeto3", "projeto4")
});

projeto3.addEventListener("click", function() {
    contentProject.innerHTML = "<a target=\"blank\" href=\"images/etl.gif\"><img align=\"right\" src=\"images/etl.gif\"/></a><h2>ETL para alteração de usuários de API</h2><p>Este projeto teve como objetivo realizar um processo ETL (Extração, Transformação e Carregamento) de dados de uma API pública. O algoritmo extrai informações da API, gera uma lista de usuários com base em um arquivo .csv e permite ao usuário do código identificar o ID do usuário na lista, alterar o nome e, em seguida, encaminhar as atualizações de volta para a API.</p><div class=\"buttons\"><img src=\"images/github-mark.png\"/><img src=\"images/link-externo.png\"/></div>";
    /// trocarCorProject("projeto3");
    /// voltarCorProject("projeto2", "projeto1", "projeto4")
    /// voltarCorFontProject("projeto2", "projeto1", "projeto4")
});

projeto4.addEventListener("click", function() {
    contentProject.innerHTML = "<h2>Ciência de dados com Python - Santander Bootcamp [89 horas]</h2><p>Bootcamp da Dio.me em parceria com Santander. Aprendizado da linguagem Python e suas aplicações, bancos de dados SQL e NoSQL, visualização e análise de dados com Power BI, e fundamentos e técnicas de machine learning.</p><a target=\"_blank\" href=\"https://drive.google.com/drive/folders/1oYUV0IY-b5kzrOidD8HSV8gdVusctzMm?usp=sharing\"><button class=\"certificacoes\">Certificações deste curso</button>";
    trocarCorProject("projeto4");
    voltarCorProject("projeto2", "projeto3", "projeto1")
    voltarCorFontProject("projeto2", "projeto3", "projeto1")
});
