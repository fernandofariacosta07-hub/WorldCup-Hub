// ═══════════════════════════════════════════════════════════
//  FIFA World Cup 2026 — JavaScript
// ═══════════════════════════════════════════════════════════

const selecoes = [
  {
    id: 'we26', nome: 'We Are 26', flag: '⭐', cor: '#FFD600', figs: [
      { n: 'WA-00', nome: 'Panini Extra Sticker', esp: true },
    ]
  },
  {
    id: 'cup26', nome: 'Cup 26', flag: '🏆', cor: '#FFD600', figs: [
      { n: 'FWC-1', nome: 'Emblema Oficial', esp: true },
      { n: 'FWC-2', nome: 'Emblema Oficial', esp: true },
      { n: 'FWC-3', nome: 'Mascotes Oficiais', esp: true },
      { n: 'FWC-4', nome: 'Slogan Oficial', esp: true },
    ]
  },
  {
    id: 'ball', nome: 'Bola e Países-Sede', flag: '🌎', cor: '#00B4D8', figs: [
      { n: 'FWC-5', nome: 'Bola Oficial' },
      { n: 'FWC-6', nome: 'Canadá (Sede)' },
      { n: 'FWC-7', nome: 'México (Sede)' },
      { n: 'FWC-8', nome: 'EUA (Sede)' },
    ]
  },

  {
    id: 'mex', nome: 'México', flag: '🇲🇽', cor: '#006847', figs: [
      { n: 'MEX-1', nome: 'Escudo', esp: true },
      { n: 'MEX-2', nome: 'Luis Malagón' },
      { n: 'MEX-3', nome: 'Johan Vásquez' },
      { n: 'MEX-4', nome: 'Jorge Sánchez' },
      { n: 'MEX-5', nome: 'César Montes' },
      { n: 'MEX-6', nome: 'Jesús Gallardo' },
      { n: 'MEX-7', nome: 'Israel Reyes' },
      { n: 'MEX-8', nome: 'Diego Lainez' },
      { n: 'MEX-9', nome: 'Carlos Rodríguez' },
      { n: 'MEX-10', nome: 'Edson Álvarez' },
      { n: 'MEX-11', nome: 'Orbelín Pineda' },
      { n: 'MEX-12', nome: 'Marcel Ruiz' },
      { n: 'MEX-13', nome: 'Time Completo', esp: true },
      { n: 'MEX-14', nome: 'Érick Sánchez' },
      { n: 'MEX-15', nome: 'Hirving Lozano' },
      { n: 'MEX-16', nome: 'Santiago Giménez' },
      { n: 'MEX-17', nome: 'Raúl Jiménez' },
      { n: 'MEX-18', nome: 'Alexis Vega' },
      { n: 'MEX-19', nome: 'Roberto Alvarado' },
      { n: 'MEX-20', nome: 'César Huerta' },
    ]
  },
  {
    id: 'rsa', nome: 'África do Sul', flag: '🇿🇦', cor: '#007A4D', figs: [
      { n: 'RSA-1', nome: 'Escudo', esp: true },
      { n: 'RSA-2', nome: 'Ronwen Williams' },
      { n: 'RSA-3', nome: 'Sipho Chaine' },
      { n: 'RSA-4', nome: 'Aubrey Modiba' },
      { n: 'RSA-5', nome: 'Samukele Kabini' },
      { n: 'RSA-6', nome: 'Mbekezeli Mbokazi' },
      { n: 'RSA-7', nome: 'Khulumani Ndamane' },
      { n: 'RSA-8', nome: 'Siyabonga Ngezana' },
      { n: 'RSA-9', nome: 'Khuliso Mudau' },
      { n: 'RSA-10', nome: 'Nkosinathi Sibisi' },
      { n: 'RSA-11', nome: 'Teboho Mokoena' },
      { n: 'RSA-12', nome: 'Thalente Mbatha' },
      { n: 'RSA-13', nome: 'Time Completo', esp: true },
      { n: 'RSA-14', nome: 'Bathusi Aubaas' },
      { n: 'RSA-15', nome: 'Yaya Sithole' },
      { n: 'RSA-16', nome: 'Sipho Mbule' },
      { n: 'RSA-17', nome: 'Lyle Foster' },
      { n: 'RSA-18', nome: 'Iqraam Rayners' },
      { n: 'RSA-19', nome: 'Mohau Nkota' },
      { n: 'RSA-20', nome: 'Oswin Appollis' },
    ]
  },
  {
    id: 'kor', nome: 'Coreia do Sul', flag: '🇰🇷', cor: '#CD2E3A', figs: [
      { n: 'KOR-1', nome: 'Escudo', esp: true },
      { n: 'KOR-2', nome: 'Hyeonwoo Jo' },
      { n: 'KOR-3', nome: 'Seunggyu Kim' },
      { n: 'KOR-4', nome: 'Minjae Kim' },
      { n: 'KOR-5', nome: 'Yumin Cho' },
      { n: 'KOR-6', nome: 'Youngwoo Seol' },
      { n: 'KOR-7', nome: 'Hanbeom Lee' },
      { n: 'KOR-8', nome: 'Taebeok Lee' },
      { n: 'KOR-9', nome: 'Myungjae Lee' },
      { n: 'KOR-10', nome: 'Jaesung Lee' },
      { n: 'KOR-11', nome: 'Inbeom Hwang' },
      { n: 'KOR-12', nome: 'Kangin Lee' },
      { n: 'KOR-13', nome: 'Time Completo', esp: true },
      { n: 'KOR-14', nome: 'Seungho Paik' },
      { n: 'KOR-15', nome: 'Jens Castrop' },
      { n: 'KOR-16', nome: 'Donggyeong Lee' },
      { n: 'KOR-17', nome: 'Guesung Cho' },
      { n: 'KOR-18', nome: 'Heungmin Son' },
      { n: 'KOR-19', nome: 'Heechan Hwang' },
      { n: 'KOR-20', nome: 'Hyeongyu Oh' },
    ]
  },
  {
    id: 'cze', nome: 'República Tcheca', flag: '🇨🇿', cor: '#D7141A', figs: [
      { n: 'CZE-1', nome: 'Escudo', esp: true },
      { n: 'CZE-2', nome: 'Matěj Kovář' },
      { n: 'CZE-3', nome: 'Jindřich Staněk' },
      { n: 'CZE-4', nome: 'Ladislav Krejčí' },
      { n: 'CZE-5', nome: 'Vladimír Coufal' },
      { n: 'CZE-6', nome: 'Jaroslav Zelený' },
      { n: 'CZE-7', nome: 'Tomáš Holeš' },
      { n: 'CZE-8', nome: 'David Zima' },
      { n: 'CZE-9', nome: 'Michal Sadílek' },
      { n: 'CZE-10', nome: 'Lukáš Provod' },
      { n: 'CZE-11', nome: 'Lukáš Červ' },
      { n: 'CZE-12', nome: 'Tomáš Souček' },
      { n: 'CZE-13', nome: 'Time Completo', esp: true },
      { n: 'CZE-14', nome: 'Pavel Šulc' },
      { n: 'CZE-15', nome: 'Matěj Vydra' },
      { n: 'CZE-16', nome: 'Vasil Kušej' },
      { n: 'CZE-17', nome: 'Tomáš Chorý' },
      { n: 'CZE-18', nome: 'Václav Černý' },
      { n: 'CZE-19', nome: 'Adam Hložek' },
      { n: 'CZE-20', nome: 'Patrik Schick' },
    ]
  },

  {
    id: 'can', nome: 'Canadá', flag: '🇨🇦', cor: '#FF0000', figs: [
      { n: 'CAN-1', nome: 'Escudo', esp: true },
      { n: 'CAN-2', nome: 'Dayne St. Clair' },
      { n: 'CAN-3', nome: 'Alphonso Davies' },
      { n: 'CAN-4', nome: 'Alistair Johnston' },
      { n: 'CAN-5', nome: 'Samuel Adekugbe' },
      { n: 'CAN-6', nome: 'Richie Laryea' },
      { n: 'CAN-7', nome: 'Derek Cornelius' },
      { n: 'CAN-8', nome: 'Moïse Bombito' },
      { n: 'CAN-9', nome: 'Kamal Miller' },
      { n: 'CAN-10', nome: 'Stephen Eustáquio' },
      { n: 'CAN-11', nome: 'Ismaël Koné' },
      { n: 'CAN-12', nome: 'Jonathan Osorio' },
      { n: 'CAN-13', nome: 'Time Completo', esp: true },
      { n: 'CAN-14', nome: 'Jacob Shaffelburg' },
      { n: 'CAN-15', nome: 'Mathieu Choinière' },
      { n: 'CAN-16', nome: 'Niko Sigur' },
      { n: 'CAN-17', nome: 'Tajon Buchanan' },
      { n: 'CAN-18', nome: 'Liam Millar' },
      { n: 'CAN-19', nome: 'Cyle Larin' },
      { n: 'CAN-20', nome: 'Jonathan David' },
    ]
  },
  {
    id: 'bih', nome: 'Bósnia-Herzegovina', flag: '🇧🇦', cor: '#002395', figs: [
      { n: 'BIH-1', nome: 'Escudo', esp: true },
      { n: 'BIH-2', nome: 'Nikola Vasilj' },
      { n: 'BIH-3', nome: 'Amar Dedić' },
      { n: 'BIH-4', nome: 'Sead Kolašinac' },
      { n: 'BIH-5', nome: 'Tarik Muharemović' },
      { n: 'BIH-6', nome: 'Nihad Mujakić' },
      { n: 'BIH-7', nome: 'Nikola Katić' },
      { n: 'BIH-8', nome: 'Amir Hadžiahmetović' },
      { n: 'BIH-9', nome: 'Benjamin Tahirović' },
      { n: 'BIH-10', nome: 'Armin Gigović' },
      { n: 'BIH-11', nome: 'Ivan Šunjić' },
      { n: 'BIH-12', nome: 'Ivan Bašić' },
      { n: 'BIH-13', nome: 'Time Completo', esp: true },
      { n: 'BIH-14', nome: 'Dženis Burnić' },
      { n: 'BIH-15', nome: 'Esmir Bajraktarević' },
      { n: 'BIH-16', nome: 'Amar Memić' },
      { n: 'BIH-17', nome: 'Ermedin Demirović' },
      { n: 'BIH-18', nome: 'Edin Džeko' },
      { n: 'BIH-19', nome: 'Samed Baždar' },
      { n: 'BIH-20', nome: 'Haris Tabaković' },
    ]
  },
  {
    id: 'qat', nome: 'Qatar', flag: '🇶🇦', cor: '#8D1B3D', figs: [
      { n: 'QAT-1', nome: 'Escudo', esp: true },
      { n: 'QAT-2', nome: 'Meshaal Barsham' },
      { n: 'QAT-3', nome: 'Sultan Al-Brake' },
      { n: 'QAT-4', nome: 'Lucas Mendes' },
      { n: 'QAT-5', nome: 'Homam Ahmed' },
      { n: 'QAT-6', nome: 'Boualem Khoukhi' },
      { n: 'QAT-7', nome: 'Pedro Miguel' },
      { n: 'QAT-8', nome: 'Tarek Salman' },
      { n: 'QAT-9', nome: 'Mohammed Al-Naimi' },
      { n: 'QAT-10', nome: 'Karim Boudiaf' },
      { n: 'QAT-11', nome: 'Assim Madibo' },
      { n: 'QAT-12', nome: 'Hamed Fatehi' },
      { n: 'QAT-13', nome: 'Time Completo', esp: true },
      { n: 'QAT-14', nome: 'Mohammed Waad' },
      { n: 'QAT-15', nome: 'Abdulaziz Hatem' },
      { n: 'QAT-16', nome: 'Hassan Al-Haydos' },
      { n: 'QAT-17', nome: 'Edmilson Junior' },
      { n: 'QAT-18', nome: 'Akram Hassan Afif' },
      { n: 'QAT-19', nome: 'Ahmed Al-Ganehi' },
      { n: 'QAT-20', nome: 'Almoez Ali' },
    ]
  },
  {
    id: 'sui', nome: 'Suíça', flag: '🇨🇭', cor: '#FF0000', figs: [
      { n: 'SUI-1', nome: 'Escudo', esp: true },
      { n: 'SUI-2', nome: 'Gregor Kobel' },
      { n: 'SUI-3', nome: 'Yvon Mvogo' },
      { n: 'SUI-4', nome: 'Manuel Akanji' },
      { n: 'SUI-5', nome: 'Ricardo Rodríguez' },
      { n: 'SUI-6', nome: 'Nico Elvedi' },
      { n: 'SUI-7', nome: 'Aurèle Amenda' },
      { n: 'SUI-8', nome: 'Silvan Widmer' },
      { n: 'SUI-9', nome: 'Granit Xhaka' },
      { n: 'SUI-10', nome: 'Denis Zakaria' },
      { n: 'SUI-11', nome: 'Remo Freuler' },
      { n: 'SUI-12', nome: 'Fabian Rieder' },
      { n: 'SUI-13', nome: 'Time Completo', esp: true },
      { n: 'SUI-14', nome: 'Ardon Jashari' },
      { n: 'SUI-15', nome: 'Johan Manzambi' },
      { n: 'SUI-16', nome: 'Michel Aebischer' },
      { n: 'SUI-17', nome: 'Breel Embolo' },
      { n: 'SUI-18', nome: 'Rubén Vargas' },
      { n: 'SUI-19', nome: 'Dan Ndoye' },
      { n: 'SUI-20', nome: 'Zeki Amdouni' },
    ]
  },

  {
    id: 'bra', nome: 'Brasil', flag: '🇧🇷', cor: '#009C3B', figs: [
      { n: 'BRA-1', nome: 'Escudo', esp: true },
      { n: 'BRA-2', nome: 'Alisson' },
      { n: 'BRA-3', nome: 'Bento' },
      { n: 'BRA-4', nome: 'Marquinhos' },
      { n: 'BRA-5', nome: 'Éder Militão' },
      { n: 'BRA-6', nome: 'Gabriel Magalhães' },
      { n: 'BRA-7', nome: 'Danilo' },
      { n: 'BRA-8', nome: 'Wesley' },
      { n: 'BRA-9', nome: 'Lucas Paquetá' },
      { n: 'BRA-10', nome: 'Casemiro' },
      { n: 'BRA-11', nome: 'Bruno Guimarães' },
      { n: 'BRA-12', nome: 'Luiz Henrique' },
      { n: 'BRA-13', nome: 'Time Completo', esp: true },
      { n: 'BRA-14', nome: 'Vinícius Júnior' },
      { n: 'BRA-15', nome: 'Rodrygo' },
      { n: 'BRA-16', nome: 'João Pedro' },
      { n: 'BRA-17', nome: 'Matheus Cunha' },
      { n: 'BRA-18', nome: 'Gabriel Martinelli' },
      { n: 'BRA-19', nome: 'Raphinha' },
      { n: 'BRA-20', nome: 'Estêvão' },
    ]
  },
  {
    id: 'mar', nome: 'Marrocos', flag: '🇲🇦', cor: '#C1272D', figs: [
      { n: 'MAR-1', nome: 'Escudo', esp: true },
      { n: 'MAR-2', nome: 'Yassine Bounou' },
      { n: 'MAR-3', nome: 'Munir El Kajoui' },
      { n: 'MAR-4', nome: 'Achraf Hakimi' },
      { n: 'MAR-5', nome: 'Noussair Mazraoui' },
      { n: 'MAR-6', nome: 'Nayef Aguerd' },
      { n: 'MAR-7', nome: 'Romain Saïss' },
      { n: 'MAR-8', nome: 'Jawad El Yamiq' },
      { n: 'MAR-9', nome: 'Adam Masina' },
      { n: 'MAR-10', nome: 'Sofyan Amrabat' },
      { n: 'MAR-11', nome: 'Azzedine Ounahi' },
      { n: 'MAR-12', nome: 'Eliesse Ben Seghir' },
      { n: 'MAR-13', nome: 'Time Completo', esp: true },
      { n: 'MAR-14', nome: 'Bilal El Khannouss' },
      { n: 'MAR-15', nome: 'Ismael Saibari' },
      { n: 'MAR-16', nome: 'Youssef En-Nesyri' },
      { n: 'MAR-17', nome: 'Abde Ezzalzouli' },
      { n: 'MAR-18', nome: 'Soufiane Rahimi' },
      { n: 'MAR-19', nome: 'Brahim Díaz' },
      { n: 'MAR-20', nome: 'Ayoub El Kaabi' },
    ]
  },
  {
    id: 'hai', nome: 'Haiti', flag: '🇭🇹', cor: '#00209F', figs: [
      { n: 'HAI-1', nome: 'Escudo', esp: true },
      { n: 'HAI-2', nome: 'Johny Placide' },
      { n: 'HAI-3', nome: 'Carlens Arcus' },
      { n: 'HAI-4', nome: 'Martin Expérience' },
      { n: 'HAI-5', nome: 'Jean-Kévin Duverne' },
      { n: 'HAI-6', nome: 'Ricardo Adé' },
      { n: 'HAI-7', nome: 'Duke Lacroix' },
      { n: 'HAI-8', nome: 'Garven Metusala' },
      { n: 'HAI-9', nome: 'Hannes Delcroix' },
      { n: 'HAI-10', nome: 'Leverton Pierre' },
      { n: 'HAI-11', nome: 'Danley Jean Jacques' },
      { n: 'HAI-12', nome: 'Jean-Ricner Bellegarde' },
      { n: 'HAI-13', nome: 'Time Completo', esp: true },
      { n: 'HAI-14', nome: 'Christopher Attys' },
      { n: 'HAI-15', nome: 'Derrick Etienne Jr.' },
      { n: 'HAI-16', nome: 'Josué Casimir' },
      { n: 'HAI-17', nome: 'Ruben Providence' },
      { n: 'HAI-18', nome: 'Duckens Nazon' },
      { n: 'HAI-19', nome: 'Louicius Deedson' },
      { n: 'HAI-20', nome: 'Frantzdy Pierrot' },
    ]
  },
  {
    id: 'sco', nome: 'Escócia', flag: '🏴󠁧󠁢󠁳󠁣󠁴󠁿', cor: '#003F87', figs: [
      { n: 'SCO-1', nome: 'Escudo', esp: true },
      { n: 'SCO-2', nome: 'Angus Gunn' },
      { n: 'SCO-3', nome: 'Jack Hendry' },
      { n: 'SCO-4', nome: 'Kieran Tierney' },
      { n: 'SCO-5', nome: 'Aaron Hickey' },
      { n: 'SCO-6', nome: 'Andrew Robertson' },
      { n: 'SCO-7', nome: 'Scott McKenna' },
      { n: 'SCO-8', nome: 'John Souttar' },
      { n: 'SCO-9', nome: 'Anthony Ralston' },
      { n: 'SCO-10', nome: 'Grant Hanley' },
      { n: 'SCO-11', nome: 'Scott McTominay' },
      { n: 'SCO-12', nome: 'Billy Gilmour' },
      { n: 'SCO-13', nome: 'Time Completo', esp: true },
      { n: 'SCO-14', nome: 'Lewis Ferguson' },
      { n: 'SCO-15', nome: 'Ryan Christie' },
      { n: 'SCO-16', nome: 'Kenny McLean' },
      { n: 'SCO-17', nome: 'John McGinn' },
      { n: 'SCO-18', nome: 'Lyndon Dykes' },
      { n: 'SCO-19', nome: 'Ché Adams' },
      { n: 'SCO-20', nome: 'Ben Doak' },
    ]
  },

  {
    id: 'usa', nome: 'Estados Unidos', flag: '🇺🇸', cor: '#B22234', figs: [
      { n: 'USA-1', nome: 'Escudo', esp: true },
      { n: 'USA-2', nome: 'Matt Freese' },
      { n: 'USA-3', nome: 'Chris Richards' },
      { n: 'USA-4', nome: 'Tim Ream' },
      { n: 'USA-5', nome: 'Mark McKenzie' },
      { n: 'USA-6', nome: 'Alex Freeman' },
      { n: 'USA-7', nome: 'Antonee Robinson' },
      { n: 'USA-8', nome: 'Tyler Adams' },
      { n: 'USA-9', nome: 'Tanner Tessmann' },
      { n: 'USA-10', nome: 'Weston McKennie' },
      { n: 'USA-11', nome: 'Cristian Roldan' },
      { n: 'USA-12', nome: 'Timothy Weah' },
      { n: 'USA-13', nome: 'Time Completo', esp: true },
      { n: 'USA-14', nome: 'Diego Luna' },
      { n: 'USA-15', nome: 'Malik Tillman' },
      { n: 'USA-16', nome: 'Christian Pulisic' },
      { n: 'USA-17', nome: 'Brenden Aaronson' },
      { n: 'USA-18', nome: 'Ricardo Pepi' },
      { n: 'USA-19', nome: 'Haji Wright' },
      { n: 'USA-20', nome: 'Folarin Balogun' },
    ]
  },
  {
    id: 'par', nome: 'Paraguai', flag: '🇵🇾', cor: '#D52B1E', figs: [
      { n: 'PAR-1', nome: 'Escudo', esp: true },
      { n: 'PAR-2', nome: 'Roberto Fernández' },
      { n: 'PAR-3', nome: 'Orlando Gill' },
      { n: 'PAR-4', nome: 'Gustavo Gómez' },
      { n: 'PAR-5', nome: 'Fabián Balbuena' },
      { n: 'PAR-6', nome: 'Juan José Cáceres' },
      { n: 'PAR-7', nome: 'Omar Alderete' },
      { n: 'PAR-8', nome: 'Júnior Alonso' },
      { n: 'PAR-9', nome: 'Mathías Villasanti' },
      { n: 'PAR-10', nome: 'Diego Gómez' },
      { n: 'PAR-11', nome: 'Damián Bobadilla' },
      { n: 'PAR-12', nome: 'Andrés Cubas' },
      { n: 'PAR-13', nome: 'Time Completo', esp: true },
      { n: 'PAR-14', nome: 'Matías Galarza Fonda' },
      { n: 'PAR-15', nome: 'Julio Enciso' },
      { n: 'PAR-16', nome: 'Alejandro Romero Gamarra' },
      { n: 'PAR-17', nome: 'Miguel Almirón' },
      { n: 'PAR-18', nome: 'Ramón Sosa' },
      { n: 'PAR-19', nome: 'Ángel Romero' },
      { n: 'PAR-20', nome: 'Antonio Sanabria' },
    ]
  },
  {
    id: 'aus', nome: 'Austrália', flag: '🇦🇺', cor: '#00843D', figs: [
      { n: 'AUS-1', nome: 'Escudo', esp: true },
      { n: 'AUS-2', nome: 'Mathew Ryan' },
      { n: 'AUS-3', nome: 'Joe Gauci' },
      { n: 'AUS-4', nome: 'Harry Souttar' },
      { n: 'AUS-5', nome: 'Alessandro Circati' },
      { n: 'AUS-6', nome: 'Jordan Bos' },
      { n: 'AUS-7', nome: 'Aziz Behich' },
      { n: 'AUS-8', nome: 'Cameron Burgess' },
      { n: 'AUS-9', nome: 'Lewis Miller' },
      { n: 'AUS-10', nome: 'Milos Degenek' },
      { n: 'AUS-11', nome: 'Jackson Irvine' },
      { n: 'AUS-12', nome: 'Riley McGree' },
      { n: 'AUS-13', nome: 'Time Completo', esp: true },
      { n: 'AUS-14', nome: 'Aiden O\'Neill' },
      { n: 'AUS-15', nome: 'Connor Metcalfe' },
      { n: 'AUS-16', nome: 'Patrick Yazbek' },
      { n: 'AUS-17', nome: 'Craig Goodwin' },
      { n: 'AUS-18', nome: 'Kusini Yengi' },
      { n: 'AUS-19', nome: 'Nestory Irankunda' },
      { n: 'AUS-20', nome: 'Mohamed Touré' },
    ]
  },
  {
    id: 'tur', nome: 'Turquia', flag: '🇹🇷', cor: '#E30A17', figs: [
      { n: 'TUR-1', nome: 'Escudo', esp: true },
      { n: 'TUR-2', nome: 'Uğurcan Çakır' },
      { n: 'TUR-3', nome: 'Mert Müldür' },
      { n: 'TUR-4', nome: 'Zeki Çelik' },
      { n: 'TUR-5', nome: 'Abdülkerim Bardakcı' },
      { n: 'TUR-6', nome: 'Çağlar Söyüncü' },
      { n: 'TUR-7', nome: 'Merih Demiral' },
      { n: 'TUR-8', nome: 'Ferdi Kadıoğlu' },
      { n: 'TUR-9', nome: 'Kaan Ayhan' },
      { n: 'TUR-10', nome: 'İsmail Yüksek' },
      { n: 'TUR-11', nome: 'Hakan Çalhanoğlu' },
      { n: 'TUR-12', nome: 'Orkun Kökçü' },
      { n: 'TUR-13', nome: 'Time Completo', esp: true },
      { n: 'TUR-14', nome: 'Arda Güler' },
      { n: 'TUR-15', nome: 'İrfan Can Kahveci' },
      { n: 'TUR-16', nome: 'Yunus Akgün' },
      { n: 'TUR-17', nome: 'Can Uzun' },
      { n: 'TUR-18', nome: 'Barış Alper Yılmaz' },
      { n: 'TUR-19', nome: 'Kerem Aktürkoğlu' },
      { n: 'TUR-20', nome: 'Kenan Yıldız' },
    ]
  },

  {
    id: 'ger', nome: 'Alemanha', flag: '🇩🇪', cor: '#000000', figs: [
      { n: 'GER-1', nome: 'Escudo', esp: true },
      { n: 'GER-2', nome: 'Marc-André ter Stegen' },
      { n: 'GER-3', nome: 'Jonathan Tah' },
      { n: 'GER-4', nome: 'David Raum' },
      { n: 'GER-5', nome: 'Nico Schlotterbeck' },
      { n: 'GER-6', nome: 'Antonio Rüdiger' },
      { n: 'GER-7', nome: 'Waldemar Anton' },
      { n: 'GER-8', nome: 'Ridle Baku' },
      { n: 'GER-9', nome: 'Maximilian Mittelstädt' },
      { n: 'GER-10', nome: 'Joshua Kimmich' },
      { n: 'GER-11', nome: 'Florian Wirtz' },
      { n: 'GER-12', nome: 'Felix Nmecha' },
      { n: 'GER-13', nome: 'Time Completo', esp: true },
      { n: 'GER-14', nome: 'Leon Goretzka' },
      { n: 'GER-15', nome: 'Jamal Musiala' },
      { n: 'GER-16', nome: 'Serge Gnabry' },
      { n: 'GER-17', nome: 'Kai Havertz' },
      { n: 'GER-18', nome: 'Leroy Sané' },
      { n: 'GER-19', nome: 'Karim Adeyemi' },
      { n: 'GER-20', nome: 'Nick Woltemade' },
    ]
  },
  {
    id: 'cuw', nome: 'Curaçao', flag: '🇨🇼', cor: '#003DA5', figs: [
      { n: 'CUW-1', nome: 'Escudo', esp: true },
      { n: 'CUW-2', nome: 'Eloy Room' },
      { n: 'CUW-3', nome: 'Armando Obispo' },
      { n: 'CUW-4', nome: 'Sherel Floranus' },
      { n: 'CUW-5', nome: 'Jurien Gaari' },
      { n: 'CUW-6', nome: 'Joshua Brenet' },
      { n: 'CUW-7', nome: 'Roshon van Eijma' },
      { n: 'CUW-8', nome: 'Shurandy Sambo' },
      { n: 'CUW-9', nome: 'Livano Comenencia' },
      { n: 'CUW-10', nome: 'Godfried Roemeratoe' },
      { n: 'CUW-11', nome: 'Juninho Bacuna' },
      { n: 'CUW-12', nome: 'Leandro Bacuna' },
      { n: 'CUW-13', nome: 'Time Completo', esp: true },
      { n: 'CUW-14', nome: 'Tahith Chong' },
      { n: 'CUW-15', nome: 'Kenji Gorré' },
      { n: 'CUW-16', nome: 'Jearl Margaritha' },
      { n: 'CUW-17', nome: 'Jürgen Locadia' },
      { n: 'CUW-18', nome: 'Jeremy Antonisse' },
      { n: 'CUW-19', nome: 'Gervane Kastaneer' },
      { n: 'CUW-20', nome: 'Sontje Hansen' },
    ]
  },
  {
    id: 'civ', nome: 'Costa do Marfim', flag: '🇨🇮', cor: '#F77F00', figs: [
      { n: 'CIV-1', nome: 'Escudo', esp: true },
      { n: 'CIV-2', nome: 'Yahia Fofana' },
      { n: 'CIV-3', nome: 'Ghislain Konan' },
      { n: 'CIV-4', nome: 'Wilfried Singo' },
      { n: 'CIV-5', nome: 'Odilon Kossounou' },
      { n: 'CIV-6', nome: 'Evan Ndicka' },
      { n: 'CIV-7', nome: 'Willy Boly' },
      { n: 'CIV-8', nome: 'Emmanuel Agbadou' },
      { n: 'CIV-9', nome: 'Ousmane Diomande' },
      { n: 'CIV-10', nome: 'Franck Kessié' },
      { n: 'CIV-11', nome: 'Seko Fofana' },
      { n: 'CIV-12', nome: 'Ibrahim Sangaré' },
      { n: 'CIV-13', nome: 'Time Completo', esp: true },
      { n: 'CIV-14', nome: 'Jean-Philippe Krasso' },
      { n: 'CIV-15', nome: 'Amad Diallo' },
      { n: 'CIV-16', nome: 'Sébastien Haller' },
      { n: 'CIV-17', nome: 'Simon Adingra' },
      { n: 'CIV-18', nome: 'Yan Diomande' },
      { n: 'CIV-19', nome: 'Evann Guessand' },
      { n: 'CIV-20', nome: 'Oumar Diakité' },
    ]
  },
  {
    id: 'ecu', nome: 'Equador', flag: '🇪🇨', cor: '#FFD700', figs: [
      { n: 'ECU-1', nome: 'Escudo', esp: true },
      { n: 'ECU-2', nome: 'Hernán Galíndez' },
      { n: 'ECU-3', nome: 'Gonzalo Valle' },
      { n: 'ECU-4', nome: 'Piero Hincapié' },
      { n: 'ECU-5', nome: 'Pervis Estupiñán' },
      { n: 'ECU-6', nome: 'Willian Pacho' },
      { n: 'ECU-7', nome: 'Ángelo Preciado' },
      { n: 'ECU-8', nome: 'Joel Ordóñez' },
      { n: 'ECU-9', nome: 'Moisés Caicedo' },
      { n: 'ECU-10', nome: 'Alan Franco' },
      { n: 'ECU-11', nome: 'Kendry Páez' },
      { n: 'ECU-12', nome: 'Pedro Vite' },
      { n: 'ECU-13', nome: 'Time Completo', esp: true },
      { n: 'ECU-14', nome: 'John Yeboah' },
      { n: 'ECU-15', nome: 'Leonardo Campana' },
      { n: 'ECU-16', nome: 'Gonzalo Plata' },
      { n: 'ECU-17', nome: 'Nilson Angulo' },
      { n: 'ECU-18', nome: 'Alan Minda' },
      { n: 'ECU-19', nome: 'Kevin Rodríguez' },
      { n: 'ECU-20', nome: 'Enner Valencia' },
    ]
  },

  {
    id: 'ned', nome: 'Holanda', flag: '🇳🇱', cor: '#FF6600', figs: [
      { n: 'NED-1', nome: 'Escudo', esp: true },
      { n: 'NED-2', nome: 'Bart Verbruggen' },
      { n: 'NED-3', nome: 'Virgil van Dijk' },
      { n: 'NED-4', nome: 'Micky van de Ven' },
      { n: 'NED-5', nome: 'Jurriën Timber' },
      { n: 'NED-6', nome: 'Denzel Dumfries' },
      { n: 'NED-7', nome: 'Nathan Aké' },
      { n: 'NED-8', nome: 'Jeremie Frimpong' },
      { n: 'NED-9', nome: 'Jan Paul van Hecke' },
      { n: 'NED-10', nome: 'Tijjani Reijnders' },
      { n: 'NED-11', nome: 'Ryan Gravenberch' },
      { n: 'NED-12', nome: 'Teun Koopmeiners' },
      { n: 'NED-13', nome: 'Time Completo', esp: true },
      { n: 'NED-14', nome: 'Frenkie de Jong' },
      { n: 'NED-15', nome: 'Xavi Simons' },
      { n: 'NED-16', nome: 'Justin Kluivert' },
      { n: 'NED-17', nome: 'Memphis Depay' },
      { n: 'NED-18', nome: 'Donyell Malen' },
      { n: 'NED-19', nome: 'Wout Weghorst' },
      { n: 'NED-20', nome: 'Cody Gakpo' },
    ]
  },
  {
    id: 'jpn', nome: 'Japão', flag: '🇯🇵', cor: '#BC002D', figs: [
      { n: 'JPN-1', nome: 'Escudo', esp: true },
      { n: 'JPN-2', nome: 'Zion Suzuki' },
      { n: 'JPN-3', nome: 'Henry H. Mochizuki' },
      { n: 'JPN-4', nome: 'Ayumu Seko' },
      { n: 'JPN-5', nome: 'Junnosuke Suzuki' },
      { n: 'JPN-6', nome: 'Shogo Taniguchi' },
      { n: 'JPN-7', nome: 'Tsuyoshi Watanabe' },
      { n: 'JPN-8', nome: 'Kaishu Sano' },
      { n: 'JPN-9', nome: 'Yuki Soma' },
      { n: 'JPN-10', nome: 'Ao Tanaka' },
      { n: 'JPN-11', nome: 'Daichi Kamada' },
      { n: 'JPN-12', nome: 'Takefusa Kubo' },
      { n: 'JPN-13', nome: 'Time Completo', esp: true },
      { n: 'JPN-14', nome: 'Ritsu Doan' },
      { n: 'JPN-15', nome: 'Keito Nakamura' },
      { n: 'JPN-16', nome: 'Takumi Minamino' },
      { n: 'JPN-17', nome: 'Shuto Machino' },
      { n: 'JPN-18', nome: 'Junya Ito' },
      { n: 'JPN-19', nome: 'Koki Ogawa' },
      { n: 'JPN-20', nome: 'Ayase Ueda' },
    ]
  },
  {
    id: 'swe', nome: 'Suécia', flag: '🇸🇪', cor: '#006AA7', figs: [
      { n: 'SWE-1', nome: 'Escudo', esp: true },
      { n: 'SWE-2', nome: 'Viktor Johansson' },
      { n: 'SWE-3', nome: 'Isak Hien' },
      { n: 'SWE-4', nome: 'Gabriel Gudmundsson' },
      { n: 'SWE-5', nome: 'Emil Holm' },
      { n: 'SWE-6', nome: 'Victor Nilsson Lindelöf' },
      { n: 'SWE-7', nome: 'Gustaf Lagerbielke' },
      { n: 'SWE-8', nome: 'Lucas Bergvall' },
      { n: 'SWE-9', nome: 'Hugo Larsson' },
      { n: 'SWE-10', nome: 'Jesper Karlström' },
      { n: 'SWE-11', nome: 'Yasin Ayari' },
      { n: 'SWE-12', nome: 'Mattias Svanberg' },
      { n: 'SWE-13', nome: 'Time Completo', esp: true },
      { n: 'SWE-14', nome: 'Daniel Svensson' },
      { n: 'SWE-15', nome: 'Ken Sema' },
      { n: 'SWE-16', nome: 'Roony Bardghji' },
      { n: 'SWE-17', nome: 'Dejan Kulusevski' },
      { n: 'SWE-18', nome: 'Anthony Elanga' },
      { n: 'SWE-19', nome: 'Alexander Isak' },
      { n: 'SWE-20', nome: 'Viktor Gyökeres' },
    ]
  },
  {
    id: 'tun', nome: 'Tunísia', flag: '🇹🇳', cor: '#E70013', figs: [
      { n: 'TUN-1', nome: 'Escudo', esp: true },
      { n: 'TUN-2', nome: 'Béchir Ben Saïd' },
      { n: 'TUN-3', nome: 'Aymen Dahmen' },
      { n: 'TUN-4', nome: 'Yan Valery' },
      { n: 'TUN-5', nome: 'Montassar Talbi' },
      { n: 'TUN-6', nome: 'Yassine Meriah' },
      { n: 'TUN-7', nome: 'Ali Abdi' },
      { n: 'TUN-8', nome: 'Dylan Bronn' },
      { n: 'TUN-9', nome: 'Ellyes Skhiri' },
      { n: 'TUN-10', nome: 'Aïssa Laïdouni' },
      { n: 'TUN-11', nome: 'Ferjani Sassi' },
      { n: 'TUN-12', nome: 'M. A. Ben Romdhane' },
      { n: 'TUN-13', nome: 'Time Completo', esp: true },
      { n: 'TUN-14', nome: 'Hannibal Mejbri' },
      { n: 'TUN-15', nome: 'Elias Achouri' },
      { n: 'TUN-16', nome: 'Elias Saad' },
      { n: 'TUN-17', nome: 'Nazim Mastouri' },
      { n: 'TUN-18', nome: 'Ismaël Gharbi' },
      { n: 'TUN-19', nome: 'Sayfallah Ltaief' },
      { n: 'TUN-20', nome: 'Naïm Sliti' },
    ]
  },

  {
    id: 'bel', nome: 'Bélgica', flag: '🇧🇪', cor: '#EF3340', figs: [
      { n: 'BEL-1', nome: 'Escudo', esp: true },
      { n: 'BEL-2', nome: 'Thibaut Courtois' },
      { n: 'BEL-3', nome: 'Arthur Theate' },
      { n: 'BEL-4', nome: 'Timothy Castagne' },
      { n: 'BEL-5', nome: 'Zeno Debast' },
      { n: 'BEL-6', nome: 'Brandon Mechele' },
      { n: 'BEL-7', nome: 'Maxim De Cuyper' },
      { n: 'BEL-8', nome: 'Thomas Meunier' },
      { n: 'BEL-9', nome: 'Youri Tielemans' },
      { n: 'BEL-10', nome: 'Amadou Onana' },
      { n: 'BEL-11', nome: 'Nicolas Raskin' },
      { n: 'BEL-12', nome: 'Alexis Saelemaekers' },
      { n: 'BEL-13', nome: 'Time Completo', esp: true },
      { n: 'BEL-14', nome: 'Hans Vanaken' },
      { n: 'BEL-15', nome: 'Kevin De Bruyne' },
      { n: 'BEL-16', nome: 'Jérémy Doku' },
      { n: 'BEL-17', nome: 'Charles De Ketelaere' },
      { n: 'BEL-18', nome: 'Leandro Trossard' },
      { n: 'BEL-19', nome: 'Loïs Openda' },
      { n: 'BEL-20', nome: 'Romelu Lukaku' },
    ]
  },
  {
    id: 'egy', nome: 'Egito', flag: '🇪🇬', cor: '#CE1126', figs: [
      { n: 'EGY-1', nome: 'Escudo', esp: true },
      { n: 'EGY-2', nome: 'Mohamed Elshenawy' },
      { n: 'EGY-3', nome: 'Mohamed Hany' },
      { n: 'EGY-4', nome: 'Mohamed Hamdy' },
      { n: 'EGY-5', nome: 'Yasser Ibrahim' },
      { n: 'EGY-6', nome: 'Khalid Sobhi' },
      { n: 'EGY-7', nome: 'Ramy Rabia' },
      { n: 'EGY-8', nome: 'Hossam Abdelmaguid' },
      { n: 'EGY-9', nome: 'Ahmed Fatouh' },
      { n: 'EGY-10', nome: 'Marwan Attia' },
      { n: 'EGY-11', nome: 'Zizo' },
      { n: 'EGY-12', nome: 'Hamdy Fathy' },
      { n: 'EGY-13', nome: 'Time Completo', esp: true },
      { n: 'EGY-14', nome: 'Mohanad Lasheen' },
      { n: 'EGY-15', nome: 'Emam Ashour' },
      { n: 'EGY-16', nome: 'Osama Faisal' },
      { n: 'EGY-17', nome: 'Mohamed Salah' },
      { n: 'EGY-18', nome: 'Mostafa Mohamed' },
      { n: 'EGY-19', nome: 'Trezeguet' },
      { n: 'EGY-20', nome: 'Omar Marmoush' },
    ]
  },
  {
    id: 'irn', nome: 'Irã', flag: '🇮🇷', cor: '#239F40', figs: [
      { n: 'IRN-1', nome: 'Escudo', esp: true },
      { n: 'IRN-2', nome: 'Alireza Beiranvand' },
      { n: 'IRN-3', nome: 'Morteza Pouraliganji' },
      { n: 'IRN-4', nome: 'Ehsan Hajsafi' },
      { n: 'IRN-5', nome: 'Milad Mohammadi' },
      { n: 'IRN-6', nome: 'Shojae Khalilzadeh' },
      { n: 'IRN-7', nome: 'Ramin Rezaeian' },
      { n: 'IRN-8', nome: 'Hossein Kanaani' },
      { n: 'IRN-9', nome: 'Sadegh Moharrami' },
      { n: 'IRN-10', nome: 'Saleh Hardani' },
      { n: 'IRN-11', nome: 'Saeed Ezatolahi' },
      { n: 'IRN-12', nome: 'Saman Ghoddos' },
      { n: 'IRN-13', nome: 'Time Completo', esp: true },
      { n: 'IRN-14', nome: 'Omid Noorafkan' },
      { n: 'IRN-15', nome: 'Roozbeh Cheshmi' },
      { n: 'IRN-16', nome: 'Mohammad Mohebi' },
      { n: 'IRN-17', nome: 'Sardar Azmoun' },
      { n: 'IRN-18', nome: 'Mehdi Taremi' },
      { n: 'IRN-19', nome: 'Alireza Jahanbakhsh' },
      { n: 'IRN-20', nome: 'Ali Gholizadeh' },
    ]
  },
  {
    id: 'nzl', nome: 'Nova Zelândia', flag: '🇳🇿', cor: '#00247D', figs: [
      { n: 'NZL-1', nome: 'Escudo', esp: true },
      { n: 'NZL-2', nome: 'Max Crocombe' },
      { n: 'NZL-3', nome: 'Alex Paulsen' },
      { n: 'NZL-4', nome: 'Michael Boxall' },
      { n: 'NZL-5', nome: 'Liberato Cacace' },
      { n: 'NZL-6', nome: 'Tim Payne' },
      { n: 'NZL-7', nome: 'Tyler Bindon' },
      { n: 'NZL-8', nome: 'Francis de Vries' },
      { n: 'NZL-9', nome: 'Finn Surman' },
      { n: 'NZL-10', nome: 'Joe Bell' },
      { n: 'NZL-11', nome: 'Sarpreet Singh' },
      { n: 'NZL-12', nome: 'Ryan Thomas' },
      { n: 'NZL-13', nome: 'Time Completo', esp: true },
      { n: 'NZL-14', nome: 'Matthew Garbett' },
      { n: 'NZL-15', nome: 'Marko Stamenić' },
      { n: 'NZL-16', nome: 'Ben Old' },
      { n: 'NZL-17', nome: 'Chris Wood' },
      { n: 'NZL-18', nome: 'Elijah Just' },
      { n: 'NZL-19', nome: 'Callum McCowatt' },
      { n: 'NZL-20', nome: 'Kosta Barbarouses' },
    ]
  },

  {
    id: 'esp', nome: 'Espanha', flag: '🇪🇸', cor: '#AA151B', figs: [
      { n: 'ESP-1', nome: 'Escudo', esp: true },
      { n: 'ESP-2', nome: 'Unai Simón' },
      { n: 'ESP-3', nome: 'Robin Le Normand' },
      { n: 'ESP-4', nome: 'Aymeric Laporte' },
      { n: 'ESP-5', nome: 'Dean Huijsen' },
      { n: 'ESP-6', nome: 'Pedro Porro' },
      { n: 'ESP-7', nome: 'Dani Carvajal' },
      { n: 'ESP-8', nome: 'Marc Cucurella' },
      { n: 'ESP-9', nome: 'Martín Zubimendi' },
      { n: 'ESP-10', nome: 'Rodri' },
      { n: 'ESP-11', nome: 'Pedri' },
      { n: 'ESP-12', nome: 'Fabián Ruiz' },
      { n: 'ESP-13', nome: 'Time Completo', esp: true },
      { n: 'ESP-14', nome: 'Mikel Merino' },
      { n: 'ESP-15', nome: 'Lamine Yamal' },
      { n: 'ESP-16', nome: 'Dani Olmo' },
      { n: 'ESP-17', nome: 'Nico Williams' },
      { n: 'ESP-18', nome: 'Ferran Torres' },
      { n: 'ESP-19', nome: 'Álvaro Morata' },
      { n: 'ESP-20', nome: 'Mikel Oyarzabal' },
    ]
  },
  {
    id: 'cpv', nome: 'Cabo Verde', flag: '🇨🇻', cor: '#003893', figs: [
      { n: 'CPV-1', nome: 'Escudo', esp: true },
      { n: 'CPV-2', nome: 'Vozinha' },
      { n: 'CPV-3', nome: 'Logan Costa' },
      { n: 'CPV-4', nome: 'Pico' },
      { n: 'CPV-5', nome: 'Diney' },
      { n: 'CPV-6', nome: 'Steven Moreira' },
      { n: 'CPV-7', nome: 'Wagner Pina' },
      { n: 'CPV-8', nome: 'João Paulo' },
      { n: 'CPV-9', nome: 'Yannick Semedo' },
      { n: 'CPV-10', nome: 'Kevin Pina' },
      { n: 'CPV-11', nome: 'Patrick Andrade' },
      { n: 'CPV-12', nome: 'Jamiro Monteiro' },
      { n: 'CPV-13', nome: 'Time Completo', esp: true },
      { n: 'CPV-14', nome: 'Deroy Duarte' },
      { n: 'CPV-15', nome: 'Garry Rodrigues' },
      { n: 'CPV-16', nome: 'Jovane Cabral' },
      { n: 'CPV-17', nome: 'Ryan Mendes' },
      { n: 'CPV-18', nome: 'Dailon Livramento' },
      { n: 'CPV-19', nome: 'Willy Semedo' },
      { n: 'CPV-20', nome: 'Bebé' },
    ]
  },
  {
    id: 'ksa', nome: 'Arábia Saudita', flag: '🇸🇦', cor: '#006C35', figs: [
      { n: 'KSA-1', nome: 'Escudo', esp: true },
      { n: 'KSA-2', nome: 'Nawaf Alaqidi' },
      { n: 'KSA-3', nome: 'Abdulrahman Al-Sanbi' },
      { n: 'KSA-4', nome: 'Saud Abdulhamid' },
      { n: 'KSA-5', nome: 'Nawaf Buwashl' },
      { n: 'KSA-6', nome: 'Jehad Thikri' },
      { n: 'KSA-7', nome: 'Moteb Alharbi' },
      { n: 'KSA-8', nome: 'Hassan Altambakti' },
      { n: 'KSA-9', nome: 'Musab Aljuwayr' },
      { n: 'KSA-10', nome: 'Ziyad Aljohani' },
      { n: 'KSA-11', nome: 'Abdullah Alkhaibari' },
      { n: 'KSA-12', nome: 'Nasser Aldawsari' },
      { n: 'KSA-13', nome: 'Time Completo', esp: true },
      { n: 'KSA-14', nome: 'Saleh Abu Alshamat' },
      { n: 'KSA-15', nome: 'Marwan Alsahafi' },
      { n: 'KSA-16', nome: 'Salem Aldawsari' },
      { n: 'KSA-17', nome: 'Abdulrahman Ghareeb' },
      { n: 'KSA-18', nome: 'Feras Albrikan' },
      { n: 'KSA-19', nome: 'Saleh Alshehri' },
      { n: 'KSA-20', nome: 'Abdullah Alhamdan' },
    ]
  },
  {
    id: 'uru', nome: 'Uruguai', flag: '🇺🇾', cor: '#5EB6E4', figs: [
      { n: 'URU-1', nome: 'Escudo', esp: true },
      { n: 'URU-2', nome: 'Sergio Rochet' },
      { n: 'URU-3', nome: 'Santiago Mele' },
      { n: 'URU-4', nome: 'Ronald Araújo' },
      { n: 'URU-5', nome: 'José María Giménez' },
      { n: 'URU-6', nome: 'Sebastián Cáceres' },
      { n: 'URU-7', nome: 'Mathías Olivera' },
      { n: 'URU-8', nome: 'Guillermo Varela' },
      { n: 'URU-9', nome: 'Nahitan Nández' },
      { n: 'URU-10', nome: 'Federico Valverde' },
      { n: 'URU-11', nome: 'G. de Arrascaeta' },
      { n: 'URU-12', nome: 'Rodrigo Bentancur' },
      { n: 'URU-13', nome: 'Time Completo', esp: true },
      { n: 'URU-14', nome: 'Manuel Ugarte' },
      { n: 'URU-15', nome: 'Nicolás de la Cruz' },
      { n: 'URU-16', nome: 'Maxi Araújo' },
      { n: 'URU-17', nome: 'Darwin Núñez' },
      { n: 'URU-18', nome: 'Federico Viñas' },
      { n: 'URU-19', nome: 'Rodrigo Aguirre' },
      { n: 'URU-20', nome: 'Facundo Pellistri' },
    ]
  },

  {
    id: 'fra', nome: 'França', flag: '🇫🇷', cor: '#002395', figs: [
      { n: 'FRA-1', nome: 'Escudo', esp: true },
      { n: 'FRA-2', nome: 'Mike Maignan' },
      { n: 'FRA-3', nome: 'Théo Hernández' },
      { n: 'FRA-4', nome: 'William Saliba' },
      { n: 'FRA-5', nome: 'Jules Koundé' },
      { n: 'FRA-6', nome: 'Ibrahima Konaté' },
      { n: 'FRA-7', nome: 'Dayot Upamecano' },
      { n: 'FRA-8', nome: 'Lucas Digne' },
      { n: 'FRA-9', nome: 'Aurélien Tchouaméni' },
      { n: 'FRA-10', nome: 'Eduardo Camavinga' },
      { n: 'FRA-11', nome: 'Manu Koné' },
      { n: 'FRA-12', nome: 'Adrien Rabiot' },
      { n: 'FRA-13', nome: 'Time Completo', esp: true },
      { n: 'FRA-14', nome: 'Michael Olise' },
      { n: 'FRA-15', nome: 'Ousmane Dembélé' },
      { n: 'FRA-16', nome: 'Bradley Barcola' },
      { n: 'FRA-17', nome: 'Désiré Doué' },
      { n: 'FRA-18', nome: 'Kingsley Coman' },
      { n: 'FRA-19', nome: 'Hugo Ekitiké' },
      { n: 'FRA-20', nome: 'Kylian Mbappé' },
    ]
  },
  {
    id: 'sen', nome: 'Senegal', flag: '🇸🇳', cor: '#00853F', figs: [
      { n: 'SEN-1', nome: 'Escudo', esp: true },
      { n: 'SEN-2', nome: 'Édouard Mendy' },
      { n: 'SEN-3', nome: 'Yehvann Diouf' },
      { n: 'SEN-4', nome: 'Moussa Niakhaté' },
      { n: 'SEN-5', nome: 'Abdoulaye Seck' },
      { n: 'SEN-6', nome: 'Ismail Jakobs' },
      { n: 'SEN-7', nome: 'El Hadji Malick Diouf' },
      { n: 'SEN-8', nome: 'Kalidou Koulibaly' },
      { n: 'SEN-9', nome: 'Idrissa Gana Gueye' },
      { n: 'SEN-10', nome: 'Pape Matar Sarr' },
      { n: 'SEN-11', nome: 'Pape Gueye' },
      { n: 'SEN-12', nome: 'Habib Diarra' },
      { n: 'SEN-13', nome: 'Time Completo', esp: true },
      { n: 'SEN-14', nome: 'Lamine Camara' },
      { n: 'SEN-15', nome: 'Sadio Mané' },
      { n: 'SEN-16', nome: 'Ismaïla Sarr' },
      { n: 'SEN-17', nome: 'Boulaye Dia' },
      { n: 'SEN-18', nome: 'Iliman Ndiaye' },
      { n: 'SEN-19', nome: 'Nicolas Jackson' },
      { n: 'SEN-20', nome: 'Krépin Diatta' },
    ]
  },
  {
    id: 'irq', nome: 'Iraque', flag: '🇮🇶', cor: '#007A3D', figs: [
      { n: 'IRQ-1', nome: 'Escudo', esp: true },
      { n: 'IRQ-2', nome: 'Jalal Hassan' },
      { n: 'IRQ-3', nome: 'Rebin Sulaka' },
      { n: 'IRQ-4', nome: 'Hussein Ali' },
      { n: 'IRQ-5', nome: 'Akam Hashem' },
      { n: 'IRQ-6', nome: 'Merchas Doski' },
      { n: 'IRQ-7', nome: 'Zaid Tahseen' },
      { n: 'IRQ-8', nome: 'Manaf Younis' },
      { n: 'IRQ-9', nome: 'Zidane Iqbal' },
      { n: 'IRQ-10', nome: 'Amir Al-Ammari' },
      { n: 'IRQ-11', nome: 'Ibrahim Bayesh' },
      { n: 'IRQ-12', nome: 'Ali Jasim' },
      { n: 'IRQ-13', nome: 'Time Completo', esp: true },
      { n: 'IRQ-14', nome: 'Youssef Amyn' },
      { n: 'IRQ-15', nome: 'Amar Sher' },
      { n: 'IRQ-16', nome: 'Marko Farji' },
      { n: 'IRQ-17', nome: 'Osama Rashid' },
      { n: 'IRQ-18', nome: 'Ali Al-Hamadi' },
      { n: 'IRQ-19', nome: 'Aymen Hussein' },
      { n: 'IRQ-20', nome: 'Mohanad Ali' },
    ]
  },
  {
    id: 'nor', nome: 'Noruega', flag: '🇳🇴', cor: '#EF2B2D', figs: [
      { n: 'NOR-1', nome: 'Escudo', esp: true },
      { n: 'NOR-2', nome: 'Ørjan Nyland' },
      { n: 'NOR-3', nome: 'Julian Ryerson' },
      { n: 'NOR-4', nome: 'Leo Østigård' },
      { n: 'NOR-5', nome: 'K. V. Ajer' },
      { n: 'NOR-6', nome: 'M. Holmgren Pedersen' },
      { n: 'NOR-7', nome: 'David Møller Wolfe' },
      { n: 'NOR-8', nome: 'Torbjørn Heggem' },
      { n: 'NOR-9', nome: 'Morten Thorsby' },
      { n: 'NOR-10', nome: 'Martin Ødegaard' },
      { n: 'NOR-11', nome: 'Sander Berge' },
      { n: 'NOR-12', nome: 'Andreas Schjelderup' },
      { n: 'NOR-13', nome: 'Time Completo', esp: true },
      { n: 'NOR-14', nome: 'Patrick Berg' },
      { n: 'NOR-15', nome: 'Erling Haaland' },
      { n: 'NOR-16', nome: 'Alexander Sørloth' },
      { n: 'NOR-17', nome: 'Aron Dønnum' },
      { n: 'NOR-18', nome: 'Jørgen Strand Larsen' },
      { n: 'NOR-19', nome: 'Antonio Nusa' },
      { n: 'NOR-20', nome: 'Oscar Bobb' },
    ]
  },

  {
    id: 'arg', nome: 'Argentina', flag: '🇦🇷', cor: '#74ACDF', figs: [
      { n: 'ARG-1', nome: 'Escudo', esp: true },
      { n: 'ARG-2', nome: 'Emiliano Martínez' },
      { n: 'ARG-3', nome: 'Nahuel Molina' },
      { n: 'ARG-4', nome: 'Cristian Romero' },
      { n: 'ARG-5', nome: 'Nicolás Otamendi' },
      { n: 'ARG-6', nome: 'Nicolás Tagliafico' },
      { n: 'ARG-7', nome: 'Leonardo Balerdi' },
      { n: 'ARG-8', nome: 'Enzo Fernández' },
      { n: 'ARG-9', nome: 'Alexis Mac Allister' },
      { n: 'ARG-10', nome: 'Rodrigo De Paul' },
      { n: 'ARG-11', nome: 'Exequiel Palacios' },
      { n: 'ARG-12', nome: 'Leandro Paredes' },
      { n: 'ARG-13', nome: 'Time Completo', esp: true },
      { n: 'ARG-14', nome: 'Nico Paz' },
      { n: 'ARG-15', nome: 'Franco Mastantuono' },
      { n: 'ARG-16', nome: 'Nico González' },
      { n: 'ARG-17', nome: 'Lionel Messi' },
      { n: 'ARG-18', nome: 'Lautaro Martínez' },
      { n: 'ARG-19', nome: 'Julián Álvarez' },
      { n: 'ARG-20', nome: 'Giuliano Simeone' },
    ]
  },
  {
    id: 'alg', nome: 'Argélia', flag: '🇩🇿', cor: '#006233', figs: [
      { n: 'ALG-1', nome: 'Escudo', esp: true },
      { n: 'ALG-2', nome: 'Alexis Guendouz' },
      { n: 'ALG-3', nome: 'Ramy Bensebaini' },
      { n: 'ALG-4', nome: 'Youcef Atal' },
      { n: 'ALG-5', nome: 'Rayan Aït-Nouri' },
      { n: 'ALG-6', nome: 'Mohamed Amine Tougai' },
      { n: 'ALG-7', nome: 'Aïssa Mandi' },
      { n: 'ALG-8', nome: 'Ismaël Bennacer' },
      { n: 'ALG-9', nome: 'Houssem Aouar' },
      { n: 'ALG-10', nome: 'Hicham Boudaoui' },
      { n: 'ALG-11', nome: 'Ramiz Zerrouki' },
      { n: 'ALG-12', nome: 'Nabil Bentaleb' },
      { n: 'ALG-13', nome: 'Time Completo', esp: true },
      { n: 'ALG-14', nome: 'Farès Chaïbi' },
      { n: 'ALG-15', nome: 'Riyad Mahrez' },
      { n: 'ALG-16', nome: 'Saïd Benrahma' },
      { n: 'ALG-17', nome: 'Anis Hadj Moussa' },
      { n: 'ALG-18', nome: 'Amine Gouiri' },
      { n: 'ALG-19', nome: 'Baghdad Bounedjah' },
      { n: 'ALG-20', nome: 'Mohamed Amoura' },
    ]
  },
  {
    id: 'aut', nome: 'Áustria', flag: '🇦🇹', cor: '#ED2939', figs: [
      { n: 'AUT-1', nome: 'Escudo', esp: true },
      { n: 'AUT-2', nome: 'Alexander Schlager' },
      { n: 'AUT-3', nome: 'Patrick Pentz' },
      { n: 'AUT-4', nome: 'David Alaba' },
      { n: 'AUT-5', nome: 'Kevin Danso' },
      { n: 'AUT-6', nome: 'Philipp Lienhart' },
      { n: 'AUT-7', nome: 'Stefan Posch' },
      { n: 'AUT-8', nome: 'Philipp Mwene' },
      { n: 'AUT-9', nome: 'Alexander Prass' },
      { n: 'AUT-10', nome: 'Xaver Schlager' },
      { n: 'AUT-11', nome: 'Marcel Sabitzer' },
      { n: 'AUT-12', nome: 'Konrad Laimer' },
      { n: 'AUT-13', nome: 'Time Completo', esp: true },
      { n: 'AUT-14', nome: 'Florian Grillitsch' },
      { n: 'AUT-15', nome: 'Nicolas Seiwald' },
      { n: 'AUT-16', nome: 'Romano Schmid' },
      { n: 'AUT-17', nome: 'Patrick Wimmer' },
      { n: 'AUT-18', nome: 'Christoph Baumgartner' },
      { n: 'AUT-19', nome: 'Michael Gregoritsch' },
      { n: 'AUT-20', nome: 'Marko Arnautović' },
    ]
  },
  {
    id: 'jor', nome: 'Jordânia', flag: '🇯🇴', cor: '#007A3D', figs: [
      { n: 'JOR-1', nome: 'Escudo', esp: true },
      { n: 'JOR-2', nome: 'Yazeed Abulaila' },
      { n: 'JOR-3', nome: 'Ihsan Haddad' },
      { n: 'JOR-4', nome: 'M. Abu Hasheesh' },
      { n: 'JOR-5', nome: 'Yazan Al-Arab' },
      { n: 'JOR-6', nome: 'Abdallah Nasib' },
      { n: 'JOR-7', nome: 'Saleem Obaid' },
      { n: 'JOR-8', nome: 'M. Abualnadi' },
      { n: 'JOR-9', nome: 'Ibrahim Saadeh' },
      { n: 'JOR-10', nome: 'Nizar Al-Rashdan' },
      { n: 'JOR-11', nome: 'Noor Al-Rawabdeh' },
      { n: 'JOR-12', nome: 'Mohannad Abu Taha' },
      { n: 'JOR-13', nome: 'Time Completo', esp: true },
      { n: 'JOR-14', nome: 'Amer Jamous' },
      { n: 'JOR-15', nome: 'Mousa Al-Taamari' },
      { n: 'JOR-16', nome: 'Yazan Al-Naimat' },
      { n: 'JOR-17', nome: 'Mahmoud Al-Mardi' },
      { n: 'JOR-18', nome: 'Ali Olwan' },
      { n: 'JOR-19', nome: 'M. Abu Zrayq' },
      { n: 'JOR-20', nome: 'Ibrahim Sabra' },
    ]
  },

  {
    id: 'por', nome: 'Portugal', flag: '🇵🇹', cor: '#006600', figs: [
      { n: 'POR-1', nome: 'Escudo', esp: true },
      { n: 'POR-2', nome: 'Diogo Costa' },
      { n: 'POR-3', nome: 'José Sá' },
      { n: 'POR-4', nome: 'Rúben Dias' },
      { n: 'POR-5', nome: 'João Cancelo' },
      { n: 'POR-6', nome: 'Diogo Dalot' },
      { n: 'POR-7', nome: 'Nuno Mendes' },
      { n: 'POR-8', nome: 'Gonçalo Inácio' },
      { n: 'POR-9', nome: 'Bernardo Silva' },
      { n: 'POR-10', nome: 'Bruno Fernandes' },
      { n: 'POR-11', nome: 'Rúben Neves' },
      { n: 'POR-12', nome: 'Vitinha' },
      { n: 'POR-13', nome: 'Time Completo', esp: true },
      { n: 'POR-14', nome: 'João Neves' },
      { n: 'POR-15', nome: 'Cristiano Ronaldo' },
      { n: 'POR-16', nome: 'Francisco Trincão' },
      { n: 'POR-17', nome: 'João Félix' },
      { n: 'POR-18', nome: 'Gonçalo Ramos' },
      { n: 'POR-19', nome: 'Pedro Neto' },
      { n: 'POR-20', nome: 'Rafael Leão' },
    ]
  },
  {
    id: 'cod', nome: 'RD Congo', flag: '🇨🇩', cor: '#007FFF', figs: [
      { n: 'COD-1', nome: 'Escudo', esp: true },
      { n: 'COD-2', nome: 'Lionel Mpasi' },
      { n: 'COD-3', nome: 'Aaron Wan-Bissaka' },
      { n: 'COD-4', nome: 'Axel Tuanzebe' },
      { n: 'COD-5', nome: 'Arthur Masuaku' },
      { n: 'COD-6', nome: 'Chancel Mbemba' },
      { n: 'COD-7', nome: 'Joris Kayembe' },
      { n: 'COD-8', nome: 'Charles Pickel' },
      { n: 'COD-9', nome: 'Ngal\'ayel Mukau' },
      { n: 'COD-10', nome: 'Edo Kayembe' },
      { n: 'COD-11', nome: 'Samuel Moutoussamy' },
      { n: 'COD-12', nome: 'Noah Sadiki' },
      { n: 'COD-13', nome: 'Time Completo', esp: true },
      { n: 'COD-14', nome: 'Théo Bongonda' },
      { n: 'COD-15', nome: 'Meschack Elia' },
      { n: 'COD-16', nome: 'Yoane Wissa' },
      { n: 'COD-17', nome: 'Brian Cipenga' },
      { n: 'COD-18', nome: 'Fiston Mayele' },
      { n: 'COD-19', nome: 'Cédric Bakambu' },
      { n: 'COD-20', nome: 'Nathanaël Mbuku' },
    ]
  },
  {
    id: 'uzb', nome: 'Uzbequistão', flag: '🇺🇿', cor: '#1EB53A', figs: [
      { n: 'UZB-1', nome: 'Escudo', esp: true },
      { n: 'UZB-2', nome: 'Utkir Yusupov' },
      { n: 'UZB-3', nome: 'Farrukh Sayfiev' },
      { n: 'UZB-4', nome: 'Sherzod Nasrullaev' },
      { n: 'UZB-5', nome: 'Umar Eshmurodov' },
      { n: 'UZB-6', nome: 'Husniddin Aliqulov' },
      { n: 'UZB-7', nome: 'Rustam Ashurmatov' },
      { n: 'UZB-8', nome: 'Khojiakbar Alijonov' },
      { n: 'UZB-9', nome: 'Abdukodir Khusanov' },
      { n: 'UZB-10', nome: 'Odiljon Hamrobekov' },
      { n: 'UZB-11', nome: 'Otabek Shukurov' },
      { n: 'UZB-12', nome: 'Jamshid Iskanderov' },
      { n: 'UZB-13', nome: 'Time Completo', esp: true },
      { n: 'UZB-14', nome: 'Azizbek Turgunboev' },
      { n: 'UZB-15', nome: 'Khojimat Erkinov' },
      { n: 'UZB-16', nome: 'Eldor Shomurodov' },
      { n: 'UZB-17', nome: 'Oston Urunov' },
      { n: 'UZB-18', nome: 'Jaloliddin Masharipov' },
      { n: 'UZB-19', nome: 'Igor Sergeev' },
      { n: 'UZB-20', nome: 'Abbosbek Fayzullaev' },
    ]
  },
  {
    id: 'col', nome: 'Colômbia', flag: '🇨🇴', cor: '#FCD116', figs: [
      { n: 'COL-1', nome: 'Escudo', esp: true },
      { n: 'COL-2', nome: 'Camilo Vargas' },
      { n: 'COL-3', nome: 'David Ospina' },
      { n: 'COL-4', nome: 'Davinson Sánchez' },
      { n: 'COL-5', nome: 'Yerry Mina' },
      { n: 'COL-6', nome: 'Daniel Muñoz' },
      { n: 'COL-7', nome: 'Johan Mojica' },
      { n: 'COL-8', nome: 'Jhon Lucumí' },
      { n: 'COL-9', nome: 'Santiago Arias' },
      { n: 'COL-10', nome: 'Jefferson Lerma' },
      { n: 'COL-11', nome: 'Kevin Castaño' },
      { n: 'COL-12', nome: 'Richard Ríos' },
      { n: 'COL-13', nome: 'Time Completo', esp: true },
      { n: 'COL-14', nome: 'James Rodríguez' },
      { n: 'COL-15', nome: 'Juan F. Quintero' },
      { n: 'COL-16', nome: 'Jorge Carrascal' },
      { n: 'COL-17', nome: 'Jhon Arias' },
      { n: 'COL-18', nome: 'Jhon Córdoba' },
      { n: 'COL-19', nome: 'Luis Suárez' },
      { n: 'COL-20', nome: 'Luis Díaz' },
    ]
  },

  {
    id: 'eng', nome: 'Inglaterra', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', cor: '#003F87', figs: [
      { n: 'ENG-1', nome: 'Escudo', esp: true },
      { n: 'ENG-2', nome: 'Jordan Pickford' },
      { n: 'ENG-3', nome: 'John Stones' },
      { n: 'ENG-4', nome: 'Marc Guéhi' },
      { n: 'ENG-5', nome: 'Ezri Konsa' },
      { n: 'ENG-6', nome: 'Trent Alexander-Arnold' },
      { n: 'ENG-7', nome: 'Reece James' },
      { n: 'ENG-8', nome: 'Dan Burn' },
      { n: 'ENG-9', nome: 'Jordan Henderson' },
      { n: 'ENG-10', nome: 'Declan Rice' },
      { n: 'ENG-11', nome: 'Jude Bellingham' },
      { n: 'ENG-12', nome: 'Cole Palmer' },
      { n: 'ENG-13', nome: 'Time Completo', esp: true },
      { n: 'ENG-14', nome: 'Morgan Rogers' },
      { n: 'ENG-15', nome: 'Anthony Gordon' },
      { n: 'ENG-16', nome: 'Phil Foden' },
      { n: 'ENG-17', nome: 'Bukayo Saka' },
      { n: 'ENG-18', nome: 'Harry Kane' },
      { n: 'ENG-19', nome: 'Marcus Rashford' },
      { n: 'ENG-20', nome: 'Ollie Watkins' },
    ]
  },
  {
    id: 'cro', nome: 'Croácia', flag: '🇭🇷', cor: '#FF0000', figs: [
      { n: 'CRO-1', nome: 'Escudo', esp: true },
      { n: 'CRO-2', nome: 'Dominik Livaković' },
      { n: 'CRO-3', nome: 'Duje Ćaleta-Car' },
      { n: 'CRO-4', nome: 'Joško Gvardiol' },
      { n: 'CRO-5', nome: 'Josip Stanišić' },
      { n: 'CRO-6', nome: 'Luka Vušković' },
      { n: 'CRO-7', nome: 'Josip Šutalo' },
      { n: 'CRO-8', nome: 'Kristijan Jakić' },
      { n: 'CRO-9', nome: 'Luka Modrić' },
      { n: 'CRO-10', nome: 'Mateo Kovačić' },
      { n: 'CRO-11', nome: 'Martin Baturina' },
      { n: 'CRO-12', nome: 'Lovro Majer' },
      { n: 'CRO-13', nome: 'Time Completo', esp: true },
      { n: 'CRO-14', nome: 'Mario Pašalić' },
      { n: 'CRO-15', nome: 'Petar Sučić' },
      { n: 'CRO-16', nome: 'Ivan Perišić' },
      { n: 'CRO-17', nome: 'Marco Pašalić' },
      { n: 'CRO-18', nome: 'Ante Budimir' },
      { n: 'CRO-19', nome: 'Andrej Kramarić' },
      { n: 'CRO-20', nome: 'Franjo Ivanović' },
    ]
  },
  {
    id: 'gha', nome: 'Gana', flag: '🇬🇭', cor: '#006B3F', figs: [
      { n: 'GHA-1', nome: 'Escudo', esp: true },
      { n: 'GHA-2', nome: 'Lawrence Ati Zigi' },
      { n: 'GHA-3', nome: 'Tariq Lamptey' },
      { n: 'GHA-4', nome: 'Mohammed Salisu' },
      { n: 'GHA-5', nome: 'Alidu Seidu' },
      { n: 'GHA-6', nome: 'Alexander Djiku' },
      { n: 'GHA-7', nome: 'Gideon Mensah' },
      { n: 'GHA-8', nome: 'Caleb Yirenkyi' },
      { n: 'GHA-9', nome: 'Abdul Fatawu Issahaku' },
      { n: 'GHA-10', nome: 'Thomas Partey' },
      { n: 'GHA-11', nome: 'Salis Abdul Samed' },
      { n: 'GHA-12', nome: 'Kamaldeen Sulemana' },
      { n: 'GHA-13', nome: 'Time Completo', esp: true },
      { n: 'GHA-14', nome: 'Mohammed Kudus' },
      { n: 'GHA-15', nome: 'Iñaki Williams' },
      { n: 'GHA-16', nome: 'Jordan Ayew' },
      { n: 'GHA-17', nome: 'André Ayew' },
      { n: 'GHA-18', nome: 'Joseph Paintsil' },
      { n: 'GHA-19', nome: 'Osman Bukari' },
      { n: 'GHA-20', nome: 'Antoine Semenyo' },
    ]
  },
  {
    id: 'pan', nome: 'Panamá', flag: '🇵🇦', cor: '#DB1116', figs: [
      { n: 'PAN-1', nome: 'Escudo', esp: true },
      { n: 'PAN-2', nome: 'Orlando Mosquera' },
      { n: 'PAN-3', nome: 'Luis Mejía' },
      { n: 'PAN-4', nome: 'Fidel Escobar' },
      { n: 'PAN-5', nome: 'Andrés Andrade' },
      { n: 'PAN-6', nome: 'Michael Amir Murillo' },
      { n: 'PAN-7', nome: 'Eric Davis' },
      { n: 'PAN-8', nome: 'José Córdoba' },
      { n: 'PAN-9', nome: 'César Blackman' },
      { n: 'PAN-10', nome: 'Cristian Martínez' },
      { n: 'PAN-11', nome: 'Aníbal Godoy' },
      { n: 'PAN-12', nome: 'Adalberto Carrasquilla' },
      { n: 'PAN-13', nome: 'Time Completo', esp: true },
      { n: 'PAN-14', nome: 'Edgar Bárcenas' },
      { n: 'PAN-15', nome: 'Carlos Harvey' },
      { n: 'PAN-16', nome: 'Ismael Díaz' },
      { n: 'PAN-17', nome: 'José Fajardo' },
      { n: 'PAN-18', nome: 'Cecilio Waterman' },
      { n: 'PAN-19', nome: 'José Luis Rodríguez' },
      { n: 'PAN-20', nome: 'Alberto Quintero' },
    ]
  },

  {
    id: 'hist', nome: 'Histórico de Copas', flag: '🏆', cor: '#FFD600', figs: [
      { n: 'FWC-9', nome: 'Italy 1934', esp: true },
      { n: 'FWC-10', nome: 'Uruguay 1950', esp: true },
      { n: 'FWC-11', nome: 'W. Germany 1954', esp: true },
      { n: 'FWC-12', nome: 'Brazil 1962', esp: true },
      { n: 'FWC-13', nome: 'W. Germany 1974', esp: true },
      { n: 'FWC-14', nome: 'Argentina 1986', esp: true },
      { n: 'FWC-15', nome: 'Brazil 1994', esp: true },
      { n: 'FWC-16', nome: 'Brazil 2002', esp: true },
      { n: 'FWC-17', nome: 'Italy 2006', esp: true },
      { n: 'FWC-18', nome: 'Germany 2014', esp: true },
      { n: 'FWC-19', nome: 'Argentina 2022', esp: true },
    ]
  },

  {
    id: 'extra', nome: 'Extra Stickers', flag: '✨', cor: '#7B2FBE', figs: [
      { n: 'EXTRA-REGU', nome: 'Extra Regular', esp: true },
      { n: 'EXTRA-BRON', nome: 'Extra Bronze', esp: true },
      { n: 'EXTRA-PRAT', nome: 'Extra Prata', esp: true },
      { n: 'EXTRA-OURO', nome: 'Extra Ouro', esp: true },
    ]
  },

  {
    id: 'coca', nome: 'Coca-Cola Collection', flag: '🥤', cor: '#E8192C', figs: [
      { n: 'CC-1', nome: 'Lamine Yamal', esp: true },
      { n: 'CC-2', nome: 'Joshua Kimmich', esp: true },
      { n: 'CC-3', nome: 'Harry Kane', esp: true },
      { n: 'CC-4', nome: 'Santiago Giménez', esp: true },
      { n: 'CC-5', nome: 'Joško Gvardiol', esp: true },
      { n: 'CC-6', nome: 'Federico Valverde', esp: true },
      { n: 'CC-7', nome: 'Jefferson Lerma', esp: true },
      { n: 'CC-8', nome: 'Enner Valencia', esp: true },
      { n: 'CC-9', nome: 'Gabriel Magalhães', esp: true },
      { n: 'CC-10', nome: 'Virgil van Dijk', esp: true },
      { n: 'CC-11', nome: 'Alphonso Davies', esp: true },
      { n: 'CC-12', nome: 'Emiliano Martínez', esp: true },
      { n: 'CC-13', nome: 'Raúl Jiménez', esp: true },
      { n: 'CC-14', nome: 'Lautaro Martínez', esp: true },
    ]
  },
];

const FLAGS = {
  "bra": "https://lh3.googleusercontent.com/d/1BxK8f0VZcQ6WriT4u8HW70EYH4YuFf2s=w32",
  "mex": "https://lh3.googleusercontent.com/d/1EdwPklvzCwhf6Iigll1Sw3wkM-93Mxpj=w32",
  "rsa": "https://lh3.googleusercontent.com/d/11erwchVw29sffpEkDytr0VjhtEypgDj7=w32",
  "kor": "https://lh3.googleusercontent.com/d/1aLxXWEBBm3P8jkIkh3zFaYwLHJca0K6N=w32",
  "cze": "https://lh3.googleusercontent.com/d/1QUjF_a1lbwJ2WK2_6gEHjvacTd0Nb-Qi=w32",
  "can": "https://lh3.googleusercontent.com/d/1tZWWF6_nIUwwppjOkUWP_oduS4PHQoiJ=w32",
  "bih": "https://lh3.googleusercontent.com/d/1w6cenQ8HSs6c8wNI7xWbED9aA0ANCioq=w32",
  "qat": "https://lh3.googleusercontent.com/d/1mi7W_EsDCByCTOFwBIHu0by_sPe2JrSy=w32",
  "sui": "https://lh3.googleusercontent.com/d/1MA7w4eKJprwbHTakUPBSy5xZcFQXR1dn=w32",
  "mar": "https://lh3.googleusercontent.com/d/1Hihui5Jk_MMm_BN8hLqQbIjjlOZLAKQ-=w32",
  "hai": "https://lh3.googleusercontent.com/d/1PEZxC673Y9UKeDdG-DbhtOEbq6g149hy=w32",
  "sco": "https://lh3.googleusercontent.com/d/1dsIT0ruwYKC0cV52Al3g7vcgyWDkaWSs=w32",
  "usa": "https://lh3.googleusercontent.com/d/1iC6a5uS9LXl_l63I_jkZqVQqf_epf-Xn=w32",
  "par": "https://lh3.googleusercontent.com/d/1YAkO0HI0lZlf2LZnOLiNH0cHEpgcLotO=w32",
  "aus": "https://lh3.googleusercontent.com/d/1XyU3ux2wdM4DA1y5Zucxzk5NYk-6-fJK=w32",
  "tur": "https://lh3.googleusercontent.com/d/1deonVJzMMbOK11dCS50jYmPGosf2Kfqd=w32",
  "ger": "https://lh3.googleusercontent.com/d/1XpltqhfhoIJpWcbc36vjHLC58w3Afygt=w32",
  "cuw": "https://lh3.googleusercontent.com/d/1pvgRWhrWGjfiA8nejHBEwSrcesrZL2aI=w32",
  "civ": "https://lh3.googleusercontent.com/d/1oFz14Xs-QJo6tiTdAqdf2W1kFlxbm5r-=w32",
  "ecu": "https://lh3.googleusercontent.com/d/1GxkiBIkPTIHW4XAVI1yr176W8gJAQHMM=w32",
  "ned": "https://lh3.googleusercontent.com/d/185Fx8mdA5yr-vwyeGamH1RZw2CJM3wr1=w32",
  "jpn": "https://lh3.googleusercontent.com/d/1mYXomYuYsjGGyQ4pgzwUA2KfMZ16QG-Z=w32",
  "swe": "https://lh3.googleusercontent.com/d/1jidLiOlNfZquoLtb0PskDDIYRD-l_ZmK=w32",
  "tun": "https://lh3.googleusercontent.com/d/1PoqTdgRlze1l6zNEFoia8X3DVBqu0eCx=w32",
  "bel": "https://lh3.googleusercontent.com/d/1pLQr9-Y5kdC0IyUVB-EdNjdKfLtghmcs=w32",
  "egy": "https://lh3.googleusercontent.com/d/1-1G-04GYhnAvq2h_a3r5NdctUN-HffNX=w32",
  "irn": "https://lh3.googleusercontent.com/d/1BKG08uUFoobykW1WhtPcSPcO_z0nveej=w32",
  "nzl": "https://lh3.googleusercontent.com/d/1Kwp8xTMFVoEbwOMC-Q7DkzR6JEWwz81S=w32",
  "esp": "https://lh3.googleusercontent.com/d/12uJdvLh4sczJyEXM348X4GoqRF0vbpr6=w32",
  "cpv": "https://lh3.googleusercontent.com/d/1Xs8CGKna8lCXDHGR3VqxSRWU889reoSa=w32",
  "ksa": "https://lh3.googleusercontent.com/d/1XsN1bnCIDuOuoF5iGsKHBmvlzPDnF1Ht=w32",
  "uru": "https://lh3.googleusercontent.com/d/1f6EULz3setLK3KoWlVBL482O3MsUSzR3=w32",
  "fra": "https://lh3.googleusercontent.com/d/1Ss617EqkApSZ65sEJlXdVFhO0Jzp7dbp=w32",
  "sen": "https://lh3.googleusercontent.com/d/1zODmT32do_x4JfoCN-QaWdx2-ZCco6Lb=w32",
  "irq": "https://lh3.googleusercontent.com/d/1CTdvZY4ky876R-9MLuqL-YvPQSx-Lidj=w32",
  "nor": "https://lh3.googleusercontent.com/d/11DpGj1U1Pycht9h4hi0GJT1D19tsRXt1=w32",
  "arg": "https://lh3.googleusercontent.com/d/1xtUrQXAKH2AU6Ux1oc2HHhMftwjsqyQ7=w32",
  "alg": "https://lh3.googleusercontent.com/d/1Jq8ifJ5utmNgDXoeCGLF0m2-Hj2o9xKS=w32",
  "aut": "https://lh3.googleusercontent.com/d/1XOeGbQw176Vxkp9Bl4DW9KiybdhK1J9j=w32",
  "jor": "https://lh3.googleusercontent.com/d/1AotyIl0IF7l-EqlRVMi6Xpd3DllPBwM1=w32",
  "por": "https://lh3.googleusercontent.com/d/1d8fle2YfQsFeHYbQf7Js0ZioHPXyZsWz=w32",
  "cod": "https://lh3.googleusercontent.com/d/13l-CU04-kkV01B1GatSEacectRhwJAOS=w32",
  "uzb": "https://lh3.googleusercontent.com/d/1KCmpIHj-CvlK2YxaVqnYud_x37ojIths=w32",
  "col": "https://lh3.googleusercontent.com/d/1016xmr65e992u1D0NmWgtqUY18K4MBeB=w32",
  "eng": "https://lh3.googleusercontent.com/d/1Zz-KY0D6jgIXwXAJ0gv9xXwLC2OpZ3mK=w32",
  "cro": "https://lh3.googleusercontent.com/d/10QdZ94gbECNCfifyx2NCUt7ZFrocm8cS=w32",
  "gha": "https://lh3.googleusercontent.com/d/1hfefKF26VugJHAMCJT3K3LZTdR16UlAT=w32",
  "pan": "https://lh3.googleusercontent.com/d/1LKkTdYpsMCqnMkO7xAsWRdyRg831Rcgz=w32"
};

const SEL_FLAG_MAP = {
  "México": "https://lh3.googleusercontent.com/d/1EdwPklvzCwhf6Iigll1Sw3wkM-93Mxpj=w32",
  "África do Sul": "https://lh3.googleusercontent.com/d/11erwchVw29sffpEkDytr0VjhtEypgDj7=w32",
  "Coreia do Sul": "https://lh3.googleusercontent.com/d/1aLxXWEBBm3P8jkIkh3zFaYwLHJca0K6N=w32",
  "Rep. Tcheca": "https://lh3.googleusercontent.com/d/1QUjF_a1lbwJ2WK2_6gEHjvacTd0Nb-Qi=w32",
  "Canadá": "https://lh3.googleusercontent.com/d/1tZWWF6_nIUwwppjOkUWP_oduS4PHQoiJ=w32",
  "Bósnia-Herz.": "https://lh3.googleusercontent.com/d/1w6cenQ8HSs6c8wNI7xWbED9aA0ANCioq=w32",
  "Qatar": "https://lh3.googleusercontent.com/d/1mi7W_EsDCByCTOFwBIHu0by_sPe2JrSy=w32",
  "Suíça": "https://lh3.googleusercontent.com/d/1MA7w4eKJprwbHTakUPBSy5xZcFQXR1dn=w32",
  "Brasil": "https://lh3.googleusercontent.com/d/1BxK8f0VZcQ6WriT4u8HW70EYH4YuFf2s=w32",
  "Marrocos": "https://lh3.googleusercontent.com/d/1Hihui5Jk_MMm_BN8hLqQbIjjlOZLAKQ-=w32",
  "Haiti": "https://lh3.googleusercontent.com/d/1PEZxC673Y9UKeDdG-DbhtOEbq6g149hy=w32",
  "Escócia": "https://lh3.googleusercontent.com/d/1dsIT0ruwYKC0cV52Al3g7vcgyWDkaWSs=w32",
  "EUA": "https://lh3.googleusercontent.com/d/1iC6a5uS9LXl_l63I_jkZqVQqf_epf-Xn=w32",
  "Paraguai": "https://lh3.googleusercontent.com/d/1YAkO0HI0lZlf2LZnOLiNH0cHEpgcLotO=w32",
  "Austrália": "https://lh3.googleusercontent.com/d/1XyU3ux2wdM4DA1y5Zucxzk5NYk-6-fJK=w32",
  "Turquia": "https://lh3.googleusercontent.com/d/1deonVJzMMbOK11dCS50jYmPGosf2Kfqd=w32",
  "Alemanha": "https://lh3.googleusercontent.com/d/1XpltqhfhoIJpWcbc36vjHLC58w3Afygt=w32",
  "Curaçao": "https://lh3.googleusercontent.com/d/1pvgRWhrWGjfiA8nejHBEwSrcesrZL2aI=w32",
  "Costa do Marfim": "https://lh3.googleusercontent.com/d/1oFz14Xs-QJo6tiTdAqdf2W1kFlxbm5r-=w32",
  "Equador": "https://lh3.googleusercontent.com/d/1GxkiBIkPTIHW4XAVI1yr176W8gJAQHMM=w32",
  "Holanda": "https://lh3.googleusercontent.com/d/185Fx8mdA5yr-vwyeGamH1RZw2CJM3wr1=w32",
  "Japão": "https://lh3.googleusercontent.com/d/1mYXomYuYsjGGyQ4pgzwUA2KfMZ16QG-Z=w32",
  "Suécia": "https://lh3.googleusercontent.com/d/1jidLiOlNfZquoLtb0PskDDIYRD-l_ZmK=w32",
  "Tunísia": "https://lh3.googleusercontent.com/d/1PoqTdgRlze1l6zNEFoia8X3DVBqu0eCx=w32",
  "Bélgica": "https://lh3.googleusercontent.com/d/1pLQr9-Y5kdC0IyUVB-EdNjdKfLtghmcs=w32",
  "Egito": "https://lh3.googleusercontent.com/d/1-1G-04GYhnAvq2h_a3r5NdctUN-HffNX=w32",
  "Irã": "https://lh3.googleusercontent.com/d/1BKG08uUFoobykW1WhtPcSPcO_z0nveej=w32",
  "Nova Zelândia": "https://lh3.googleusercontent.com/d/1Kwp8xTMFVoEbwOMC-Q7DkzR6JEWwz81S=w32",
  "Espanha": "https://lh3.googleusercontent.com/d/12uJdvLh4sczJyEXM348X4GoqRF0vbpr6=w32",
  "Cabo Verde": "https://lh3.googleusercontent.com/d/1Xs8CGKna8lCXDHGR3VqxSRWU889reoSa=w32",
  "Arábia Saudita": "https://lh3.googleusercontent.com/d/1XsN1bnCIDuOuoF5iGsKHBmvlzPDnF1Ht=w32",
  "Uruguai": "https://lh3.googleusercontent.com/d/1f6EULz3setLK3KoWlVBL482O3MsUSzR3=w32",
  "França": "https://lh3.googleusercontent.com/d/1Ss617EqkApSZ65sEJlXdVFhO0Jzp7dbp=w32",
  "Senegal": "https://lh3.googleusercontent.com/d/1zODmT32do_x4JfoCN-QaWdx2-ZCco6Lb=w32",
  "Iraque": "https://lh3.googleusercontent.com/d/1CTdvZY4ky876R-9MLuqL-YvPQSx-Lidj=w32",
  "Noruega": "https://lh3.googleusercontent.com/d/11DpGj1U1Pycht9h4hi0GJT1D19tsRXt1=w32",
  "Argentina": "https://lh3.googleusercontent.com/d/1xtUrQXAKH2AU6Ux1oc2HHhMftwjsqyQ7=w32",
  "Argélia": "https://lh3.googleusercontent.com/d/1Jq8ifJ5utmNgDXoeCGLF0m2-Hj2o9xKS=w32",
  "Áustria": "https://lh3.googleusercontent.com/d/1XOeGbQw176Vxkp9Bl4DW9KiybdhK1J9j=w32",
  "Jordânia": "https://lh3.googleusercontent.com/d/1AotyIl0IF7l-EqlRVMi6Xpd3DllPBwM1=w32",
  "Portugal": "https://lh3.googleusercontent.com/d/1d8fle2YfQsFeHYbQf7Js0ZioHPXyZsWz=w32",
  "RD Congo": "https://lh3.googleusercontent.com/d/13l-CU04-kkV01B1GatSEacectRhwJAOS=w32",
  "Uzbequistão": "https://lh3.googleusercontent.com/d/1KCmpIHj-CvlK2YxaVqnYud_x37ojIths=w32",
  "Colômbia": "https://lh3.googleusercontent.com/d/1016xmr65e992u1D0NmWgtqUY18K4MBeB=w32",
  "Inglaterra": "https://lh3.googleusercontent.com/d/1Zz-KY0D6jgIXwXAJ0gv9xXwLC2OpZ3mK=w32",
  "Croácia": "https://lh3.googleusercontent.com/d/10QdZ94gbECNCfifyx2NCUt7ZFrocm8cS=w32",
  "Gana": "https://lh3.googleusercontent.com/d/1hfefKF26VugJHAMCJT3K3LZTdR16UlAT=w32",
  "Panamá": "https://lh3.googleusercontent.com/d/1LKkTdYpsMCqnMkO7xAsWRdyRg831Rcgz=w32"
};

const grupos = [
  { l: '1', c: '#E8192C', s: ['🇲🇽 México', '🇿🇦 África do Sul', '🇰🇷 Coreia do Sul', '🇨🇿 Rep. Tcheca'] },
  { l: '2', c: '#1A46BF', s: ['🇨🇦 Canadá', '🇧🇦 Bósnia-Herz.', '🇶🇦 Qatar', '🇨🇭 Suíça'] },
  { l: '3', c: '#009C3B', s: ['🇧🇷 Brasil', '🇲🇦 Marrocos', '🇭🇹 Haiti', '🏴󠁧󠁢󠁳󠁣󠁴󠁿 Escócia'] },
  { l: '4', c: '#7B2FBE', s: ['🇺🇸 EUA', '🇵🇾 Paraguai', '🇦🇺 Austrália', '🇹🇷 Turquia'] },
  { l: '5', c: '#00B4D8', s: ['🇩🇪 Alemanha', '🇨🇼 Curaçao', '🇨🇮 Costa do Marfim', '🇪🇨 Equador'] },
  { l: '6', c: '#E91E8C', s: ['🇳🇱 Holanda', '🇯🇵 Japão', '🇸🇪 Suécia', '🇹🇳 Tunísia'] },
  { l: '7', c: '#FF6B00', s: ['🇧🇪 Bélgica', '🇪🇬 Egito', '🇮🇷 Irã', '🇳🇿 Nova Zelândia'] },
  { l: '8', c: '#FFD600', s: ['🇪🇸 Espanha', '🇨🇻 Cabo Verde', '🇸🇦 Arábia Saudita', '🇺🇾 Uruguai'] },
  { l: '9', c: '#00A651', s: ['🇫🇷 França', '🇸🇳 Senegal', '🇮🇶 Iraque', '🇳🇴 Noruega'] },
  { l: '10', c: '#74ACDF', s: ['🇦🇷 Argentina', '🇩🇿 Argélia', '🇦🇹 Áustria', '🇯🇴 Jordânia'] },
  { l: '11', c: '#006600', s: ['🇵🇹 Portugal', '🇨🇩 RD Congo', '🇺🇿 Uzbequistão', '🇨🇴 Colômbia'] },
  { l: '12', c: '#003F87', s: ['🏴󠁧󠁢󠁥󠁮󠁧󠁿 Inglaterra', '🇭🇷 Croácia', '🇬🇭 Gana', '🇵🇦 Panamá'] },
];

const TOTAL = selecoes.reduce((acc, s) => acc + s.figs.length, 0);
let coletadas = new Set(JSON.parse(localStorage.getItem('copa2026v2') || '[]'));

function salvar() {
  localStorage.setItem('copa2026v2', JSON.stringify([...coletadas]));
  atualizarProg();
}

function atualizarProg() {
  const c = coletadas.size;
  const p = Math.round(c / TOTAL * 100);
  document.getElementById('prog-count').textContent = c;
  document.getElementById('prog-fill').style.width = p + '%';
  document.getElementById('prog-pct').textContent = p + '%';
  const lbl = document.getElementById('prog-total');
  if (lbl) lbl.textContent = TOTAL;
}

function renderAlbum(f = 'all') {
  const ct = document.getElementById('alb-container');
  ct.innerHTML = '';
  selecoes.forEach(sel => {
    let figs = sel.figs;
    if (f === 'especiais') figs = figs.filter(x => x.esp);
    else if (f === 'faltam') figs = figs.filter(x => !coletadas.has(x.n));
    else if (f === 'coletadas') figs = figs.filter(x => coletadas.has(x.n));
    if (!figs.length) return;

    const col = sel.figs.filter(x => coletadas.has(x.n)).length;
    const safeId = sel.id.replace(/[^a-z0-9]/gi, '_');
    const flagHtml = FLAGS[sel.id]
      ? `<img src="${FLAGS[sel.id]}" class="flag-img" style="width:28px;height:19px;object-fit:cover;border-radius:1px;" onerror="this.style.display='none'">`
      : sel.flag;

    const g = document.createElement('div');
    g.className = 'alb-group';
    g.innerHTML = `
      <div class="grp-header">
        <span class="grp-flag">${flagHtml}</span>
        <span class="grp-name" style="color:${sel.cor}">${sel.nome}</span>
        <span class="grp-count" id="gc-${safeId}"><strong>${col}</strong> / ${sel.figs.length}</span>
      </div>
      <div class="fig-grid" id="fg-${safeId}"></div>`;
    ct.appendChild(g);

    const grid = document.getElementById('fg-' + safeId);
    figs.forEach(fig => {
      const card = document.createElement('div');
      card.className = 'fig-card' + (fig.esp ? ' especial' : '') + (coletadas.has(fig.n) ? ' coletada' : '');
      card.innerHTML = `<div class="fig-num">${fig.n}</div><div class="fig-nm">${fig.nome}</div>`;
      card.addEventListener('click', () => {
        if (coletadas.has(fig.n)) { coletadas.delete(fig.n); card.classList.remove('coletada'); }
        else { coletadas.add(fig.n); card.classList.add('coletada'); }
        salvar();
        const nova = sel.figs.filter(x => coletadas.has(x.n)).length;
        document.getElementById('gc-' + safeId).innerHTML = `<strong>${nova}</strong> / ${sel.figs.length}`;
      });
      grid.appendChild(card);
    });
  });
}

function renderGrupos() {
  const g = document.getElementById('grups-grid');
  if (!g) return;
  grupos.forEach(x => {
    const c = document.createElement('div');
    c.className = 'gcard';
    const selsHtml = x.s.map((s, i) => {
      const nome = s.split(' ').slice(1).join(' ');
      const flagHtml = SEL_FLAG_MAP[nome]
        ? `<img src="${SEL_FLAG_MAP[nome]}" class="flag-img" onerror="this.style.display='none'">`
        : s.split(' ')[0];
      return `<li class="gsel">
        <span class="gsel-pos">${i + 1}</span>
        <span class="gsel-flag">${flagHtml}</span>
        <span class="gsel-name">${nome}</span>
        <span class="gsel-pts">0 pts</span>
      </li>`;
    }).join('');
    c.innerHTML = `
      <div class="gcard-head" style="background:${x.c}18;color:${x.c};border-bottom:2px solid ${x.c}">GRUPO ${x.l}</div>
      <ul class="gcard-sels">${selsHtml}</ul>`;
    g.appendChild(c);
  });
}

function iniciarTimer() {
  // Primeiro jogo: México vs África do Sul — 11 Jun 2026 às 17h00 ET (21h00 UTC)
  const inicio = new Date('2026-06-11T21:00:00Z');
  function atualizar() {
    const agora = new Date();
    const diff = inicio - agora;
    if (diff <= 0) {
      document.getElementById('timer-blocks').innerHTML =
        '<div class="timer-started">🏆 A Copa já começou!</div>';
      return;
    }
    const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const min = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seg = Math.floor((diff % (1000 * 60)) / 1000);
    document.getElementById('t-dias').textContent = String(dias).padStart(2, '0');
    document.getElementById('t-horas').textContent = String(horas).padStart(2, '0');
    document.getElementById('t-min').textContent = String(min).padStart(2, '0');
    document.getElementById('t-seg').textContent = String(seg).padStart(2, '0');
  }
  atualizar();
  setInterval(atualizar, 1000);
}

document.getElementById('alb-filters').addEventListener('click', e => {
  if (!e.target.classList.contains('filter-btn')) return;
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  e.target.classList.add('active');
  renderAlbum(e.target.dataset.filter);
});

document.querySelectorAll('.fase-tab').forEach(t => {
  t.addEventListener('click', () => {
    document.querySelectorAll('.fase-tab').forEach(x => x.classList.remove('active'));
    t.classList.add('active');
    document.getElementById('tab-grupos').style.display = t.dataset.tab === 'grupos' ? 'block' : 'none';
    document.getElementById('tab-matamata').style.display = t.dataset.tab === 'matamata' ? 'block' : 'none';
  });
});

renderAlbum();
renderGrupos();
atualizarProg();
iniciarTimer();
