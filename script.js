//"Use Strict";






function validate()
{
	var name = document.getElementById('myName').value;
	var email = document.getElementById('myEmail').value;
	var uname = document.getElementById('myUsername').value;
	var pass = document.getElementById('myPass').value;
	var cpass = document.getElementById('myCpass').value;
	var gender = document.getElementById('gender').value;
	var day = document.getElementById('day').value;
	var month = document.getElementById('month').value;
	var year = document.getElementById('year').value;
	var msg = document.getElementById('msg');
	var c = name.split(' ');
	var at = email.indexOf('@');
	var e = email.split('@');
	var dot = e[1].indexOf('.');
	//var schar = name.charAt(1);
	if(name == "" || email == "" || uname == "" || pass == "" || cpass == "" || day == ""|| month == ""|| year == "" || gender == "")
	{
		//alert('Name Field Empty');
		msg.innerHTML = "Please Fill up the fields with valid information";
	}
	else
		
		{
			
			if((Number(day) > 31 || Number(day) < 1) || (Number(month) > 12 || Number(month) < 1) || (Number(year) > 2016 || Number(year) < 1900))
			{
				//alert(e);
				msg.innerHTML = "Invalid Date";
			}
			else if(c.length<2)
			{
				msg.innerHTML = "Invalid Name";
			}
			else if(at==-1)
			{
				msg.innerHTML = "Invalid email";
			}
			/*else
			{
				if(dot == -1)
				{
					msg.innerHTML = "Invalid email";
				}
			}*/
		}
}

function reset()
{
	var name = document.getElementById('myName').value;
	var email = document.getElementById('myEmail').value;
	var uname = document.getElementById('myUsername').value;
	var pass = document.getElementById('myPass').value;
	var cpass = document.getElementById('myCpass').value;
	var gender = document.getElementById('gender').value;
	var day = document.getElementById('day').value;
	var month = document.getElementById('month').value;
	var year = document.getElementById('year').value;

	name = "";
	email = "";
	uname = "";
	pass = "";
	cpass = "";
	day = "";
	month = "";
	year = "";
	gender = "";
}