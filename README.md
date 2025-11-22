# Analiza i Wizualizacja Danych

*Data Analysis and Visualization*

Przedmiot prowadzony jest dla studentów 2-ego roku kierunku kognitywistyka na Uniwersytecie Adama Mickiewicza w Poznaniu. :mortar_board:


### :e-mail: Kontakt do prowadzącego

mgr Agnieszka Smolnicka, `agnieszka.smolnicka@amu.edu.pl`, dyżur: poniedziałek 14:00-15:00, pokój 110 (bud. AB)


## :books: Organizacja zajęć

1. 9 zajęć labolatoryjnych 
2. Projekt - analiza wybranych danych:
    - konsultacje wstępne
    - realizacja projektu
    - konsultacje końcowe

## :calendar: Terminarz zajęć

Grupa nr 3:

|Nr | Temat 	                    | Biblioteka           | Data (czwartek) |
|---|-------------------------------|----------------------|-----------------|
|1. | Obliczenia numeryczne         | `notebook`, `numpy`  | 2.10            |
|2. | Przetwarzanie danych 1        | `pandas`  	       | 9.10            |
|3. | Przetwarzanie danych 2        | `pandas`  	       | 16.10           |
|4. | Przetwarzanie danych 3        | `pandas`             | 23.10           |
|5. | Czyszczenie danych            | `pandas`, `pyjanitor`| 30.10           |
|6. | Agregacje                     | `pandas`             | 6.11            |
|7. | Wizualizacja                  | `matplotlib`         | 13.11           |
|8. | Testowanie statystyczne   	| `scipy`/`pingouin`   | 20.11           |
|9. | Raportowanie                  |                      | 27.11           |
|10.| Konsultacje 1                 |                      | 4.12            |
|11.| Konsultacje 1                 | 	                   | 11.12           |
|12.| Konsultacje 1                 |	                   | 18.12           |
|13.| Konsultacje 2 	            |                      | 8.01            |
|14.| Konsultacje 2 	            |                      | 15.01           |
|15.| Konsultacje 2 	            |                      | 22.01           |
|   | Konsultacje - Poprawa * 	    |                      | 2.02 ?          |

\* w razie nieuzbierania liczby punktów wystarczającej do zdania
  
Grupy nr 1, 2:

|Nr | Temat 	                    | Biblioteka           | Data (poniedziałek) |
|---|-------------------------------|----------------------|---------------------|
|1. | Obliczenia numeryczne         | `notebook`, `numpy`  | 6.10                |
|2. | Przetwarzanie danych 1        | `pandas`  	       | 13.10               |
|3. | Przetwarzanie danych 2        | `pandas`  	       | 20.10               |
|4. | Przetwarzanie danych 3        | `pandas`  	       | 27.10               |
|5. | Czyszczenie danych            | `pandas`, `pyjanitor`| 3.11                |
|6. | Agregacje                     | `pandas`             | 17.11               |
|7. | Wizualizacja                  | `matplotlib`         | 24.11               |
|8. | Testowanie statystyczne   	| `scipy`/`pingouin`   | 1.12                |
|9. | Raportowanie                  |                      | 8.12                |
|10.| Konsultacje 1                 |                      | 15.12 + 16.12       |
|11.| Konsultacje 1                 | 	                   | 12.01 + 13.01       |
|12.| Konsultacje 2                 |	                   | 19.01               |
|13.| Konsultacje 2 	            |                      | 26.01               |
|14.| Konsultacje 2 	            |                      | 29.01               |
|   | Konsultacje - Poprawa *	    |                      | 2.02 ?              |

\* w razie nieuzbierania liczby punktów wystarczającej do zdania


## &#128175; Kryteria oceny z przedmiotu

Łącznie na przedmiocie można zdobyć maksymalnie 26 punktów, na co składa się:
- 20 punktów za projekt,
- 6 punktów za kartkówki (3 po 2 pkt, niezapowiedziane).

| Ocena 	              | Liczba punktów |
|-------------------------|----------------|
| bardzo dobry (5,0)      | [23,5; 26]     |
| dobry plus (4,5) 	      | [21; 23,5)     |
| dobry (4,0) 	          | [18,5; 21)     |
| dostateczny plus (3,5)  | [16,5; 18,5)   |
| dostateczny (3,0) 	  | [14,5; 16,5)   |
| niedostateczny (2,0)    | [0; 14,5)      |

Dozwolone są maksymalnie 2 nieobecności (zgodnie z regulaminem studiów), niezależnie od tego, czy są one usprawiedliwione. Odbycie obu konsultacji projektowych jest obowiązkowe.


## &#x1F4CB; Projekt

Celem projektu jest przeprowadzenie analiz na wybranym przez siebie zestawie danych oraz zaprezentowanie wyników w raporcie. Ocenie podlegać będzie kod analizy w arkuszu Jupyter Notebook oraz raport w formacie PDF.

### Dane

**Strony ze zbiorami danych do pobrania**:
- www.kaggle.com
- www.dataquest.io/blog/free-datasets-for-projects
- www.freecodecamp.org/news/https-medium-freecodecamp-org-best-free-open-data-sources-anyone-can-use-a65b514b0f2d


**Dane oraz 5 pytań badawczych należy dobrać tak, aby**:
- wśród zmiennych użytych w raporcie były co najmniej dwie zmienne nominalne, jedna zmienna porządkowa i dwie zmienne ilościowe
- co najmniej dwa z pytań dotyczyły różnicy między grupami
- co najmniej dwa z pytań dotyczyły związku pomiędzy zmiennymi
- badanie co najmniej jednej z hipotez używało metody parametrycznej
- badanie co najmniej jednej z hipotez używało metody nieparametrycznej


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
        - zabiegi wykonane w procesie czyszczenia danych (raczej dość ogólnie na czym one polegały) (np. uzupełnienie braków w danych)
        - przekształcenia danych na potrzeby analiz wraz z podaniem ich celu:
            * utworzone nowe zmienne (na podstawie istniejących) dla zbadania któregoś z wybranych problemów
            * modyfikacje istniejących kolumn dla możliwości zastosowania testu statystycznego, np. przypisanie poziomów odpowiednim wartościom zmiennej porządkowej lub np. pogrupowanie którychś wartości zmiennej nominalnej z powodu małej ich liczebności)
- **rozdział Metody**
    * dla każdego z problemów:
        - pytanie badawcze
        - hipoteza badawcza
        - nazwa zastosowanego testu statystycznego (lub testów jeśli wpierw testujemy założenia docelowego testu)
        - ewentualne dodatkowe informacje na temat zastosowania testu, jeśli przyjęto jakieś założenia
- **rozdział Wyniki**
    * dla każdego z problemów:
        - hipotezy zerowa i alternatywna testu statystycznego ($H_0$, $H_1$)
        - wykres wspólnego rozkładu zmiennych biorących udział w teście statystycznym, wizualizujący badany problem
        - tabele z wynikami testów statystycznych
        - opis wyników testów statystycznych



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

W ramach projektu wymagane są, co najmniej dwie indywidualne konsultacje, w celu:

1. omówienia wybranego zestawu danych i kierunku pracy – przedstawienie:
    - wczytanego w Pythonie zbioru
    - pytań i hipotez badawczych
    - zaplanowanych testów statystycznych (testów różnic, istotności współczynników korelacji oraz testów wstępnych) odpowiednich do zweryfikowania hipotez
    - zaplanowanych wykresów wizualizujących badany problem

2. obrony projektu – przedstawienie:
    - kodu analizy w pliku `.ipynb`
    - raportu w pliku `.pdf`


Na obie konsultacje należy zapisać się do **24. listopada**.


**Grupa 3** 

Konsultacje 1 - https://calendly.com/agnsmo6-amu/aiwd-gr-3-konsultacje-1
  - czwartek 4., 11., 18. grudnia 8:10-9:30 s. 67 

Konsultacje 2 - https://calendly.com/agnsmo6-amu/aiwd-gr-3-konsultacje-2
  - czwartek 8., 15., 22. stycznia 8:10-9:30 s. 67 

**Grupa 1** 

Konsultacje 1 - https://calendly.com/agnsmo6-amu/aiwd-gr-12-konsultacje-1: 
  - poniedziałek 15. grudnia, 12. stycznia 14:55-16:35 s. 305
  - poniedziałek 15. grudnia, 12. stycznia 7:55-9:35 s. 67, 14-14:40 s. 110 *
  - wtorek 16. grudnia, 13. stycznia 11:25-13:05 s. 67 * 
 
Konsultacje 2 - https://calendly.com/agnsmo6-amu/aiwd-gr-12-konsultacje-2: 
  - poniedziałek 19., 26., 29. stycznia 14:55-16:35 s. 305
  - poniedziałek 19., 29. stycznia 7:55-9:35 s. 67, 14-14:40 s. 110 * 

\* dzielone z grupą 2

**Grupa 2** 

Konsultacje 1 - https://calendly.com/agnsmo6-amu/aiwd-gr-12-konsultacje-1: 
  - poniedziałek 15. grudnia, 12. stycznia 16:50-18:30 s. 305
  - poniedziałek 15. grudnia, 12. stycznia 7:55-9:35 s. 67, 14-14:40 s. 110 *
  - wtorek 16. grudnia, 13. stycznia 11:25-13:05 s. 67 * 

Konsultacje 2 - https://calendly.com/agnsmo6-amu/aiwd-gr-12-konsultacje-2: 
  - poniedziałek 19., 26., 29. stycznia 16:50-18:30 s. 305
  - poniedziałek 19., 29. stycznia 7:55-9:35 s. 67, 14-14:40 s. 110 * 

\* dzielone z grupą 1


## &#x1F4CA; DataCamp

Darmowy dostęp do popularnej platformy z kursami z analizy danych i programowania:

https://www.datacamp.com/groups/shared_links/a967d2ad50a162684433830baab2d9a4a4eae007f023f18f4c2971b3f99ed678

Dostęp za pomocą maila uczelnianego trwa do 13 marca (lub dłużej po zgłoszeniu się do mnie).

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


Kurs zawierający elementy HTML i CSS (dla bardziej zainteresowanych do KCK):
  -	Web Scraping in Python


## :computer: Instalacja Jupyter Notebook:

W wierszu poleceń:

```
pip install notebook
```

Aby uruchomić notebook wpisujemy w wierszu poleceń:

```
jupyter notebook
```

lub (bardziej skuteczne, jeśli nie mamy polecenia "jupyter")

```
python -m notebook
```

Środowisko Dziobak - chmura na pliki: http://150.254.90.119 \
Logowanie za pomocą loginu z USOSa i hasła ustalonego przy pierwszym logowaniu.
    
