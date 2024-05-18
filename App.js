import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList, Linking } from 'react-native';

// Componentes de página
const PaginaInicial = () => {
  return (
    <View style={styles.paginaInicial}>
      <Image style ={styles.imageCurriculo} source={require('./assets/profile_curriculo.jpg')} />
      <Text style={styles.textoPaginaInicial}>Juan Henrique</Text>
      <Text style={styles.textoPaginaInicial}>Desenvolvedor Back-end</Text>
    </View>
  );
};

const Pagina1 = () => {
  return (
    <View style={styles.paginas}>
      <Image style ={styles.imageCurriculo} source={require('./assets/profile_curriculo.jpg')} />
      <Text style={styles.titulos}>OBJETIVO</Text>
      <Text style={styles.textoPaginas}>Atuar com seriedade e profissionalismo, buscando através de minha qualificação e ser eficiente na atividade designada. Procurar sempre novos conhecimentos, para uma melhor atuação no decorrer da minha trajetória.
</Text>
<Text style={styles.titulos}>FORMAÇÃO ACADÊMICA</Text>

<FlatList
        data={[
          {key: 'Faculdade - Senac-PE - Análise em Desenvolvimento de Sistemas - Situação: Cursando.'},
          {key: 'UNIFG – Faculdade dos Guararapes - Curso Tecnólogo em Design Gráfico - Situação: Concluído.'},
          {key: 'Escola Técnica Estadual Cícero Dias - E.M Técnico em Programação de Jogos Digitais - Situação: Concluído.'},
        
        ]}
        renderItem={({item}) => <Text style={styles.textoPaginas}>{item.key}</Text>}
      />


    </View>
  );
};

const Pagina2 = () => {
  return (
    <View style={styles.paginas}>
      <Image style ={styles.imageCurriculo} source={require('./assets/profile_curriculo.jpg')} />
      <Text style={styles.titulos}>EXPERIÊNCIA PROFISSIONAL</Text>
      <Text style={[styles.textoPaginas, {fontWeight: 'bold'}]}>WizArt Digital</Text>
      <Text style={styles.textoPaginas}>Atribuições: Estagiário</Text>
      <Text style={styles.textoPaginas}>Atividades: Desenvolvimento em criação, edição de sites e artes digitais, além de atuar como desenvolvedor front-end, aprendendo a utilizar frameworks e ferramentas atuais para aprimorar a experiência do usuário.
Período: 11/2023 - 05-204</Text>
<Text style={styles.titulos}>IDIOMAS</Text>
<Text style={styles.textoPaginas}>Inglês Nível Intermediário</Text>

    </View>
  );
};

import { ScrollView } from 'react-native';

const Pagina3 = () => {
  return (
    <View style={styles.paginas}>
      <Image style={styles.imageCurriculo} source={require('./assets/profile_curriculo.jpg')} />
      <Text style={styles.titulos}>CURSOS COMPLEMENTARES</Text>
      <View style={styles.cursosContainer}>
        <FlatList
          data={[
            { key: 'CESAR School - Curso Next - Situação: Concluído' },
            { key: 'Scrum Foundation ProfeJJional (SFPC) - Situação: Concluído' },
            { key: 'Valorian - Introdução a Machine Learning - Situação: Concluído' },
            { key: 'Rocket Seat - Springboot Java - Situação: Concluído' },
          ]}
          renderItem={({ item }) => <Text style={styles.textoPaginas}>{item.key}</Text>}
        />
      </View>
      <Text style={styles.titulos}>PORTFÓLIO</Text>
      <Text style={[styles.textoPaginas, { color: 'blue' }]}
        onPress={() => Linking.openURL('https://github.com/JuanHenriq/')}> Github </Text>
      <Text style={[styles.textoPaginas, { color: 'blue' }]}
        onPress={() => Linking.openURL('https://www.linkedin.com/in/juanhenriquee/')}> Linkedin </Text>
      <Text style={[styles.textoPaginas, { color: 'blue' }]}
        onPress={() => Linking.openURL('https://www.behance.net/juanhenriqdaaf')}> Behance </Text>
    </View>
  );
};



const App = () => {
  const [menuAberto, setMenuAberto] = useState(false);
  const [paginaAtual, setPaginaAtual] = useState('Página Inicial');

  const toggleMenu = () => {
    setMenuAberto(!menuAberto);
  };

  const navegarPara = (pagina) => {
    setPaginaAtual(pagina);
    setMenuAberto(false);
  };

  // Renderização condicional da página atual
  const renderizarPagina = () => {
    switch (paginaAtual) {
      case 'Página Inicial':
        return <PaginaInicial />;
      case 'Página 1':
        return <Pagina1 />;
      case 'Página 2':
        return <Pagina2 />;
      case 'Página 3':
        return <Pagina3 />;
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      {/* Cabeçalho */}
      <View style={styles.header}>
        <Text style={styles.titulo}>Meu App</Text>
        <TouchableOpacity onPress={toggleMenu} style={styles.menuIcon}>
          <Text>☰</Text>
        </TouchableOpacity>
      </View>

      {/* Menu */}
      {menuAberto && (
        <View style={styles.menu}>
          <TouchableOpacity style={styles.menuItem} onPress={() => navegarPara('Página Inicial')}>
            <Text style={styles.menuItemText}>Página Inicial</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={() => navegarPara('Página 1')}>
            <Text style={styles.menuItemText}>Página 1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={() => navegarPara('Página 2')}>
            <Text style={styles.menuItemText}>Página 2</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={() => navegarPara('Página 3')}>
            <Text style={styles.menuItemText}>Página 3</Text>
          </TouchableOpacity>
        </View>
      )}

      {/* Conteúdo */}
      <View style={styles.content}>{renderizarPagina()}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 24,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  menuIcon: {
    padding: 10,
  },
  menu: {
    backgroundColor: '#f9f9f9',
    padding: 10,
  },
  menuItem: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  menuItemText: {
    fontSize: 16,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  paginas: {
    flex: 1,
    marginTop: 30,
    alignItems: 'center',
    width: '85%',
  },
  textoPaginas: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 20,
  },
  paginaInicial: {
    flex: 1,
    width: '100%',
    backgroundColor: '#1d1d1d',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textoPaginaInicial: {
    fontSize: 18,
    marginTop: 10,
    color: '#FFF',
    fontWeight: 'bold',
  },
  imageCurriculo: {
    borderRadius: 200,
    width: 200,
    height: 200,
  },
  titulos: {
    paddingTop: 30,
    fontSize: 18,
    fontWeight: 'bold',
  },
  cursosContainer: {
    width: '100%',
  },
});

export default App;