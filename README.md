# Multiplication Table Generator

Hello! With this console you can generate multiplication tables and receive an output in .txt format

It's very simple. You have 3 flags

## --base (-b)

This flag indicates what number will be the base of the table. **It's the only flag required ever!**

**For Example**

```
  //You introducing
  node app --base 2

  //The output in .txt
  2 x 1 = 2
  2 x 2 = 4
  2 x 3 = 6
  2 x 4 = 8
  2 x 5 = 10
  2 x 6 = 12
  2 x 7 = 14
  2 x 8 = 16
  2 x 9 = 18
  2 x 10 = 20

```

## --t (-t)

This flag is a boolean. You can indicate if you want to print the table

**For Example**

```

  //The output console without flag --table
  node app --base 2

  EXITO: El archivo table-2.txt fue creado


  //The output console with flag --table
  node app --base 2 --table

  =================
   Tabla del 2
  =================
  2 x 0 = 0
  2 x 1 = 2
  2 x 2 = 4
  2 x 3 = 6
  2 x 4 = 8
  2 x 5 = 10
  2 x 6 = 12
  2 x 7 = 14
  2 x 8 = 16
  2 x 9 = 18
  2 x 10 = 20

  EXITO: El archivo table-2.txt fue creado


  //The output in .txt
  2 x 1 = 2
  2 x 2 = 4
  2 x 3 = 6
  2 x 4 = 8
  2 x 5 = 10
  2 x 6 = 12
  2 x 7 = 14
  2 x 8 = 16
  2 x 9 = 18
  2 x 10 = 20

```

## --limit (-l)

This flag indicates the limit for the table, the default limit is 10

**For Example**

```
  //You introducing
  node app --base 2 --limit 20

  //The output in .txt
  2 x 1 = 2
  2 x 2 = 4
  2 x 3 = 6
  2 x 4 = 8
  2 x 5 = 10
  2 x 6 = 12
  2 x 7 = 14
  2 x 8 = 16
  2 x 9 = 18
  2 x 10 = 20
  2 x 11 = 22
  2 x 12 = 24
  2 x 13 = 26
  2 x 14 = 28
  2 x 15 = 30
  2 x 16 = 32
  2 x 17 = 34
  2 x 18 = 36
  2 x 19 = 38
  2 x 20 = 40

```
