function calc()
{
	var nb1 = parseFloat(document.getElementById("nb1").value);
	var nb2 = parseFloat(document.getElementById("nb2").value);
	var operateur = document.getElementById("operators").value;
	var resultat = document.getElementById("resultat");


	if (operateur === "+") // Additionner 
	{
		resultat.value = nb1 + nb2;
	}
	else if(operateur ==="-") // SOustraire
	{
		resultat.value = nb1 - nb2;
	}
	else if(operateur ==="*") // Multiplier
	{
		resultat.value = nb1 * nb2;
	}
	else if(operateur ==="/") // Diviser
	{
		resultat.value = nb1 / nb2;
	}
	else if(operateur ==="%") // Modulo (reste division)
	{
		resultat.value = nb1 % nb2;
	}
}