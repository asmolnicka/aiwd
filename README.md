# Analiza i Wizualizacja Danych

*Data Analysis and Visualization*

Przedmiot prowadzony jest dla studentów 2-ego roku kierunku kognitywistyka na Uniwersytecie Adama Mickiewicza w Poznaniu. :mortar_board:


### :e-mail: Kontakt do prowadzącego

mgr Agnieszka Smolnicka, `agnieszka.smolnicka@amu.edu.pl`, dyżur: poniedziałek 14:00-15:00, pokój 110 (bud. AB)


### :computer: Instalacja Jupyter Notebook:

W konsoli:

```
pip install notebook
```

Aby uruchomić notebook wpisujemy w konsoli:

```
jupyter notebook
```


## :books: Organizacja zajęć

1. 9 zajęć labolatoryjnych
2. Realizacja projektu - analiza i wizualizacja wybranych danych


## :calendar: Terminarz zajęć

Grupa nr 3:

|Nr | Temat 	                      | Biblioteka         | Data (czwartek) |
|---|-------------------------------|--------------------|-----------------|
|1. | Obliczenia numeryczne         | `jupyter`, `numpy` | 2.10            |
|2. | Przetwarzanie danych 1        | `pandas`  	       | 9.10            |
|3. | Przetwarzanie danych 2        | `pandas`  	       | 16.10           |
|4. | Czyszczenie danych, Agregacje | `pandas`           | 23.10           |
|5. | Wizualizacja                  | `matplotlib`       | 30.10           |
|6. | Testowanie statystyczne       | `scipy`/`pingouin` | 6.11            |
|7. | Raportowanie 	                |                    | 13.11           |
|8. |  	                            |                    | 20.11           |
|9. |                               |                    | 27.11           |
|10.| Konsultacje 1                 |                    | 4.12            |
|11.| Konsultacje 1                 | 	                 | 11.12           |
|12.| Konsultacje 1                 |	                   | 18.12           |
|13.| Konsultacje 2 	              |                    | 8.01            |
|14.| Konsultacje 2 	              |                    | 15.01           |
|15.| Konsultacje 2 	              |                    | 22.01           |
|   | Konsultacje - Poprawa * 	    |                    | 2.02 ?          |

\* w razie nieuzbierania liczby punktów wystarczającej do zdania
  
Grupy nr 1, 2:

|Nr | Temat 	                      | Biblioteka         | Data (poniedziałek) |
|---|-------------------------------|--------------------|---------------------|
|1. | Obliczenia numeryczne         | `jupyter`, `numpy` | 6.10                |
|2. | Przetwarzanie danych 1        | `pandas`  	       | 13.10               |
|3. | Przetwarzanie danych 2        | `pandas`  	       | 20.10               |
|4. | Czyszczenie danych, Agregacje | `pandas`           | 27.10               |
|5. | Wizualizacja                  | `matplotlib`       | 3.11                |
|6. | Testowanie statystyczne       | `scipy`/`pingouin` | 17.11               |
|7. | Raportowanie 	                |                    | 24.11               |
|8. |  	                            |                    | 1.12                |
|9. |                               |                    | 8.12                |
|10.| Konsultacje 1                 |                    | 15.12 + 16.12 ?     |
|11.| Konsultacje 1                 | 	                 | 12.01 + 13.01 ?     |
|12.| Konsultacje 2                 |	                   | 19.01               |
|13.| Konsultacje 2 	              |                    | 26.01               |
|14.| Konsultacje 2 	              |                    | 29.01               |
|   | Konsultacje - Poprawa *	      |                    | 2.02 ?              |

\* w razie nieuzbierania liczby punktów wystarczającej do zdania


## &#128175; Kryteria oceny z przedmiotu

Dozwolone są maksymalnie 2 nieobecności (zgodnie z regulaminem studiów), niezależnie od tego, czy są one usprawiedliwione. Odbycie obu konsultacji projektowych jest obowiązkowe.

Łącznie na przedmiocie można zdobyć maksymalnie 25 punktów, na co składa się:
- 20 punktów za projekt,
- 5 punktów za kartkówki (3, niezapowiedziane).

| Ocena 	                | Liczba punktów |
|-------------------------|----------------|
| bardzo dobry (5,0)      | [22,5; 25]     |
| dobry plus (4,5) 	      | [20,5; 22,5)   |
| dobry (4,0) 	          | [18; 20,5)     |
| dostateczny plus (3,5)  | [16; 18)       |
| dostateczny (3,0) 	    | [14; 16)       |
| niedostateczny (2,0)    | [0; 14)        |


## &#x1F4CB; Projekt

Celem projektu jest przeprowadzenie analiz na wybranym przez siebie zestawie danych (np. ze strony https://www.kaggle.com/) oraz zaprezentowanie wyników w raporcie. Ocenie podlegać będzie kod analizy w arkuszu Jupyter Notebook oraz raport w formacie pdf. Raport powinien zawierać stronę tytułową, wprowadzenie, opis hipotez, opis analiz, wykresy, wnioski.

W ramach projektu wymagane są co najmniej 2 spotkania z prowadzącym w celu:

1. Omówienia wybranego zestawu danych i kierunku pracy - przygotowanie min. 5 pytań badawczych, określenie typów zmiennych i testów statystycznych.
  - Na pierwsze spotkanie należy umówić się do ... .
  - Dane oraz pytania badawcze należy przesłać 2 dni przed spotkaniem.

2. Obrony projektu
  - Na drugie spotkanie należy umówić się do ... .
  - Raport w formacie .pdf oraz kod analizy w pliku .ipynb należy przesłać 5 dni przed spotkaniem.

Link do rejestracji na spotkania:


### Kryteria oceniania projektu

- **wybór danych i pytania badawcze** (2 pkt - 10%)
    - odpowiedni dobór danych
    - min. 5 logicznych i interesujących pytań badawczych
- **kod i analizy** (7 pkt - 35%)
    - czytelny, dobrze zorganizowany kod
    - poprawne przeprowadzenie testów statystycznych
- **raport** (5 pkt - 25%)
    - struktura: strona tytułowa, wprowadzenie, hipotezy, analiza, wnioski
    - logiczne wnioski oparte na analizach
    - estetyka, czytelność wykresów i tabel
- **wizualizacja** (4 pkt - 20%)
    - poprawność wykresów, odpowiednie podpisy i tytuły
    - prawidłowa interpretacja wykresów
- **obrona projektu** (2 pkt - 10%)


## :barchart: DataCamp

Darmowy dostęp do popularnej platformy z kursami z analizy danych i programowania:

https://www.datacamp.com/groups/shared_links/a967d2ad50a162684433830baab2d9a4a4eae007f023f18f4c2971b3f99ed678

Dostęp za pomocą maila uczelnianego trwa do 13 marca.

Ścieżki zawierające przydatne kursy (w zakładce Learn (na górze) -> Courses (oraz Learn -> Assignments)):
-	Python Data Fundamentals (podstawy Pythona; podstawy matplotlib i numpy; pandas; seaborn)
-	Data Manipulation in Python (numpy; pandas)
- Data Visualization in Python (matplotlib; seaborn)
- Importing & Cleaning Data in Python (pandas - zaawansowany)
- 

Kurs zawierający elementy HTML i CSS (dla chętnych do KCK):
-	Web Scraping in Python


    
