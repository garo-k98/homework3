const operations = function(num1 , num2 , num3)
{
	return num1*num2*num3;
};

const years = function()
{
	return 1998;
};

const minus = function(var1 , var2)
{
	const result = var1 - var2;
};

const fullName = function(firstname , lastname)
{
    return firstname + " " + lastname;
};

const longest = function(first , second , last)
{
    if(first.lenght > second.lenght && first.lenght > last.lenght)
    {
    	return first;
    }
    else if(second.lenght > first.lenght && second.lenght > last.lenght)
    {
    	return second;
    }
    else
    {
        return last;
    }
};

const equalOrNot = function(numb1 , numb2)
{
	if(numb1===numb2)
	{
		return 0;
	}
	else if(numb1 > numb2)
	{
		return 1;
	}
	else
	{
		return -1;
	}
};

const truethy = function(0 , NaN , 3)
{
	return 0||NaN||3;
};