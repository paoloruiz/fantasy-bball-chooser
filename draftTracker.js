// data from https://hashtagbasketball.com/fantasy-basketball-projections

// R#	PLAYER	POS	TEAM	GP	MPG	FG%	FT%	3PM	PTS	TREB	AST	STL	BLK	TO	TOTAL	$AV
const inputPlayers = '1	Anthony Davis	PF/C	NOR	72	36.0	0.52 (10.5/20.3)	0.83 (6.8/8.2)	0.7	28.5	11.3	2.6	1.4	2.4	2.3	16.02	72aaa' +
  '2	Stephen Curry	PG/SG	GSW	72	32.0	0.49 (8.2/16.7)	0.92 (5.1/5.6)	4.4	25.9	4.8	6.2	1.6	0.2	2.9	14.36	66aaa' +
  '3	James Harden	PG/SG	HOU	80	35.4	0.45 (8.8/19.8)	0.85 (8.3/9.7)	3.7	29.6	5.8	8.7	1.6	0.6	4.7	14.21	70aaa' +
  '4	Kevin Durant	SF/PF	GSW	67	34.0	0.51 (8.6/16.8)	0.89 (4.7/5.4)	2.6	24.6	6.7	5.2	0.8	1.6	2.8	13.79	60aaa' +
  '5	Karl-Anthony Towns	C	MIN	80	36.0	0.54 (9.0/16.6)	0.85 (4.5/5.3)	1.4	24.0	12.4	2.8	0.9	1.4	2.2	13.21	58aaa' +
  '6	Giannis Antetokounmpo	SF/PF	MIL	78	36.0	0.52 (9.9/19.0)	0.78 (6.6/8.4)	0.7	27.1	9.6	5.6	1.5	1.5	3.0	13.10	62aaa' +
  '7	Nikola Jokic	PF/C	DEN	75	33.0	0.51 (7.3/14.2)	0.86 (3.9/4.5)	1.5	19.9	11.2	6.3	1.2	0.9	2.7	11.87	54aaa' +
  '8	Kawhi Leonard	SG/SF	TOR	70	34.0	0.48 (8.6/18.0)	0.87 (5.9/6.8)	2.0	25.1	6.5	3.6	1.7	0.9	2.1	11.65	54aaa' +
  '9	LeBron James	SF/PF	LAL	75	36.0	0.52 (10.2/19.5)	0.71 (4.6/6.5)	1.7	26.7	8.6	9.2	1.3	0.7	4.2	10.77	55aaa' +
  '10	Damian Lillard	PG	POR	74	36.0	0.44 (8.5/19.3)	0.91 (6.6/7.2)	3.1	26.6	4.5	6.4	1.0	0.3	2.7	10.18	46aaa' +
  '11	Joel Embiid	PF/C	PHI	58	31.0	0.48 (8.4/17.4)	0.78 (6.7/8.5)	1.4	24.8	11.1	3.5	0.8	2.0	4.0	9.72	48aaa' +
  '12	Chris Paul	PG	HOU	63	31.5	0.46 (5.8/12.7)	0.91 (3.5/3.8)	2.4	17.5	5.4	7.7	1.7	0.2	2.2	9.33	44aaa' +
  '13	Kyrie Irving	PG/SG	BOS	60	32.0	0.48 (8.9/18.3)	0.91 (4.0/4.4)	2.8	24.6	3.5	5.4	1.0	0.3	2.3	9.17	41aaa' +
  '14	Russell Westbrook	PG	OKC	80	35.2	0.43 (9.6/22.2)	0.78 (6.0/7.7)	1.5	26.7	10.0	10.4	1.6	0.3	4.9	8.66	50aaa' +
  '15	Paul George	SG/SF	OKC	77	35.5	0.45 (7.9/17.5)	0.86 (4.5/5.2)	2.7	23.0	6.5	3.8	1.8	0.4	2.9	8.49	43aaa' +
  '16	Jimmy Butler	SG/SF	MIN	67	36.5	0.47 (7.5/16.2)	0.84 (5.9/6.9)	1.3	22.3	5.5	4.7	1.8	0.5	2.0	8.31	40aaa' +
  '17	John Wall	PG	WAS	77	36.0	0.44 (8.0/18.3)	0.80 (4.5/5.6)	1.3	21.8	4.1	9.8	1.9	0.9	3.9	8.18	44aaa' +
  '18	Ben Simmons	PG	PHI	79	35.0	0.56 (8.0/14.3)	0.58 (2.9/5.1)	0.1	19.1	8.5	9.3	1.7	1.0	3.6	7.02	39aaa' +
  '19	Draymond Green	PF/C	GSW	75	32.5	0.45 (4.1/9.1)	0.77 (2.0/2.6)	1.2	11.3	7.9	7.2	1.5	1.3	2.7	6.80	33aaa' +
  '20	Rudy Gobert	C	UTA	70	33.0	0.62 (5.0/8.2)	0.69 (3.7/5.4)	0.0	13.8	12.1	1.4	0.7	2.3	1.9	6.45	28aaa' +
  '21	Victor Oladipo	PG/SG	IND	72	33.0	0.46 (7.3/15.9)	0.80 (3.8/4.8)	2.0	20.5	4.9	4.0	1.8	0.7	2.6	6.42	34aaa' +
  '22	Kevin Love	PF/C	CLE	70	32.0	0.44 (5.7/12.9)	0.86 (3.9/4.5)	2.8	17.9	10.3	2.3	0.8	0.5	1.9	6.12	29aaa' +
  '23	Kyle Lowry	PG	TOR	75	32.0	0.43 (5.5/12.7)	0.85 (2.7/3.2)	3.1	16.8	5.2	6.4	1.2	0.3	2.3	5.95	29aaa' +
  '24	Khris Middleton	SG/SF	MIL	78	35.0	0.45 (6.7/14.9)	0.89 (3.6/4.1)	2.1	19.3	5.0	4.0	1.4	0.3	2.3	5.90	29aaa' +
  '25	Marc Gasol	C	MEM	75	33.0	0.45 (5.8/12.9)	0.83 (3.2/3.9)	1.6	16.4	7.4	4.4	0.8	1.4	2.4	5.86	27aaa' +
  '26	Devin Booker	PG/SG	PHO	75	34.0	0.43 (8.2/19.1)	0.88 (5.2/6.0)	2.9	24.5	4.5	4.6	0.9	0.3	3.3	5.80	29aaa' +
  '27	Eric Bledsoe	PG/SG	MIL	70	31.0	0.47 (6.4/13.7)	0.79 (3.4/4.3)	1.8	18.1	4.2	5.4	1.6	0.5	2.9	5.68	30aaa' +
  '28	Jrue Holiday	PG/SG	NOR	75	34.0	0.47 (6.7/14.1)	0.77 (2.1/2.7)	1.6	17.2	4.2	6.5	1.4	0.7	2.7	5.56	28aaa' +
  '29	Andre Drummond	PF/C	DET	79	33.0	0.53 (6.1/11.5)	0.60 (3.2/5.3)	0.0	15.3	16.3	2.5	1.5	1.5	2.4	5.52	32aaa' +
  '30	Kemba Walker	PG	CHA	78	33.0	0.43 (7.1/16.6)	0.86 (4.3/5.0)	2.8	21.3	3.3	5.3	1.1	0.3	2.1	5.35	26aaa' +
  '31	Bradley Beal	SG	WAS	77	35.0	0.47 (8.2/17.4)	0.81 (3.6/4.5)	2.8	22.7	4.0	3.8	1.0	0.4	2.2	5.30	26aaa' +
  '32	LaMarcus Aldridge	PF/C	SAS	72	33.0	0.50 (7.5/15.1)	0.82 (3.6/4.4)	0.4	19.1	7.9	1.9	0.6	1.3	1.3	5.21	21aaa' +
  '33	Myles Turner	PF/C	IND	70	30.0	0.50 (5.2/10.4)	0.80 (3.1/3.9)	0.9	14.5	6.7	1.4	0.7	1.9	1.4	5.10	20aaa' +
  '34	Mike Conley	PG	MEM	65	32.0	0.43 (5.8/13.4)	0.85 (4.1/4.8)	2.3	18.0	3.2	6.0	1.3	0.3	1.9	5.07	25aaa' +
  '35	Otto Porter Jr	SF/PF	WAS	76	32.0	0.50 (5.9/11.8)	0.82 (1.5/1.8)	2.0	15.2	6.1	2.0	1.4	0.5	0.8	5.05	23aaa' +
  '36	DeMarcus Cousins	PF/C	GSW	35	26.0	0.46 (6.2/13.5)	0.75 (4.0/5.4)	1.9	18.3	8.7	3.8	1.1	1.0	3.6	4.97	28aaa' +
  '37	Klay Thompson	SG/SF	GSW	76	34.0	0.48 (7.6/16.0)	0.84 (1.8/2.1)	3.5	20.5	3.7	2.2	0.7	0.5	1.6	4.78	22aaa' +
  '38	Donovan Mitchell	PG/SG	UTA	77	35.0	0.44 (8.2/18.7)	0.81 (3.3/4.0)	2.6	22.3	4.0	4.0	1.5	0.4	2.8	4.73	27aaa' +
  '39	Kristaps Porzingis	PF/C	NYK	45	28.0	0.44 (6.2/14.0)	0.80 (3.3/4.1)	1.7	17.4	6.2	1.2	0.6	2.0	1.6	4.51	20aaa' +
  '40	Gary Harris	SG/SF	DEN	70	33.5	0.48 (6.4/13.4)	0.82 (2.1/2.5)	2.4	17.4	2.9	2.8	1.6	0.2	1.6	4.46	22aaa' +
  '41	Gordon Hayward	SG/SF	BOS	70	32.0	0.46 (6.9/15.1)	0.84 (4.8/5.7)	1.9	20.4	5.0	3.4	1.0	0.3	2.1	4.34	21aaa' +
  '42	Clint Capela	PF/C	HOU	73	28.0	0.65 (6.3/9.7)	0.56 (2.1/3.8)	0.0	14.7	10.9	1.0	0.8	1.7	1.6	4.31	20aaa' +
  '43	C.J. McCollum	PG/SG	POR	80	35.5	0.45 (8.0/17.7)	0.85 (2.8/3.2)	2.4	21.2	3.7	3.7	1.0	0.4	2.1	4.29	21aaa' +
  '44	DeMar DeRozan	SG/SF	SAS	77	34.0	0.45 (7.8/17.3)	0.84 (6.1/7.3)	1.1	22.9	4.4	4.7	1.0	0.2	2.2	4.28	21aaa' +
  '45	Al Horford	PF/C	BOS	71	32.0	0.47 (5.4/11.4)	0.78 (1.3/1.7)	1.3	13.4	7.1	4.7	0.7	1.1	1.8	4.18	18aaa' +
  '46	Jayson Tatum	SF/PF	BOS	77	32.0	0.48 (5.5/11.3)	0.83 (3.1/3.8)	1.6	15.7	5.3	1.8	1.1	0.8	1.5	4.17	18aaa' +
  '47	Nikola Vucevic	PF/C	ORL	69	28.0	0.48 (6.5/13.6)	0.76 (1.4/1.8)	1.0	15.4	8.9	2.9	0.9	1.0	1.7	4.07	19aaa' +
  '48	Tobias Harris	SF/PF	LAC	78	32.0	0.46 (6.7/14.5)	0.84 (2.1/2.5)	2.1	17.6	5.3	2.8	1.1	0.5	1.6	4.06	19aaa' +
  '49	Lauri Markkanen	PF	CHI	57	32.0	0.44 (6.2/14.1)	0.86 (2.6/3.0)	2.8	17.9	7.9	1.4	0.6	0.6	1.2	4.03	18aaa' +
  '50	John Collins	PF/C	ATL	77	28.0	0.58 (5.4/9.4)	0.75 (2.4/3.2)	0.2	13.5	8.5	1.6	0.8	1.1	1.7	3.90	16aaa' +
  '51	Jamal Murray	PG/SG	DEN	80	32.0	0.45 (6.2/13.7)	0.90 (2.8/3.1)	2.2	17.4	3.8	3.5	1.0	0.4	2.1	3.81	18aaa' +
  '52	Enes Kanter	C	NYK	72	26.0	0.58 (6.0/10.3)	0.83 (2.1/2.6)	0.1	14.1	10.5	1.4	0.5	0.6	1.8	3.72	14aaa' +
  '53	Nikola Mirotic	SF/PF	NOR	68	29.0	0.42 (4.8/11.3)	0.81 (2.1/2.5)	2.9	14.5	7.9	1.5	0.8	0.9	1.2	3.65	17aaa' +
  '54	Jarrett Allen	PF/C	BKN	74	26.0	0.60 (4.6/7.6)	0.81 (2.5/3.1)	0.1	11.8	7.2	1.0	0.5	1.4	1.6	3.65	12aaa' +
  '55	Hassan Whiteside	C	MIA	69	25.0	0.55 (5.4/9.9)	0.68 (2.3/3.4)	0.0	13.2	10.7	0.7	0.6	1.8	1.7	3.61	16aaa' +
  '56	Kris Dunn	PG/SG	CHI	72	32.0	0.43 (6.1/14.1)	0.73 (1.9/2.5)	0.9	14.9	4.4	6.3	1.9	0.7	2.6	3.60	22aaa' +
  '57	Blake Griffin	PF/C	DET	60	34.0	0.44 (7.5/17.1)	0.77 (3.7/4.8)	1.9	20.7	7.2	6.2	0.7	0.4	2.8	3.56	20aaa' +
  '58	Paul Millsap	PF/C	DEN	65	32.0	0.46 (5.4/11.7)	0.73 (3.3/4.4)	1.1	15.2	7.1	3.1	1.3	1.1	2.0	3.47	19aaa' +
  '59	Larry Nance Jr	PF/C	CLE	70	25.0	0.58 (4.5/7.7)	0.70 (1.5/2.1)	0.1	10.4	7.7	1.5	1.4	0.9	0.7	3.46	15aaa' +
  '60	Jabari Parker	SF/PF	CHI	62	32.0	0.49 (6.8/14.0)	0.77 (2.7/3.6)	1.3	17.6	6.1	2.7	1.1	0.5	1.8	3.23	16aaa' +
  '61	Lou Williams	PG/SG	LAC	78	28.0	0.43 (5.7/13.0)	0.88 (4.7/5.4)	2.1	18.1	2.3	3.9	0.9	0.2	2.2	3.18	14aaa' +
  '62	Robert Covington	SF/PF	PHI	73	28.0	0.40 (3.7/9.1)	0.84 (1.6/1.9)	2.4	11.3	5.1	1.6	1.6	0.8	1.5	3.08	16aaa' +
  '63	Luka Doncic	PG	DAL	72	31.0	0.42 (4.6/11.0)	0.78 (3.7/4.8)	1.8	14.8	6.6	5.6	1.0	0.4	2.1	3.07	17aaa' +
  '64	Jeff Teague	PG	MIN	75	32.0	0.44 (4.7/10.8)	0.85 (3.0/3.5)	1.1	13.6	3.1	6.4	1.3	0.3	2.4	3.01	15aaa' +
  '65	Josh Richardson	PG/SG	MIA	72	32.0	0.45 (4.7/10.6)	0.83 (1.4/1.7)	1.9	12.8	3.2	2.8	1.3	0.9	1.5	2.95	14aaa' +
  '66	Jonas Valanciunas	C	TOR	77	24.0	0.56 (5.5/9.9)	0.81 (2.3/2.9)	0.2	13.6	8.8	0.9	0.4	0.9	1.4	2.85	9aaa' +
  '67	Ricky Rubio	PG	UTA	75	30.0	0.41 (4.5/10.8)	0.88 (3.0/3.4)	1.3	13.2	4.5	5.7	1.5	0.1	2.4	2.79	15aaa' +
  '68	Joe Ingles	SG/SF	UTA	80	31.0	0.46 (3.8/8.3)	0.79 (0.7/0.9)	2.4	10.8	4.2	4.3	1.3	0.2	1.9	2.69	14aaa' +
  '69	Aaron Gordon	SF/PF	ORL	73	33.0	0.44 (6.5/14.8)	0.74 (3.0/4.0)	1.7	17.7	7.0	2.4	1.1	0.8	1.5	2.65	15aaa' +
  '70	DeAndre Jordan	C	DAL	79	32.0	0.67 (4.2/6.3)	0.58 (2.3/4.0)	0.0	10.8	13.9	1.3	0.6	1.3	1.5	2.43	12aaa' +
  '71	Steven Adams	C	OKC	76	33.0	0.60 (6.1/10.2)	0.59 (2.1/3.6)	0.0	14.3	8.9	1.3	1.1	1.0	1.8	2.32	13aaa' +
  '72	Dewayne Dedmon	C	ATL	65	24.0	0.57 (3.6/6.4)	0.76 (1.1/1.5)	0.8	9.2	8.0	1.2	0.7	1.0	1.2	2.31	7aaa' +
  '73	Will Barton	SG/SF	DEN	70	32.0	0.43 (5.4/12.5)	0.79 (2.3/2.8)	1.9	14.9	5.2	4.0	1.0	0.6	1.9	2.24	12aaa' +
  '74	Zach LaVine	PG/SG	CHI	62	32.0	0.44 (6.1/13.8)	0.81 (3.7/4.6)	2.1	18.0	4.2	3.3	1.0	0.2	2.0	2.21	12aaa' +
  '75	Taurean Prince	SF	ATL	78	31.0	0.42 (5.2/12.3)	0.83 (2.2/2.6)	2.2	14.8	4.9	2.6	1.2	0.6	2.3	2.13	13aaa' +
  '76	Jonathan Isaac	PF	ORL	69	27.0	0.42 (3.3/8.0)	0.79 (1.3/1.6)	0.9	8.9	5.3	1.0	1.5	1.6	1.4	2.10	10aaa' +
  '77	Julius Randle	PF/C	NOR	77	28.0	0.54 (6.2/11.4)	0.73 (3.9/5.3)	0.2	16.4	8.7	2.9	0.7	0.5	2.4	2.07	11aaa' +
  '78	Evan Fournier	SG/SF	ORL	65	32.0	0.45 (6.1/13.6)	0.85 (2.8/3.3)	2.2	17.2	2.9	2.8	1.0	0.1	1.6	2.02	10aaa' +
  '79	Rondae Hollis-Jefferson	SF/PF	BKN	71	29.5	0.47 (5.5/11.7)	0.77 (3.6/4.6)	0.2	14.7	7.2	2.8	1.2	0.7	1.8	1.96	11aaa' +
  '80	Jaren Jackson Jr	PF	MEM	72	26.0	0.45 (3.5/7.8)	0.76 (1.9/2.5)	0.8	9.7	5.8	1.3	0.7	2.1	1.7	1.94	7aaa' +
  '81	Harrison Barnes	SF/PF	DAL	76	34.0	0.45 (6.8/15.0)	0.85 (3.4/4.0)	1.7	18.7	5.7	2.0	0.7	0.2	1.3	1.92	9aaa' +
  '82	Dario Saric	PF/C	PHI	78	28.0	0.45 (5.1/11.4)	0.85 (2.4/2.8)	2.0	14.5	6.4	2.7	0.7	0.3	2.1	1.84	9aaa' +
  '83	Isaiah Thomas	PG	DEN	73	25.0	0.43 (5.8/13.5)	0.89 (4.0/4.5)	2.1	17.6	2.0	4.2	0.7	0.1	2.0	1.82	8aaa' +
  '84	Nicolas Batum	SG/SF	CHA	75	32.0	0.41 (4.8/11.7)	0.86 (1.9/2.3)	1.5	13.1	5.4	4.9	1.0	0.4	2.1	1.75	10aaa' +
  '85	Lonzo Ball	PG	LAL	70	30.0	0.39 (3.9/9.9)	0.50 (0.7/1.4)	1.7	10.2	6.3	6.4	1.4	0.8	2.0	1.73	13aaa' +
  '86	Rudy Gay	SF/PF	SAS	60	28.0	0.46 (5.1/11.1)	0.79 (2.5/3.2)	0.9	13.8	6.0	1.8	1.1	0.7	1.6	1.72	9aaa' +
  '87	Jusuf Nurkic	C	POR	73	27.5	0.50 (6.3/12.5)	0.64 (2.7/4.2)	0.0	15.3	9.4	2.2	0.9	1.4	2.6	1.71	12aaa' +
  '88	Goran Dragic	PG/SG	MIA	74	32.0	0.46 (6.0/13.2)	0.78 (2.6/3.3)	1.8	16.5	3.7	4.7	0.9	0.2	2.3	1.71	10aaa' +
  '89	D\'Angelo Russell	PG/SG	BKN	65	29.5	0.41 (6.8/16.4)	0.76 (2.4/3.1)	2.2	18.1	4.2	5.8	1.2	0.4	3.4	1.69	14aaa' +
  '90	Kyle Anderson	SG/SF	MEM	73	27.5	0.50 (3.0/6.1)	0.73 (1.4/2.0)	0.4	7.9	5.5	2.9	1.5	0.8	1.3	1.58	8aaa' +
  '91	James Johnson	SF/PF	MIA	72	27.0	0.50 (4.1/8.2)	0.69 (1.5/2.2)	1.0	10.6	5.2	3.6	0.9	1.0	2.0	1.52	7aaa' +
  '92	Buddy Hield	SG	SAC	80	27.0	0.44 (5.6/12.9)	0.87 (1.0/1.1)	2.5	14.7	4.2	2.1	1.2	0.2	1.5	1.51	9aaa' +
  '93	Tyreke Evans	PG/SG	IND	52	27.0	0.44 (5.5/12.6)	0.77 (2.6/3.4)	1.8	15.4	4.5	4.5	1.0	0.3	2.1	1.43	9aaa' +
  '94	Tim Hardaway Jr	SG/SF	NYK	66	32.0	0.43 (5.8/13.3)	0.82 (2.3/2.8)	2.5	16.4	3.4	2.5	1.0	0.2	1.4	1.38	8aaa' +
  '95	Jeremy Lin	PG/SG	ATL	60	24.5	0.42 (4.6/10.9)	0.82 (3.0/3.6)	1.5	13.7	3.5	5.0	1.0	0.5	2.2	1.37	8aaa' +
  '96	Jordan Bell	PF/C	GSW	70	20.0	0.61 (2.8/4.7)	0.71 (0.8/1.1)	0.0	6.5	5.3	2.6	0.8	1.3	1.3	1.36	3aaa' +
  '97	DeAndre Ayton	C	PHO	72	29.5	0.51 (5.0/9.9)	0.72 (2.0/2.8)	0.2	12.3	8.6	1.5	0.7	1.1	1.6	1.34	6aaa' +
  '98	Serge Ibaka	PF/C	TOR	75	27.0	0.47 (4.7/10.1)	0.82 (1.1/1.4)	1.4	12.0	5.9	0.9	0.4	1.3	1.2	1.33	3aaa' +
  '99	Malcolm Brogdon	PG/SG	MIL	72	28.0	0.48 (4.3/9.0)	0.88 (1.5/1.7)	1.3	11.5	3.0	3.6	1.0	0.2	1.5	1.23	5aaa' +
  '100	Jeremy Lamb	SG/SF	CHA	74	26.0	0.46 (5.0/11.0)	0.84 (2.1/2.6)	1.4	13.6	4.6	2.2	0.8	0.5	1.1	1.04	4aaa' +
  '101	Allen Crabbe	SG/SF	BKN	75	29.5	0.43 (4.6/10.8)	0.86 (1.6/1.8)	2.8	13.5	4.0	1.5	0.7	0.4	1.0	0.76	3aaa' +
  '102	Kent Bazemore	SG/SF	ATL	67	27.0	0.41 (4.3/10.5)	0.78 (1.8/2.3)	1.6	12.0	3.8	3.3	1.3	0.6	1.9	0.75	6aaa' +
  '103	Kelly Olynyk	PF/C	MIA	72	24.0	0.48 (4.1/8.4)	0.78 (1.5/1.9)	1.4	11.0	5.5	2.4	0.8	0.5	1.9	0.72	3aaa' +
  '104	J.J. Redick	SG	PHI	73	27.5	0.45 (4.9/10.8)	0.90 (2.2/2.4)	2.5	14.4	2.2	2.6	0.6	0.1	1.2	0.71	1aaa' +
  '105	Pau Gasol	PF/C	SAS	72	25.0	0.45 (3.8/8.4)	0.73 (1.8/2.5)	0.6	10.1	8.0	2.9	0.4	1.1	1.3	0.63	2aaa' +
  '106	Derrick Favors	PF/C	UTA	70	28.0	0.53 (5.0/9.5)	0.65 (1.9/2.9)	0.2	12.1	7.1	1.4	0.9	1.0	1.3	0.58	3aaa' +
  '107	Taj Gibson	PF/C	MIN	79	32.0	0.54 (4.6/8.4)	0.74 (1.6/2.2)	0.1	10.8	7.1	1.3	0.6	0.8	1.1	0.57	1aaa' +
  '108	Darren Collison	PG/SG	IND	70	25.0	0.48 (3.8/8.0)	0.87 (1.7/1.9)	1.1	10.4	2.0	4.2	1.0	0.1	1.2	0.55	1aaa' +
  '109	JaVale McGee	C	LAL	68	18.0	0.61 (4.2/6.8)	0.61 (1.0/1.6)	0.0	9.4	5.3	0.7	0.5	1.4	0.9	0.46	1aaa' +
  '110	Wendell Carter Jr.	C	CHI	72	26.0	0.48 (3.8/8.0)	0.72 (1.8/2.5)	0.4	9.8	7.2	1.9	0.7	1.2	1.6	0.42	2aaa' +
  '111	Willie Cauley-Stein	PF/C	SAC	74	27.0	0.52 (5.3/10.1)	0.65 (2.0/3.1)	0.0	12.5	6.6	2.4	1.0	0.8	1.4	0.40	3aaa' +
  '112	Danilo Gallinari	SF/PF	LAC	58	27.0	0.42 (3.9/9.2)	0.89 (3.7/4.2)	1.6	13.1	4.1	1.7	0.5	0.3	0.9	0.38	1aaa' +
  '113	Dennis Schroder	PG	OKC	72	25.0	0.44 (5.9/13.4)	0.85 (2.7/3.2)	1.2	15.7	2.4	5.2	0.8	0.1	2.4	0.37	3aaa' +
  '114	Eric Gordon	SG	HOU	68	31.0	0.41 (5.3/12.9)	0.82 (2.3/2.7)	3.2	16.0	2.4	2.2	0.6	0.4	1.6	0.33	3aaa' +
  '115	Reggie Jackson	PG/SG	DET	60	28.0	0.42 (5.9/13.9)	0.85 (2.8/3.2)	1.4	15.9	2.8	5.7	0.7	0.1	2.4	0.32	3aaa' +
  '116	Markieff Morris	PF/C	WAS	72	27.0	0.46 (4.2/9.2)	0.82 (1.6/1.9)	1.0	11.0	5.6	1.8	0.9	0.6	1.7	0.24	1aaa' +
  '117	Kentavious Caldwell-Pope	SG/SF	LAL	75	30.0	0.42 (4.6/11.0)	0.82 (2.1/2.6)	2.0	13.3	3.9	2.2	1.2	0.2	1.2	0.20	3aaa' +
  '118	Domantas Sabonis	PF/C	IND	75	25.0	0.51 (4.9/9.7)	0.75 (2.4/3.2)	0.2	12.5	8.0	2.0	0.6	0.5	1.9	0.20	1aaa' +
  '119	Rajon Rondo	PG	LAL	66	26.0	0.44 (3.4/7.8)	0.57 (0.5/0.8)	0.8	8.1	4.4	7.5	1.2	0.1	2.4	0.17	3aaa' +
  '120	Thaddeus Young	SF/PF	IND	75	29.0	0.49 (4.3/8.9)	0.57 (0.6/1.0)	0.7	10.0	6.0	1.6	1.5	0.4	1.2	0.13	3aaa' +
  '121	Elfrid Payton	PG	NOR	70	30.0	0.44 (5.0/11.3)	0.68 (1.9/2.8)	0.6	12.5	5.0	6.5	1.1	0.4	2.8	0.12	5aaa' +
  '122	Dirk Nowitzki	PF/C	DAL	72	24.0	0.45 (4.0/8.9)	0.89 (1.1/1.3)	1.5	10.6	5.4	1.3	0.5	0.6	0.6	0.06	1aaa' +
  '123	Brandon Ingram	SG/SF	LAL	74	33.5	0.47 (6.5/13.6)	0.68 (3.3/4.9)	0.9	17.1	5.1	4.2	0.8	0.6	2.2	0.03	4aaa' +
  '124	Montrezl Harrell	PF/C	LAC	70	21.0	0.63 (5.3/8.4)	0.64 (1.9/3.0)	0.0	12.5	4.4	1.3	0.5	0.9	1.0	-0.03	1aaa' +
  '125	Dwight Howard	PF/C	WAS	77	29.5	0.58 (5.4/9.3)	0.55 (3.2/5.9)	0.0	14.0	11.8	1.3	0.7	1.6	2.3	-0.05	5aaa' +
  '126	Bobby Portis	PF/C	CHI	72	23.0	0.47 (5.2/10.9)	0.75 (1.5/2.0)	1.1	12.9	7.0	1.5	0.7	0.4	1.2	-0.05	1aaa' +
  '127	Kyle Kuzma	SF/PF	LAL	77	28.0	0.45 (5.4/12.0)	0.73 (1.8/2.5)	2.0	14.7	5.6	1.7	0.6	0.4	1.6	-0.12	1aaa' +
  '128	Derrick White	PG	SAS	72	26.0	0.51 (3.3/6.4)	0.73 (2.6/3.6)	1.1	10.4	4.9	1.7	0.8	0.6	1.2	-0.16	1aaa' +
  '129	Cody Zeller	PF/C	CHA	62	25.0	0.55 (3.6/6.5)	0.71 (2.2/3.0)	0.0	9.4	6.4	1.4	0.8	0.9	1.1	-0.16	1aaa' +
  '130	Mohamed Bamba	C	ORL	72	23.0	0.47 (3.3/7.1)	0.69 (1.4/2.0)	0.3	8.2	6.9	0.5	0.6	1.7	1.1	-0.18	1aaa' +
  '131	Al-Farouq Aminu	SF/PF	POR	74	28.0	0.39 (3.0/7.6)	0.74 (1.1/1.5)	1.8	8.9	6.7	1.4	1.1	0.6	1.2	-0.20	1aaa' +
  '132	Patty Mills	PG	SAS	79	28.0	0.42 (4.1/9.7)	0.85 (1.3/1.5)	2.3	11.7	2.2	3.5	0.9	0.1	1.4	-0.30	1aaa' +
  '133	Marvin Williams	SF/PF	CHA	78	25.0	0.44 (3.2/7.1)	0.86 (1.4/1.6)	1.6	9.3	4.9	1.3	0.6	0.6	0.8	-0.31	1aaa' +
  '134	George Hill	PG/SG	CLE	62	27.0	0.46 (3.9/8.4)	0.78 (1.6/2.1)	1.4	10.8	3.1	3.1	0.9	0.3	1.3	-0.31	1aaa' +
  '135	E\'Twaun Moore	SG/SF	NOR	75	30.0	0.48 (4.4/9.1)	0.72 (0.6/0.9)	1.6	11.0	2.8	2.4	0.9	0.3	1.1	-0.36	1aaa' +
  '136	Andrew Wiggins	SG/SF	MIN	80	36.5	0.45 (7.7/17.3)	0.70 (3.6/5.1)	1.4	20.4	4.1	2.2	1.1	0.6	2.1	-0.36	4aaa' +
  '137	Bogdan Bogdanovic	SG/SF	SAC	62	27.0	0.44 (4.3/9.6)	0.85 (1.3/1.5)	1.7	11.5	2.8	3.1	0.8	0.2	1.5	-0.42	1aaa' +
  '138	Trae Young	PG	ATL	72	28.0	0.39 (4.3/10.8)	0.80 (2.6/3.2)	1.6	12.7	2.7	5.7	1.0	0.2	2.7	-0.45	1aaa' +
  '139	Brook Lopez	C	MIL	72	22.0	0.46 (4.4/9.5)	0.74 (1.5/2.0)	1.4	11.7	3.6	1.6	0.4	1.2	1.4	-0.55	1aaa' +
  '140	Patrick Beverley	PG/SG	LAC	67	24.0	0.42 (2.8/6.6)	0.80 (0.8/1.0)	1.6	8.0	3.4	3.0	1.1	0.3	1.2	-0.65	1aaa' +
  '141	Mario Hezonja	SG/SF	NYK	76	25.0	0.43 (4.3/9.9)	0.83 (1.3/1.5)	1.3	11.0	4.0	1.7	1.1	0.4	1.5	-0.69	1aaa' +
  '142	Davis Bertans	PF/C	SAS	74	22.0	0.45 (3.2/7.0)	0.84 (0.9/1.1)	2.0	9.3	2.9	1.5	0.6	0.7	0.8	-0.70	1aaa' +
  '143	Trevor Ariza	SG/SF	PHO	74	27.5	0.41 (3.1/7.5)	0.82 (1.0/1.3)	1.9	9.1	4.1	1.7	1.2	0.2	0.8	-0.71	1aaa' +
  '144	Maurice Harkless	 	POR	73	25.0	0.50 (3.3/6.6)	0.68 (1.0/1.5)	1.0	8.7	3.7	1.1	0.9	0.9	0.8	-0.71	1aaa' +
  '145	Dennis Smith Jr	PG/SG	DAL	71	31.0	0.40 (6.4/15.9)	0.71 (2.2/3.1)	1.8	16.7	3.9	5.6	1.1	0.2	2.9	-0.78	3aaa' +
  '146	Caris LeVert	SF	BKN	70	27.0	0.43 (4.3/10.0)	0.70 (1.8/2.5)	1.4	11.8	4.1	3.8	1.1	0.3	2.0	-0.81	1aaa' +
  '147	Nerlens Noel	PF/C	OKC	62	18.0	0.54 (2.9/5.5)	0.70 (1.2/1.7)	0.0	7.1	5.5	0.9	1.0	0.8	1.1	-0.85	1aaa' +
  '148	Marcus Smart	PG/SG	BOS	70	27.0	0.37 (3.4/9.0)	0.78 (2.0/2.6)	1.4	10.1	3.4	3.8	1.3	0.4	1.8	-0.87	1aaa' +
  '149	JaMychal Green	PF/C	MEM	64	26.0	0.48 (3.4/7.1)	0.76 (1.3/1.8)	0.7	8.8	7.5	1.3	0.6	0.5	1.2	-0.88	1aaa' +
  '150	Luke Kennard	SG	DET	73	25.0	0.45 (3.7/8.1)	0.86 (1.2/1.4)	1.6	10.1	3.1	2.3	0.8	0.2	1.3	-1.00	1aaa' +
  '151	Danny Green	SG/SF	TOR	71	25.0	0.38 (2.7/7.0)	0.79 (0.6/0.7)	1.7	7.6	3.5	1.8	0.9	0.9	1.0	-1.01	1aaa' +
  '152	T.J. Warren	SF	PHO	66	25.0	0.49 (5.9/12.2)	0.77 (2.3/3.0)	0.3	14.5	3.9	1.0	0.8	0.4	0.9	-1.09	1aaa' +
  '153	Kyle O\'Quinn	PF/C	IND	76	15.0	0.56 (2.4/4.3)	0.78 (0.9/1.1)	0.0	5.7	5.1	1.6	0.4	1.1	1.0	-1.15	 0aaa' +
  '154	Avery Bradley	PG/SG	LAC	70	27.0	0.44 (5.0/11.5)	0.77 (1.0/1.3)	1.7	12.7	3.3	2.0	1.0	0.2	1.5	-1.17	1aaa' +
  '155	Bojan Bogdanovic	SG/SF	IND	78	27.0	0.46 (4.3/9.4)	0.86 (1.8/2.1)	1.9	12.3	3.2	1.3	0.5	0.1	1.2	-1.28	 aaa' +
  '156	De\'Aaron Fox	PG	SAC	76	30.0	0.42 (5.3/12.6)	0.75 (2.4/3.2)	0.8	13.9	3.1	4.9	1.0	0.3	2.4	-1.30	1aaa' +
  '157	Jakob Poeltl	C	SAS	78	20.0	0.62 (3.2/5.2)	0.63 (0.9/1.4)	0.0	7.3	5.2	0.7	0.5	1.0	1.1	-1.32	 aaa' +
  '158	Terrence Ross	SG/SF	ORL	72	24.0	0.43 (3.7/8.5)	0.79 (0.8/1.0)	1.7	9.9	2.8	1.2	1.0	0.4	0.9	-1.32	 aaa' +
  '159	Jaylen Brown	SG/SF	BOS	75	29.0	0.47 (5.1/10.8)	0.67 (2.1/3.2)	1.5	13.8	4.7	1.6	0.9	0.4	1.7	-1.32	1aaa' +
  '160	Pascal Siakam	PF	TOR	78	22.0	0.51 (3.2/6.3)	0.68 (0.8/1.2)	0.4	7.6	4.7	1.8	0.8	0.7	0.9	-1.35	 aaa' +
  '161	Seth Curry	PG/SG	POR	70	21.0	0.47 (3.4/7.2)	0.86 (1.0/1.2)	1.7	9.5	1.9	2.2	0.8	0.1	1.1	-1.35	 aaa' +
  '162	Alex Len	PF/C	ATL	72	21.0	0.52 (3.3/6.3)	0.71 (2.1/2.9)	0.0	8.6	7.5	1.1	0.5	1.0	1.3	-1.37	 aaa' +
  '163	D.J. Augustin	PG	ORL	73	26.0	0.42 (3.4/8.1)	0.84 (2.5/3.0)	1.6	10.9	2.1	4.1	0.7	0.0	1.9	-1.37	 aaa' +
  '164	Rodney Hood	SG/SF	TBA	68	25.0	0.42 (4.6/11.1)	0.84 (1.7/2.0)	2.0	13.0	2.8	1.7	0.8	0.2	1.1	-1.43	 aaa' +
  '165	Ersan Ilyasova	SF/PF	MIL	68	24.0	0.43 (3.6/8.3)	0.77 (1.5/1.9)	1.6	10.2	5.5	1.4	0.7	0.3	1.0	-1.44	 aaa' +
  '166	Fred VanVleet	PG	TOR	75	20.0	0.41 (3.1/7.4)	0.83 (1.2/1.4)	1.5	8.8	2.5	3.4	0.8	0.2	0.9	-1.44	 aaa' +
  '167	Spencer Dinwiddie	PG	BKN	70	22.0	0.41 (2.9/7.2)	0.81 (2.3/2.8)	1.3	9.4	2.6	4.5	0.7	0.3	1.2	-1.45	 aaa' +
  '168	Jae Crowder	SF/PF	UTA	73	26.0	0.42 (3.9/9.3)	0.81 (1.7/2.1)	1.7	11.1	3.8	1.4	0.9	0.3	1.0	-1.46	 aaa' +
  '169	Josh Hart	SG/SF	LAL	70	24.5	0.47 (3.2/6.7)	0.73 (1.3/1.8)	1.4	9.1	4.4	1.5	0.8	0.3	0.9	-1.46	 aaa' +
  '170	Shaquille Harrison	PG	PHO	70	20.0	0.48 (3.0/6.3)	0.75 (1.4/1.9)	0.3	7.8	3.0	2.9	1.2	0.3	1.1	-1.46	 aaa' +
  '171	Marcin Gortat	C	LAC	79	24.0	0.53 (3.5/6.5)	0.66 (1.1/1.7)	0.0	8.0	7.5	1.6	0.5	0.7	1.1	-1.51	 aaa' +
  '172	Bam Adebayo	PF/C	MIA	72	22.0	0.53 (3.2/5.9)	0.74 (2.3/3.1)	0.0	8.7	6.2	1.7	0.5	0.6	1.2	-1.57	 aaa' +
  '173	OG Anunoby	SF/PF	TOR	78	27.0	0.48 (3.4/7.0)	0.65 (1.1/1.7)	1.6	9.4	3.5	1.1	1.0	0.3	0.9	-1.58	 aaa' +
  '174	Tyler Johnson	PG/SG	MIA	72	23.0	0.43 (3.6/8.4)	0.81 (1.5/1.9)	1.3	10.1	2.9	2.0	0.8	0.4	1.0	-1.59	 aaa' +
  '175	Wesley Matthews	SG/SF	DAL	70	28.5	0.40 (3.4/8.6)	0.83 (1.2/1.5)	2.0	10.1	2.9	2.3	0.9	0.2	1.1	-1.60	 aaa' +
  '176	Jerian Grant	PG/SG	ORL	72	24.0	0.42 (2.9/7.0)	0.80 (1.9/2.4)	0.9	8.7	2.5	4.2	1.0	0.1	1.3	-1.62	 aaa' +
  '177	Reggie Bullock	SG/SF	DET	65	26.0	0.46 (3.7/7.9)	0.79 (0.5/0.6)	1.8	9.7	2.6	1.7	0.7	0.2	0.7	-1.64	 aaa' +
  '178	Nemanja Bjelica	PF	SAC	70	24.0	0.44 (2.8/6.5)	0.77 (0.7/0.9)	1.3	7.7	4.9	1.6	0.8	0.4	0.9	-1.65	 aaa' +
  '179	Kelly Oubre Jr	SF	WAS	78	25.0	0.42 (3.6/8.7)	0.81 (2.2/2.8)	1.3	10.9	4.1	1.0	0.9	0.4	1.0	-1.67	 aaa' +
  '180	Mike Muscala	PF/C	PHI	65	20.0	0.46 (2.6/5.7)	0.85 (0.8/1.0)	1.3	7.3	4.1	1.3	0.5	0.6	0.9	-1.69	 aaa' +
  '181	Kevon Looney	PF/C	GSW	70	20.0	0.56 (2.8/4.9)	0.59 (1.1/1.8)	0.1	6.7	4.8	1.0	0.7	1.2	0.8	-1.71	 aaa' +
  '182	Patrick Patterson	PF/C	OKC	75	26.0	0.40 (2.2/5.4)	0.84 (0.7/0.8)	1.8	6.8	4.1	1.2	0.8	0.4	0.7	-1.75	 aaa' +
  '183	Trey Lyles	PF	DEN	74	21.0	0.47 (4.1/8.8)	0.72 (1.4/2.0)	1.2	10.8	4.9	1.4	0.5	0.4	1.1	-1.75	 aaa' +
  '184	Robin Lopez	C	CHI	74	22.0	0.52 (3.8/7.3)	0.73 (0.8/1.1)	0.0	8.4	4.9	1.2	0.2	1.1	1.1	-1.78	 aaa' +
  '185	Carmelo Anthony	SF/PF	HOU	70	26.0	0.41 (5.3/12.9)	0.79 (1.6/2.0)	1.7	13.9	4.8	1.2	0.6	0.5	1.1	-1.78	 aaa' +
  '186	P.J. Tucker	SF	HOU	79	28.0	0.39 (2.0/5.2)	0.76 (0.8/1.1)	1.5	6.3	5.6	1.2	1.1	0.3	0.9	-1.80	 aaa' +
  '187	Marvin Bagley III	PF	SAC	72	27.0	0.51 (4.4/8.7)	0.66 (1.8/2.7)	0.4	10.9	7.0	1.2	0.6	0.5	1.5	-1.82	 aaa' +
  '188	James Ennis	SG/SF	HOU	71	25.0	0.46 (3.3/7.1)	0.80 (1.6/1.9)	1.1	9.2	3.3	1.2	0.8	0.3	1.0	-1.83	 aaa' +
  '189	Markelle Fultz	PG/SG	PHI	70	26.0	0.42 (4.9/11.7)	0.55 (1.4/2.5)	1.0	12.1	4.4	5.3	1.2	0.5	1.7	-1.83	1aaa' +
  '190	Trey Burke	PG	NYK	70	22.0	0.46 (4.8/10.4)	0.72 (0.9/1.2)	1.2	11.7	1.8	4.3	0.5	0.1	1.2	-1.87	 aaa' +
  '191	Wilson Chandler	SG/SF	PHI	72	26.0	0.44 (3.6/8.2)	0.76 (1.1/1.5)	1.3	9.6	4.8	1.8	0.6	0.4	1.1	-1.87	 aaa' +
  '192	Dante Exum	PG/SG	UTA	70	20.0	0.47 (3.5/7.3)	0.82 (2.1/2.6)	0.5	9.6	2.2	3.6	0.7	0.2	1.6	-1.91	 aaa' +
  '193	Solomon Hill	SG/SF	NOR	72	23.0	0.43 (2.2/5.2)	0.87 (1.5/1.7)	1.2	7.2	3.1	1.4	0.7	0.4	0.8	-1.95	 aaa' +
  '194	Stanley Johnson	SG/SF	DET	73	28.0	0.38 (3.4/8.9)	0.77 (1.6/2.0)	1.2	9.6	4.4	2.1	1.2	0.3	1.4	-1.96	 aaa' +
  '195	Andre Iguodala	SG/SF	GSW	65	24.0	0.48 (2.2/4.7)	0.67 (0.9/1.3)	0.6	5.9	3.5	3.1	0.9	0.5	1.0	-2.00	 aaa' +
  '196	Mikal Bridges	SF	PHO	72	22.0	0.45 (3.2/7.1)	0.78 (1.3/1.7)	1.1	8.7	3.3	1.3	0.8	0.5	0.9	-2.04	 aaa' +
  '197	DeMarre Carroll	SF/PF	BKN	72	24.0	0.41 (3.1/7.7)	0.74 (1.8/2.5)	1.6	9.7	5.0	1.5	0.7	0.3	0.9	-2.19	 aaa' +
  '198	Terry Rozier	PG/SG	BOS	77	23.0	0.38 (3.2/8.4)	0.79 (1.3/1.6)	1.6	9.3	4.2	2.7	0.8	0.2	0.9	-2.22	 aaa' +
  '199	Jonathon Simmons	SG/SF	ORL	71	26.0	0.45 (4.3/9.7)	0.77 (1.9/2.5)	1.0	11.6	3.2	2.1	0.8	0.3	1.6	-2.24	 aaa' +
  '200	Marco Belinelli	SG/SF	SAS	77	23.0	0.43 (3.5/8.2)	0.89 (1.8/2.0)	1.5	10.3	1.8	1.8	0.6	0.1	1.0	-2.34	 aaa' +
  '201	Mason Plumlee	PF/C	DEN	78	21.0	0.56 (3.2/5.6)	0.55 (1.6/2.8)	0.0	7.9	6.0	2.4	0.6	1.0	1.4	-2.39	 aaa' +
  '202	John Henson	PF/C	MIL	68	18.0	0.55 (2.6/4.7)	0.61 (0.9/1.5)	0.0	6.1	4.9	1.1	0.4	1.2	0.8	-2.39	 aaa' +
  '203	C.J. Miles	SG/SF	TOR	69	20.0	0.40 (2.9/7.3)	0.84 (0.9/1.1)	2.5	9.3	2.3	0.7	0.6	0.3	0.5	-2.43	 aaa' +
  '204	T.J. McConnell	PG	PHI	77	18.0	0.47 (2.3/4.9)	0.78 (0.4/0.6)	0.3	5.4	2.3	4.1	1.1	0.1	1.3	-2.47	 aaa' +
  '205	Tyus Jones	PG	MIN	75	18.0	0.44 (1.9/4.3)	0.87 (1.1/1.3)	0.6	5.5	1.7	3.3	1.0	0.1	0.8	-2.53	 aaa' +
  '206	Dillon Brooks	SG/SF	MEM	78	26.0	0.44 (3.9/9.0)	0.76 (1.6/2.2)	1.3	10.8	2.9	1.6	0.9	0.2	1.5	-2.65	 aaa' +
  '207	Mitchell Robinson	C	NYK	72	18.0	0.51 (2.7/5.2)	0.68 (1.3/1.9)	0.0	6.7	4.9	0.6	0.6	1.0	0.9	-2.75	 aaa' +
  '208	Josh Jackson	SG/SF	PHO	77	27.0	0.43 (5.4/12.4)	0.66 (2.6/3.9)	1.0	14.3	4.4	1.8	1.1	0.5	1.9	-2.80	 aaa' +
  '209	Ryan Anderson	PF/C	HOU	70	23.0	0.42 (3.0/7.1)	0.83 (1.3/1.5)	1.9	9.3	3.9	0.7	0.3	0.2	0.6	-2.81	 aaa' +
  '210	Jordan Clarkson	PG/SG	CLE	79	20.0	0.45 (4.2/9.2)	0.82 (1.4/1.7)	1.2	10.9	2.2	2.0	0.6	0.1	1.2	-2.82	 aaa' +
  '211	Evan Turner	SG/SF	POR	76	24.0	0.44 (3.1/7.1)	0.83 (1.1/1.3)	0.5	7.7	3.2	2.5	0.7	0.4	1.3	-2.84	 aaa' +
  '212	Ed Davis	PF/C	BKN	73	18.0	0.58 (2.0/3.5)	0.67 (1.0/1.6)	0.0	5.1	6.7	0.7	0.5	0.6	0.8	-2.85	 aaa' +
  '213	Dwyane Wade	PG/SG	TBA	62	20.0	0.43 (3.9/9.1)	0.76 (1.8/2.4)	0.4	10.0	3.0	2.7	0.8	0.5	1.7	-2.86	 aaa' +
  '214	Frank Ntilikina	PG	NYK	72	25.0	0.39 (3.0/7.7)	0.78 (0.9/1.1)	0.9	7.8	2.5	3.7	1.0	0.2	1.6	-2.86	 aaa' +
  '215	Justin Holiday	SG/SF	CHI	74	22.0	0.38 (2.6/6.8)	0.81 (1.0/1.2)	1.6	7.8	2.9	1.5	0.8	0.4	0.8	-2.89	 aaa' +
  '216	Cory Joseph	PG	IND	78	23.0	0.44 (2.9/6.5)	0.75 (1.0/1.4)	0.8	7.5	2.8	3.0	0.8	0.2	1.1	-2.89	 aaa' +
  '217	Denzel Valentine	SG/SF	CHI	75	22.0	0.40 (3.0/7.5)	0.77 (0.4/0.6)	1.7	8.1	3.9	2.5	0.6	0.1	1.1	-2.90	 aaa' +
  '218	Ish Smith	PG	DET	81	20.0	0.47 (3.6/7.8)	0.71 (0.8/1.2)	0.4	8.5	2.4	3.8	0.7	0.3	1.2	-2.90	 aaa' +
  '219	Glenn Robinson III	SG/SF	DET	70	22.0	0.48 (2.7/5.6)	0.73 (0.9/1.2)	0.9	7.1	3.4	0.9	0.8	0.3	0.6	-2.90	 aaa' +
  '220	Courtney Lee	SG/SF	NYK	77	22.0	0.44 (3.0/6.7)	0.90 (1.0/1.1)	0.9	7.6	2.2	1.6	0.8	0.2	0.7	-2.91	 aaa' +
  '221	Joe Harris	SG/SF	BKN	74	20.0	0.47 (3.0/6.3)	0.80 (0.8/0.9)	1.6	8.3	2.6	1.3	0.4	0.2	1.0	-3.07	 aaa' +
  '222	Delon Wright	PG/SG	TOR	68	15.0	0.46 (2.1/4.6)	0.81 (1.2/1.4)	0.6	6.0	2.1	2.2	0.8	0.3	0.9	-3.07	 aaa' +
  '223	Marcus Morris	SF/PF	BOS	74	23.0	0.42 (3.5/8.4)	0.78 (1.4/1.8)	1.4	9.9	3.9	1.4	0.5	0.2	0.9	-3.12	 aaa' +
  '224	Kyle Korver	SG/SF	CLE	71	20.0	0.45 (2.3/5.2)	0.86 (0.6/0.6)	1.7	7.0	2.2	1.2	0.4	0.3	0.8	-3.14	 aaa' +
  '225	Michael Kidd-Gilchrist	SF	CHA	75	20.0	0.50 (3.1/6.2)	0.75 (1.4/1.9)	0.0	7.6	4.1	1.0	0.6	0.5	0.6	-3.15	 aaa' +
  '226	Justise Winslow	SF/PF	MIA	64	24.0	0.43 (3.0/7.0)	0.66 (1.2/1.8)	0.6	7.8	5.1	2.0	0.8	0.4	1.2	-3.18	 aaa' +
  '227	Jon Leuer	PF/C	DET	70	18.0	0.50 (3.1/6.1)	0.82 (1.0/1.2)	0.5	7.7	4.2	1.1	0.4	0.3	0.7	-3.20	 aaa' +
  '228	Michael Beasley	SF/PF	LAL	70	15.0	0.51 (3.7/7.3)	0.76 (1.1/1.5)	0.4	8.9	3.8	1.0	0.4	0.4	1.2	-3.21	 aaa' +
  '229	Guillermo Hernangomez	 	 	70	15.0	0.52 (2.7/5.3)	0.71 (1.7/2.4)	0.1	7.3	5.9	1.2	0.5	0.4	1.0	-3.21	 aaa' +
  '230	Tristan Thompson	PF/C	CLE	75	24.0	0.58 (2.7/4.6)	0.56 (1.1/2.0)	0.0	6.4	7.6	0.8	0.4	0.7	0.8	-3.22	 aaa' +
  '231	Jerami Grant	SF/PF	OKC	78	22.0	0.49 (3.0/6.1)	0.64 (2.0/3.0)	0.5	8.4	4.0	0.9	0.5	1.0	0.9	-3.24	 aaa' +
  '232	Cedi Osman	SF/PF	CLE	70	23.0	0.49 (3.3/6.8)	0.60 (1.1/1.8)	1.1	8.8	4.1	1.7	0.8	0.1	1.2	-3.26	 aaa' +
  '233	J.J. Barea	PG/SG	DAL	65	18.0	0.43 (3.2/7.4)	0.79 (0.8/1.0)	1.2	8.4	2.0	4.6	0.4	0.0	1.5	-3.35	 aaa' +
  '234	Dwight Powell	PF/C	DAL	70	15.0	0.55 (2.3/4.2)	0.75 (1.2/1.6)	0.2	6.0	3.8	0.8	0.6	0.4	0.5	-3.47	 aaa' +
  '235	Thon Maker	PF/C	MIL	74	18.0	0.44 (2.4/5.5)	0.71 (1.3/1.9)	0.7	6.8	3.6	0.8	0.5	0.8	0.6	-3.49	 aaa' +
  '236	Skal Labissiere	PF/C	SAC	65	18.0	0.46 (3.2/7.0)	0.77 (1.6/2.0)	0.2	8.2	4.4	1.0	0.4	0.6	1.1	-3.49	 aaa' +
  '237	Garrett Temple	SG/SF	MEM	65	21.0	0.42 (2.3/5.4)	0.76 (0.7/0.9)	1.1	6.3	2.2	1.8	0.8	0.3	0.9	-3.50	 aaa' +
  '238	Cheick Diallo	PF/C	NOR	62	13.0	0.57 (2.5/4.4)	0.79 (1.2/1.5)	0.0	6.2	4.8	0.5	0.3	0.5	0.7	-3.50	 aaa' +
  '239	Zach Collins	PF/C	POR	75	22.0	0.42 (2.8/6.7)	0.67 (0.9/1.3)	0.9	7.4	5.0	1.3	0.4	0.7	1.2	-3.55	 aaa' +
  '240	Tony Snell	SG/SF	MIL	72	24.0	0.43 (2.1/4.9)	0.83 (0.5/0.5)	1.5	6.2	2.2	1.1	0.6	0.2	0.6	-3.55	 aaa' +
  '241	Dion Waiters	SG/SF	MIA	60	25.0	0.40 (4.2/10.4)	0.71 (1.3/1.8)	1.3	11.0	2.4	2.9	0.8	0.3	1.7	-3.57	 aaa' +
  '242	Miles Bridges	SF	CHA	72	20.0	0.42 (3.0/7.2)	0.81 (1.2/1.5)	0.9	7.9	3.9	1.7	0.5	0.4	1.1	-3.59	 aaa' +
  '243	Kenneth Faried	PF/C	BKN	60	15.0	0.55 (2.7/5.0)	0.66 (1.3/2.0)	0.0	6.8	5.6	0.7	0.5	0.5	0.7	-3.62	 aaa' +
  '244	Gorgui Dieng	PF/C	MIN	78	15.0	0.49 (1.9/3.8)	0.82 (1.0/1.2)	0.1	4.8	3.8	0.9	0.5	0.5	0.7	-3.63	 aaa' +
  '245	Cameron Payne	PG	CHI	55	18.0	0.39 (2.8/7.1)	0.72 (0.3/0.5)	1.1	7.1	2.1	2.9	0.8	0.2	1.1	-3.63	 aaa' +
  '246	J.R. Smith	SG/SF	CLE	75	25.0	0.38 (2.5/6.5)	0.70 (0.4/0.6)	1.8	7.2	2.7	1.6	0.8	0.2	0.8	-3.69	 aaa' +
  '247	Derrick Rose	PG	MIN	57	20.0	0.44 (4.0/9.1)	0.86 (1.7/2.0)	0.3	10.0	2.3	2.7	0.4	0.2	1.4	-3.77	 aaa' +
  '248	Royce O\'Neale	SF	UTA	74	18.0	0.42 (2.0/4.7)	0.82 (1.1/1.3)	0.8	5.9	3.5	1.5	0.6	0.2	0.9	-3.78	 aaa' +
  '249	Jarell Martin	PF/C	ORL	60	18.0	0.46 (2.7/5.8)	0.78 (1.3/1.7)	0.3	7.0	4.1	0.8	0.5	0.5	1.0	-3.80	 aaa' +
  '250	Shai Gilgeous-Alexander	PG	LAC	72	20.0	0.43 (2.7/6.4)	0.79 (1.4/1.7)	0.2	7.1	2.3	2.8	0.8	0.2	1.3	-3.82	 aaa' +
  '251	Zach Randolph	PF/C	SAC	64	18.0	0.45 (3.9/8.6)	0.77 (1.0/1.4)	0.6	9.3	5.1	1.3	0.4	0.1	1.3	-3.85	 aaa' +
  '252	Andre Roberson	SG/SF	OKC	41	24.0	0.50 (2.2/4.4)	0.42 (0.5/1.1)	0.3	5.1	3.8	0.9	0.9	0.8	0.7	-3.85	 aaa' +
  '253	Wayne Ellington	SG/SF	MIA	70	20.0	0.40 (2.5/6.3)	0.85 (0.5/0.6)	2.1	7.6	1.9	0.8	0.5	0.1	0.5	-3.93	 aaa' +
  '254	Omri Casspi	SF/PF	MEM	60	18.0	0.51 (2.4/4.7)	0.69 (0.9/1.2)	0.6	6.3	3.7	1.0	0.5	0.3	0.8	-3.96	 aaa' +
  '255	Salah Mejri	C	DAL	60	12.0	0.64 (1.2/2.0)	0.59 (0.5/0.9)	0.0	3.0	4.1	0.4	0.4	0.9	0.6	-4.00	 aaa' +
  '256	Malik Monk	SG	CHA	70	20.0	0.37 (3.7/10.0)	0.83 (0.9/1.0)	2.1	10.4	1.6	2.1	0.5	0.2	1.1	-4.03	 aaa' +
  '257	Gerald Green	SG/SF	HOU	60	18.0	0.40 (2.9/7.2)	0.82 (0.9/1.1)	1.7	8.3	2.5	0.7	0.4	0.3	0.6	-4.03	 aaa' +
  '258	Austin Rivers	PG/SG	WAS	66	22.0	0.43 (3.5/8.1)	0.68 (1.2/1.8)	1.4	9.6	1.7	2.3	0.7	0.2	1.1	-4.09	 aaa' +
  '259	Anthony Tolliver	SF/PF	MIN	70	18.0	0.45 (2.0/4.5)	0.76 (0.9/1.2)	1.4	6.4	2.8	0.9	0.3	0.3	0.6	-4.14	 aaa' +
  '260	Thabo Sefolosha	SG/SF	UTA	60	15.0	0.47 (1.7/3.6)	0.73 (0.5/0.7)	0.5	4.5	2.6	0.8	0.9	0.2	0.5	-4.18	 aaa' +
  '261	Yogi Ferrell	PG/SG	SAC	70	18.0	0.42 (2.6/6.2)	0.82 (0.9/1.0)	1.2	7.2	1.9	2.0	0.6	0.1	0.7	-4.20	 aaa' +
  '262	Doug McDermott	SF	IND	77	21.0	0.46 (2.9/6.3)	0.82 (0.9/1.0)	1.3	8.1	2.3	0.9	0.2	0.2	0.7	-4.21	 aaa' +
  '263	Zhaire Smith	SF	PHI	72	18.0	0.47 (2.5/5.3)	0.73 (1.1/1.5)	0.2	6.3	2.9	1.1	0.6	0.4	0.8	-4.25	 aaa' +
  '264	Andrew Harrison	PG/SG	MEM	72	18.0	0.41 (2.3/5.6)	0.76 (1.7/2.2)	0.8	7.1	1.8	2.5	0.5	0.3	1.0	-4.27	 aaa' +
  '265	Harry Giles	PF/C	SAC	60	20.0	0.49 (2.6/5.4)	0.57 (0.8/1.5)	0.0	6.1	5.4	0.6	0.6	0.7	1.1	-4.28	 aaa' +
  '266	Shabazz Napier	PG	BKN	70	15.0	0.41 (2.2/5.3)	0.82 (1.2/1.4)	0.9	6.4	1.7	1.7	0.8	0.1	1.0	-4.28	 aaa' +
  '267	Jeff Green	SF/PF	WAS	75	17.5	0.45 (2.6/5.9)	0.85 (1.6/1.9)	0.6	7.4	2.3	0.9	0.4	0.3	0.7	-4.32	 aaa' +
  '268	Collin Sexton	PG	CLE	72	25.0	0.41 (3.8/9.4)	0.75 (2.3/3.1)	0.7	10.7	2.9	2.8	0.7	0.2	1.8	-4.33	 aaa' +
  '269	Frank Kaminsky	PF/C	CHA	75	18.0	0.41 (2.8/7.0)	0.78 (1.2/1.6)	1.1	8.0	3.0	1.4	0.4	0.3	0.7	-4.35	 aaa' +
  '270	Maxi Kleber	PF	DAL	70	15.0	0.47 (1.7/3.7)	0.77 (0.6/0.7)	0.8	4.8	2.8	0.6	0.3	0.5	0.4	-4.37	 aaa' +
  '271	Juan Hernangomez	SF/PF	DEN	60	15.0	0.46 (1.9/4.0)	0.76 (1.1/1.4)	0.8	5.6	3.2	0.5	0.6	0.2	0.6	-4.42	 aaa' +
  '272	Boban Marjanovic	C	LAC	50	10.0	0.54 (2.1/4.0)	0.77 (2.0/2.5)	0.0	6.2	4.1	0.6	0.3	0.4	0.9	-4.42	 aaa' +
  '273	Marquese Chriss	PF/C	PHO	72	15.0	0.46 (2.3/5.0)	0.64 (1.0/1.6)	0.6	6.3	3.6	0.7	0.5	0.6	0.9	-4.44	 aaa' +
  '274	Luc Mbah a Moute	SF/PF	LAC	71	18.0	0.49 (1.9/3.8)	0.66 (0.6/1.0)	0.8	5.2	2.1	0.5	0.8	0.3	0.6	-4.46	 aaa' +
  '275	Michael Carter-Williams	PG	HOU	58	15.0	0.38 (1.8/4.8)	0.77 (1.1/1.4)	0.3	5.0	2.6	2.3	0.8	0.4	1.1	-4.48	 aaa' +
  '276	Brandon Knight	PG/SG	PHO	60	15.0	0.41 (2.8/6.8)	0.88 (1.4/1.6)	0.8	7.8	1.6	2.1	0.5	0.1	1.2	-4.51	 aaa' +
  '277	Ivica Zubac	C	LAL	60	12.0	0.52 (2.4/4.6)	0.74 (1.0/1.3)	0.0	5.8	3.4	0.7	0.3	0.5	0.8	-4.55	 aaa' +
  '278	Ante Zizic	C	CLE	50	10.0	0.60 (2.4/3.9)	0.73 (1.0/1.3)	0.0	5.7	2.9	0.2	0.1	0.6	0.5	-4.58	 aaa' +
  '279	Zaza Pachulia	C	DET	62	12.0	0.53 (1.5/2.8)	0.80 (0.8/1.0)	0.0	3.8	3.9	1.2	0.5	0.2	0.7	-4.63	 aaa' +
  '280	Darius Miller	SG/SF	NOR	78	18.0	0.44 (1.8/4.1)	0.88 (0.5/0.5)	1.6	5.7	1.4	1.0	0.3	0.2	0.5	-4.68	 aaa' +
  '281	Dragan Bender	PF/C	PHO	78	18.0	0.40 (1.8/4.6)	0.74 (0.4/0.6)	1.1	5.3	3.2	1.2	0.2	0.5	1.0	-4.69	 aaa' +
  '282	Lance Thomas	SG/SF	NYK	65	22.0	0.41 (2.0/4.9)	0.86 (1.0/1.2)	1.0	6.0	2.8	0.8	0.4	0.2	0.6	-4.71	 aaa' +
  '283	Aron Baynes	C	BOS	70	15.0	0.49 (2.1/4.3)	0.79 (0.7/0.9)	0.0	4.9	4.2	0.8	0.2	0.5	0.7	-4.71	 aaa' +
  '284	Kevin Knox	SF/PF	NYK	72	26.0	0.41 (3.5/8.6)	0.74 (1.6/2.2)	0.8	9.4	3.8	1.2	0.7	0.2	1.5	-4.75	 aaa' +
  '285	Lance Stephenson	SG/SF	LAL	73	18.0	0.43 (2.8/6.7)	0.67 (0.9/1.3)	0.6	7.2	4.0	2.4	0.5	0.2	1.4	-4.77	 aaa' +
  '286	Justin Anderson	SF	ATL	60	15.0	0.42 (2.1/5.0)	0.79 (1.1/1.4)	0.7	6.1	2.9	0.8	0.5	0.3	0.7	-4.79	 aaa' +
  '287	Ben McLemore	SG	SAC	62	18.0	0.42 (2.6/6.3)	0.79 (0.9/1.1)	1.0	7.0	2.2	0.9	0.6	0.2	1.0	-4.87	 aaa' +
  '288	Greg Monroe	PF/C	TBA	50	10.0	0.53 (2.1/3.9)	0.75 (0.9/1.2)	0.0	5.1	3.1	1.1	0.4	0.2	0.8	-4.87	 aaa' +
  '289	Terrance Ferguson	SG/SF	OKC	60	17.5	0.42 (1.9/4.4)	0.89 (0.3/0.3)	1.1	5.1	1.1	0.4	0.6	0.3	0.3	-4.92	 aaa' +
  '290	Shaun Livingston	PG/SG	GSW	71	15.0	0.52 (2.0/3.9)	0.80 (0.5/0.6)	0.0	4.6	1.7	1.8	0.5	0.3	0.7	-4.96	 aaa' +
  '291	Milos Teodosic	PG/SG	LAC	62	15.0	0.40 (1.9/4.7)	0.86 (0.6/0.7)	1.2	5.5	1.7	2.7	0.3	0.1	1.2	-4.99	 aaa' +
  '292	DeAndre\' Bembry	SF	ATL	70	18.0	0.46 (2.1/4.7)	0.52 (0.5/0.9)	0.3	5.1	3.0	1.7	0.7	0.5	1.2	-5.10	 aaa' +
  '293	Daniel Theis	PF/C	BOS	50	10.0	0.54 (1.3/2.5)	0.74 (0.7/0.9)	0.2	3.6	3.0	0.6	0.3	0.5	0.6	-5.10	 aaa' +
  '294	Elie Okobo	PG	PHO	70	15.0	0.43 (1.9/4.4)	0.76 (0.8/1.0)	0.9	5.5	1.5	2.1	0.4	0.2	1.0	-5.16	 aaa' +
  '295	Ian Clark	PG/SG	NOR	75	15.0	0.46 (2.5/5.4)	0.78 (0.5/0.6)	0.8	6.2	1.4	1.3	0.4	0.1	0.7	-5.24	 aaa' +
  '296	Alex Abrines	SG	OKC	72	15.0	0.40 (1.7/4.3)	0.88 (0.6/0.7)	1.3	5.3	1.5	0.5	0.5	0.1	0.4	-5.28	 aaa' +
  '297	Ivan Rabb	PF	MEM	50	10.0	0.55 (1.8/3.3)	0.84 (0.6/0.7)	0.0	4.3	3.0	0.7	0.3	0.2	0.7	-5.29	 aaa' +
  '298	Dzanan Musa	PF	BKN	70	12.0	0.46 (2.0/4.3)	0.76 (1.2/1.6)	0.4	5.5	2.0	0.9	0.4	0.3	0.8	-5.32	 aaa' +
  '299	Chandler Parsons	SF/PF	MEM	41	15.0	0.43 (2.1/4.9)	0.68 (0.5/0.8)	1.0	5.8	2.0	1.3	0.4	0.2	0.6	-5.34	 aaa' +
  '300	Richaun Holmes	PF/C	PHO	50	10.0	0.55 (1.9/3.4)	0.68 (0.6/0.9)	0.1	4.5	2.5	0.7	0.3	0.4	0.4	-5.36	 aaa' +
  '301	Jonas Jerebko	SF/PF	GSW	70	15.0	0.42 (2.1/5.0)	0.77 (0.5/0.7)	0.8	5.4	3.3	0.8	0.3	0.2	0.4	-5.39	 aaa' +
  '302	MarShon Brooks	SG/SF	MEM	60	12.0	0.46 (2.2/4.7)	0.78 (1.1/1.4)	0.3	5.7	1.3	1.1	0.6	0.2	1.0	-5.41	 aaa' +
  '303	Ian Mahinmi	C	WAS	70	12.0	0.54 (1.5/2.7)	0.66 (0.8/1.2)	0.0	3.7	3.2	0.6	0.5	0.5	0.8	-5.41	 aaa' +
  '304	Nene Hilario	PF/C	TBA	60	12.0	0.58 (2.2/3.7)	0.62 (1.1/1.7)	0.0	5.4	2.7	0.8	0.5	0.3	0.7	-5.42	 aaa' +
  '305	Kevin Huerter	SG	ATL	60	15.0	0.44 (2.0/4.5)	0.74 (0.8/1.1)	0.6	5.4	2.1	1.5	0.4	0.2	1.0	-5.44	 aaa' +
  '306	Channing Frye	PF/C	CLE	50	10.0	0.46 (1.5/3.2)	0.88 (0.4/0.5)	0.9	4.3	1.8	0.4	0.3	0.2	0.3	-5.45	 aaa' +
  '307	Emmanuel Mudiay	PG	NYK	62	15.0	0.40 (2.0/5.0)	0.76 (1.3/1.8)	0.6	5.9	1.8	2.5	0.5	0.2	1.3	-5.51	 aaa' +
  '308	Miles Plumlee	PF/C	ATL	60	15.0	0.54 (1.7/3.1)	0.54 (0.5/0.9)	0.0	3.8	3.5	0.6	0.4	0.5	0.9	-5.52	 aaa' +
  '309	Bismack Biyombo	PF/C	CHA	78	15.0	0.52 (1.7/3.2)	0.59 (1.1/1.8)	0.0	4.4	4.7	0.6	0.2	0.8	0.8	-5.52	 aaa' +
  '310	Henry Ellenson	PF	DET	70	15.0	0.37 (2.5/6.8)	0.85 (1.2/1.5)	1.0	7.3	3.8	1.0	0.3	0.1	0.8	-5.52	 aaa';

let formattedPlayers = inputPlayers.split('aaa').map((row) => {
	const cols = row.split('\t');
  return {
  	name: cols[1],
    position: cols[2],
    fgp: cols[6].split(' ')[0],
    fgma: cols[6].split(' ')[1],
    ftp: cols[7].split(' ')[0],
    ftma: cols[7].split(' ')[1],
    tpm: parseFloat(cols[8]),
    pts: parseFloat(cols[9]),
    reb: parseFloat(cols[10]),
    ast: parseFloat(cols[11]),
    stl: parseFloat(cols[12]),
    blk: parseFloat(cols[13]),
    tos: parseFloat(cols[14])
  };
});

const getPlayerSelector = (players) => {
  let output = '<select id="player_slct">';
  players.forEach((player) => {
    output += `<option value="${player.name}">${player.name}</option>`;
  });
  output += '</select>';
  return output;
};

const updatePlayerSelector = () => {
	document.getElementById('player_selector').innerHTML = getPlayerSelector(formattedPlayers);
};

let teams = [
  { name: 'alex', team: [] },
  { name: 'irvin', team: [] },
  { name: 'josh', team: [] },
  { name: 'jim', team: [] },
  { name: 'tomas', team: [] },
  { name: 'john', team: [] },
  { name: 'michael', team: [] },
  { name: 'me', team: [] }
];

const getTeamSelector = (teams) => {
	let output = '<select id="team_slct">';
	teams.forEach((team) => {
		output += `<option value="${team.name}">${team.name + team.team.length}</option>`;
	});
	output += '</select>';
	return output;
}

const updateTeamSelector = () => {
	document.getElementById('team_selector').innerHTML = getTeamSelector(teams);
};

const getTeamStats = () => {
  let output = '<table>';
  // fg ft 3p pt rb as st bl to
  output += '<tr><th>Name</th><th># of Players</th><th>Field Goal %</th><th>Free Throw %</th><th>3 pointers</th><th>Points</th><th>Rebounds</th><th>Assists</th><th>Steals</th><th>Blocks</th><th>Turnovers</th></tr>';
  teams.forEach((team) => {
    const consolidatedPlayer = {
      fgm: 0,
      fga: 0,
      ftm: 0,
      fta: 0,
      tpm: 0,
      pts: 0,
      reb: 0,
      ast: 0,
      stl: 0,
      blk: 0,
      tos: 0
    };
    team.team.forEach((player) => {
      const fgmaUnparsed = player.fgma.replace('(', '').replace(')', '').split('/');
      const fgm = parseFloat(fgmaUnparsed[0]);
      const fga = parseFloat(fgmaUnparsed[1]);
      
      const ftmaUnparsed = player.ftma.replace('(', '').replace(')', '').split('/');
      const ftm = parseFloat(ftmaUnparsed[0]);
      const fta = parseFloat(ftmaUnparsed[1]);
      
      consolidatedPlayer.fgm += fgm;
      consolidatedPlayer.fga += fga;
      consolidatedPlayer.ftm += ftm;
      consolidatedPlayer.fta += fta;
      consolidatedPlayer.tpm += player.tpm;
      consolidatedPlayer.pts += player.pts;
      consolidatedPlayer.reb += player.reb;
      consolidatedPlayer.ast += player.ast;
      consolidatedPlayer.stl += player.stl;
      consolidatedPlayer.blk += player.blk;
      consolidatedPlayer.tos += player.tos;
    });
    output += `<tr>
      <td>${team.name}</td>
      <td>${team.team.length}</td>
      <td>${(consolidatedPlayer.fgm/consolidatedPlayer.fga).toFixed(3)}</td>
      <td>${(consolidatedPlayer.ftm/consolidatedPlayer.fta).toFixed(3)}</td>
      <td>${consolidatedPlayer.tpm.toFixed(3)}</td>
      <td>${consolidatedPlayer.pts.toFixed(3)}</td>
      <td>${consolidatedPlayer.reb.toFixed(3)}</td>
      <td>${consolidatedPlayer.ast.toFixed(3)}</td>
      <td>${consolidatedPlayer.stl.toFixed(3)}</td>
      <td>${consolidatedPlayer.blk.toFixed(3)}</td>
      <td>${consolidatedPlayer.tos.toFixed(3)}</td>
    </tr>`;
  });
  output += '</table>';
  return output;
};

const updateTeamStats = () => {
	document.getElementById('team_stats').innerHTML = getTeamStats();
};

updatePlayerSelector();
updateTeamSelector();
document.getElementById('draftButton').addEventListener('click', () => {
	const selectPlayerElem = document.getElementById('player_slct');
	const selectedPlayerName = selectPlayerElem.options[selectPlayerElem.selectedIndex].value;
	
	const selectTeamElem = document.getElementById('team_slct');
	const selectedTeamName = selectTeamElem.options[selectTeamElem.selectedIndex].value;
	formattedPlayers = formattedPlayers.filter((player) => {
		if (player.name === selectedPlayerName) {
			teams.forEach((team) => {
        if (team.name === selectedTeamName) {
				  team.team.push(player);
        }
			});
			return false;
		}
		return true;
	});
	
	updatePlayerSelector();
	updateTeamSelector();
  updateTeamStats();
});
