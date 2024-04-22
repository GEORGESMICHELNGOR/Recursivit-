Fonction puissance(base, exponent)
    Si exponent == 0 alors
        retourner 1
    Sinon Si exponent == 1 alors
        retourner base
    Sinon
        retourner base * puissance(base, exponent - 1)
    Fin Si
Fin Fonction
