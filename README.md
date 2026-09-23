
# Analiza i Wizualizacja Danych

*Data Analysis and Visualization*

Przedmiot prowadzony jest dla studentów 2-ego roku kierunku kognitywistyka na Uniwersytecie Adama Mickiewicza w Poznaniu. 🎓


### 📧 Kontakt do prowadzącego

mgr Agnieszka Smolnicka, `agnieszka.smolnicka@amu.edu.pl`, dyżur: wtorek 15:15-16:15, pokój 110 (bud. AB)


## 📚 Organizacja zajęć

1. 11 zajęć laboratoryjnych 
2. ukończenie projektu realizowanego w trakcie semestru
3. konsultacje końcowe
      
## 📅 Terminarz zajęć

|Nr | Temat 	                       | Biblioteka            | Data gr. 1,2 (pon) | Data gr. 3,4 (wt) | Zadanie                                        | Pkt |
|---|------------------------------------|-----------------------|--------------------|-------------------|------------------------------------------------|-----|
|1. | Obliczenia numeryczne              | `notebook`, `numpy`   | 5.10               | 6.10              |                                                |     |
|2. | Wizualizacja danych numerycznych   | `matplotlib`   	     | 12.10              | 13.10             |                                                |     |
|   | Przetwarzanie danych 1             | `pandas`              |                    |                   | 1. wybór i odczytanie struktury danych         | 1   |
|3. | Przetwarzanie danych 2             | `pandas`  	           | 19.10              | 20.10             |                                                |     |
|4. | Przetwarzanie danych 3             | `pandas`              | 26.10              | 27.10             | 2. ustalenie problemów badawczych              | 0,5 |
|5. | Przetwarzanie danych 4             | `pandas`              | 9.11               | 10.11 \*          |                                                |     |
|6. | Czyszczenie danych                 | `pandas`, `pyjanitor` | 16.11              | 17.11             | 3.1. oczyszczenie danych                       | 2   |
|   |                                    |                       |                    |                   | 3.2. zadanie z przetwarzania                   | 2   |        
|7. | Agregacje                          | `pandas`              | 23.11              | 24.11             |                                                |     |
|8. | Wizualizacja zmiennych  	     | `seaborn`             | 30.11              | 1.12              | 4. agregacje i wykresy do problemów badawczych | 3,5 | 
|9. | Testowanie statystyczne 1          | `pingouin`            | 7.12               | 8.12              |                                                |     |
|10.| Testowanie statystyczne 2          | `pingouin`            | 14.12              | 15.12             | 5. testy statystyczne do problemów badawczych  | 4   |
|11.| Raportowanie                       | 	                 | 21.12              | 22.12             | 6. utworzenie raportu badawczego               | 6   |
|   |                                    |                       |                    |                   |    oraz dobre zorganizowanie całości kodu      | 1   |
|12.| Konsultacje                        |	                 | 11.01              | 19.01             |                                                |     |
|13.| Konsultacje 	                 |                       | 18.01              | 19.01             |                                                |     |
|14.| Konsultacje 	                 |                       | 25.01              | 26.01             |                                                |     |
|15.| Konsultacje - Termin dodatkowy \** |                       | 1.02               | 1.02              |                                                |     |
|   |                                    |                       |                    |                   | **Razem**                                      | 20  |

\* brak zajęć 3.11 ze względu na poprzedzający go dzień rektorski 2.11 \
\** w razie nieuzbierania liczby punktów wystarczającej do zdania lub nieobecności na swoim terminie 
  

## &#128175; Kryteria oceny z przedmiotu

Łącznie na przedmiocie można zdobyć maksymalnie 20 punktów, przy czym kolejne stopnie odpowiadają następującym przedziałom punktów:

| Ocena 	              | Liczba punktów |
|-------------------------|----------------|
| bardzo dobry (5,0)      | [18; 20]       |
| dobry plus (4,5) 	  | [16; 18)       |
| dobry (4,0) 	        | [14; 16)       |
| dostateczny plus (3,5)  | [12,5; 14)     |
| dostateczny (3,0) 	  | [11; 12,5)     |
| niedostateczny (2,0)    | [0; 11)        |

Warunkiem zaliczenia poza osiągnięciem odpowiednio wysokiej łącznej sumy punktów, zgodnej z powyższą tabelą, jest uzyskanie minimum połowy punktów za część raportową projektu (3 z 6 punktów).

Dozwolone są maksymalnie 2 nieobecności. Odbycie konsultacji projektowych jest obowiązkowe.


## &#x1F4CB; Projekt

Celem projektu jest przeprowadzenie analiz na wybranym przez siebie zestawie danych oraz zaprezentowanie wyników w raporcie. Ocenie podlegać będzie kod analizy w arkuszu Jupyter Notebook oraz raport w formacie PDF.

### Dane

**Strona ze zbiorami danych do pobrania**:
- [Kaggle Datasets](https://www.kaggle.com/datasets)

Dane mogą pochodzić też z innego źródła, jeśli będą odpowiednie do analizy.

**Dane oraz 5 pytań badawczych, każde z udziałem dwóch zmiennych, należy dobrać tak, aby**:
- wśród zmiennych użytych w raporcie były co najmniej dwie zmienne nominalne, co najmniej jedna zmienna porządkowa i co najmniej dwie zmienne ilościowe
- co najmniej dwa z pytań dotyczyły różnicy między grupami
- co najmniej dwa z pytań dotyczyły związku pomiędzy zmiennymi
- badanie co najmniej jednej z hipotez używało metody nieparametrycznej

Zmienne wykorzystane w problemach badawczych mogą być zmiennymi oryginalnymi, zmiennymi powstałymi z ich modyfikacji lub zmiennymi stanowiącymi podzbiory oryginalnych zmiennych.


### Struktura kodu

- wczytanie danych
- czyszczenie danych
- analiza ustalonych problemów


### Struktura raportu

- **strona tytułowa**
- **rozdział Dane**
    * czego dotyczą dane, skąd pochodzą
    * skąd pobrano dane (np. z Kaggle)
    * liczba obserwacji i czym jest każda z nich (np. wiersz = osoba)
    * zmienne użyte w raporcie – co przedstawiają i jakie są skale poszczególnych z nich
    * opis przetworzenia danych, jeśli ono wystąpiło:
        - zabiegi wykonane w procesie czyszczenia danych (raczej dość ogólnie na czym one polegały) (np. zmiana odpowiednich wartości na braki w danych)
        - przekształcenia danych na potrzeby analiz wraz z podaniem ich celu:
            * utworzone nowe zmienne (na podstawie istniejących) dla zbadania któregoś z wybranych problemów
            * modyfikacje istniejących kolumn dla możliwości zastosowania testu statystycznego, np. przypisanie poziomów odpowiednim wartościom zmiennej porządkowej lub np. pogrupowanie którychś wartości zmiennej nominalnej z powodu małej ich liczebności)
- **rozdział Metody**
    * dla każdego z problemów:
        - pytanie badawcze
        - hipoteza badawcza
        - nazwa zastosowanego testu statystycznego (lub testów jeśli konieczne są również testy wstępne lub testy post-hoc)
        - opis wyników testów wstępnych, jeśli są konieczne
        - ewentualne dodatkowe informacje na temat zastosowania testów, jeśli przyjęto jakieś założenia
- **rozdział Wyniki**
    * dla każdego z problemów:
        - hipotezy zerowa i alternatywna testu statystycznego ($H_0$, $H_1$)
        - wykres wspólnego rozkładu zmiennych biorących udział w teście statystycznym, wizualizujący badany problem
        - tabele z wynikami testów statystycznych (właściwego i post-hoc)
        - opis wyników testów statystycznych (właściwego i post-hoc)



### Kryteria oceniania projektu

  - **wybór danych i pytania badawcze** (2 pkt - 10%)
      - odpowiedni dobór danych
      - poprawny dobór pytań badawczych
  - **kod i analizy** (7,5 pkt - 37,5%)
      - poprawne wykonanie testów statystycznych 
      - czytelny, dobrze zorganizowany kod 
  - **raport** (6 pkt - 30%)
      - opis danych
      - sformułowanie pytań i hipotez badawczych
      - sformułowanie hipotez statystycznych
      - wnioski oparte na analizach
      - struktura raportu
      - czytelność/estetyka
  - **wizualizacja** (3,5 pkt - 17,5%)
      - poprawność wykresów
      - czytelność wykresów
      - odpowiednie podpisy i tytuły
  - **obrona projektu** (1 pkt - 5%)
      - opowiedzenie o wykonanych działaniach i otrzymanych wynikach



### Konsultacje

W ramach projektu wymagana jest konsultacja poprojektowa - rozmowa o projekcie przy kawie (ale kawę trzeba samemu sobie kupić c'nie) na temat:
    - kodu analizy w pliku `.ipynb`
    - raportu w pliku `.pdf`

Należy je przesłać do końca dnia cztery dni przed spotkaniem.

Na konsultacje należy zapisać się do **15. grudnia**.


**Grupa 1**

Konsultacje - [zapisy](https://calendly.com/agnsmo6-amu/aiwd-gr-3-konsultacje-2)  
  - poniedziałek 11., 18., 25. stycznia 15:00-16:30 s. 305 

**Grupa 2**
 
Konsultacje - [zapisy](https://calendly.com/agnsmo6-amu/aiwd-gr-12-konsultacje-2)  
  - poniedziałek 11., 18., 25. stycznia 16:40-18:20 s. 305
    
**Grupa 3**

Konsultacje - [zapisy](https://calendly.com/agnsmo6-amu/aiwd-gr-12-konsultacje-2)  
  - wtorek 12., 19., 26. stycznia 13:10-14:50 s. 305
    
**Grupa 4**

Konsultacje - [zapisy](https://calendly.com/agnsmo6-amu/aiwd-gr-12-konsultacje-2)  
  - wtorek 12., 19., 26. stycznia 16:45-18:15 s. 305


## &#x1F4CA; DataCamp

Darmowy dostęp do popularnej platformy z kursami z analizy danych i programowania:

[grupa DataCamp](https://www.datacamp.com/groups/shared_links/da1c5b4f28aab07beeccbce7c6db055e7b0d31d0fd551e1be624499ef83908c2)

Dostęp za pomocą maila uczelnianego trwa do 22 marca (lub dłużej po zgłoszeniu się do mnie).

Przydatne ścieżki/kursy (w zakładce Learn (na górze) $\rightarrow$ Courses (oraz Learn $\rightarrow$ Assignments)):
  -	Python Data Fundamentals (podstawy Pythona; podstawy `matplotlib` i `numpy`; `pandas`; `seaborn`)
  -	Data Manipulation in Python (`numpy`; `pandas`)
  - Data Visualization in Python (`matplotlib`; `seaborn`)
  - Importing & Cleaning Data in Python (`pandas`)
  - Exploratory Data Analysis in Python (`pandas`; `matplotlib`; `seaborn`)
  - Hypothesis Testing in Python (`pingouin`)

A także opcjonalnie:
  -	Introduction to Statistics in Python $\rightarrow$ Summary Statistics, Correlation and Experimental Design
  -	Experimental Design in Python $\rightarrow$ szczególnie: Analyzing Experimental Data: Statistical Tests and Power
  -	Foundations of Inference in Python $\rightarrow$ Hypothesis Testing Toolkit, Effect Size


## 💻 Instalacja Jupyter Notebook

W wierszu poleceń:

```
pip install notebook
```

Aby uruchomić notebook wpisujemy w wierszu poleceń:

```
jupyter notebook
```

lub (bardziej skuteczne, jeśli nie mamy polecenia `jupyter`)

```
python -m notebook
```

Środowisko Dziobak - chmura na pliki: http://150.254.90.119 \
Logowanie za pomocą loginu z USOSa i hasła ustalonego przy pierwszym logowaniu (na Dziobaka).
    
