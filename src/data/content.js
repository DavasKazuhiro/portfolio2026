export const profile = {
  name: 'Davi Kazuhiro',
  logo: 'Davas',
  location: 'Curitiba, Paraná',
  phone: '(41) 99734-6514',
  email: 'daviknatume@gmail.com',
  github: 'https://github.com/DavasKazuhiro',
  linkedin: 'https://linkedin.com/in/davi-kazuhiro-natume',
  roles: [
    'Estagiário de Desenvolvimento de Software',
    'Aluno de Ciência da Computação',
    'Pesquisador em Detecção de Fraudes',
  ],
  objetivo:
    'Busco oportunidade de estágio em desenvolvimento de software, aplicando minha experiência profissional com Java e automação de processos e ampliando meus conhecimentos em desenvolvimento de sistemas e análise de dados.',
}

export const about = [
  {
    subtitulo: 'Quem sou eu?',
    texto:
      'Sou um entusiasta da tecnologia movido por curiosidade e pela vontade constante de aprender. Gosto de transformar ideias em soluções reais e ajudar as pessoas. Para isso, busco colocar em prática tudo que aprendo, sempre com o objetivo de criar sistemas que funcionem de verdade, mesmo em larga escala.',
  },
  {
    subtitulo: 'O que faço?',
    texto:
      'Atualmente sou estudante de Ciência da Computação pela PUCPR, o que faz meu aprendizado ser potencializado ao máximo. Faço estágio na Bradesco Seguros, onde posso colocar meus conhecimentos em prática e criar automações para ajudar os analistas. Além disso faço iniciação científica na área de detecção de fraudes em Blockchain, podendo conhecer melhor o ramo acadêmico e as metodologias científicas.',
  },
]

export const experiences = [
  {
    tipo: 'trabalho',
    titulo: 'Estagiário de Desenvolvimento de Software',
    local: 'Bradesco Seguros — Curitiba, PR',
    periodo: 'Julho 2025 — Atual',
    itens: [
      'Desenvolvi aplicações desktop em Java para automatizar processos manuais dos analistas, reduzindo o tempo de execução de tarefas diárias para menos de 1 minuto.',
      'Desenvolvi uma biblioteca em Java com o Design System da empresa para o desenvolvimento padronizado das interfaces gráficas das aplicações.',
      'Migrei e reimplementei automações desenvolvidas em VBA para Java, reduzindo rotinas de consultas em 80%.',
      'Orientei novos integrantes da equipe e analistas em lógica de programação, arquitetura de sistemas e outros conceitos fundamentais.',
    ],
  },
  {
    tipo: 'pesquisa',
    titulo: 'Detecção de Fraudes em Blockchain com Algoritmos de Mineração de Fluxo de Dados',
    local: 'PIBIC PUCPR — Curitiba, PR',
    periodo: 'Julho 2026 — Agosto 2027',
    itens: [
      'Estudo de benchmarks e técnicas de ensembles para mineração de fluxos de dados.',
      'Desenvolvimento do protocolo experimental, selecionando bases de dados de fraudes em blockchains e tunings específicos de abordagens da literatura.',
      'Comparação de técnicas de classificação em fluxos de dados no contexto de fraudes em blockchains.',
    ],
  },
]

export const education = {
  curso: 'Bacharel em Ciência da Computação',
  instituicao: 'PUCPR — Curitiba, PR',
  previsao: 'Previsão de conclusão: 2027',
  ira: 'IRA: 9,4',
  disciplinas: ['Big Data', 'Estatística', 'Estrutura de Dados', 'Complexidade de Algoritmos'],
}

export const projects = [
  {
    icon: 'diagram-project',
    titulo: 'Sistema de Chamadas',
    destaque: true,
    descricao:
      'Aplicação web para gerenciamento de turmas e controle de frequência acadêmica, com autenticação e controle de acesso por tipo de usuário, gerenciamento de aulas com geolocalização e geração de relatórios.',
    tecnologias: ['React', 'JavaScript', 'Node.js', 'MySQL'],
    link: 'https://github.com/DavasKazuhiro/present',
  },
  {
    icon: 'wifi',
    titulo: 'Sistema de Pesagem de Vacas',
    destaque: true,
    descricao: 'Sistema de pesagem de vacas com identificação via RFID para acompanhamento da saúde, desenvolvido em parceria com a Fazenda Experimental Gralha Azul em Disciplina Extensiva',
    tecnologias: ['Flask API', 'MQTT Server', 'IoT'],
    link: "https://github.com/DavasKazuhiro/PesagemVacas"
  },
  {
    icon: 'ccg',
    titulo: 'Controle de Estoque ONG',
    descricao:
      'Programa web desenvolvido como projeto de extensão para facilitar o controle do estoque de insumos da ONG Crazy Cat Gang, que abriga, castra e doa gatos de rua.',
    tecnologias: [],
    link: 'https://github.com/DavasKazuhiro/estoque_ccg',
  },
  {
    icon: 'play',
    titulo: 'Beat Learning',
    descricao:
      'Aplicativo desenvolvido em Processing que simula uma bateria eletrônica, com o intuito de ensinar ritmo, batida e teoria musical a crianças do ensino fundamental.',
    tecnologias: [],
    link: 'https://github.com/DavasKazuhiro/Beat-Learning',
  },
  {
    icon: 'droplet',
    titulo: 'Bebedouro Inteligente',
    descricao:
      'Bebedouro inteligente para cachorros de rua, criado para reduzir casos de dengue e melhorar a qualidade de vida dos animais. Simulado em microPython/ESP32 (Wokwi) e modelado em 3D no SolidWorks.',
    tecnologias: [],
    link: "https://github.com/DavasKazuhiro/Bebedouro-Para-Cachorros",
  },
  {
    icon: 'folder',
    titulo: 'Organizador de Arquivos',
    descricao:
      'Programa em Python que organiza diretórios do computador em pastas de acordo com suas extensões, utilizando as bibliotecas os e shutil.',
    tecnologias: [],
    link: "https://github.com/DavasKazuhiro/Organizador-de-Arquivos",
  },
]

export const skills = {
  tecnicas: [
    { nome: 'Java', icon: 'java', nivel: 90 },
    { nome: 'Spring', icon: 'leaf', nivel: 75 },
    { nome: 'Python', icon: 'python', nivel: 80 },
    { nome: 'SQL / MySQL', icon: 'database', nivel: 80 },
    { nome: 'React', icon: 'react', nivel: 75 },
    { nome: 'JavaScript', icon: 'js', nivel: 80 },
    { nome: 'Node.js', icon: 'node-js', nivel: 70 },
  ],
  ferramentas: ['Git', 'MOA', 'Linux', 'VSCode', 'Vite', 'Eclipse'],
  idiomas: [
    { nome: 'Português', nivel: 'Nativo' },
    { nome: 'Inglês', nivel: 'Intermediário-avançado' },
  ],
  profissionais: [
    { nome: 'Raciocínio Lógico', perc: 95 },
    { nome: 'Comunicação', perc: 85 },
    { nome: 'Criatividade', perc: 80 },
    { nome: 'Trabalho em Equipe', perc: 90 },
    { nome: 'Proatividade', perc: 85 },
    { nome: 'Aprendizagem', perc: 95 },
  ],
}

export const extras = [
  {
    titulo: 'Treinamento para Maratona de Programação SBC',
    descricao:
      'Preparação em programação competitiva, com foco em algoritmos, estruturas de dados, resolução de problemas e análise de complexidade.',
  },
]

export const navLinks = [
  { href: '#home', label: 'Início' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#experiencia', label: 'Experiência' },
  { href: '#projetos', label: 'Projetos' },
  { href: '#skills', label: 'Habilidades' },
  { href: '#contato', label: 'Contato' },
]
