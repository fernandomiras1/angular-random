# LEER - FER MIRAS ( lo que contiene esta Arquitectura )


1.	Secciones dinamicas como siempre. clave y valor
2.	Los componentes de dicha secciones se generan de forma dynamic lazy. Mediante un Pipe y Directiva 
3.	El Pipe llamado Seccion ( hace un request a una API me regresa el listado de componentes de dicha seccion)
4.	La directiva LazyCom ( le pasas el tipo de componente y lo genera en tiempo de ejecuccion), ademas se le puede pasar inputs y ouputs.

