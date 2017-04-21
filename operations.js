function leftShift()
{
	var form1 = document.getElementById("decimalInput");
	var form2 = document.getElementById("operandInput");
	
	var parsedInt1 = parseInt(form1.value);
	var parsedInt2 = parseInt(form2.value);
	
	var decimalInput = new Boolean( document.getElementsByName("decimalBinaryInput")[0].checked);
	
	if(decimalInput == false)
	{
		parsedInt1 = parseInt(form1.value, 2);
		parsedInt2 = parseInt(form2.value, 2);
	}

	if(form1.value != "")
	{
		if(form2.value == "")
		{
			if(decimalInput == true)
			{
				form1.value = parsedInt1 << 1;
			}
			else
			{
				form1.value = (parseInt(parsedInt1 << 1) >>> 0).toString(2);
			}
		}
		else
		{
			if(decimalInput == true)
			{
				form1.value = parsedInt1 << parsedInt2;
			}
			else
			{
				form1.value = (parseInt(parsedInt1 << parsedInt2) >>> 0).toString(2);
			}
		
		}

	}
}

function rightShift()
{
	var form1 = document.getElementById("decimalInput");
	var form2 = document.getElementById("operandInput");
	
	var parsedInt1 = parseInt(form1.value);
	var parsedInt2 = parseInt(form2.value);
	
	var decimalInput = new Boolean( document.getElementsByName("decimalBinaryInput")[0].checked);
	
	if(decimalInput == false)
	{
		parsedInt1 = parseInt(form1.value, 2);
		parsedInt2 = parseInt(form2.value, 2);
	}

	if(form1.value != "")
	{
		if(form2.value == "")
		{
			if(decimalInput == true)
			{
				form1.value = parsedInt1 >> 1;
			}
			else
			{
				form1.value = (parseInt(parsedInt1 >> 1) >>> 0).toString(2);
			}
		}
		else
		{
			if(decimalInput == true)
			{
				form1.value = parsedInt1 >> parsedInt2;
			}
			else
			{
				form1.value = (parseInt(parsedInt1 >> parsedInt2) >>> 0).toString(2);
			}
		
		}

	}
}

function or()
{
	var form1 = document.getElementById("decimalInput");
	var form2 = document.getElementById("operandInput");
	
	var parsedInt1 = parseInt(form1.value);
	var parsedInt2 = parseInt(form2.value);
	
	var decimalInput = new Boolean( document.getElementsByName("decimalBinaryInput")[0].checked);
	
	if(decimalInput == false)
	{
		parsedInt1 = parseInt(form1.value, 2);
		parsedInt2 = parseInt(form2.value, 2);
	}

	if(form1.value != "")
	{
		if(form2.value == "")
		{
			if(decimalInput == true)
			{
				form1.value = parsedInt1 | 1;
			}
			else
			{
				form1.value = (parseInt(parsedInt1 | 1) >>> 0).toString(2);
			}
		}
		else
		{
			if(decimalInput == true)
			{
				form1.value = parsedInt1 | parsedInt2;
			}
			else
			{
				form1.value = (parseInt(parsedInt1 | parsedInt2) >>> 0).toString(2);
			}
		
		}

	}
}

function xor()
{
	var form1 = document.getElementById("decimalInput");
	var form2 = document.getElementById("operandInput");
	
	var parsedInt1 = parseInt(form1.value);
	var parsedInt2 = parseInt(form2.value);
	
	var decimalInput = new Boolean( document.getElementsByName("decimalBinaryInput")[0].checked);
	
	if(decimalInput == false)
	{
		parsedInt1 = parseInt(form1.value, 2);
		parsedInt2 = parseInt(form2.value, 2);
	}

	if(form1.value != "")
	{
		if(form2.value == "")
		{
			if(decimalInput == true)
			{
				form1.value = parsedInt1 ^ 1;
			}
			else
			{
				form1.value = (parseInt(parsedInt1 ^ 1) >>> 0).toString(2);
			}
		}
		else
		{
			if(decimalInput == true)
			{
				form1.value = parsedInt1 ^ parsedInt2;
			}
			else
			{
				form1.value = (parseInt(parsedInt1 ^ parsedInt2) >>> 0).toString(2);
			}
		
		}

	}
}


function and()
{
	var form1 = document.getElementById("decimalInput");
	var form2 = document.getElementById("operandInput");
	
	var parsedInt1 = parseInt(form1.value);
	var parsedInt2 = parseInt(form2.value);
	
	var decimalInput = new Boolean( document.getElementsByName("decimalBinaryInput")[0].checked);
	
	if(decimalInput == false)
	{
		parsedInt1 = parseInt(form1.value, 2);
		parsedInt2 = parseInt(form2.value, 2);
	}

	if(form1.value != "")
	{
		if(form2.value == "")
		{
			if(decimalInput == true)
			{
				form1.value = parsedInt1 & 1;
			}
			else
			{
				form1.value = (parseInt(parsedInt1 & 1) >>> 0).toString(2);
			}
		}
		else
		{
			if(decimalInput == true)
			{
				form1.value = parsedInt1 & parsedInt2;
			}
			else
			{
				form1.value = (parseInt(parsedInt1 & parsedInt2) >>> 0).toString(2);
			}
		
		}

	}
}

function convertInput()
{
	var decimalInput = new Boolean( document.getElementsByName("decimalBinaryInput")[0].checked);
	var form1 = document.getElementById("decimalInput");
	
	if(form1.value != "")
	{
		if(decimalInput == true)
		{
			document.getElementById("binaryOutput").value = (parseInt(form1.value) >>> 0).toString(2);
		}
		else
		{
			document.getElementById("binaryOutput").value = (parseInt(form1.value, 2));
		}
	}
}

function startTimer()
{
	setInterval(convertInput, 250);
}

function swapColors()
{
	var backgroundColor = document.body.style.backgroundColor;
	var foregroundColor = document.getElementById("foreground").style.backgroundColor;
	var swap;

	swap = backgroundColor;
	document.body.style.backgroundColor = foregroundColor;
	document.getElementById("foreground").style.backgroundColor = swap;

}