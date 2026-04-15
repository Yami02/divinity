window.BANCO_XML_RAW = `<?xml version="1.0" encoding="UTF-8"?>
<Database>
    <School name="Origens de Arma">
        <Skill id="A1" name="Ataque Básico (Arma)" ap="2" cd="0" type="phys" mult="100" origin="Arma" attr="Dinâmico" canCombo="true">
            <Desc>Golpe padrão engajado através do uso de Ponto de Ação nativo com a arma atualmente impunhada sem uso de perícia adicional mágica ou física secundária.</Desc>
        </Skill>
        <Skill id="A2" name="All-In (Arma Pesada)" ap="3" cd="3" type="phys" mult="150" origin="Arma" attr="Dinâmico" canCombo="true">
            <Desc>Ataque contundente ou cortante de custo massivo. Penaliza uso intenso de AP batendo com violência bruta de 150% do balanço total (Exige arma 2M obrigatoriamente).</Desc>
        </Skill>
        <Skill id="flurry" name="Flurry (Ladino)" ap="3" cd="3" type="phys" mult="41" origin="Arma" attr="Finesse" canCombo="true">
            <Desc>Executa 3 ataques rápidos consecutivos e brutais. Cada golpe corta 41% da Arma. Dispara também status Críticos via Backstab se estiver segurando adagas. O alcance de ativaçao é de 1.8m listados mas cobre alvos esguindo a 2.2m.</Desc>
        </Skill>
        <Skill id="sucker" name="Sucker Punch" ap="1" cd="3" type="phys" mult="65" origin="Arma" attr="Dinâmico" canCombo="true">
            <Desc>Soco incapacitador usando a mão esquerda vazia sem emprego de escudo bélico. Causa de imediato um abalo de status Knockdown indiscutível dependente de falta de Armor Física.</Desc>
        </Skill>
    </School>

    <School name="Warfare">
        <Skill id="wf1" name="Battering Ram" ap="2" cd="4" type="phys" mult="50" origin="Arma" attr="Dinâmico" canCombo="true">
            <Desc>Avanço irrefreável rasgando vento e aço desferindo 50% num caminho reto. Derruba inimigos para tráz em pura desolação física cega (Ativa Knockdown).</Desc>
        </Skill>
        <Skill id="wf2" name="Battle Stomp" ap="2" cd="4" type="phys" mult="60" origin="Arma" attr="Dinâmico" canCombo="true">
            <Desc>Onda de fraturas na terra derrubando cônico a 60%. Limpa chamas, águas paradas ou superfícies instáveis no triângulo atingido.</Desc>
        </Skill>
        <Skill id="wf3" name="Bouncing Shield" ap="2" cd="3" type="phys" mult="70" origin="Arma" attr="Dinâmico" canCombo="true">
            <Desc>Lança escudo defletor de pontas em ricochete para dano base duplo em agrupamentos (Este multiplicador exato na verdade roda escalado via Armor física Pura do Escudo da ficha original do DOS2 em cálculos avançados de 0 a 100).</Desc>
        </Skill>
        <Skill id="wf4" name="Crippling Blow" ap="2" cd="3" type="phys" mult="115" origin="Arma" attr="Dinâmico" canCombo="true">
            <Desc>A amputação severa em meio de combates esmagados. 115% puro do dano originário que amaldiçoa todos no arco de acerto lateral travando juntas cravadas de paralisia rasteira da cintura para baixo.</Desc>
        </Skill>
        <Skill id="wf5" name="Blitz Attack" ap="2" cd="3" type="phys" mult="70" origin="Arma" attr="Dinâmico" canCombo="true">
            <Desc>Pulo predatório de arca relâmpago que transborda e salta do primeiro atingido ao adversário ladeiro subsequencial na guerra num ataque bélico limpo de fátia.</Desc>
        </Skill>
        <Skill id="wf6" name="Whirlwind" ap="2" cd="3" type="phys" mult="100" origin="Arma" attr="Dinâmico" canCombo="true">
            <Desc>A clássica Tormenta Bárbarica circular na lâmina pura afiada batendo no 360% espalhando sangue de todos espetados pelas varadas laterais envoltos no epicentro do agressor.</Desc>
        </Skill>
        <Skill id="wf7" name="Enrage" ap="2" cd="5" type="buff" mult="0" origin="Arma" attr="Dinâmico" canCombo="false">
            <Desc>A fúria de berzerker cega. Força o heroi ao delírio da carnificina com Critical Strike de 100% permanente nos turnos, custando silenciamento de feitiços lógicos absolutos atrelado das magorias elementais.</Desc>
        </Skill>
        <Skill id="wf8" name="Provoke" ap="1" cd="4" type="buff" mult="0" origin="Arma" attr="Dinâmico" canCombo="false">
            <Desc>Sorteio ou roleta impiedosa mental para agressor, escarnece a raça de adversários envoltos forçando os lobos brutos contra seu escudo indestrutível das costas amparadas. </Desc>
        </Skill>
        <Skill id="wf9" name="Deflective Barrier" ap="2" cd="5" type="parmor" mult="40" origin="Magia" attr="Intel" canCombo="false">
            <Desc>A aura repelente. Força toda flecha atirada da mira letal arqueira ser empurrada por campos gravitacionais devolta no agressor com ódio repulsivo.</Desc>
        </Skill>
        <Skill id="wf10" name="Phoenix Dive" ap="1" cd="4" type="buff" mult="0" origin="Arma" attr="Dinâmico" canCombo="false">
            <Desc>Salto guerreiro de mobilidade absoluta que purifica superfícies e exala calor bruto vulcânico da aterrissagem estraçalhando neves geladas em fogo profano e aceso limpo na poça dos cães sujos atrelados nas malhas mágicas .</Desc>
        </Skill>
        <Skill id="wf11" name="Thick of the Fight" ap="2" cd="4" type="buff" mult="0" origin="Arma" attr="Dinâmico" canCombo="false">
            <Desc>Sede sanguinária: Cada ser mortal rodeando perto cede passivamente danos limpos incrementadores em Aditivo Brutal escalando seu martelo divino mortal limpo.</Desc>
        </Skill>
        <Skill id="wf12" name="Guardian Angel" ap="2" cd="6" type="buff" mult="0" origin="Arma" attr="Dinâmico" canCombo="false">
            <Desc>Manto passivo angelical heroico que recebe brutalmente na própria costa os estilhaços de setas e magias miradas originalmente num mago covarde frágil ladeiro da linha bélica. Dano dividido.</Desc>
        </Skill>
        <Skill id="wf13" name="Onslaught" ap="4" cd="6" type="phys" mult="250" origin="Arma" attr="Dinâmico" canCombo="true">
            <Desc>A Habilidade Oculta (Source): Furacão ensandecido cravando as mais puras e severas rajadas de desfiguração cega sequencial: 5 cortes massos totalizando o dano colossal esmagador em somatória das fatiadas cruas .</Desc>
        </Skill>
        <Skill id="wf14" name="Overpower" ap="3" cd="5" type="phys" mult="150" origin="Arma" attr="Dinâmico" canCombo="true">
            <Desc>Source: O Abalo destruidor massivo que evapora blindagem adversária completa SE o invocador contar com a própria armor física sobressalente impune superior na métrica nua do combate absoluto de números puros sem cálculos ou apelações mentirosas.</Desc>
        </Skill>
        <Skill id="wf15" name="Challenge" ap="0" cd="5" type="buff" mult="0" origin="Arma" attr="Dinâmico" canCombo="false">
            <Desc>O desígnio heroico isolado 1x1 da arena aberta chamando num ultimato letal passivo os gladiadores opostos na cova. Ganho de estatísticas se ganhar no prazo de ampulhetas rasas curtas, Morte e covardia com punimentos se apanhar nas cordas suando da luta atrelada limpara os chãos caídos . </Desc>
        </Skill>
    </School>

    <School name="Scoundrel">
        <Skill id="sc1" name="Adrenaline" ap="0" cd="4" type="buff" mult="0" origin="Arma" canCombo="false">
            <Desc>Técnica suprema temporal: Empréstimo fisiológico brutal dos tendões de aço fornecendo os suados +2 PONTOS de Ações de forma totalmente avulsa instantaneamente com cobrança póstuma no turno seguinte.</Desc>
        </Skill>
        <Skill id="sc2" name="Backlash" ap="1" cd="3" type="phys" mult="85" origin="Arma" attr="Finesse" canCombo="true">
            <Desc>O contorcionista mortal do punhal curto estourando costas opostas e cravando com ctz suprema uma Critical Strike (Base de Adagas puras) pelo posicionamento estrito dos assassinatos noturnos sombrios cegos inigualável.</Desc>
        </Skill>
        <Skill id="sc3" name="Chloroform" ap="1" cd="3" type="marmor_dmg" mult="50" origin="Magia" attr="Finesse" canCombo="false">
            <Desc>A tóxina exalada em adegas do roubo furtiva. Foca pura e massivamente apenas na Armadura Arcana Defensora pondo a domir quem fica nú frente à química severa rústica. (Calcula usando Finesse pura e não int para destruir cífricos massivos).</Desc>
        </Skill>
        <Skill id="sc4" name="Throwing Knife" ap="2" cd="4" type="phys" mult="85" origin="Arma" attr="Finesse" canCombo="true">
            <Desc>Atira punhais afiados ao vento. Valida a passiva suprema furtiva do "Backstab Crítico Certo" mesmo se a 10 palmos de distância das cinturas largas mortas em fuga amedrontada.</Desc>
        </Skill>
        <Skill id="sc5" name="Cloak and Dagger" ap="1" cd="4" type="buff" mult="0" origin="Arma" canCombo="false">
            <Desc>Mergulha as sombras e desaparece evaporado das neblinas ressurgido na cumeeira oposta do galpão de guerra, tudo sem ser desmascarado nas poças limpas da camuflagem cega atual de caçador.</Desc>
        </Skill>
        <Skill id="sc6" name="Corrupted Blade" ap="3" cd="4" type="phys" mult="115" origin="Arma" attr="Finesse" canCombo="true">
            <Desc>Punhal rasgando entranhas infecto de doenças purulentas desfalecendo o fígado alheio em Sangramentos crônicos, e fechando a vida imunda na punição curativa por putrefação necrótica avulsa.</Desc>
        </Skill>
        <Skill id="sc7" name="Rupture Tendons" ap="2" cd="5" type="phys" mult="100" origin="Arma" attr="Finesse" canCombo="true">
            <Desc>Machadada/Punhalada estrita no tornozelo e meniscos das presas. O multiplicador inicial base descarrega puro dano físico primário severo (100%), induzido o estado punitivo passivo agressor a cada centimentro movido por medo fugitivo de morte brutal lenta ou suicídio.</Desc>
        </Skill>
        <Skill id="sc8" name="Sawtooth Knife" ap="2" cd="4" type="pierce" mult="100" origin="Arma" attr="Finesse" canCombo="true">
            <Desc>O Serrote de abate porcino. Ignora as mais grossas couraças metálicas maciças cravando em Dano de Sangramento Perfurante o 100% limpo roubado cru do balanço fisiológico interno vital dos batimentos.</Desc>
        </Skill>
        <Skill id="sc9" name="Sleeping Arms" ap="2" cd="3" type="phys" mult="100" origin="Arma" attr="Finesse" canCombo="true">
            <Desc>Pancada contusa nos ombros torcendo os nervos distais a bloqueando de fato imediato a lâmina contrária, a besta ou as varinhas arcanas atreladas do oponente impiedoso numa atrofia.</Desc>
        </Skill>
        <Skill id="sc10" name="Terrifying Cruelty" ap="3" cd="4" type="phys" mult="110" origin="Arma" attr="Finesse" canCombo="true">
            <Desc>Tortura macabra expurgada. Causa 110% de fatiada e impõe terror letal (Fear) imobilizante além de um rio de sangue derramado nas veias cegas cruas espalhadas.</Desc>
        </Skill>
        <Skill id="sc11" name="Daggers Drawn" ap="4" cd="5" type="phys" mult="250" origin="Arma" attr="Finesse" canCombo="true">
            <Desc>A carnificina Source avassaladora de 5 golpes cortantes rápidos que flutuam ao redor da fumaça desfigurando a vítima impiedosamente e letalmente por base massiva do 250% agregados.</Desc>
        </Skill>
        <Skill id="sc12" name="Mortal Blow" ap="2" cd="5" type="phys" mult="140" origin="Arma" attr="Finesse" canCombo="true">
            <Desc>Lendária furtividade oculta suprema: Source divina na calada. Multiplicador Crú é 140%, todavia, a engine do Divinity dobra brutalmente todo o expurgo de dano final se atirado durante status de Invisibilidade ou desfiguração física pre-arrumada pela morte da armadura .</Desc>
        </Skill>
        <Skill id="sc13" name="Gag Order" ap="2" cd="3" type="marmor_dmg" mult="100" origin="Arma" attr="Finesse" canCombo="true">
            <Desc>Golpe impiedoso cravado aos pulmões ou cordas vocais, calando por Silêncio puro. Escala a absorção maciça da magia (Armadura Mágica apenas) usando as suas lâminas de punho .</Desc>
        </Skill>
        <Skill id="sc14" name="Wind-Up Toy" ap="2" cd="6" type="buff" mult="0" origin="Arma" canCombo="false">
            <Desc>Brinquedo do assassinho mecânico ambulante carregador primário passivo furtivo. Estoura sem escalas em furações das máquinas explodidas suicidas bombas no centro blindado agrupado do grupo avariado sujo.</Desc>
        </Skill>
        <Skill id="sc15" name="Fan of Knives" ap="3" cd="4" type="phys" mult="125" origin="Arma" attr="Finesse" canCombo="true">
            <Desc>Habilidade Espacial circular em leque absoluto. Centenas de Adagas lançadas numa rotação em 360% Source voando como tempestades perfurando todas carnes cegas amontoadas massivamente.</Desc>
        </Skill>
    </School>

    <School name="Polymorph">
        <Skill id="po1" name="Tentacle Lash" ap="2" cd="3" type="phys" mult="145" origin="Poly" attr="Força" canCombo="true">
            <Desc>Mutação impura e divina trocando o braço frouxo pelo Tentáculo quebra-ossos atador que anula uso das armas de choque massivo na distância escalonado em FORÇA de lutadores híbridos cegos amordaçadores na cara .</Desc>
        </Skill>
        <Skill id="po2" name="Bull Horns" ap="1" cd="4" type="buff" mult="0" origin="Arma" attr="Dinâmico" canCombo="false">
            <Desc>Os Cifres purulentos minotáuricos saem esparramados concedendo imunidades a sangue escorregadio e a perícia massiva secreta (Bull Rush).</Desc>
            <Subskills>
                <Skill id="po2_sub1" name="Bull Rush" ap="2" type="phys" mult="80" origin="Arma" attr="Dinâmico">
                    <Desc>Conjurado sem limite. Avança num cone colhendo cabeças sangrentas (Bleeding) baseadas no Dano real atrelado na lâmina ou taco imundo que estais a agarrar massivamente.</Desc>
                </Skill>
            </Subskills>
        </Skill>
        <Skill id="po3" name="Chameleon Cloak" ap="1" cd="6" type="buff" mult="0" origin="Poly" canCombo="false">
            <Desc>As escamas imundas e molhadas absolutas da escuridão disfarçando em textura limpa no vácuo evaporado em Invisiblidade estrita para sumiços limpos dos assassinos .</Desc>
        </Skill>
        <Skill id="po4" name="Chicken Claw" ap="2" cd="6" type="buff" mult="0" origin="Poly" canCombo="false">
            <Desc>Desfigura e amaldiçoa alvos limpos sem Armor Física reduzindo deuses supremos celestiais puros de Rivellon em Pintinhos medrosos ineficazes bicando as pedras sem castar Source ou fugir nas cordas desfiguradas .</Desc>
        </Skill>
        <Skill id="po5" name="Heart of Steel" ap="2" cd="5" type="parmor" mult="25" origin="Magia" canCombo="false">
            <Desc>Veste de ferro regenerativo das vísceras mecânicas batendo passivamente ganhando baralhos absolutos de Armadura Física nos 4 turnos da perdição metálica de blindagem impenetrável grossa limpa. </Desc>
        </Skill>
        <Skill id="po6" name="Spread Your Wings" ap="1" cd="4" type="buff" mult="0" origin="Poly" canCombo="false">
            <Desc>Mutação sagrada das penas abertas colossais gerando o levante dos deuses do chão ignorando poças, fogo enxofre e concedendo Vôo livre cego dos cumes dos montes avariados.</Desc>
            <Subskills>
                <Skill id="po6_sub1" name="Flight" ap="1" type="buff" mult="0" origin="Poly">
                    <Desc>Salto da gravidade transmutada que voa linear e limpo pelo galpão desativando penalidades ladeiras abismais custando 1 mísero de Ponto.</Desc>
                </Skill>
            </Subskills>
        </Skill>
        <Skill id="po7" name="Spider Legs" ap="1" cd="4" type="buff" mult="0" origin="Poly" canCombo="false">
            <Desc>Enraíza teias e anda impune na rasteira mortal das pernas maciçadas da besta aranha gerando a imunidade natural nativa ao terreno imundo gerado.</Desc>
            <Subskills>
                <Skill id="po7_sub1" name="Spin Web" ap="1" type="buff" mult="0" origin="Poly">
                    <Desc>Cospe grossa rede nas extremidades em bolha pegajosa inquebrável aprisionando oponentes cravados limpos no casulo Enraizado sem salvamento mágico cífico desoladores e cego no buraco das teias atadas na sujeira .</Desc>
                </Skill>
            </Subskills>
        </Skill>
        <Skill id="po8" name="Medusa Head" ap="2" cd="5" type="buff" mult="0" origin="Poly" attr="Força" canCombo="false">
            <Desc>Ergue escamas rastejantes cobradoras do pó divino dos gorgos da perdição imobilizando (Petrificação da Aura) qualquer idiota mortal que deslumbre o semblante desprotegido fisicamente das armaduras das cobras massivas ao redor.</Desc>
            <Subskills>
                <Skill id="po8_sub1" name="Petrifying Visage" ap="2" type="dmg" mult="100" origin="Poly" attr="Força">
                    <Desc>Ativa o choro estrondoso da Terra que explode numa nuvem esmagadora rochosa em escala de FORÇA (Terra / Dano) petrificando maciços blocos.</Desc>
                </Skill>
            </Subskills>
        </Skill>
        <Skill id="po9" name="Flay Skin" ap="2" cd="3" type="marmor_dmg" mult="100" origin="Poly" attr="Força" canCombo="true">
            <Desc>Cravada brutal forçando os resistências mágicas pra baixos absolutos (-50% a Tudo), destruindo magias e esparramando na terra e escamas sangrentas .</Desc>
        </Skill>
        <Skill id="po10" name="Skin Graft" ap="0" cd="0" type="buff" mult="0" origin="Poly" canCombo="false">
            <Desc>Feitiço Source das peles rasgadas queimando-as para resetar absolutamente e divinamente TOTAL E QUALQUER resfriamentos das malhas (Zero todo o Cooldown da build limpa em combate sagrado ressuscitativo) - Cura Status impuros rasgados .</Desc>
        </Skill>
        <Skill id="po11" name="Apotheosis" ap="2" cd="5" type="buff" mult="0" origin="Poly" canCombo="false">
            <Desc>A Divindade Mestre Source cega em combate divino: Todo o custo brutal dos pergaminhos Source cífricos desoladores caem puramente para 0. Buff de todos atributos essenciais em estatística maciça massiva em turnos impediantes divinos encarnados na fúria de Deuses cegos avassaladores e matadores.</Desc>
        </Skill>
    
<Skill id="new_po8" name="Terrain Transmutation" ap="1" cd="0" type="phys" mult="100" origin="Magia" canCombo="true">
            <Desc>-</Desc>
        </Skill>
<Skill id="new_po10" name="Summon Oily Blob" ap="1" cd="0" type="phys" mult="100" origin="Magia" canCombo="true">
            <Desc>3m Explode Radius</Desc>
        </Skill>
<Skill id="new_po11" name="Flaming Skin" ap="2" cd="0" type="phys" mult="100" origin="Magia" canCombo="true">
            <Desc>Set Flaming Skin for 2 turn(s).</Desc>
        </Skill>
<Skill id="new_po12" name="Icy Skin" ap="2" cd="0" type="phys" mult="100" origin="Magia" canCombo="true">
            <Desc>Set Icy Skin for 2 turn(s).</Desc>
        </Skill>
<Skill id="new_po13" name="Poisonous Skin" ap="2" cd="0" type="phys" mult="100" origin="Magia" canCombo="true">
            <Desc>Set Poisonous Skin for 2 turn(s).</Desc>
        </Skill>
<Skill id="new_po14" name="Jellyfish Skin" ap="2" cd="0" type="phys" mult="100" origin="Magia" canCombo="true">
            <Desc>Set Jellyfish Skin for 2 turn(s).</Desc>
        </Skill>
<Skill id="new_po16" name="Forced Exchange" ap="2" cd="0" type="phys" mult="100" origin="Magia" canCombo="true">
            <Desc>Exchange vitality percentages with target character</Desc>
        </Skill>
<Skill id="new_po17" name="Equalise" ap="1" cd="0" type="phys" mult="100" origin="Magia" canCombo="true">
            <Desc>-</Desc>
        </Skill>
    </School>

    <School name="Summoning">
        <Skill id="su1" name="Conjure Incarnate" ap="2" cd="6" type="phys" mult="35" origin="Summon" canCombo="true">
            <Desc>A encarnação primária basilar do Demônio conjurado no vácuo dependente inteiramente do nível de Invocador sem usar cajado dos mestres, recebendo o balanço puro num piscar de sangue, água escumaço de fogo e terra ou nuvem de eletricidade avariado e sombria na encarnadura.</Desc>
            <Subskills>
                <Skill id="su1_sub1" name="Melee Attack" ap="2" type="phys" mult="35" origin="Summon">
                    <Desc>Golpe crua com soco bruto do lacaio demoníaco ineficaz dependente ou independente na poça elemental conjurada massivamente .</Desc>
                </Skill>
                <Skill id="su1_sub2" name="Provoke (Buff Oculto)" ap="0" type="buff" mult="0" origin="Summon">
                    <Desc>Capacidade intrínseca de chamar atenção caindo ou puxando magias de fúria no próprio monstrengo .</Desc>
                </Skill>
            </Subskills>
        </Skill>
        <Skill id="su2" name="Elemental Totem" ap="2" cd="2" type="dmg" mult="25" origin="Summon" canCombo="true">
            <Desc>Construidor basilar disparador canônico automatizado de setas nas bacias cegas desfiguradas num estrondo elementar avariável de terra fogo ar e águas.</Desc>
        </Skill>
        <!-- Simulacao de outros summons base omitidos por espaço mas a premissa ta toda codificada na engine xml das summons -->
        <Skill id="su16" name="Incarnate Champion" ap="2" cd="6" type="phys" mult="70" origin="Summon" canCombo="true">
            <Desc>O colosso debloqueado via Level 10 natural de Summon absoluto. A besta gigantesca cega que racha a poça com multiplicador da escala superior .</Desc>
            <Subskills>
                <Skill id="su16_sub1" name="Soco Básico Colosso" ap="2" type="phys" mult="70" origin="Summon">
                    <Desc>Soco divino desestabilizador.</Desc>
                </Skill>
                <Skill id="su16_sub2" name="Whirlwind (Se Power)" ap="2" type="phys" mult="100" origin="Summon">
                    <Desc>Técnica da infusão das trevas bélica ensandecida que abate circularmente no machado giratório maciço do monstrão colossal inestimável.</Desc>
                </Skill>
                <Skill id="su16_sub3" name="Ranged Hit (Se Farsight)" ap="2" type="phys" mult="70" origin="Summon">
                    <Desc>Atira magia de poço longo a longa distancia do lixo bélico incólume do invocador sombrio de gelo .</Desc>
                </Skill>
            </Subskills>
        </Skill>
    
<Skill id="new_su2" name="Cannibalise" ap="1" cd="0" type="phys" mult="100" origin="Magia" canCombo="true">
            <Desc>-</Desc>
        </Skill>
<Skill id="new_su3" name="Dimensional Bolt" ap="1" cd="0" type="phys" mult="100" origin="Magia" canCombo="true">
            <Desc>-</Desc>
        </Skill>
<Skill id="new_su5" name="Farsight Infusion" ap="1" cd="0" type="phys" mult="100" origin="Magia" canCombo="true">
            <Desc>Set Farsight Infusion.</Desc>
        </Skill>
<Skill id="new_su6" name="Electric Infusion" ap="1" cd="0" type="phys" mult="100" origin="Magia" canCombo="true">
            <Desc>-</Desc>
        </Skill>
<Skill id="new_su7" name="Fire Infusion" ap="1" cd="0" type="phys" mult="100" origin="Magia" canCombo="true">
            <Desc>-</Desc>
        </Skill>
<Skill id="new_su8" name="Poison Infusion" ap="1" cd="0" type="phys" mult="100" origin="Magia" canCombo="true">
            <Desc>-</Desc>
        </Skill>
<Skill id="new_su9" name="Water Infusion" ap="1" cd="0" type="phys" mult="100" origin="Magia" canCombo="true">
            <Desc>-</Desc>
        </Skill>
<Skill id="new_su10" name="Blood Infusion" ap="1" cd="0" type="phys" mult="100" origin="Magia" canCombo="true">
            <Desc>-</Desc>
        </Skill>
<Skill id="new_su11" name="Oil Infusion" ap="1" cd="0" type="phys" mult="100" origin="Magia" canCombo="true">
            <Desc>-</Desc>
        </Skill>
<Skill id="new_su12" name="Acid Infusion" ap="2" cd="0" type="phys" mult="100" origin="Magia" canCombo="true">
            <Desc>-</Desc>
        </Skill>
<Skill id="new_su13" name="Cursed Electric Infusion" ap="2" cd="0" type="phys" mult="100" origin="Magia" canCombo="true">
            <Desc>-</Desc>
        </Skill>
<Skill id="new_su14" name="Ice Infusion" ap="2" cd="0" type="phys" mult="100" origin="Magia" canCombo="true">
            <Desc>-</Desc>
        </Skill>
<Skill id="new_su15" name="Necrofire Infusion" ap="2" cd="0" type="phys" mult="100" origin="Magia" canCombo="true">
            <Desc>-</Desc>
        </Skill>
<Skill id="new_su16" name="Power Infusion" ap="1" cd="0" type="phys" mult="100" origin="Magia" canCombo="true">
            <Desc>Set Power Infusion.</Desc>
        </Skill>
<Skill id="new_su17" name="Shadow Infusion" ap="1" cd="0" type="phys" mult="100" origin="Magia" canCombo="true">
            <Desc>Set Shadow Infusion.</Desc>
        </Skill>
<Skill id="new_su18" name="Rallying Cry" ap="1" cd="0" type="phys" mult="100" origin="Magia" canCombo="true">
            <Desc>Restore [X] Vitality. Restore [Y] Magic Armour</Desc>
        </Skill>
<Skill id="new_su19" name="Dominate Mind" ap="1" cd="0" type="phys" mult="100" origin="Magia" canCombo="true">
            <Desc>Set Charmed for 2 turn(s).</Desc>
        </Skill>
<Skill id="new_su20" name="Soul Mate" ap="1" cd="0" type="phys" mult="100" origin="Magia" canCombo="true">
            <Desc>Set Soul Mate for 3 turn(s).</Desc>
        </Skill>
<Skill id="new_su21" name="Supercharger" ap="1" cd="0" type="phys" mult="100" origin="Magia" canCombo="true">
            <Desc>Set Supercharged for 2 turn(s).</Desc>
        </Skill>
<Skill id="new_su22" name="Summon Cat Familiar" ap="1" cd="0" type="phys" mult="100" origin="Magia" canCombo="true">
            <Desc>The stats of the summons will depend on caster level and Summoning ability. Duration 10 turn(s)</Desc>
        </Skill>
<Skill id="new_su23" name="Summon Condor" ap="1" cd="0" type="phys" mult="100" origin="Magia" canCombo="true">
            <Desc>The stats of the summons will depend on caster level and Summoning ability.</Desc>
        </Skill>
<Skill id="new_su24" name="Warp Infusion" ap="1" cd="0" type="phys" mult="100" origin="Magia" canCombo="true">
            <Desc>Set Warp Infusion.</Desc>
        </Skill>
<Skill id="new_su25" name="Door to Eternity" ap="2" cd="0" type="phys" mult="100" origin="Magia" canCombo="true">
            <Desc>Set Persisting for 2 turn(s).</Desc>
        </Skill>
<Skill id="new_su26" name="Summon Dragonling" ap="2" cd="0" type="phys" mult="100" origin="Magia" canCombo="true">
            <Desc>The stats of the summons will depend on caster level and Summoning ability.</Desc>
        </Skill>
<Skill id="new_su27" name="Summon Inner Demon" ap="2" cd="0" type="phys" mult="100" origin="Magia" canCombo="true">
            <Desc>Set Inner Demon for 3 turn(s).</Desc>
        </Skill>
<Skill id="new_su28" name="Planar Gateway" ap="2" cd="0" type="phys" mult="100" origin="Magia" canCombo="true">
            <Desc>Duration 10 Turn(s)</Desc>
        </Skill>
<Skill id="new_su29" name="Ethereal Storm" ap="3" cd="0" type="phys" mult="100" origin="Magia" canCombo="true">
            <Desc>Duration 2 Turn (s)</Desc>
        </Skill>
    </School>

    <School name="Pyrokinetic">
        <Skill id="py1" name="Searing Daggers" ap="2" cd="3" type="dmg" mult="50" origin="Magia" esc="Fogo" canCombo="true">
            <Desc>Três adagas flamejantes puras em três saltos independentes ou empapados num corcunda único de sangue fervendo poças amaldiçoadas e somatórias no cálculo geral base per hit de cinquentos da poeira mágica do lorde .</Desc>
        </Skill>
        <Skill id="py2" name="Fireball" ap="2" cd="4" type="dmg" mult="150" origin="Magia" esc="Fogo" canCombo="true">
            <Desc>Balanço redondo nuclear e clássico massivo do fogo engasgado letal amontoando e destruindo lixo terrestre dos amontoados cegos amedrontados das cegas mortíferas desastrosas desfiguráveis atreladas numa grande explosão de base.</Desc>
        </Skill>
        <Skill id="py3" name="Spontaneous Combustion" ap="2" cd="3" type="dmg" mult="115" origin="Magia" esc="Fogo" canCombo="true">
            <Desc>Punição brutal: Desaparece com chamas residuais em um alvo mas rasga sua alma interna numa combustão imediata perfurante na fumaça letal evaporada nas veias roçadas cegas . </Desc>
        </Skill>
        <Skill id="py4" name="Laser Ray" ap="3" cd="3" type="dmg" mult="120" origin="Magia" esc="Fogo" canCombo="true">
            <Desc>Cortador absoluto longitudinal do feixe quente. Frita perfeitamente barris de combustível inflamáveis encadeando numa vala profana em linha reta mortífera de magmáticos céticos deslumbrados.</Desc>
        </Skill>
        <Skill id="py5" name="Supernova" ap="3" cd="4" type="dmg" mult="150" origin="Magia" esc="Fogo" canCombo="true">
            <Desc>Bomba humana que emite pavor de sol destrutível em todas latitudes radiais da bola magmática (Queima as barbas puras do mago caso castada de armaduras fracas).</Desc>
        </Skill>
        <Skill id="py6" name="Epidemic of Fire" ap="3" cd="6" type="dmg" mult="135" origin="Magia" esc="Fogo" canCombo="true">
            <Desc>Corrente necroSource inigualável amaldiçoado saltitante espalhando Fogo que evapora magias purificantes do terreno de lodo imundo ralo sombrio e purificador curativo.</Desc>
        </Skill>
        <Skill id="py7" name="Meteor Shower" ap="4" cd="6" type="dmg" mult="40" origin="Magia" esc="Fogo" canCombo="true">
            <Desc>As dez toneladas de astereoides quebrando o campo inteiro em 25 impactos (40% de multiplicador apenas num singelo acerto da pedra. Junte inimigos graudos gordinhos e engula multiplicador que quebra a calculcadora e o motor da divindade das planilhas).</Desc>
        </Skill>
    
<Skill id="new_py1" name="Haste" ap="1" cd="0" type="phys" mult="100" origin="Magia" canCombo="true">
            <Desc>Set Hasted for 2 turn(s).</Desc>
        </Skill>
<Skill id="new_py2" name="Ignition" ap="1" cd="0" type="phys" mult="100" origin="Magia" canCombo="true">
            <Desc>Set Burning for 2 turn(s).</Desc>
        </Skill>
<Skill id="new_py3" name="Peace of Mind" ap="1" cd="0" type="phys" mult="100" origin="Magia" canCombo="true">
            <Desc>Set Clear-Minded for 3 turn(s).</Desc>
        </Skill>
<Skill id="new_py5" name="Bleed Fire" ap="1" cd="0" type="phys" mult="100" origin="Magia" canCombo="true">
            <Desc>Set Bleed Fire for 3 turn(s).</Desc>
        </Skill>
<Skill id="new_py6" name="Corpse Explosion" ap="1" cd="0" type="phys" mult="100" origin="Magia" canCombo="true">
            <Desc>Blows up your target.</Desc>
        </Skill>
<Skill id="new_py7" name="Sabotage" ap="1" cd="0" type="phys" mult="100" origin="Magia" canCombo="true">
            <Desc>Explodes 1 random Arrow(s) or Grenade(s) on target&apos;s inventory.</Desc>
        </Skill>
<Skill id="new_py8" name="Sparking Swings" ap="1" cd="0" type="phys" mult="100" origin="Magia" canCombo="true">
            <Desc>Set Sparkstriker for 3 turn(s).</Desc>
        </Skill>
<Skill id="new_py9" name="Throw Explosive Trap" ap="1" cd="0" type="phys" mult="100" origin="Magia" canCombo="true">
            <Desc>3m Explode Radius</Desc>
        </Skill>
<Skill id="new_py12" name="Fire Whip" ap="1" cd="0" type="phys" mult="100" origin="Magia" canCombo="true">
            <Desc>Set Burning for 1 Turn(s). Set Blinded for 1 Turn(s)</Desc>
        </Skill>
<Skill id="new_py15" name="Flaming Tongues" ap="1" cd="0" type="phys" mult="100" origin="Magia" canCombo="true">
            <Desc>Set Flaming Tongues for 3 turn(s).</Desc>
        </Skill>
<Skill id="new_py16" name="Mass Corpse Explosion" ap="2" cd="0" type="phys" mult="100" origin="Magia" canCombo="true">
            <Desc>Blows up your target.</Desc>
        </Skill>
<Skill id="new_py17" name="Master of Sparks" ap="2" cd="0" type="phys" mult="100" origin="Magia" canCombo="true">
            <Desc>Set Sparkmaster for 2 turn(s). 3m Explode Radius</Desc>
        </Skill>
<Skill id="new_py18" name="Mass Sabotage" ap="2" cd="0" type="phys" mult="100" origin="Magia" canCombo="true">
            <Desc>Explodes 2 random Arrow(s) or Grenade(s) on target&apos;s inventory.</Desc>
        </Skill>
<Skill id="new_py19" name="Deploy Mass Traps" ap="2" cd="0" type="phys" mult="100" origin="Magia" canCombo="true">
            <Desc>3m Explode Radius</Desc>
        </Skill>
<Skill id="new_py20" name="Summon Fire Slug" ap="2" cd="0" type="phys" mult="100" origin="Magia" canCombo="true">
            <Desc>The stats of the summon will depend on the caster&apos;s level and summoning ability. Duration 5 turns.</Desc>
        </Skill>
<Skill id="new_py21" name="Flaming Crescendo" ap="1" cd="0" type="phys" mult="100" origin="Magia" canCombo="true">
            <Desc>Set Flaming Crescendo for 1 turn(s). 3m Explode Radius</Desc>
        </Skill>
<Skill id="new_py23" name="Firebrand" ap="1" cd="0" type="phys" mult="100" origin="Magia" canCombo="true">
            <Desc>8m Radius</Desc>
        </Skill>
    </School>

    <School name="Geomancer">
        <Skill id="ge1" name="Fossil Strike" ap="2" cd="3" type="dmg" mult="85" origin="Magia" esc="Terra" canCombo="true">
            <Desc>Atinge pedaços impuros atirando de cima lamas grudadas e viscosas diminuindo os movimetnos do cego.</Desc>
        </Skill>
        <Skill id="ge2" name="Poison Dart" ap="2" cd="4" type="dmg" mult="100" origin="Magia" esc="Veneno" canCombo="true">
            <Desc>Ferroada do esgoto tóxica estrita limpa varando carcaças orgânicas pondo um sangramento imundo avassalador que cura defuntos mortos zumbis aliados ou inimigo esqueléticos sombrios de necrópole cega afiada estilhaçados em dores e abalos das toxinas na artéria estendida grossamente pelas tripas abertas.</Desc>
        </Skill>
        <Skill id="ge3" name="Impalement" ap="2" cd="4" type="dmg" mult="110" origin="Magia" esc="Terra" canCombo="true">
            <Desc>Penetração das setas cegas do subsolo roxoso em estacas pontudas cortandos as calças enxeridas rasgando joelhos da tropa de marcha armada numa colheitadeira descarada no monte sagrado.</Desc>
        </Skill>
        <Skill id="ge4" name="Worm Tremor" ap="3" cd="4" type="dmg" mult="100" origin="Magia" esc="Terra" canCombo="true">
            <Desc>Larvas cravadas abocanham botinas atrelando passiva irrefutavel enraizada da fúria das lamas esmagadas em venenos cegos se combinadas e cravadas . </Desc>
        </Skill>
        <Skill id="ge5" name="Earthquake" ap="3" cd="5" type="dmg" mult="100" origin="Magia" esc="Terra" canCombo="true">
            <Desc>Tremores da fornalha tectônica: Derruba lodos de terra e knockdown numa milhagem brutal das costas esmagadas cegando e entornando de lixos inflamáveis por óleo no teto esparramado desolado sujo rústico.</Desc>
        </Skill>
        <Skill id="ge6" name="Poison Wave" ap="2" cd="4" type="dmg" mult="130" origin="Magia" esc="Veneno" canCombo="true">
            <Desc>Ejeta gases vulçanicos peçonhentos verdes numa roda maciça garantindo bolha protetora do mago e corroendo toda carne cega não podre nos chãos infectados de pálpebras desoladas caçadas impunes.</Desc>
        </Skill>
        <Skill id="ge7" name="Pyroclastic Eruption" ap="3" cd="5" type="dmg" mult="300" origin="Magia" esc="Terra" canCombo="true">
            <Desc>Meteórito cego individual Source impuro: Destrinchá-se numa cospida colossal da tela cravando per pedra um dano tão ridiculo que quando amontoadas perto as explosões atreladas da roxa esmagam e batem empilhando somadores colossais matando lendas divinas absolutament num toque divino insano do multiplicador base 300 explodido .</Desc>
        </Skill>
    
<Skill id="new_ge1" name="Contamination" ap="1" cd="0" type="phys" mult="100" origin="Magia" canCombo="true">
            <Desc>Set Poisoned for 2 turn(s). 2m Explode radius</Desc>
        </Skill>
<Skill id="new_ge2" name="Fortify" ap="1" cd="0" type="phys" mult="100" origin="Magia" canCombo="true">
            <Desc>Set Fortified for 3 turn(s).</Desc>
        </Skill>
<Skill id="new_ge5" name="Corrosive Touch" ap="1" cd="0" type="phys" mult="100" origin="Magia" canCombo="true">
            <Desc>Set Acid for 2 turn(s).</Desc>
        </Skill>
<Skill id="new_ge6" name="Oily Carapace" ap="1" cd="0" type="phys" mult="100" origin="Magia" canCombo="true">
            <Desc>Restore up to [X] Physical Armour, depending on relevant surface area</Desc>
        </Skill>
<Skill id="new_ge7" name="Turn to Oil" ap="1" cd="0" type="phys" mult="100" origin="Magia" canCombo="true">
            <Desc>-</Desc>
        </Skill>
<Skill id="new_ge8" name="Venom Coating" ap="1" cd="0" type="phys" mult="100" origin="Magia" canCombo="true">
            <Desc>Set Venom Coating for 2 turn(s).</Desc>
        </Skill>
<Skill id="new_ge9" name="Throw Dust" ap="1" cd="0" type="phys" mult="100" origin="Magia" canCombo="true">
            <Desc>Set Blinded for 1 turn(s). 2m Explode Radius</Desc>
        </Skill>
<Skill id="new_ge10" name="Mend Metal" ap="1" cd="0" type="phys" mult="100" origin="Magia" canCombo="true">
            <Desc>Restore [X] Physical Armour for 3 turn(s).</Desc>
        </Skill>
<Skill id="new_ge11" name="Reactive Armour" ap="1" cd="0" type="phys" mult="100" origin="Magia" canCombo="true">
            <Desc>Damage is based on your current Physical Armour.</Desc>
        </Skill>
<Skill id="new_ge16" name="Corrosive Spray" ap="2" cd="0" type="phys" mult="100" origin="Magia" canCombo="true">
            <Desc>Set Acid for 2 turn(s). Set Atrophy for 1 turn(s).</Desc>
        </Skill>
<Skill id="new_ge17" name="Mass Oily Carapace" ap="2" cd="0" type="phys" mult="100" origin="Magia" canCombo="true">
            <Desc>Restore up to [x] Physical Armour, depending on relevant surface area.</Desc>
        </Skill>
<Skill id="new_ge18" name="Venomous Aura" ap="2" cd="0" type="phys" mult="100" origin="Magia" canCombo="true">
            <Desc>Set Venomous Aura for 2 turn(s).</Desc>
        </Skill>
<Skill id="new_ge19" name="Dust Blast" ap="2" cd="0" type="phys" mult="100" origin="Magia" canCombo="true">
            <Desc>Set Blinded for 2 turn(s). 2m Explode Radius</Desc>
        </Skill>
<Skill id="new_ge20" name="Summon Artillery Plant" ap="2" cd="0" type="phys" mult="100" origin="Magia" canCombo="true">
            <Desc>Duration 5 turns.</Desc>
        </Skill>
<Skill id="new_ge21" name="Siphon Poison" ap="1" cd="0" type="phys" mult="100" origin="Magia" canCombo="true">
            <Desc>Set Siphon Poison for 2 turn(s).</Desc>
        </Skill>
<Skill id="new_ge22" name="Living Wall" ap="1" cd="0" type="phys" mult="100" origin="Magia" canCombo="true">
            <Desc>Duration 3 Turns</Desc>
        </Skill>
<Skill id="new_ge23" name="Acid Spores" ap="2" cd="0" type="phys" mult="100" origin="Magia" canCombo="true">
            <Desc>Set Poisoned for 3 turn(s).</Desc>
        </Skill>
    </School>

    <School name="Aerotheurge">
        <Skill id="ae1" name="Electric Discharge" ap="2" cd="3" type="dmg" mult="100" origin="Magia" esc="Ar" canCombo="true">
            <Desc>Conduto de Volts puríssimos estalados impuras chamas da magia aérea avassalador que stuna perfeitamente os pálidos das chuvas de agua enxarcados atados na pele em ferimentos vivos elétricos limpos. </Desc>
        </Skill>
        <Skill id="ae2" name="Chain Lightning" ap="3" cd="5" type="dmg" mult="150" origin="Magia" esc="Ar" canCombo="true">
            <Desc>O salto inigualável das cobras de Raio (Source). Pula em 8 defuntos das escamas de carcaças amáveis destrinchadas em águas desoladas matadoras dos oponentes em cadeia de conduto suprema cravada dos condutores metálicos absolutos das lanças espadas varinhas engatilhadas de poças no solo sujo molhado estrito e raso .</Desc>
        </Skill>
    
<Skill id="new_ae1" name="Favourable Wind" ap="1" cd="0" type="phys" mult="100" origin="Magia" canCombo="true">
            <Desc>Sets Favourable Winds Aura for 4 turn(s).</Desc>
        </Skill>
<Skill id="new_ae2" name="Blinding Radiance" ap="1" cd="0" type="phys" mult="100" origin="Magia" canCombo="true">
            <Desc>Sets Blinding Radiance for 1 turn(s)</Desc>
        </Skill>
<Skill id="new_ae4" name="Shocking Touch" ap="1" cd="0" type="phys" mult="100" origin="Magia" canCombo="true">
            <Desc>Sets Shocked for 2 turn(s)</Desc>
        </Skill>
<Skill id="new_ae5" name="Erratic Wisp" ap="1" cd="0" type="phys" mult="100" origin="Magia" canCombo="true">
            <Desc>Sets Erratic Wisp for 2 turn(s).</Desc>
        </Skill>
<Skill id="new_ae6" name="Breathing Bubble" ap="1" cd="0" type="phys" mult="100" origin="Magia" canCombo="true">
            <Desc>Sets Breathing Bubble for 5 turn(s).</Desc>
        </Skill>
<Skill id="new_ae7" name="Vacuum Touch" ap="1" cd="0" type="phys" mult="100" origin="Magia" canCombo="true">
            <Desc>Sets Suffocating for 1 turn(s). Sets Silenced for 1 turn(s).</Desc>
        </Skill>
<Skill id="new_ae8" name="Vaporize" ap="1" cd="0" type="phys" mult="100" origin="Magia" canCombo="true">
            <Desc>-</Desc>
        </Skill>
<Skill id="new_ae9" name="Smoke Cover" ap="1" cd="0" type="phys" mult="100" origin="Magia" canCombo="true">
            <Desc>-</Desc>
        </Skill>
<Skill id="new_ae10" name="Teleportation" ap="1" cd="0" type="phys" mult="100" origin="Magia" canCombo="true">
            <Desc>Damage is based on your level and receive bonus from Intelligence.</Desc>
        </Skill>
<Skill id="new_ae11" name="Dazing Bolt" ap="1" cd="0" type="phys" mult="100" origin="Magia" canCombo="true">
            <Desc>Sets Shocked for 1 turn(s). 3m Explode Radius</Desc>
        </Skill>
<Skill id="new_ae12" name="Nether Swap" ap="1" cd="0" type="phys" mult="100" origin="Magia" canCombo="true">
            <Desc>Sets Nether Swap for 1 turn(s).</Desc>
        </Skill>
<Skill id="new_ae13" name="Pressure Spike" ap="2" cd="0" type="phys" mult="100" origin="Magia" canCombo="true">
            <Desc>Damage is based on your level and Intelligence</Desc>
        </Skill>
<Skill id="new_ae14" name="Uncanny Evasion" ap="1" cd="0" type="phys" mult="100" origin="Magia" canCombo="true">
            <Desc>Sets Evading for 1 turn(s)</Desc>
        </Skill>
<Skill id="new_ae15" name="Apportation" ap="1" cd="0" type="phys" mult="100" origin="Magia" canCombo="true">
            <Desc>-</Desc>
        </Skill>
<Skill id="new_ae16" name="Vacuum Aura" ap="2" cd="0" type="phys" mult="100" origin="Magia" canCombo="true">
            <Desc>Sets Vacuum Aura for 3 turn(s).</Desc>
        </Skill>
<Skill id="new_ae17" name="Mass Breathing Bubbles" ap="2" cd="0" type="phys" mult="100" origin="Magia" canCombo="true">
            <Desc>Sets Mass Breathing Bubbles for 5 turn(s).</Desc>
        </Skill>
<Skill id="new_ae18" name="Evasive Aura" ap="2" cd="0" type="phys" mult="100" origin="Magia" canCombo="true">
            <Desc>Sets Evasive Aura for 1 turn(s).</Desc>
        </Skill>
<Skill id="new_ae19" name="Blessed Smoke Cloud" ap="2" cd="0" type="phys" mult="100" origin="Magia" canCombo="true">
            <Desc>-</Desc>
        </Skill>
<Skill id="new_ae21" name="Tornado" ap="1" cd="0" type="phys" mult="100" origin="Magia" canCombo="true">
            <Desc>-</Desc>
        </Skill>
<Skill id="new_ae22" name="Superconductor" ap="1" cd="0" type="phys" mult="100" origin="Magia" canCombo="true">
            <Desc>Sets Shocked for 1 turn(s) Damage is based on your level and receive bonus from Intelligence</Desc>
        </Skill>
<Skill id="new_ae23" name="Closed Circuit" ap="2" cd="0" type="phys" mult="100" origin="Magia" canCombo="true">
            <Desc>Sets Air Immunity for 1 turn(s). Sets Shocked for 2 turn(s)</Desc>
        </Skill>
<Skill id="new_ae24" name="Thunderstorm" ap="3" cd="0" type="phys" mult="100" origin="Magia" canCombo="true">
            <Desc>Duration 2 turns</Desc>
        </Skill>
    </School>

    <School name="Hydrosophist">
        <Skill id="hy1" name="Hail Strike" ap="3" cd="3" type="dmg" mult="55" origin="Magia" esc="Água" canCombo="true">
            <Desc>Cuspe dos glaciares do Polo divino em três balotes estritos. (O Multiplicador e cálculo de Combos listado refere-se a APENAS 1 dos três cravando o crânio).</Desc>
        </Skill>
        <Skill id="hy2" name="Winter Blast" ap="2" cd="3" type="dmg" mult="110" origin="Magia" esc="Água" canCombo="true">
            <Desc>Gelo cego do frio desolador da nevasca explodindo defesas passivas em crivos de atrofiar calos frios estripadores dos congelamentos de status inigualitário impessoal .</Desc>
        </Skill>
        <Skill id="hy3" name="Deep Freeze" ap="4" cd="6" type="dmg" mult="150" origin="Magia" esc="Água" canCombo="true">
            <Desc>Rasga o zero absoluto da tela cravando Source no ar engripando de poças atentas cegas esmagadas purificadas das dores em gelo petrificado desolado imenso . </Desc>
        </Skill>
    
<Skill id="new_hy1" name="Armour of Frost" ap="1" cd="0" type="phys" mult="100" origin="Magia" canCombo="true">
            <Desc>Set Magic Shell for 3 turn(s).</Desc>
        </Skill>
<Skill id="new_hy2" name="Rain" ap="1" cd="0" type="phys" mult="100" origin="Magia" canCombo="true">
            <Desc>Set Wet for 1 turn(s). 10m radius</Desc>
        </Skill>
<Skill id="new_hy3" name="Restoration" ap="1" cd="0" type="phys" mult="100" origin="Magia" canCombo="true">
            <Desc>Restore [X] Vitality for 2 turn(s).</Desc>
        </Skill>
<Skill id="new_hy5" name="Cryotherapy" ap="1" cd="0" type="phys" mult="100" origin="Magia" canCombo="true">
            <Desc>Restore up to [X] Magic Armour depending on relevant surface area.</Desc>
        </Skill>
<Skill id="new_hy6" name="Healing Tears" ap="1" cd="0" type="phys" mult="100" origin="Magia" canCombo="true">
            <Desc>Set Healing Tears for 3 Turn(s)</Desc>
        </Skill>
<Skill id="new_hy7" name="Vampiric Hunger" ap="1" cd="0" type="phys" mult="100" origin="Magia" canCombo="true">
            <Desc>Set Vampiric Hunger for 2 Turn(s)</Desc>
        </Skill>
<Skill id="new_hy8" name="Cleanse Wounds" ap="1" cd="0" type="phys" mult="100" origin="Magia" canCombo="true">
            <Desc>Restore [X] Vitality</Desc>
        </Skill>
<Skill id="new_hy9" name="Soothing Cold" ap="1" cd="0" type="phys" mult="100" origin="Magia" canCombo="true">
            <Desc>Restore [X] Magic Armour for 3 turn(s).</Desc>
        </Skill>
<Skill id="new_hy11" name="Ice Fan" ap="1" cd="0" type="phys" mult="100" origin="Magia" canCombo="true">
            <Desc>Set Chilled for 1 turn(s).</Desc>
        </Skill>
<Skill id="new_hy12" name="Global Cooling" ap="1" cd="0" type="phys" mult="100" origin="Magia" canCombo="true">
            <Desc>Set Chilled for 3 turn(s).</Desc>
        </Skill>
<Skill id="new_hy13" name="Cryogenic Stasis" ap="1" cd="0" type="phys" mult="100" origin="Magia" canCombo="true">
            <Desc>Set Permafrost for 1 Turn(s)</Desc>
        </Skill>
<Skill id="new_hy14" name="Healing Ritual" ap="1" cd="0" type="phys" mult="100" origin="Magia" canCombo="true">
            <Desc>Restore [X] Vitality</Desc>
        </Skill>
<Skill id="new_hy15" name="Mass Cleanse Wounds" ap="2" cd="0" type="phys" mult="100" origin="Magia" canCombo="true">
            <Desc>Restore [X] Vitality</Desc>
        </Skill>
<Skill id="new_hy16" name="Vampiric Hunger Aura" ap="2" cd="0" type="phys" mult="100" origin="Magia" canCombo="true">
            <Desc>Set Vampiric Hunger Aura for 2 Turn(s)</Desc>
        </Skill>
<Skill id="new_hy17" name="Mass Cryotherapy" ap="2" cd="0" type="phys" mult="100" origin="Magia" canCombo="true">
            <Desc>Restore up to [X] Magic Armour depending on relevant surface area.</Desc>
        </Skill>
<Skill id="new_hy19" name="Arcane Stitch" ap="2" cd="0" type="phys" mult="100" origin="Magia" canCombo="true">
            <Desc>Restore [X] Magic Armour</Desc>
        </Skill>
<Skill id="new_hy20" name="Steam Lance" ap="2" cd="0" type="phys" mult="100" origin="Magia" canCombo="true">
            <Desc>Restore [X] Vitality for 3 Turn(s)</Desc>
        </Skill>
<Skill id="new_hy21" name="Hail Storm" ap="3" cd="0" type="phys" mult="100" origin="Magia" canCombo="true">
            <Desc>Set Chilled for 1 turn(s). 4m Explode Radius</Desc>
        </Skill>
<Skill id="new_hy22" name="Ice Breaker" ap="1" cd="0" type="phys" mult="100" origin="Magia" canCombo="true">
            <Desc>-</Desc>
        </Skill>
    </School>

    <School name="Necromancer">
        <Skill id="nc1" name="Mosquito Swarm" ap="2" cd="4" type="phys" mult="100" origin="Magia" esc="Necro" canCombo="true">
            <Desc>Vampirismo Arcavo colosal. Um enxo de moscas pestilentas impuras alugadas para cravarem furaçoes na defesa arcada de aço gerando a esquisita anomalia de DANO FÍSICO advindo de INTELIGÊNCIA no painel mágico com cura do mago .</Desc>
        </Skill>
        <Skill id="nc2" name="Decaying Touch" ap="2" cd="3" type="phys" mult="110" origin="Magia" esc="Necro" canCombo="true">
            <Desc>Impõe Decaimento da Praga (Toda magia curandeira angelical curadora irá dar Hit Hit kill e amaldiçoar quem tentar estancar sangramentos sob a doença amaldiçoada cega e tátil).</Desc>
        </Skill>
        <Skill id="nc3" name="Infect" ap="3" cd="4" type="phys" mult="155" origin="Magia" esc="Necro" canCombo="true">
            <Desc>O Vírus decrépito esmagador rasga o figado das poças imundas avassalado abaixando constituição brutal dos escudos das valas cruéis da morte cravada dos defuntos passivos espalhados pelo do corredor escuro sem ar e de puro medo macabro dos necrômanos cruéis.</Desc>
        </Skill>
        <Skill id="nc4" name="Grasp of the Starved" ap="2" cd="5" type="phys" mult="250" origin="Magia" esc="Necro" canCombo="true">
            <Desc>Das covas e do sangue espirrado das malhas roxas rasgadas brotam garras que mutilam a gravidade espedaçando e triturando o chão num soco de dano físico cega avassaladora colosso Source matador limpo encarnado da pior das pragas .</Desc>
        </Skill>
    
<Skill id="new_ne1" name="Blood Sucker" ap="1" cd="0" type="phys" mult="100" origin="Magia" canCombo="true">
            <Desc>Restore up to [X] Vitality, depending on relevant surface area.</Desc>
        </Skill>
<Skill id="new_ne4" name="Raise Bloated Corpse" ap="1" cd="0" type="phys" mult="100" origin="Magia" canCombo="true">
            <Desc>A bloated corpse will be summoned at the location of your target(s). Blows up your target.</Desc>
        </Skill>
<Skill id="new_ne5" name="Raining Blood" ap="1" cd="0" type="phys" mult="100" origin="Magia" canCombo="true">
            <Desc>Set Bleeding for 2 turn(s).</Desc>
        </Skill>
<Skill id="new_ne6" name="Bone Cage" ap="1" cd="0" type="phys" mult="100" origin="Magia" canCombo="true">
            <Desc>Set Bone Cage for 3 turn(s).</Desc>
        </Skill>
<Skill id="new_ne8" name="Living on the Edge" ap="1" cd="0" type="phys" mult="100" origin="Magia" canCombo="true">
            <Desc>Set Death Resist for 2 turn(s).</Desc>
        </Skill>
<Skill id="new_ne9" name="Death Wish" ap="1" cd="0" type="phys" mult="100" origin="Magia" canCombo="true">
            <Desc>Set Death Wish for 2 turn(s).</Desc>
        </Skill>
<Skill id="new_ne10" name="Raise Bone Widow" ap="1" cd="0" type="phys" mult="100" origin="Magia" canCombo="true">
            <Desc>The stats of the summons will depend on caster level and Summoning ability.</Desc>
        </Skill>
<Skill id="new_ne11" name="Shackles of Pain" ap="1" cd="0" type="phys" mult="100" origin="Magia" canCombo="true">
            <Desc>Set Shackles of Pain for 3 turn(s).</Desc>
        </Skill>
<Skill id="new_ne12" name="Last Rites" ap="1" cd="0" type="phys" mult="100" origin="Magia" canCombo="true">
            <Desc>Set Potion.</Desc>
        </Skill>
<Skill id="new_ne13" name="Silencing Stare" ap="1" cd="0" type="phys" mult="100" origin="Magia" canCombo="true">
            <Desc>Set Silenced for 1 turn(s).</Desc>
        </Skill>
<Skill id="new_ne14" name="Black Shroud" ap="2" cd="0" type="phys" mult="100" origin="Magia" canCombo="true">
            <Desc>-</Desc>
        </Skill>
<Skill id="new_ne16" name="Blood Storm" ap="3" cd="0" type="phys" mult="100" origin="Magia" canCombo="true">
            <Desc>-</Desc>
        </Skill>
<Skill id="new_ne17" name="Totems of the Necromancer" ap="3" cd="0" type="phys" mult="100" origin="Magia" canCombo="true">
            <Desc>A Bones Totem will be summoned at the location of your target(s).</Desc>
        </Skill>
    </School>

    <School name="Huntsman">

        <Skill id="hu1" name="Elemental Arrowheads" ap="1" cd="0" type="phys" mult="100" origin="Arma" canCombo="true">
            <Desc>-</Desc>
        </Skill>
        <Skill id="hu2" name="First Aid" ap="1" cd="0" type="phys" mult="100" origin="Arma" canCombo="true">
            <Desc>Restore [X] Vitality. Set Rested for 1 turn(s).</Desc>
        </Skill>
        <Skill id="hu3" name="Ricochet" ap="1" cd="0" type="phys" mult="100" origin="Arma" canCombo="true">
            <Desc>Damage is based on your basic attack and receives a bonus from Finesse.</Desc>
        </Skill>
        <Skill id="hu4" name="Pin Down" ap="1" cd="0" type="phys" mult="100" origin="Arma" canCombo="true">
            <Desc>Set Crippled for 1 turn(s).</Desc>
        </Skill>
        <Skill id="hu5" name="Reactive Shot" ap="1" cd="0" type="phys" mult="100" origin="Arma" canCombo="true">
            <Desc>Set Reactive Shot for 1 Turn(s)</Desc>
        </Skill>
        <Skill id="hu6" name="Barrage" ap="1" cd="0" type="phys" mult="100" origin="Arma" canCombo="true">
            <Desc>Damage is based on your basic attack and receive a bonus from Finesse.</Desc>
        </Skill>
        <Skill id="hu7" name="Tactical Retreat" ap="1" cd="0" type="phys" mult="100" origin="Arma" canCombo="true">
            <Desc>Set Hasted for 1 Turn(s)</Desc>
        </Skill>
        <Skill id="hu8" name="Ballistic Shot" ap="1" cd="0" type="phys" mult="100" origin="Arma" canCombo="true">
            <Desc>-</Desc>
        </Skill>
        <Skill id="hu9" name="Marksman's Fang" ap="1" cd="0" type="phys" mult="100" origin="Arma" canCombo="true">
            <Desc>-</Desc>
        </Skill>
        <Skill id="hu10" name="Sky Shot" ap="1" cd="0" type="phys" mult="100" origin="Arma" canCombo="true">
            <Desc>This skill receives high ground bonuses regardless of elevation.</Desc>
        </Skill>
        <Skill id="hu11" name="Glitter Dust" ap="1" cd="0" type="phys" mult="100" origin="Arma" canCombo="true">
            <Desc>Set Marked for 3 turn(s)</Desc>
        </Skill>
        <Skill id="hu12" name="Assassinate" ap="1" cd="0" type="phys" mult="100" origin="Arma" canCombo="true">
            <Desc>-</Desc>
        </Skill>
        <Skill id="hu13" name="Arrow Spray" ap="2" cd="0" type="phys" mult="100" origin="Arma" canCombo="true">
            <Desc>-</Desc>
        </Skill>
        <Skill id="hu14" name="Farsight" ap="2" cd="0" type="phys" mult="100" origin="Arma" canCombo="true">
            <Desc>Set Farsight for 3 Turn(s).</Desc>
        </Skill>
        <Skill id="hu15" name="Arrow Storm" ap="3" cd="0" type="phys" mult="100" origin="Arma" canCombo="true">
            <Desc>Damage is based on your basic attack and receives a bonus from Finesse. 2m Explode Radius</Desc>
        </Skill>
    </School>

</Database>`;
