var interval;
var isStarted = false;
var index = 0;

function startOrStop()
{
	isStarted = !isStarted;

	if (isStarted)
	{
		interval = setInterval(color,100);
	}
	else
	{
		clearInterval(interval);	
	}
}

function color()
{
	document.body.style.backgroundColor = randomColor();		
}

function randomColor()
{
	var arrayColor = [
		'red',
		'blue',
		'yellow', 
		'green'
	];
	var color = arrayColor[index % arrayColor.length];
	index++;
	return color;
}

