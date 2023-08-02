export type RegionType = {
  id: number
  name: string
  zone: string | number
  acronym: string
  description: string
}

export const regions: RegionType[] = [
  {
    id: 0,
    name: 'Portugal Continental',
    zone: 'A',
    acronym: 'PT',
    description: ''
  },
  {
    id: 1,
    name: 'Açores',
    zone: 'B',
    acronym: 'PT',
    description: ''
  },
  {
    id: 2,
    name: 'Espanha - Península',
    zone: 'C',
    acronym: 'ES',
    description: ''
  },
  {
    id: 3,
    name: 'Espanha - Outros Destinos',
    zone: 'D',
    acronym: 'ES',
    description: 'Baleares, Canárias, Ceuta, Gibraltar e Melilha'
  },
  {
    id: 4,
    name: 'Alemanha',
    zone: 2,
    acronym: 'DE',
    description: ''
  },
  {
    id: 5,
    name: 'França',
    zone: 2,
    acronym: 'FR',
    description: ''
  },
  {
    id: 6,
    name: 'Grécia',
    zone: 2,
    acronym: 'GR',
    description: ''
  },
  {
    id: 7,
    name: 'Áustria',
    zone: 2,
    acronym: 'AT',
    description: ''
  },
  {
    id: 8,
    name: 'Bélgica',
    zone: 2,
    acronym: 'BE',
    description: ''
  },
  {
    id: 9,
    name: 'Holanda',
    zone: 2,
    acronym: 'NE',
    description: ''
  },
  {
    id: 11,
    name: 'Irlanda, Rep. da ',
    zone: 2,
    acronym: 'IE',
    description: ''
  },
  {
    id: 12,
    name: 'Itália',
    zone: 2,
    acronym: 'IT',
    description: ''
  },
  {
    id: 13,
    name: 'Luxemburgo',
    zone: 2,
    acronym: 'LU',
    description: ''
  },
  {
    id: 14,
    name: 'Dinamarca',
    zone: 2,
    acronym: 'DK',
    description: ''
  },
  {
    id: 15,
    name: 'Mónaco (Principado)',
    zone: 2,
    acronym: 'MC',
    description: ''
  },
  {
    id: 16,
    name: 'Finlândia',
    zone: 3,
    acronym: 'FI',
    description: ''
  },
  {
    id: 17,
    name: 'Andorra (Principado)',
    zone: 3,
    acronym: 'AD',
    description: ''
  },
  {
    id: 18,
    name: 'Noruega',
    zone: 3,
    acronym: 'NO',
    description: ''
  },
  {
    id: 19,
    name: 'Gibraltar',
    zone: 3,
    acronym: 'GI',
    description: ''
  },
  {
    id: 20,
    name: 'Gronelândia',
    zone: 3,
    acronym: 'GL',
    description: ''
  },
  {
    id: 21,
    name: 'Guernsey (Ilhas do Canal)',
    zone: 3,
    acronym: 'GG',
    description: ''
  },
  {
    id: 22,
    name: 'Islândia',
    zone: 3,
    acronym: 'IS',
    description: ''
  },
  {
    id: 23,
    name: 'Jersey (Ilhas do Canal)',
    zone: 3,
    acronym: 'JE',
    description: ''
  },
  {
    id: 24,
    name: 'Suécia',
    zone: 3,
    acronym: 'SE',
    description: ''
  },
  {
    id: 25,
    name: 'Suíça',
    zone: 3,
    acronym: 'CH',
    description: ''
  },
  {
    id: 26,
    name: 'Liechtenstein',
    zone: 3,
    acronym: 'CH',
    description: ''
  },
  {
    id: 27,
    name: 'Malta',
    zone: 3,
    acronym: 'MT',
    description: ''
  },
  {
    id: 28,
    name: 'Faroé, Ilhas',
    zone: 3,
    acronym: 'FO',
    description: ''
  },
  {
    id: 29,
    name: 'Canadá',
    zone: 4,
    acronym: 'CA',
    description: ''
  },
  {
    id: 30,
    name: 'Estados Unidos Da América',
    zone: 4,
    acronym: 'US',
    description: ''
  },
  {
    id: 31,
    name: 'África do Sul',
    zone: 5,
    acronym: 'ZA',
    description: ''
  },
  {
    id: 32,
    name: 'Filipinas',
    zone: 5,
    acronym: 'PI',
    description: ''
  },
  {
    id: 33,
    name: 'Albânia',
    zone: 5,
    acronym: 'AL',
    description: ''
  },
  {
    id: 34,
    name: 'Angola',
    zone: 5,
    acronym: 'AO',
    description: ''
  },
  {
    id: 35,
    name: 'Nigéria',
    zone: 5,
    acronym: 'NG',
    description: ''
  },
  {
    id: 36,
    name: 'Geórgia',
    zone: 5,
    acronym: 'GE',
    description: ''
  },
  {
    id: 37,
    name: 'Arábia Saudita',
    zone: 5,
    acronym: 'SA',
    description: ''
  },
  {
    id: 38,
    name: 'Nova Zelândia',
    zone: 5,
    acronym: 'NZ',
    description: ''
  },
  {
    id: 39,
    name: 'Argélia',
    zone: 5,
    acronym: 'DZ',
    description: ''
  },
  {
    id: 40,
    name: 'Argentina',
    zone: 5,
    acronym: 'RA',
    description: ''
  },
  {
    id: 41,
    name: 'Arménia',
    zone: 5,
    acronym: 'AM',
    description: ''
  },
  {
    id: 42,
    name: 'Austrália',
    zone: 5,
    acronym: 'AU',
    description: ''
  },
  {
    id: 43,
    name: 'Perú',
    zone: 5,
    acronym: 'PE',
    description: ''
  },
  {
    id: 44,
    name: 'Azerbaijão',
    zone: 5,
    acronym: 'AZ',
    description: ''
  },
  {
    id: 45,
    name: 'Polónia',
    zone: 5,
    acronym: 'PL',
    description: ''
  },
  {
    id: 46,
    name: 'Bahrain',
    zone: 5,
    acronym: 'BH',
    description: ''
  },
  {
    id: 47,
    name: 'Guiné-Bissau (Rep.)',
    zone: 5,
    acronym: 'GW',
    description: ''
  },
  {
    id: 48,
    name: 'Quirguistão',
    zone: 5,
    acronym: 'KG',
    description: ''
  },
  {
    id: 49,
    name: 'Hong Kong (China)',
    zone: 5,
    acronym: 'HK',
    description: ''
  },
  {
    id: 50,
    name: 'Bielorrússia',
    zone: 5,
    acronym: 'BY',
    description: ''
  },
  {
    id: 51,
    name: 'Hungria',
    zone: 5,
    acronym: 'HU',
    description: ''
  },
  {
    id: 52,
    name: 'Roménia',
    zone: 5,
    acronym: 'RO',
    description: ''
  },
  {
    id: 53,
    name: 'Bósnia-Herzegovina',
    zone: 5,
    acronym: 'BA',
    description: ''
  },
  {
    id: 54,
    name: 'India',
    zone: 5,
    acronym: 'IN',
    description: ''
  },
  {
    id: 55,
    name: 'Rússia (Federação da)',
    zone: 5,
    acronym: 'RU',
    description: ''
  },
  {
    id: 56,
    name: 'Indonésia',
    zone: 5,
    acronym: 'RI',
    description: ''
  },
  {
    id: 57,
    name: 'Brasil',
    zone: 5,
    acronym: 'BR',
    description: ''
  },
  {
    id: 58,
    name: 'Irão',
    zone: 5,
    acronym: 'IR',
    description: ''
  },
  {
    id: 59,
    name: 'Bulgária',
    zone: 5,
    acronym: 'BG',
    description: ''
  },
  {
    id: 60,
    name: 'Israel',
    zone: 5,
    acronym: 'IL',
    description: ''
  },
  {
    id: 61,
    name: 'Cabo Verde',
    zone: 5,
    acronym: 'CV',
    description: ''
  },
  {
    id: 62,
    name: 'Japão',
    zone: 5,
    acronym: 'JP',
    description: ''
  },
  {
    id: 63,
    name: 'Senegal',
    zone: 5,
    acronym: 'SN',
    description: ''
  },
  {
    id: 64,
    name: 'Jordânia',
    zone: 5,
    acronym: 'JO',
    description: ''
  },
  {
    id: 65,
    name: 'Sérvia',
    zone: 5,
    acronym: 'RS',
    description: ''
  },
  {
    id: 66,
    name: 'Kosovo',
    zone: 5,
    acronym: 'XK',
    description: ''
  },
  {
    id: 67,
    name: 'Singapura',
    zone: 5,
    acronym: 'SG',
    description: ''
  },
  {
    id: 68,
    name: 'Cazaquistão',
    zone: 5,
    acronym: 'KZ',
    description: ''
  },
  {
    id: 69,
    name: 'Kuwait',
    zone: 5,
    acronym: 'KW',
    description: ''
  },
  {
    id: 70,
    name: 'Chéquia (Rep. Checa)',
    zone: 5,
    acronym: 'CZ',
    description: ''
  },
  {
    id: 71,
    name: 'Chile',
    zone: 5,
    acronym: 'CL',
    description: ''
  },
  {
    id: 72,
    name: 'Letónia',
    zone: 5,
    acronym: 'latvia',
    description: ''
  },
  {
    id: 73,
    name: 'Líbano',
    zone: 5,
    acronym: 'LB',
    description: ''
  },
  {
    id: 74,
    name: 'Chipre',
    zone: 5,
    acronym: 'CY',
    description: ''
  },
  {
    id: 75,
    name: 'Líbia',
    zone: 5,
    acronym: 'LY',
    description: ''
  },
  {
    id: 76,
    name: 'Lituânia',
    zone: 5,
    acronym: 'LT',
    description: ''
  },
  {
    id: 77,
    name: 'Tailândia',
    zone: 5,
    acronym: 'TH',
    description: ''
  },
  {
    id: 78,
    name: 'Macau',
    zone: 5,
    acronym: 'MO',
    description: ''
  },
  {
    id: 79,
    name: 'Taiwan',
    zone: 5,
    acronym: 'TW',
    description: ''
  },
  {
    id: 80,
    name: 'Coreia do Norte',
    zone: 5,
    acronym: 'KP',
    description: ''
  },
  {
    id: 81,
    name: 'Macedónia',
    zone: 5,
    acronym: 'MK',
    description: ''
  },
  {
    id: 82,
    name: 'Tajiquistão',
    zone: 5,
    acronym: 'TJ',
    description: ''
  },
  {
    id: 83,
    name: 'Coreia do Sul (Korea Rep.)',
    zone: 5,
    acronym: 'KR',
    description: ''
  },
  {
    id: 84,
    name: 'Costa Do Marfim',
    zone: 5,
    acronym: '',
    description: ''
  },
  {
    id: 85,
    name: 'Malásia',
    zone: 5,
    acronym: 'MY',
    description: ''
  },
  {
    id: 86,
    name: 'Timor-Leste',
    zone: 5,
    acronym: 'TL',
    description: ''
  },
  {
    id: 87,
    name: 'Croácia',
    zone: 5,
    acronym: 'HR',
    description: ''
  },
  {
    id: 88,
    name: 'Tunísia',
    zone: 5,
    acronym: 'TN',
    description: ''
  },
  {
    id: 89,
    name: 'Turquemenistão',
    zone: 5,
    acronym: 'TM',
    description: ''
  },
  {
    id: 90,
    name: 'Egito',
    zone: 5,
    acronym: 'EG',
    description: ''
  },
  {
    id: 91,
    name: 'Marrocos',
    zone: 5,
    acronym: 'MA',
    description: ''
  },
  {
    id: 92,
    name: 'Turquia',
    zone: 5,
    acronym: 'TR',
    description: ''
  },
  {
    id: 93,
    name: 'Emirados Árabes Unidos',
    zone: 5,
    acronym: 'AE',
    description: ''
  },
  {
    id: 94,
    name: 'Maurícias, Ilhas',
    zone: 5,
    acronym: 'MU',
    description: ''
  },
  {
    id: 95,
    name: 'Ucrânia',
    zone: 5,
    acronym: '',
    description: ''
  },
  {
    id: 96,
    name: 'Mauritânia',
    zone: 5,
    acronym: '',
    description: ''
  },
  {
    id: 97,
    name: 'México',
    zone: 5,
    acronym: 'MX',
    description: ''
  },
  {
    id: 98,
    name: 'Eslováquia',
    zone: 5,
    acronym: '',
    description: ''
  },
  {
    id: 99,
    name: 'Uzbequistão',
    zone: 5,
    acronym: '',
    description: ''
  },
  {
    id: 100,
    name: 'Eslovénia',
    zone: 5,
    acronym: '',
    description: ''
  },
  {
    id: 101,
    name: 'Moçambique',
    zone: 5,
    acronym: 'MZ',
    description: ''
  },
  {
    id: 102,
    name: 'Moldávia',
    zone: 5,
    acronym: 'MD',
    description: ''
  },
  {
    id: 103,
    name: 'Venezuela',
    zone: 5,
    acronym: 'VE',
    description: ''
  },
  {
    id: 104,
    name: 'Estónia',
    zone: 5,
    acronym: 'EE',
    description: ''
  },
  {
    id: 105,
    name: 'Falkland, Ilhas (Malvinas)',
    zone: 5,
    acronym: 'FK',
    description: ''
  },
  {
    id: 106,
    name: 'Montenegro',
    zone: 5,
    acronym: 'ME',
    description: ''
  },
  {
    id: 107,
    name: 'Nauru, Rep.',
    zone: 6,
    acronym: 'NR',
    description: ''
  },
  {
    id: 108,
    name: 'Nepal',
    zone: 6,
    acronym: 'NP',
    description: ''
  },
  {
    id: 109,
    name: 'Nicarágua',
    zone: 6,
    acronym: 'NI',
    description: ''
  },
  {
    id: 110,
    name: 'Níger',
    zone: 6,
    acronym: 'NE',
    description: ''
  },
  {
    id: 111,
    name: 'Gabão',
    zone: 6,
    acronym: 'GA',
    description: ''
  },
  {
    id: 112,
    name: 'Gâmbia',
    zone: 6,
    acronym: 'GM',
    description: ''
  },
  {
    id: 113,
    name: 'Anguila',
    zone: 6,
    acronym: 'AI',
    description: ''
  },
  {
    id: 114,
    name: 'Gana',
    zone: 6,
    acronym: 'Ghana',
    description: ''
  },
  {
    id: 115,
    name: 'Niue, Ilha',
    zone: 6,
    acronym: 'NU',
    description: ''
  },
  {
    id: 116,
    name: 'Antígua e Barbuda',
    zone: 6,
    acronym: 'AG',
    description: ''
  },
  {
    id: 117,
    name: 'Antilhas Holandesas',
    zone: 6,
    acronym: 'AN',
    description: ''
  },
  {
    id: 118,
    name: 'Nova Caledónia',
    zone: 6,
    acronym: 'NC',
    description: ''
  },
  {
    id: 119,
    name: 'Granada',
    zone: 6,
    acronym: 'GD',
    description: ''
  },
  {
    id: 120,
    name: 'Oman',
    zone: 6,
    acronym: 'OM',
    description: ''
  },
  {
    id: 121,
    name: 'Panamá',
    zone: 6,
    acronym: 'PA',
    description: ''
  },
  {
    id: 122,
    name: 'Guadalupe',
    zone: 6,
    acronym: 'GP',
    description: ''
  },
  {
    id: 123,
    name: 'Papua-Nova Guiné	',
    zone: 6,
    acronym: 'PG',
    description: ''
  },
  {
    id: 124,
    name: 'Aruba',
    zone: 6,
    acronym: 'AW',
    description: ''
  },
  {
    id: 125,
    name: 'Guame (Ilha de)',
    zone: 6,
    acronym: 'GU',
    description: ''
  },
  {
    id: 126,
    name: 'Paquistão',
    zone: 6,
    acronym: 'PK',
    description: ''
  },
  {
    id: 127,
    name: 'Guatemala',
    zone: 6,
    acronym: 'GT',
    description: ''
  },
  {
    id: 128,
    name: 'Paraguai',
    zone: 6,
    acronym: 'PY',
    description: ''
  },
  {
    id: 129,
    name: 'Guiana',
    zone: 6,
    acronym: 'GY',
    description: ''
  },
  {
    id: 130,
    name: 'Bahamas',
    zone: 6,
    acronym: 'BS',
    description: ''
  },
  {
    id: 131,
    name: 'Guiana Francesa',
    zone: 6,
    acronym: 'GF',
    description: ''
  },
  {
    id: 132,
    name: 'Porto Rico',
    zone: 6,
    acronym: 'PR',
    description: ''
  },
  {
    id: 133,
    name: 'Guiné',
    zone: 6,
    acronym: 'GN',
    description: ''
  },
  {
    id: 134,
    name: 'Qatar',
    zone: 6,
    acronym: 'QA',
    description: ''
  },
  {
    id: 135,
    name: 'Bangladesh',
    zone: 6,
    acronym: 'BD',
    description: ''
  },
  {
    id: 136,
    name: 'Guiné Equatorial',
    zone: 6,
    acronym: 'GQ',
    description: ''
  },
  {
    id: 137,
    name: 'Quénia',
    zone: 6,
    acronym: 'KE',
    description: ''
  },
  {
    id: 138,
    name: 'Barbados',
    zone: 6,
    acronym: 'BB',
    description: ''
  },
  {
    id: 139,
    name: 'Haiti',
    zone: 6,
    acronym: 'HT',
    description: ''
  },
  {
    id: 140,
    name: 'Belize',
    zone: 6,
    acronym: 'BZ',
    description: ''
  },
  {
    id: 141,
    name: 'República Centro-Africana',
    zone: 6,
    acronym: 'CF',
    description: ''
  },
  {
    id: 142,
    name: 'Benim',
    zone: 6,
    acronym: 'BJ',
    description: ''
  },
  {
    id: 143,
    name: 'Honduras',
    zone: 6,
    acronym: 'HN',
    description: ''
  },
  {
    id: 144,
    name: 'República Dominicana',
    zone: 6,
    acronym: 'DO',
    description: ''
  },
  {
    id: 145,
    name: 'Bermudas',
    zone: 6,
    acronym: 'BM',
    description: ''
  },
  {
    id: 146,
    name: 'Reunião e Maiote, Ilhas',
    zone: 6,
    acronym: 'YT',
    description: ''
  },
  {
    id: 147,
    name: 'Bolívia',
    zone: 6,
    acronym: 'BO',
    description: ''
  },
  {
    id: 148,
    name: 'Iémen',
    zone: 6,
    acronym: 'YE',
    description: ''
  },
  {
    id: 149,
    name: 'Ruanda',
    zone: 6,
    acronym: 'RW',
    description: ''
  },
  {
    id: 150,
    name: 'Botsuana',
    zone: 6,
    acronym: 'BW',
    description: ''
  },
  {
    id: 151,
    name: 'Salomão, Ilhas',
    zone: 6,
    acronym: 'SB',
    description: ''
  },
  {
    id: 152,
    name: 'Samoa (Ocidental)',
    zone: 6,
    acronym: 'WS',
    description: ''
  },
  {
    id: 153,
    name: 'Brunei Darussalam',
    zone: 6,
    acronym: 'BN',
    description: ''
  },
  {
    id: 154,
    name: 'Samoa Americana',
    zone: 6,
    acronym: 'AS',
    description: ''
  },
  {
    id: 155,
    name: 'Santa Lúcia',
    zone: 6,
    acronym: 'LC',
    description: ''
  },
  {
    id: 156,
    name: 'Burquina Faso',
    zone: 6,
    acronym: 'BF',
    description: ''
  },
  {
    id: 157,
    name: 'São Cristóvão e Nevis',
    zone: 6,
    acronym: 'KN',
    description: ''
  },
  {
    id: 158,
    name: 'Burundi',
    zone: 6,
    acronym: 'BI',
    description: ''
  },
  {
    id: 159,
    name: 'São Tomé E Príncipe',
    zone: 6,
    acronym: 'ST',
    description: ''
  },
  {
    id: 160,
    name: 'Butão',
    zone: 6,
    acronym: 'BT',
    description: ''
  },
  {
    id: 161,
    name: 'Jamaica',
    zone: 6,
    acronym: 'JM',
    description: ''
  },
  {
    id: 162,
    name: 'São Vicente e Grenadinas',
    zone: 6,
    acronym: 'VC',
    description: ''
  },
  {
    id: 163,
    name: 'Seicheles, Ilhas',
    zone: 6,
    acronym: 'SC',
    description: ''
  },
  {
    id: 164,
    name: 'Caimão (Ilhas)',
    zone: 6,
    acronym: 'KY',
    description: ''
  },
  {
    id: 165,
    name: 'Camarões',
    zone: 6,
    acronym: 'CM',
    description: ''
  },
  {
    id: 166,
    name: 'Serra Leoa',
    zone: 6,
    acronym: 'SL',
    description: ''
  },
  {
    id: 167,
    name: 'Cambodja',
    zone: 6,
    acronym: 'KH',
    description: ''
  },
  {
    id: 168,
    name: 'Kiribati',
    zone: 6,
    acronym: 'KI',
    description: ''
  },
  {
    id: 169,
    name: 'Síria',
    zone: 6,
    acronym: 'SY',
    description: ''
  },
  {
    id: 170,
    name: 'Chade',
    zone: 6,
    acronym: 'TD',
    description: ''
  },
  {
    id: 171,
    name: 'Laos, Rep. Dem. Pop.',
    zone: 6,
    acronym: 'LA',
    description: ''
  },
  {
    id: 172,
    name: 'Somália',
    zone: 6,
    acronym: 'SO',
    description: ''
  },
  {
    id: 173,
    name: 'Lesoto',
    zone: 6,
    acronym: 'LS',
    description: ''
  },
  {
    id: 174,
    name: 'Sri Lanka',
    zone: 6,
    acronym: 'LK',
    description: ''
  },
  {
    id: 175,
    name: 'Suazilândia',
    zone: 6,
    acronym: 'SZ',
    description: ''
  },
  {
    id: 176,
    name: 'China',
    zone: 6,
    acronym: 'CN',
    description: ''
  },
  {
    id: 177,
    name: 'Sudão',
    zone: 6,
    acronym: 'SD',
    description: ''
  },
  {
    id: 178,
    name: 'Libéria',
    zone: 6,
    acronym: 'LR',
    description: ''
  },
  {
    id: 179,
    name: 'Colômbia',
    zone: 6,
    acronym: 'CO',
    description: ''
  },
  {
    id: 180,
    name: 'Comores',
    zone: 6,
    acronym: 'KM',
    description: ''
  },
  {
    id: 181,
    name: 'Suriname',
    zone: 6,
    acronym: 'SR',
    description: ''
  },
  {
    id: 182,
    name: 'Congo (Rep. Pop.)',
    zone: 6,
    acronym: 'CG',
    description: ''
  },
  {
    id: 183,
    name: 'Congo, Rep. Dem.',
    zone: 6,
    acronym: 'CD',
    description: ''
  },
  {
    id: 184,
    name: 'Taiti',
    zone: 6,
    acronym: '',
    description: ''
  },
  {
    id: 185,
    name: 'Cook, Ilhas ',
    zone: 6,
    acronym: 'CK',
    description: ''
  },
  {
    id: 186,
    name: 'Madagáscar',
    zone: 6,
    acronym: 'RM',
    description: ''
  },
  {
    id: 187,
    name: 'Tanzânia',
    zone: 6,
    acronym: 'TZ',
    description: ''
  },
  {
    id: 188,
    name: 'Costa Rica',
    zone: 6,
    acronym: 'CR',
    description: ''
  },
  {
    id: 189,
    name: 'Malawi',
    zone: 6,
    acronym: 'MW',
    description: ''
  },
  {
    id: 190,
    name: 'Togo',
    zone: 6,
    acronym: 'TG',
    description: ''
  },
  {
    id: 191,
    name: 'Maldivas (Ilhas)',
    zone: 6,
    acronym: 'MV',
    description: ''
  },
  {
    id: 192,
    name: 'Tonga',
    zone: 6,
    acronym: 'TO',
    description: ''
  },
  {
    id: 193,
    name: 'Cuba',
    zone: 6,
    acronym: 'CU',
    description: ''
  },
  {
    id: 194,
    name: 'Mali',
    zone: 6,
    acronym: 'ML',
    description: ''
  },
  {
    id: 195,
    name: 'Trinidade e Tobago',
    zone: 6,
    acronym: 'TT',
    description: ''
  },
  {
    id: 196,
    name: 'Djibouti',
    zone: 6,
    acronym: 'DJ',
    description: ''
  },
  {
    id: 197,
    name: 'Marechal, Ilhas',
    zone: 6,
    acronym: 'MH',
    description: ''
  },
  {
    id: 198,
    name: 'Turcas e Caicos (Ilhas)',
    zone: 6,
    acronym: 'TC',
    description: ''
  },
  {
    id: 199,
    name: 'Dominica',
    zone: 6,
    acronym: 'DM',
    description: ''
  },
  {
    id: 200,
    name: 'Marianas, Ilhas',
    zone: 6,
    acronym: 'MP',
    description: ''
  },
  {
    id: 201,
    name: 'El Salvador',
    zone: 6,
    acronym: 'SV',
    description: ''
  },
  {
    id: 202,
    name: 'Martinica',
    zone: 6,
    acronym: 'MQ',
    description: ''
  },
  {
    id: 203,
    name: 'Tuvalu',
    zone: 6,
    acronym: 'TV',
    description: ''
  },
  {
    id: 204,
    name: 'Equador',
    zone: 6,
    acronym: 'EC',
    description: ''
  },
  {
    id: 205,
    name: 'Uganda',
    zone: 6,
    acronym: 'UG',
    description: ''
  },
  {
    id: 206,
    name: 'Eritreia',
    zone: 6,
    acronym: 'ER',
    description: ''
  },
  {
    id: 207,
    name: 'Uruguai',
    zone: 6,
    acronym: 'UY',
    description: ''
  },
  {
    id: 208,
    name: 'Mianmar (Ex-Birmânia)',
    zone: 6,
    acronym: 'MM',
    description: ''
  },
  {
    id: 209,
    name: 'Vanuatu',
    zone: 6,
    acronym: 'VU',
    description: ''
  },
  {
    id: 210,
    name: 'Vietname',
    zone: 6,
    acronym: 'VN',
    description: ''
  },
  {
    id: 211,
    name: 'Etiópia',
    zone: 6,
    acronym: 'ET',
    description: ''
  },
  {
    id: 212,
    name: 'Mongólia',
    zone: 6,
    acronym: 'MN',
    description: ''
  },
  {
    id: 213,
    name: 'Virgens, Ilhas (EUA)',
    zone: 6,
    acronym: 'US',
    description: ''
  },
  {
    id: 214,
    name: 'Monserrate',
    zone: 6,
    acronym: 'UK',
    description: ''
  },
  {
    id: 215,
    name: 'Virgens, Ilhas (Reino Unido)',
    zone: 6,
    acronym: 'UK',
    description: ''
  },
  {
    id: 216,
    name: 'Zâmbia',
    zone: 6,
    acronym: 'ZM',
    description: ''
  },
  {
    id: 217,
    name: 'Fiji',
    zone: 6,
    acronym: 'FJ',
    description: ''
  },
  {
    id: 218,
    name: 'Namíbia',
    zone: 6,
    acronym: 'NA',
    description: ''
  },
  {
    id: 219,
    name: 'Zimbabwe',
    zone: 6,
    acronym: 'ZW',
    description: ''
  }
]
