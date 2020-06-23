import Ract from 'react'

const cards =  [

        {"id": 1, "eng":"乾", "han":"Das Schoepferische", "pin":"Schöpferisch tätig sein: Erfolg! Du hast die Energie. Dein Wunschgedanke drängt nach Verwirklichung und Entscheidung. Fang an, wenn der Ausgangspunkt klar ist. Bleibe ausdauernd dabei.Prüfe die Ergebnisse. Übertreibe im Erfolg nicht: Das Glas lässt sich nur füllen, wenn es leer ist."},


        {"id": 2, "eng":"坤", "han":"Die Empfaenglichkeit", "pin":"Dein Wunschgedanke drängt nach Verwirklichung, aber entscheide noch nicht: Lass Dich führen.Gib Dir Zeit für mehrere Anläufe. Verwirrung löst sich dann in Klarheit auf. Glück wird vorhergesagt für alle Entscheidungen, die auf Kooperation und Frieden beruhen.Lass los, was Du nicht mehr brauchst, und bleibe offen für neue Entwicklungen. Halte nicht an starren Strukturen fest."},

        {"id": 3, "eng":"屯", "han":"Die Anfangsschwierigkeit", "pin":"Die Erstgeburt: Aller Anfang ist schwer. Konzentriere Dich auf das Wesentliche.Lege Dich jetzt noch nicht in allen Einzelheiten, sondern nur auf eine Grundstrategie fest: Das kreative Chaos bietet noch alle Möglichkeiten. Suche Dir Hilfe und übe Dich im Delegieren."},


        {"id": 4, "eng":"蒙", "han":"Der Reifeprozess", "pin":"Im Anfang einer Situation liegt ihr verborgenes Potenzial. Lasse die Fragen auf Dich zukommen, aber verwirre Dich nicht selbst mit ständigem Fragen und Grübeln. Der erste Gedanke enthält die richtige Antwort.Nimm sie an. Auf dieser Basis zu entscheiden ist vorteilhaft. Die Situation wird zu Deiner inneren Reife beitragen, auch wenn sich dies manchmal demütigend anfühlt."},

        {"id": 5, "eng":"需", "han":"Das Warten", "pin":"Geduldig auf ein Ziel konzentriert: Die Lösung liegt jetzt nicht im Handeln, sondern im entspannten Abwarten. Lass Dich im Fluss der Zeit treiben. Bleibe Dir selbst und Deinem inneren Wissen treu."},

        {"id": 6, "eng":"訟", "han":"Der Streit", "pin":"Zweifelnd auf eine Auseinandersetzung konzentriert: Begrenze Deine Angst.Sorge für Deine innere Sicherheit.Suche nach sinnvollen Kompromissen. Lass Dich nicht in die Enge treiben.Besinne Dich bewusst auf den Weg Deines Herzens. Stelle Dir vor, die Angelegenheit vor einem neutralen Richter zu klären."},

        {"id": 7, "eng":"師", "han":"Der Feldzug", "pin":"Du stehst vor einer günstigen Entwicklung, die viele Menschen einschliessen kann, wenn Du natürliche Autorität ausüben oder anerkennen kannst. Ergreife diese Chance zum Wachstum gemeinsam mit Menschen, die bereit sind, ihren persönlichen Beitrag zu leisten. Du kannst zum Vorbild werden. Prüfe Deine Fähigkeit zu Führung, Organisation und Motivation.Wenn Wut und Agression die Situation anspannen, sorge für ein Ventil, damit alle an einem Strang ziehen können."},

        {"id": 8, "eng":"比", "han":"Das Zusammenhalten", "pin":"Zusammengehörigkeit: Eine Bindung ist entstanden. Mach Dir den Grund und die Voraussetzungen dafür klar. Dann wirst Du in der Lage sein, Deinen Beitrag zu Verwirklichung von gemeinsamen Wünschen zu leisten, oder sogar die Führung zu übernehmen. Zögere nicht damit, Deinen Platz einzunehmen. Durch Unsicherheit kannst Du nur verlieren."},

        {"id": 9, "eng":"小畜", "han":"Des Kleinen Zaehmungskraft", "pin":"Substanz erwerben: Aus dem kleinen Glück entsteht das grosse Glück. Arbeite an Dir selbst und verfeinere Dein Wesen. Vorher kann nichts Substanzielles in Bezug auf den Gegenstand Deiner Frage geschehen."},

        {"id": 10, "eng":"履", "han":"Das Auftreten", "pin":"Den eigenen Weg gehen: Du kannst instinktiv und mutig Menschen faszinieren. Wenn Dein Gesprächspartner Dich als liebenswürdig empfindet, kannst Du auch heikle Dinge vorsichtig ansprechen. Mit innerer Unabhängigkeit und Verbindlichkeit nach außen erreichst Du Deine Ziele."},

        {"id": 11, "eng":"泰", "han":"Der Friede", "pin":"Die äusseren Umstände fügen sich Deinen Wünschen. Entscheide Dich für Offenheit und Vertrauen. Harmonischer Einklang führt zu fruchtbarem Wachstum."},

        {"id": 12, "eng":"否", "han":"Die Stockung", "pin":"Disharmonie und Ablehnung blockieren im Moment die Verwirklichung Deiner Wünsche. Die Situation wird von Missverständnissen beherrscht. Entscheide Dich vorläufig für Rückzug, bis die innere Übereinstimmung wieder hergestellt ist."},

        {"id": 13, "eng":"同人", "han":"Die Gemeinschaft", "pin":"Du fühlst eine tiefe Übereinstimmung und möchtest eine gemeinsam genutzte Basis schaffen. Unterstütze die notwendigen Entwicklungen, aber erzwinge nichts. Bringe Deine Individualität mit dem Wir-Gefühl in sinnvolles Gleichgewicht. Lerne aus Deiner Familiengeschichte."},

        {"id": 14, "eng":"大有", "han":"Besitz von Großem", "pin":"Souveränität: Du schöpfst aus dem Vollen. Sozialer und/oder materieller Erfolg stehen ins Haus. Die Chance ist gross und der Zeitpunkt ist dafür richtig. Öffne Dich Deiner Intuition. Entfalte Deine Selbstachtung und Deinen Wirkungskreis. Du musst nicht alles nehmen, was Du jetzt haben könntest. Wenn Du offen bleibst, wird Dir von selbst alles zufließen, was Dich wirklich weiterbringt."},

        {"id": 15, "eng":"謙", "han":"Bescheidenheit", "pin":"Demut: Dazu gehört Sachlichkeit. Gestehe Dir Deine Bedürfnisse ein. Erkenne die inneren Werte. Durch Sättigung findest Du zum Wesentlichen, durch Beschränkung auf das Wesentliche wirst Du gesättigt. Dein momentaner Weg ist richtig."},

        {"id": 16, "eng":"豫", "han":"Begeisterung", "pin":"Empathie und Begeisterung! Stimme Dich auf eine stürmische Entwicklung, ein, die von starken Gefühlen begleitet werden wird. Sorge jetzt vor und erledige alles Anstehende, so dass Du Dich in Ruhe und Begeisterung darauf einlassen kannst."},

        {"id": 17, "eng":"隨", "han":"Nachfolge", "pin":"Hingabe: Folge den Bewegungen aus dem Zentrum heraus. Dein Wunschgedanke drängt nach Verwirklichung und Entscheidung. Das ist gut so. Sorge für Ruhepausen und erhalte Deine Gelassenheit."},

        {"id": 18, "eng":"蠱", "han":"Die Arbeit am Verdorbenen", "pin":"Es gibt Probleme mit erlernten Verhaltensmustern. Eine Erneuerung ist notwendig und führt zu großem Erfolg. Scheue Dich nicht, bei Versäumnissen und Fehlentwicklungen zu Deinem Irrtum zu stehen und nach den Gründen zu forschen. Gib Dir etwas Zeit für die Korrektur. So kommt es zu stabilen Verhältnissen."},

        {"id": 19, "eng":"臨", "han":"Die Annaeherung", "pin":"Annäherung: Stelle Dich auf eine Wende am Höhepunkt einer positiven Entwicklung ein. Obwohl alles besser zu werden scheint, handelt es sich um eine Übergangssituation. Wenn Du Dir der Vergänglichkeit allen Glücks bewusst bleibst, kann es später noch besser kommen. Nutze diese Zeit, um Verbindungen zu knüpfen und Neues zu lernen. Das wird Dir später von grossem Nutzen sein."},

        {"id": 20, "eng":"觀", "han":"Betrachtung", "pin":"Nachdenken: Verschaffe Dir Überblick, betrachte die Situation mit Konzentration, aber aus etwas Distanz, wie aus der Vogelperspektive. Auch wenn alles vorbereitet ist: Bleibe ruhig und objektiv. Verinnerliche erst eine gelassene und würdevolle Haltung, bevor Du handelst. Ehrlichkeit zu Dir selbst bringt Dich weiter. Damit kannst Du verborgene Potenziale entdecken und befreien."},

        {"id": 21, "eng":"噬嗑", "han":"Das Durchbeissen", "pin":"Klarheit schaffen: Es gibt etwas, was Dich daran hindert, Klarheit zu finden. Das kann eine Einstellung von Dir oder etwas in Deiner Umgebung sein. Lass in Deinem Bemühen um Klarheit nicht nach. Du musst jetzt rational und gerecht sein, auch wenn das Härte Dir selbst gegenüber bedeutet. Auch anderen gegenüber kann Direktheit und Klarheit jetzt sehr angebracht sein, um Missstände und Missverständnisse aus dem Weg zu räumen."},

        {"id": 22, "eng":"賁", "han":"Die Anmut", "pin":"Tatkraft, Disziplin und geistige Klarheit stehen zu Deiner Verfügung. Lass Dich jedoch nicht in Streit und gewichtige Probleme verwickeln, sondern geniesse den Augenblick. Lass Dein Inneres strahlen, sei Du selbst. Genieße romantische Augenblicke, so wie sie sind. Weitreichende Entscheidungen verschiebe auf später."},

        {"id": 23, "eng":"剝", "han":"Die Zersplitterung", "pin":"Keine gute Zeit für grosse Ziele. Du kannst im Moment nur präsent bleiben und Dich in Grosszügigkeit üben. Du bist momentan mit spaltenden Kräften konfrontiert, die ausserhalb Deiner Kontrolle wirken. Mit Nachgiebigkeit und Aufmerksamkeit für das was hinter den Handlungen und zwischen den Zeilen steht, kannst Du etwas Einfluss zurückgewinnen. Das Negative wird sich am Ende von selbst erledigen."},

        {"id": 24, "eng":"復", "han":"Die Wendezeit", "pin":"Dein Wunsch nach Rückkehr und Neubeginn wird sich erfüllen, Negative Gefühle entspannen sich, Beziehungen werden wieder aufgenommen. Achte darauf, keine alten Fehler zu wiederholen. Eine falsche Versöhnung ohne wirkliches Verzeihen wäre fatal. Setze Dir langfristige und klare Ziele. Dein Weg sollte der Weg Deines Herzens sein. Erst wenn Du den Ausgangspunkt verstanden hast, solltest Du weitergehen."},

        {"id": 25, "eng":"無妄", "han":"Die Unschuld", "pin":"Spontaneität: Höre auf Deine Intuition und bemühe Dich um Objektivität. Lass Dir den Raum, um Deine spontanen Ideen zu verwirklichen. Dies wirkt erfrischend und belebend auf die Situation. Schränke Dich nicht durch eine Zielsetzung ein. Hüte Dich vor Fatalismus und fixen Vorstellungen."},

        {"id": 26, "eng":"大畜", "han":"Des Großen Zaehmungskraft", "pin":"Selbstbeherrschung ist vorteilhaft. Du kannst Verantwortung für andere ausserhalb Deines engsten Lebensraums übernehmen, und Dich bewusst weiterentwickeln. Suche Dich Vorbilder und erfrische täglich Deine innere Energie. Optimiere immer weiter, was schon gut ist. Nur wer täglich besser wird, bleibt auf Dauer gut. So kannst Du Grosses erreichen."},

        {"id": 27, "eng":"頤", "han":"Die Ernaehrung", "pin":"Bei der Befriedigung von Hunger und Durst ist es sinnvoll, sich auf das Wesentliche zu konzentrieren. Gleiches gilt für die Rede und für die Gedanken, die Dich und andere nähren. Übe Dich in positivem Denken. Konzentriere Dich auf Deine höheren Bedürfnisse. Vermeide Ersatzhandlungen und flüchte nicht vor anstehenden Pflichten. Gesunde Ernährung und wahre Worte bringen Dich weiter. Belaste Dich nicht unnötig."},

        {"id": 28, "eng":"大過", "han":"Des Großen Uebergewicht", "pin":"Zuviel des Guten! Übertreibe Dein Engagement nicht. Setze Dir ein machbares Ziel und lasse die Dinge reifen. Grossartige Ideen bringen Dich auf Dauer nicht weiter. Vertraue Deinen Gefühlen, auch wenn Du alleine handeln musst. Falls Du Dich in einer Krise wiederfinden solltest: Zieh Dich zurück und entspanne Dich. Hab keine Angst. Gelingen ist sicher, wenn Du jetzt nicht für alles zuständig sein musst."},

        {"id": 29, "eng":"坎", "han":"Das Abgruendige", "pin":"Mach Dich mit einer ungewissen oder deprimierenden Situation vertraut, indem Du zuversichtlich handelst und aus Erfahrung lernst. Mut und Zuverlässigkeit sind jetzt der Schlüssel zum Erfolg. Nimm Dein Herz in beide Hände und lass Dich von Deinem Ehrgefühl leiten. Niemand ist perfekt - nur wer wagt, kann gewinnen."},


        {"id": 30, "eng":"離", "han":"Das Feuer", "pin":"Mach Dir rational klar, wovon Du wirklich abhängst, und was die Quelle Deiner Kraft nährt. Pflege langfristige gemeinsame Projekte und schütze Deine Lebensgrundlage. Du bist gerade anfällig für Torschlusspanik und Strohfeuer-Begeisterung. Lass Dich weder von intellektuellen Hochflügen, noch von Leidenschaften in die Irre führen."},

        {"id": 31, "eng":"咸", "han":"Die Einwirkung", "pin":"Beobachte neue und bestehende Beziehungen auf innere Zusammengehörigkeit und gegenseitige Beeinflussung. In der Position des um Aufmerksamkeit Werbenden hast Du momentan grossen Einfluss. Bleibe trotzdem offen und unvoreingenommen. Achte auf Deine Rede und auf einfühlsames Verhalten. Lass die Menschen, die Du beeinflussen möchtest, in Ruhe an Dich herankommen. Beeinflusse mit Empfänglichkeit, Zuhören und bleibe Dir selbst treu."},

        {"id": 32, "eng":"恆", "han":"Die Dauer", "pin":"Auf Deinem bisherigen Weg kannst Du weiter wachsen. Es ist kein Fehler, dabei zu bleiben. Treue und Beständigkeit werden jetzt von Dir erwartet und Dir entgegengebracht. Bedenke dabei, dass der Wandel das einzige ist, was auf Dauer Bestand hat. Kreativität und Sicherheitsdenken können in einem ausgewogenen Verhältnis voneinander profitieren. Mit klaren Zielsetzungen kannst Du überprüfen, wo Du stehst."},

        {"id": 33, "eng":"遯", "han":"Der Rueckzug", "pin":"Zieh Dich in aller Ruhe zurück, um Kraft zu sammeln. Lass Dich nicht zu Dingen provozieren, zu denen Dir jetzt die Kraft oder die Lust fehlen. Bewahre im Zweifelsfall Distanz und Würde. Vielleicht musst Du einen Platz im Leben aufgeben, der Dir bisher sicher schien. Machtkampf fällt momentan schwer und ist wenig erfolgversprechend. Du wirst auch in einer Nebenrolle alles bekommen was Du brauchst. Gib Dich vorerst damit zufrieden, bis Du neue Kraftreserven getankt hast und wieder gross rauskommen kannst."},

        {"id": 34, "eng":"大壯", "han":"Des Großen Macht", "pin":"Konzentriere Dich in aller Ruhe auf die vor Dir liegende Entscheidung, damit Du entschlossen und überlegt handeln kannst, sobald der Startschuss fällt. Entwickle Einblick in die inneren Zusammenhänge, um gezielt und ohne Anstrengung handeln zu können. Hüte Dich vor Siegesgewissheit. Du brauchst nicht nur Kraft, sondern auch korrektes Verhalten, um Dein Ziel zu erreichen."},

        {"id": 35, "eng":"晉", "han":"Der Fortschritt", "pin":"Eine rasante Entwicklung steht an ihrem Anfang: Grosse Ereignisse werfen ihre Schatten voraus, so wie die Morgensonne lange Schatten den Betrachtern entgegenwirft. Geh dennoch aus Dir heraus und vorwärts ans Licht, auch wenn es Dir schwer fällt. Hole Dir alles, was Du brauchst. Du wirst auch beim dritten Mal noch willkommen sein. Bringe alles ans Tageslicht, was Du weiterentwickeln willst. Jetzt ist der richtige Zeitpunkt dafür, es wird nicht immer so bleiben. Auf lichtscheue Kräfte und geheime Vorbehalte darfst Du jetzt nicht bauen, da sonst die falsche Basis für die Zukunft gelegt wird. Arbeite deshalb beständig an Dir selbst."},

        {"id": 36, "eng":"明夷", "han":"Die Verfinsterung", "pin":"Auf Deinem Weg vor Dir liegt eine Phase der Dunkelheit, und möglicherweise eine Enttäuschung, wenn Du Dein inneres Licht aus den Augen verlierst. Momentan wird Dir gar nichts geschenkt, und Du kannst Dich, wenn überhaupt, nur auf Dich selbst verlassen. Nimm deshalb jetzt Deine Intuition und Deine Gefühle besonders ernst. Sprich aber vorerst noch nicht darüber, mach gute Mine zum bösen Spiel. Schütze Dich vor (weiteren) Verletzungen und warte ab, bis die Situation geklärt werden kann."},

        {"id": 37, "eng":"坎", "han":"Die Sippe", "pin":"Feste Strukturen, familiäre Vertrautheit und die Befriedigung von Sicherheitsbedürfnissen sind der richtige Ausgangspunkt für die weitere Entwicklung. Du brauchst einen Platz, an dem Du vor Verletzungen sicher bist und über alles reden kannst, an dem Du Dein Innenleben pflegen kannst und wo Deine private Ordnung herrscht. Wo auch mal gestritten werden darf und Du doch weisst: ich werde geliebt und geachtet."},

        {"id": 38, "eng":"睽", "han":"Der Gegensatz", "pin":"Die widersprüchlichen Positionen sind momentan scheinbar oder tatsächlich unvereinbar, aber können sich ergänzen, wenn Du Dich um sinnvolle Kompromisse im Kleinen bemühst. Verleugne nicht Deine Gefühle und Standpunkte um einer falschen Harmonie willen. Halte feindselige Stimmungen aus und bleibe offen für Lösungen. Sie werden sich von selbst zeigen, wenn Du Dir selbst treu bleibst."},

        {"id": 39, "eng":"蹇", "han":"Das Hemmnis", "pin":"Mit lahmen, kalten Füssen und einer schweren Last kommt man nicht gut vorwärts, ausserdem begibt man sich in Gefahr. Deshalb lass die Dinge jetzt auf Dich zukommen. So hast Du genügend Zeit, nachzudenken, worauf Du Dich einlassen kannst, und Dich zu erholen. Lass Dir unbedingt helfen, suche das Gespräch mit einem Menschen, der Dir wirklich raten kann. Deine eigene Kraft reicht momentan nicht aus, Du warst schon zu lange mit dem ungelösten Problem alleine."},

        {"id": 40, "eng":"解", "han":"Die Befreiung", "pin":"Du hast den Punkt erreicht, an dem Du Dich von allem Belastenden getrost befreien kannst. Wenn Du dafür noch etwas erledigen musst, dann tu es jetzt. Verzichte auf bisherige vertraute Bezugspunkte, um Deinen eigenen Weg zu finden. Lass die Vergangenheit los. Sobald Du Deinen Weg erkennen kannst, setze Dir ein klares Ziel und handle ohne weitere Verzögerung, unmittelbar und so früh wie möglich."},

        {"id": 41, "eng":"損", "han":"Die Minderung", "pin":"Verzichte zu Deinem eigenen Vorteil auf grenzverletzende Gefühle und Handlungen. Deine Ideen sind so sinnvoll und Entscheidungen sind richtig. Ein klares Ziel zu haben hilft. Dieser Verzicht ist die Voraussetzung für den Beginn von etwas Neuem. Wenn Du nicht sicher bist, welcher Weg für Dich richtig ist, lass Dir zwei Möglichkeiten des Verzichts offen oder überdenke einen Kompromiss."},

        {"id": 42, "eng":"益", "han":"Die Mehrung", "pin":"Ein Zuwachs von Stärke und Energie steht bevor. Es ist an der Zeit, die Ernte Deiner bisherigen Bemühungen einzufahren und weitere Verbesserungen einzuleiten. Teile den Gewinn mit anderen. Was Du jetzt förderst und weitergibst, sichert Deine langfristige positive Entwicklung. Bremse Deinen Hang zur Masslosigkeit im Schwung des Erfolgs."},

        {"id": 43, "eng":"夬", "han":"Der Durchbruch", "pin":"Durchbruch oder Flucht nach vorn? Sich selbst als glaubwürdig zu bezeichnen zieht eine Prüfung nach sich. Überlege genau was Du sagst. Lass Gewalt völlig aus dem Spiel - sonst verlierst Du alles. Setze Dir ein klares Ziel und verteile Deine Gewinne gleichmässig. So erhältst Du genügend Unterstützung von anderen. Behalte aber Deine Gedanken für Dich und bleibe auf Distanz."},

        {"id": 44, "eng":"姤", "han":"Das Entgegenkommen", "pin":"Begegnung und Leidenschaft. Mit dem Verstand kannst Du nicht alles begreifen und kontrollieren. Lass Dich nicht vereinnahmen von Menschen, denen Du nicht wirklich vertraust. Lass Dich von Deiner Intuition leiten. Früchte reifen von selbst, bis sie Dir in den Schoss fallen. Geh aus Dir raus und teile Dich mit. Mach Deine Forderungen auf sanfte Art sichtbar, und schütze Deine Gefühlswelt vor dem Zugriff anderer."},

        {"id": 45, "eng":"萃", "han":"Die Sammlung", "pin":"Eine Gruppe wächst zusammen. Erneuere regelmässig Dein Bewusstsein für das, was Dir in dieser Situation wichtig und erstrebenswert ist. Lass Deinen Glauben an das Gute im Menschen ständig wachsen, aber sei nicht naiv in Deinen Erwartungen. Für hohe Ziele ist hoher Einsatz angemessen. Vielleicht musst Du ein Opfer bringen, es lohnt sich."},

        {"id": 46, "eng":"升", "han":"Das Empordringen", "pin":"Aufstieg: Deine Vorhaben reifen Schritt für Schritt. Setze einen starken Willen ein und überwinde Deine Angst. Du kannst mit Geduld und Ausdauer aus eigener Kraft hoch aufsteigen und tiefes Vertrauen aufbauen. Die Orientierung an objektiver Wahrheit und allgemeingültigen Prinzipien bringt Glück."},

        {"id": 47, "eng":"困", "han":"Die Bedraengnis", "pin":"Du stösst an innere und/oder äußere Grenzen. Dein Selbstvertrauen und/oder das Vertrauen anderer in Dich reicht für diese Situation noch nicht aus - Du wirst es Dir jetzt erarbeiten müssen, wenn es Dir wirklich wichtig ist. Dein Wille ist stark und wird noch stärker werden, doch im Moment ist Dein Herz von Zweifeln und Leere erschöpft. Grenze Dich von anderen Meinungen ab und nimm nicht jeden beim Wort. Bleibe in aller Ruhe bei Deinen Positionen, auch wenn Dir jetzt nicht geglaubt wird. Nicht alles kann mit Worten geklärt werden. Lass Deine innere Überzeugung wirken."},

        {"id": 48, "eng":"井", "han":"Der Brunnen", "pin":"Ändere Deine Gedanken, nicht Deine Gefühle. Was kein Verlust sein könnte, kann auch kein Gewinn werden. Gehe achtsam mit tiefen Gefühlen und existenziellen Bedürfnissen um. Sie sind eine sichere Orientierung bei der Suche nach gemeinsamem Glück. Schütze bestehende Verbindungen vor schlechten Gewohnheiten und vor Schaden durch Gier oder Hast. Vertiefe Dein intuitives Wissen über die menschliche Seele."},

        {"id": 49, "eng":"革", "han":"Die Umwaelzung", "pin":"Eine tiefgreifene Veränderung: Überwinde Deinen Kokon und lass das Leben an Dich heran. Finde den Einklang mit Dir selbst. Auch wenn Du durch die Veränderungen verunsichert bist, lass Dich darauf ein, Du wirst grossen Nutzen daraus ziehen. Wichtige Wünsche werden Dir bewusst, die Zeit ist günstig für die Verwirklichung. Dann brauchst Du die Vergangenheit nicht mehr bereuen."},

        {"id": 50, "eng":"鼎", "han":"Der Tiegel", "pin":"Du fühlst Dich zu einer grossen Aufgabe hingezogen - im Moment vielleicht zu gross. Eine Transformation ist notwendig. Lass Dich nicht von Hierarchien blenden, sondern mach Dein eigenes Ding. Handle erst, wenn Du ganz bei Dir bist. Gib der Sache Zeit zum Reifen, sie ist es wert."},

        {"id": 51, "eng":"震", "han":"Das Erregende", "pin":"Du gerätst in einen heilsamen Schockzustand. Lass Dich auf diese Gefühle ein, sie werden Dein Leben in Bewegung und Dir tiefe Freude und Ehrfurcht vor dem Göttlichen nahebringen. Schreie oder lache, so wie Dir danach ist. Auch wenn Du momentan viel loslassen musst, Du wirst etwas Wertvolleres zurückbekommen."},

        {"id": 52, "eng":"艮", "han":"Das Stillhalten", "pin":"Wende Dich nach innen. Lass niemanden in Dich hineinschauen und misch Dich in nichts ein. Denke nicht über die anderen nach. Du wirst in dieser Situation davon profitieren, Dich regelmässig nach innen zu wenden und im Außen nichts zu erwarten."},

        {"id": 53, "eng":"漸", "han":"Die Entwicklung", "pin":"Die Situation entwickelt sich in enttäuschender Langsamkeit. Du lernst aber dabei, wie der stete Tropfen den Stein höhlt. Es geht um die Entfaltung von Vertrauen und gemeinsamer Verantwortung, deshalb gibt es keine Abkürzung."},

        {"id": 54, "eng":"歸妹", "han":"Das heiratende Maedchen", "pin":" Diese Situation dient Dir, wenn Du daran arbeitest, Dein inneres Wesen zu entfalten. Eliminiere sinnlose Opferhaltungen, die die wahre Natur Deiner Seele unterdrücken. Du bist klug genug, um zu wissen, dass Liebe und Erfolg die natürliche Folge einer unabhängigen Einstellung sind. Tu die Dinge um ihrer selbst willen und gib Dich nicht selbst preis. Korrigiere niemanden."},

        {"id": 55, "eng":"豐", "han":"Die Fuelle", "pin":"Zum Glück fähig sein: Du wirst reich beschenkt und wächst daran. Jetzt brauchst Du nicht traurig zu sein, auch wenn das nicht ewig dauert. Es ist schön, sich entfalten zu dürfen. Behalte es nicht für Dich. Verströme Dein Glück, und zerpflücke es nicht."},

        {"id": 56, "eng":"旅", "han":"Der Wanderer", "pin":"Von einer Reise profitieren nur anpassungsfähige Menschen. Klare Entscheidungen bringen Glück. Du weisst, dass nichts ewig dauert, und willst Dich nicht anklammern. Das ist gut so. So kannst Du Dich weiterentwickeln, ohne Dich mit überflüssigen Konzepten oder materiellen Besitztümern aufzuhalten. Halte Dich nicht mit Streitereien auf und besinne Dich auf Deinen Weg ins Licht."},

        {"id": 57, "eng":"巽", "han":"Das Sanfte", "pin":"Mit Anpassungsfähigkeit und Einfühlungsvermögen kannst Du Dich in dieser Situation durchsetzen. Setze Dir ein Ziel und stärke Deinen Glauben an das Gute im Menschen. Achte auf unsichtbare Faktoren, wie Motivation, Traditionen, innere Zugehörigkeit, um vorauszusehen, wie Menschen denken und urteilen. Ergründe die tiefere Bedeutung von Ereignissen, um die Hintergründe zu verstehen und sachten Einfluss zu nehmen."},

        {"id": 58, "eng":"兌", "han":"Das Heitere", "pin":"Offenheit bringt alles zur Sprache, sie stärkt die gemeinsame Freude und freundschaftliche Gefühle. Entscheidungen vermehren das Glück. Gute Gespräche beruhen auf Einfühlungsvermögen und Selbstkenntnis. Achte die Herkunft des anderen. Bring Dinge wiederholt zur Sprache."},

        {"id": 59, "eng":"渙", "han":"Die Aufloesung", "pin":"Löse Dich von Widerständen, Illusionen und Angstvorstellungen. Stelle Dir die Situationen, die Du befürchtest, vor und besprich Deine Ängste mit Dir selbst und Deinen inneren Ratgebern. Die Sonne vertreibt den Nebel, der Wind treibt die Wolken auseinander. Besinne Dich auf das, worauf Du vertrauen kannst."},

        {"id": 60, "eng":"節", "han":"Die Beschraenkung", "pin":"Sinnvolle Grenzen und Strukturen unterstützen das Wachstum. Konzentriere Deine Gedanken und setze anderen Grenzen. Zurückhaltung und Selbstkontrolle sind gut, aber achte aber darauf, Dich selbst und andere nicht zu unterdrücken. Respektiere auch den Besitz und den Wissensstand der anderen."},

        {"id": 61, "eng":"中孚", "han":"Innere Wahrheit", "pin":"Innere Wahrheit und emotionale Intelligenz bringen Glück. Sei vertrauenswürdig und gerecht. Entscheidungen, die kommende Ereignisse unterstützen, bringen Glück. Bringe jetzt nichts zu einem vorzeitigen und plötzlichen Ende. Ermutige sanfte Gefühle und langsame Entwicklungen."},

        {"id": 62, "eng":"小過", "han":"Des Kleinen Uebergewicht", "pin":"Aufmerksames Engagement ist vonnöten, sei umgänglich und respektvoll. Entscheidungen bringen dann Glück. Stelle alle ehrgeizigen Angelegenheiten erst mal zurück, denn in Deiner Umgebung gibt es Feindseligkeiten. Sonst könnten Dir wichtige Details entgehen. Gib anderen jetzt mehr Bedeutung als Dir selbst."},

        {"id": 63, "eng":"既濟", "han":"Nach der Vollendung", "pin":"Die Wachstumsphase ist beendet. Anpassungsfähigkeit wächst und bringt glückliche Ergebnisse. Übergangsphasen werden Verwirrung und Uneinigkeit bringen, stimme Dich deshalb zeitig mit anderen ab, um diese Zeiten zu vereinfachen. Denke über die Zukunft nach und sorge für regelmässige und frühzeitige Kurskorrekturen."},

        {"id": 64, "eng":"未濟", "han":"Vor der Vollendung", "pin":"Eine entscheidende Übergangsphase bahnt sich an. Lass die Dinge in Ruhe wachsen und handle umsichtig aus Deiner Mitte heraus. Es besteht sonst die Gefahr, dass Du die Kontrolle über die Situation verlierst. Nimm Dir deshalb kein bestimmtes Ziel vor, das lenkt Dich nur durch Versagensängste ab. Handle aufmerksam im Hier und Jetzt."}

    ]


export default cards
