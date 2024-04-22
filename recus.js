Fonction estAnneeBissextile(annee)
    Si (annee modulo 4 == 0 ET annee modulo 100 != 0) OU (annee modulo 400 == 0) alors
        retourner Vrai
    Sinon
        retourner Faux
    Fin Si
Fin Fonction
