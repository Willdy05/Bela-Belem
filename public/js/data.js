// Garantir que pacotes exista mesmo se não houver dados
window.pacotes = window.pacotes || {};

// Conteudos dos pacotes de passeio
const pacotes = {
    ajuruteua: {
        titulo: "Praia de Ajuruteua",
        preco1: 510,
        preco2: "",
        hora1: 12,
        hora2: "",
        duracao: "Até 13 horas de passeio",
        descricao: "A BBOT fará seu receptivo turístico no seu hotel em horário combinado. Seguiremos por via rodoviária para a magnífica Praia de Ajuruteua no Município de Bragança – praia gigante com o seu horizonte sem fim, um convite a caminhada - localizada A 250 km no litoral do histórico Município de Bragança, um dos berços da cultura e culinária belenense. Ajuruteua possui restaurantes espetaculares a beira mar além de uma super orla marítima inaugurada em 2023. Um point turístico pouco conhecido que a Bela Belém oferece para a sua DESCOBERTA.",
        des_resumida: "Ajuruteua é uma praia paradisíaca localizada no município de Bragança, no litoral do Pará. Conhecida por suas águas calmas, areias claras e coqueirais, é um destino perfeito para quem busca relaxar e curtir a natureza. A praia é ideal para banhos, passeios de barco e apreciar o pôr do sol deslumbrante.",
        imagem: ["/public/assets/passeio/ajuruteua.jpg"],
        contem: ["receptivo hoteleiro", "TODOS os traslados e serviços de Guia Turístico"],
        nao_contem: ["INGRESSOS DE NENHUMA ESPÉCIE", "ALIMENTAÇÃO E BEBIDA"],
        atencao: ""
    },
    algodoal: {
        titulo: "Ilha de Algodoal",
        preco1: 590,
        preco2: "",
        hora1: 12,
        hora2: "",
        duracao: "Até 12 horas de passeio",
        descricao: "A BBOT fará seu receptivo turístico no seu hotel em horário combinado. Seguiremos então para a Ilha de Algodoal por via rodoviária por 165 km do seu hotel cruzando a grande região nordeste do Pará. Na cidade de MARUDÁ faremos a travessia para a ilha de Algodoal – uma das mais belas ilhas marítimas brasileira próxima ao litoral – em barco registrado na Marinha do Brasil.  Ao aportarmos na ilha, seguiremos para a Praia da Princesa conduzidos por charrete a beira mar num caminho mágico passando pela Vila de Algodoal, furos de rio e dunas a beira mar. Na praia da Princesa, desfrutaremos do nosso dia naquele espaço de praia e restaurantes únicos.",
        des_resumida: "A Ilha do Alagodoal é um refúgio ecológico com praias de águas cristalinas e dunas impressionantes. Ideal para quem busca tranquilidade e contato com a natureza.",
        imagem: ["/public/assets/passeio/algodoal.jpg"],
        contem: ["receptivo hoteleiro", "TODOS os traslados e serviços de Guia Turístico"],
        nao_contem: ["INGRESSOS DE NENHUMA ESPÉCIE", "ALIMENTAÇÃO E BEBIDA"],
        atencao: ""
    },
    city_tour: {
        titulo: "City Tour - Belém Pará",
        preco1: 330,
        preco2: 250,
        hora1: 9,
        hora2: 5,
        duracao: "Até 05 horas ou 09 horas de passeio",
        descricao: "A BBOT fará seu receptivo turístico no seu hotel A QUALQUER HORA - a combinar. Seguiremos então para espaços zoobotânicos, culturais, históricos e populares, como: Parque do Utinga, Espaço São José Liberto, Portal da Amazônia, Mangal das Garças, Espaço Feliz Lusitânia - Forte do Presépio, Igreja de São Alexandre, Catedral da Sé e Casa das Onze Janelas, Basílica de Nazaré, Ver-o-Peso, Estação das Docas, Museu Emílio Goeldi, Teatro da Paz, entre outros. Para você que possui interesse genuíno na Cerâmica Marajoara, possuímos conteúdo de visitação a localidade do Paracuri e Orla de Icoaraci – berços da cultura  CERAMISTA  e das PEIXARIAS com vista a Baia do Marajó localizados a 20 km do centro de Belém por via urbana. ICOARACI (exclusivo) até 05 Horas de passeio  $ 250/PESSOA. BELÉM + ICOARACI até 10 horas de passeio  $ 360/PESSOA.",
        des_resumida: "Explore os principais pontos turísticos de Belém em um passeio guiado pela cidade. Conheça a história, cultura e belezas naturais da capital paraense.",
        imagem: ["/public/assets/passeio/belem.jpg"],
        contem: ["receptivo hoteleiro", "TODOS os traslados e serviços de Guia Turístico"],
        nao_contem: ["INGRESSOS DE NENHUMA ESPÉCIE", "ALIMENTAÇÃO E BEBIDA"],
        atencao: "O rol de destinos acima é ilustrativo. Sua visitação depende da carga horaria contratada, da disponibilidade de visitação ao local  e do interesse e perfil do cliente."
    },
    combu: {
        titulo: "Ilha do Combu",
        preco1: 330,
        preco2: "",
        hora1: 9,
        hora2: "",
        duracao: "Até 09 horas de passeio",
        descricao: "A BBOT fará seu receptivo turístico no seu hotel em horário combinado. Em seguida, em região portuária, embarcamos em LANCHA devidamente registrada pela Marinha do Brasil. Iniciaremos nosso passeio de lancha para o ENCONTRO DOS RIOS ou a PRAINHA onde presenciaremos a dimensão fluvial de nossa capital. Em seguida navegamos até  ao Furo do Paciência, ao igarapé do Piriquitaquara, aportando na casa de cultura ribeirinha YGARA, onde caminharemos na mata, de lendas e costumes caboclos. Aprenderemos sobre a  sua flora e fauna e teremos contato com objetos artesanais típicos da Amazônia. Adiante, visitaremos a Fábrica e loja de Chocolate da Dona Nena, a FILHA DO COMBU, orgulho local e referência nacional na fabricação de chocolate 100%. Finalmente, aportaremos em restaurante selecionando, com piscina natural na maré, piscina comum, trilha ecológica e amplos espaços de banho alternativos e culinária típica.",
        des_resumida: "A Ilha do Combu é famosa por seus chocolates artesanais e passeios de barco pelos igarapés. Um lugar encantador para relaxar e saborear a culinária local.",
        imagem: ["/public/assets/passeio/combu.jpg"],
        contem: ["receptivo hoteleiro", "TODOS os traslados e serviços de Guia Turístico"],
        nao_contem: ["INGRESSOS DE NENHUMA ESPÉCIE", "ALIMENTAÇÃO E BEBIDA"],
        atencao: ""
    },
    combu_executivo: {
        titulo: "Ilha do Combu Executivo",
        preco1: 270,
        preco2: "",
        hora1: 5,
        hora2: "",
        duracao: "Até 05 horas de passeio",
        descricao: "A BBOT fará seu receptivo turístico no seu HOTEL ou EVENTO. Em seguida você será conduzido a região portuária de onde partiremos, via Lancha regulamente registrada na Marinha do Brasil. Iniciaremos nosso passeio de lancha para o ENCONTRO DOS RIOS ou a PRAINHA onde presenciaremos a dimensão fluvial de nossa capital.   Em seguida navegamos ao largo da Ilha do COMBU.  Visitaremos a fábrica/loja da Dona Nena, A Filha do COMBU, e seu chocolate mundialmente apreciado. Em seguida, aportaremos em restaurante selecionado, onde você poderá usufruir de piscinas na maré ou piscina comum em ambiente de mata genuína. Após o almoço, retornaremos a seu hotel ou evento com todo o conforto.",
        des_resumida: "",
        imagem: ["/public/assets/passeio/combu.jpg"],
        contem: ["receptivo hoteleiro", "TODOS os traslados e serviços de Guia Turístico"],
        nao_contem: ["INGRESSOS DE NENHUMA ESPÉCIE", "ALIMENTAÇÃO E BEBIDA"],
        atencao: "ATENÇÃO: disponível todos os dias, exceto aos DOMINGOS."
    },
    combu_ilha_grande: {
        titulo: "Super Ilhas do Combu, Murutucu & Ilha Grande",
        preco1: 390,
        preco2: "",
        hora1: 9,
        hora2: "",
        duracao: "Até 09 horas de passeio",
        descricao: "Faremos seu receptivo turístico no seu HOTEL. Em região portuária, embarcaremos em lancha regular junto a Marinha do Brasil. Este passeio é para você que deseja explorar numa dimensão ainda mais ampla a Ilha do COMBU, desejoso de espaços exclusivos em um roteiro onde incluímos as preservadas ILHAS MURUTUCU e  ILHA GRANDE, com vistas a ampliar ainda mais um clima de AVENTURA & DIVERSÃO. Iniciaremos nosso passeio de lancha pelo ENCONTRO DOS RIOS ou a PRAINHA  onde presenciaremos a dimensão fluvial de nossa capital. Nosso roteiro inclui visita ao espaço da Filha do Combu e seu chocolate 100%. Em seguida vamos a  casa de cultura ribeirinha YGARA com seu conteúdo de conhecimento da fauna e flora locais além do artesanato produzido na comunidade. Adiante visitaremos o folclórico mestre caboclo Sr. Ladi e seu carisma e conhecimento únicos no ACARÁ. Em seguida vamos desfrutar de espaços com rica gastronomia nas ilhas do Murutucu ou na Ilha Grande. Durante o dia a depender da maré, desfrutaremos da original “prainha\" do rio São Benedito.",
        des_resumida: "",
        imagem: ["/public/assets/passeio/combu.jpg"],
        contem: ["receptivo hoteleiro", "TODOS os traslados e serviços de Guia Turístico"],
        nao_contem: ["INGRESSOS DE NENHUMA ESPÉCIE", "ALIMENTAÇÃO E BEBIDA"],
        atencao: "ATENÇÃO: disponível as SEXTAS, SÁBADOS, DOMINGOS e feriados."
    },
    cotijuba: {
        titulo: "Ilha de Cotijuba",
        preco1: 330,
        preco2: "",
        hora1: 11,
        hora2: "",
        duracao: "Até 11 horas de passeio",
        descricao: "A BBOT fará o seu receptivo turístico no seu hotel em horário combinado. Seguiremos então para a região portuária de ICOARACI, distrito de Belém do Pará, com destino a Ilha de COTIJUBA. Em seguida embarcaremos em Navio autorizado pela Marinha do Brasil. Após um tempo médio de 01 hora de viagem pela baia do Guajará e furos de Ilha, aportaremos na Ilha de COTIJUBA rumo a Praia do Vai Quem Quer, uma espetacular praia banhada pela Baia do Marajó, baia de água doce, alternando momentos de ondas para surfista e calmaria de piscina num ambiente único, cercado de restaurantes de culinária típica local. Tudo isso em uma ilha onde encontraremos charretes conduzidas por motos pelos caminhos de mata e espaços urbanizados. Uma verdadeira AVENTURA!",
        des_resumida: "Conhecida como a Ilha dos Encantos, Cotijuba oferece praias de águas calmas, trilhas ecológicas e uma rica biodiversidade. Um destino perfeito para os amantes da natureza.",
        imagem: ["/public/assets/passeio/cotijuba.jpg"],
        contem: ["receptivo hoteleiro", "TODOS os traslados e serviços de Guia Turístico"],
        nao_contem: ["INGRESSOS DE NENHUMA ESPÉCIE", "ALIMENTAÇÃO E BEBIDA"],
        atencao: ""
    },
    marajo: {
        titulo: "Ilha do Marajó (Soure)",
        preco1: 780,
        preco2: 510,
        hora1: 36,
        hora2: 11,
        duracao: "Até 36 horas ou 11 horas de passeio",
        descricao: "A BBOT fará seu receptivo em horário a combinar.  Seguiremos para a Ilha do Marajó via Terminal Hidroviário de Belém com destino a cidade de Soure no Marajó. Na ilha, com nosso guia local, visitaremos curtumes, espaço cerâmico, montaria bufalina, fazendas de queijo bufalino e doces de leite, além das magnificas praias de Barra Velha e Pesqueira e outros espaços e eventos na medida da disponibilidade.",
        des_resumida: "A maior ilha fluviomarinha do mundo, o Marajó é conhecido por suas paisagens únicas, búfalos e artesanato em cerâmica. Um destino imperdível para quem visita o Pará.",
        imagem: ["/public/assets/passeio/marajo.jpg"],
        contem: ["receptivo hoteleiro", "TODOS os traslados e serviços de Guia Turístico", "Hospedagem e café da manhã (para passeios de 36 horas)"],
        nao_contem: ["INGRESSOS DE NENHUMA ESPÉCIE"],
        atencao: ["HOSPEDAGEM NO HOTEL MARAJÓ: PACOTE $ 880/PESSOA.", "PASSEIOS EM ALTA TEMPORADA:  PREÇOS SUJEITOS A ALTERAÇAO DO PUBLICADO NESTE FOLHETO.", "PASSEIOS DE ATÉ 11 HORAS PARA O MARAJÓ: TODOS OS DIAS, EXCETO AOS DOMINGOS."]
    },
    mosqueiro: {
        titulo: "Ilha de Mosqueiro",
        preco1: 330,
        preco2: "",
        hora1: 10,
        hora2: "",
        duracao: "Até 10 horas de passeio",
        descricao: "A BBOT fará seu receptivo turístico no seu hotel em horário combinado. Seguiremos para a ilha de Mosqueiro em via rodoviária, oportunidade de conhecermos a Belém Metrópole. Na ilha visitaremos a Vila de MOSQUEIRO – a Igreja de Nossa Senhora do O, Mercado Municipal e o mercado da Tapioca. Em seguida vamos visitar praias de ÁGUA DOCE como a do Farol, Chapéu Virado, Murubira, Ariramba e finalmente, a praia do Paraíso. Todas encantadoramente estruturadas às margens da gigantesca Baia do Marajó e seus restaurantes prontos  para recebê-lo.",
        des_resumida: "Mosqueiro é um arquipélago com praias de água doce, ideal para banhos e passeios em família. Um refúgio próximo à capital Belém.",
        imagem: ["/public/assets/passeio/mosqueiro.jpg"],
        contem: ["receptivo hoteleiro", "TODOS os traslados e serviços de Guia Turístico"],
        nao_contem: ["INGRESSOS DE NENHUMA ESPÉCIE", "ALIMENTAÇÃO E BEBIDA"],
        atencao: ""
    },
    papaguaios: {
        titulo: "Ilha dos Papagaios",
        preco1: 390,
        preco2: 260,
        hora1: 5,
        hora2: 3,
        duracao: "Até 05 horas ou 03 horas de passeio",
        descricao: "Faremos seu receptivo turístico no seu HOTEL ou local combinado. Em região portuária, embarcaremos em lancha regular junto a Marinha do Brasil. Este passeio é para você que deseja explorar a REVOADA DOS PAPAGAIOS na ILHA DOS PAPAGAIOS e quer vivenciar uma MANHÃ ou fim de TARDE no ambiente de vida cabocla do ribeirinho AMAZÔNICO. A revoada dos papagaios é fenômeno que ocorre todas as manhãs as 06:00 horas e as 18:00 horas da tarde. Presenciaremos o espetáculo dos pássaros no seu horário desejado. No conteúdo Nascer do Sol o café da manhã é feito na cada de cultura ribeirinha YGARA.",
        des_resumida: "A Ilha dos Papagaios é um santuário ecológico com uma grande variedade de aves e uma paisagem deslumbrante. Ideal para quem busca contato com a natureza.",
        imagem: ["/public/assets/passeio/papaguaios.jpg"],
        contem: ["receptivo hoteleiro", "café da manhã para o passeio NASCER DO SOL", "TODOS os traslados e serviço de Guia Turístico"],
        nao_contem: ["INGRESSOS DE NENHUMA ESPÉCIE"],
        atencao: "ATENÇÃO: disponível todos os dias."
    },
    salinas: {
        titulo: "Praia de Salinas & Salinópolis",
        preco1: 450,
        preco2: "",
        hora1: 12,
        hora2: "",
        duracao: "Até 12 horas de passeio",
        descricao: "A BBOT fará seu receptivo turístico no seu hotel em horário combinado.  Seguiremos por via rodoviária para a Praia do Atalaia em Salinas – principal point turístico do estado do Pará. Viajaremos por pouco mais de 210 KM no sentido da grande região nordeste do Pará, dotadas de praias com formas diferentes de tudo que você já viu. No Atalaia desfrutaremos um dia espetacular em um lugar único. Em seguida visitaremos a praia do Maçarico na cidade de Salinópolis.",
        des_resumida: "Conhecida como o Caribe Paraense, Salinas é famosa por suas praias de águas claras e vida noturna animada. Um destino perfeito para relaxar e se divertir.",
        imagem: ["/public/assets/passeio/salinas/salinas1.jpg", "/public/assets/passeio/salinas/salinas2.jpg", "/public/assets/passeio/salinas/salinas3.jpg", "/public/assets/passeio/salinas/salinas4.jpg"],
        contem: ["receptivo hoteleiro", "TODOS os traslados e serviços de Guia Turístico"],
        nao_contem: ["INGRESSOS DE NENHUMA ESPÉCIE", "ALIMENTAÇÃO E BEBIDA"],
        atencao: ""
    },
    veroboto: {
        titulo: "Ver o Boto",
        preco1: 590,
        preco2: "",
        hora1: 13,
        hora2: "",
        duracao: "Até 13 horas de passeio",
        descricao: "Faremos seu receptivo turístico no seu hotel. Seguiremos por via rodoviária por 240 km até o extraordinário município de MOCAJUBA as margens do Rio Tocantins, afluente do Rio Amazonas. Em Mocajuba visitaremos o Mirante do Boto onde teremos uma experiencia ÚNICA diante de espécie singular de nossa fauna. Em seguida, faremos um passeio de Jangada pelo baixo Tocantins. Por mais de 2 horas exploraremos praias e igarapés no habitar natural do Boto.  Em seguida, frequentaremos restaurante selecionado onde apreciaremos a culinária típica local.",
        des_resumida: "Em Mocajuba, viva a experiência única de observar os botos cor-de-rosa em seu habitat natural. Inclui passeio de barco por praias e igarapés, além de um almoço com culinária típica da região.",
        imagem: ["/public/assets/passeio/veroboto.jpg"],
        contem: ["receptivo hoteleiro", "TODOS os traslados", "passeio de Jangada pelo baixo Tocantins e serviços de Guia Turístico"],
        nao_contem: ["INGRESSOS DE NENHUMA ESPÉCIE", "ALIMENTAÇÃO E BEBIDA"],
        atencao: ""
    }
}

// Função para carregar dados da pagina
function carregarPacote(pacoteId) {
    if (!pacotes[pacoteId]) return;
    const pacote = pacotes[pacoteId];

    const tituloPacote = document.getElementById("titulo-pacote");
    if (tituloPacote) tituloPacote.innerHTML = pacote.titulo;

    const descricaoPacote = document.getElementById("descricao-pacote");
    if (descricaoPacote) descricaoPacote.innerHTML = pacote.descricao;

    const desResumidaPacote = document.getElementById("des-resumida-pacote");
    if (desResumidaPacote) desResumidaPacote.innerHTML = pacote.des_resumida;

    const duracaoPacote = document.getElementById("duracao-pacote");
    if (duracaoPacote) duracaoPacote.innerHTML = pacote.duracao;

    const precoPacote = document.getElementById("preco1-pacote");
    if (precoPacote) {
        precoPacote.innerHTML = pacote.preco2
            ? `R$ ${pacote.preco1} (${pacote.hora1}h) • R$ ${pacote.preco2} (${pacote.hora2}h)`
            : `R$ ${pacote.preco1} - ${pacote.hora1} horas`;
    }

    const imagemPacote = document.getElementById("imagem-pacote");
    if (imagemPacote) imagemPacote.src = pacote.imagem[0];

    const listaIncluso = document.getElementById("contem-pacote");
    if (listaIncluso) {
        listaIncluso.innerHTML = pacote.contem.map(item => `<li>${item}</li>`).join("");
    }

    const listaNaoIncluso = document.getElementById("nao-contem-pacote");
    if (listaNaoIncluso) {
        listaNaoIncluso.innerHTML = pacote.nao_contem.map(item => `<li>${item}</li>`).join("");
    }

    const atencaoPacote = document.getElementById("atencao-pacote");
    if (atencaoPacote) atencaoPacote.innerHTML = pacote.atencao || "";
}

// Executa quando DOM estiver carregado
document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);
    const pacoteId = urlParams.get("pacote");

    if (pacoteId && pacotes[pacoteId]) {
        carregarPacote(pacoteId);
    }
});