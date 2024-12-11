document.getElementById("button1").addEventListener("click", calcResI1);
document.getElementById("button2").addEventListener("click", calcResI2);
document.getElementById("button3").addEventListener("click", calcResI3);
document.getElementById("button4").addEventListener("click", calcResI4);
document.getElementById("button5").addEventListener("click", calcResI5);
document.getElementById("button6").addEventListener("click", calcResI6);
document.getElementById("button7").addEventListener("click", calcResI7);
document.getElementById("button8").addEventListener("click", calcResI8);
document.getElementById("button9").addEventListener("click", calcResI9);
document.getElementById("button10").addEventListener("click", calcResI10);
document.getElementById("button11").addEventListener("click", calcResI11);
document.getElementById("button12").addEventListener("click", calcResI12);
document.getElementById("button13").addEventListener("click", calcResI13);
document.getElementById("button14").addEventListener("click", calcResI14);
document.getElementById("button15").addEventListener("click", calcResI15);
document.getElementById("button16").addEventListener("click", calcResI16);
document.getElementById("button17").addEventListener("click", calcResI17);
document.getElementById("button18").addEventListener("click", calcResI18);
document.getElementById("button19").addEventListener("click", calcResI19);
document.getElementById("button20").addEventListener("click", calcResI20);
document.getElementById("button21").addEventListener("click", calcResI21);
document.getElementById("button22").addEventListener("click", calcResI22);
document.getElementById("button23").addEventListener("click", calcResI23);
document.getElementById("button24").addEventListener("click", calcResI24);
document.getElementById("button25").addEventListener("click", calcResI25);
document.getElementById("button26").addEventListener("click", calcResI26);
document.getElementById("button27").addEventListener("click", calcResI27);
document.getElementById("button28").addEventListener("click", calcResI28);
document.getElementById("button29").addEventListener("click", calcResI29);
document.getElementById("button30").addEventListener("click", calcResI30);
document.getElementById("button31").addEventListener("click", calcResI31);
document.getElementById("button32").addEventListener("click", calcResI32);
document.getElementById("button33").addEventListener("click", calcResI33);
document.getElementById("button34").addEventListener("click", calcResI34);
document.getElementById("finalbutton").addEventListener("click", showTotal);

var sum = 0; 

// Calculations for I1

function calcResI1() {
		var val1 = parseFloat(document.getElementById("i1value1").value);
		var val2 = parseFloat(document.getElementById("i1value2").value);
		var val3 = parseFloat(document.getElementById("i1value3").value);
		
		total = val1 + val2 + val3;

		if (total >= 0 && total <= 2.25) {
			message = " -- More things can be done.";
		}
		else {
			message = " -- The score is good.";
		}

		res = (val1 + val2 + val3) * 0.784;
		
		sum += res;

		document.getElementById("i1res").innerHTML = res + message;
}



// Calculations for I2

function calcResI2() {
		var val1 = parseFloat(document.getElementById("i2value1").value);
		var val2 = parseFloat(document.getElementById("i2value2").value);
		var val3 = parseFloat(document.getElementById("i2value3").value);
		
		total = val1 + val2 + val3;

		if (total >= 0 && total <= 2.25) {
			message = " -- More things can be done.";
		}
		else {
			message = " -- The score is good.";
		}

		res = (val1 + val2 + val3) * 0.784;
		
		sum += res;

		document.getElementById("i2res").innerHTML = res + message;
}



// Calculations for I3

function calcResI3() {
	var val1 = parseFloat(document.getElementById("i3value1").value);
	var val2 = parseFloat(document.getElementById("i3value2").value);
	var val3 = parseFloat(document.getElementById("i3value3").value);
	var val4 = parseFloat(document.getElementById("i3value4").value);

	base_foodwaste = val1 / val2;
	new_year_foodwaste = val3 / val4;

	per_change = new_year_foodwaste / base_foodwaste;
		
	if (per_change > 1)
		res = 0;
	else // per_change < 1
		res = (1 / per_change) * 0.58;
		
	sum += res;
			
	document.getElementById("i3res").innerHTML = res;
}



// Calculations for I4

function calcResI4() {
	var val1 = parseFloat(document.getElementById("i4value1").value);
	var val2 = parseFloat(document.getElementById("i4value2").value);
	var val3 = parseFloat(document.getElementById("i4value3").value);
		
	total = val1 + val2 + val3;

	if (total >= 0 && total <= 2.25) {
		message = " -- More things can be done.";
	}
	else {
		message = " -- The score is good.";
	}

	res = (val1 + val2 + val3) * 0.42;
	
	sum += res;

	document.getElementById("i4res").innerHTML = res + message;
}


// Calculations for I5

function calcResI5() {
	var val1 = parseFloat(document.getElementById("i5value1").value);
	var val2 = parseFloat(document.getElementById("i5value2").value);
	var val3 = parseFloat(document.getElementById("i5value3").value);
		
	total = val1 + val2 + val3;

	if (total >= 0 && total <= 2.25) {
		message = " -- More things can be done.";
	}
	else {
		message = " -- The score is good.";
	}

	res = (val1 + val2 + val3) * 0.42;
	
	sum += res;
	
	document.getElementById("i5res").innerHTML = res + message;
}	
	


// Calculations for I6

function calcResI6() {
	var val1 = parseFloat(document.getElementById("i6value1").value);
	var val2 = parseFloat(document.getElementById("i6value2").value);
	var val3 = parseFloat(document.getElementById("i6value3").value);
		
	total = val1 + val2 + val3;

	if (total >= 0 && total <= 2.25) {
		message = " -- More things can be done.";
	}
	else {
		message = " -- The score is good.";
	}

	res = (val1 + val2 + val3) * 0.337;
	
	sum += res;
	
	document.getElementById("i6res").innerHTML = res + message;
}



// Calculations for I7

function calcResI7() {
	var val1 = parseFloat(document.getElementById("i7value1").value);
	var val2 = parseFloat(document.getElementById("i7value2").value);
	var val3 = parseFloat(document.getElementById("i7value3").value);
		
	total = val1 + val2 + val3;

	if (total >= 0 && total <= 2.25) {
		message = " -- More things can be done.";
	}
	else {
		message = " -- The score is good.";
	}

	res = (val1 + val2 + val3) * 0.701;
	
	sum += res;
	
	document.getElementById("i7res").innerHTML = res + message;
}



// Calculations for I8

function calcResI8() {
	var val1 = parseFloat(document.getElementById("i8value1").value);
	var val2 = parseFloat(document.getElementById("i8value2").value);
	var val3 = parseFloat(document.getElementById("i8value3").value);
	var val4 = parseFloat(document.getElementById("i8value4").value);

	student_ratio_base = val1 / val2;
	student_ratio_new = val3 / val4;

	per_change = student_ratio_new / student_ratio_base; 
		
	if (per_change < 1)
		res = 0;
	else // per_change >= 1
		res = per_change * 0.299;
		
	sum += res;
			
	document.getElementById("i8res").innerHTML = res;
}



// Calculations for I9

function calcResI9() {
	var val1 = parseFloat(document.getElementById("i9value1").value);
	var val2 = parseFloat(document.getElementById("i9value2").value);
	var val3 = parseFloat(document.getElementById("i9value3").value);
	var val4 = parseFloat(document.getElementById("i9value4").value);

	staff_ratio_base = val1 / val2;
	staff_ratio_new = val3 / val4;

	per_change = staff_ratio_new / staff_ratio_base;
		
	if (per_change < 1)
		res = 0;
	else // per_change >= 1
		res = per_change * 0.193;
		
	sum += res;
			
	document.getElementById("i9res").innerHTML = res;
}



// Calculations for I10

function calcResI10() {
	var val1 = parseFloat(document.getElementById("i10value1").value);
	var val2 = parseFloat(document.getElementById("i10value2").value);
	var val3 = parseFloat(document.getElementById("i10value3").value);
		
	total = val1 + val2 + val3;

	if (total >= 0 && total <= 2) {
		message = " -- More things can be done.";
	}
	else {
		message = " -- The score is good.";
	}

	res = (val1 + val2 + val3) * 0.257;
	
	sum += res;
	
	document.getElementById("i10res").innerHTML = res + message;
}



// Calculations for I11

function calcResI11() {
	var val1 = parseFloat(document.getElementById("i11value1").value);
	var val2 = parseFloat(document.getElementById("i11value2").value);
	var val3 = parseFloat(document.getElementById("i11value3").value);
		
	total = val1 + val2 + val3;

	if (total >= 0 && total <= 2) {
		message = " -- More things can be done.";
	}
	else {
		message = " -- The score is good.";
	}

	res = (val1 + val2 + val3) * 0.427;
	
	sum += res;
	
	document.getElementById("i11res").innerHTML = res + message;
}



// Calculations for I12

function calcResI12() {
	var val1 = parseFloat(document.getElementById("i12value1").value);
	var val2 = parseFloat(document.getElementById("i12value2").value);
	var val3 = parseFloat(document.getElementById("i12value3").value);
		
	total = val1 + val2 + val3;

	if (total >= 0 && total <= 2) {
		message = " -- More things can be done.";
	}
	else {
		message = " -- The score is good.";
	}

	res = (val1 + val2 + val3) * 0.123;
	
	sum += res;
	
	document.getElementById("i12res").innerHTML = res + message;
}



// Calculations for I13

function calcResI13() {
	var val1 = parseFloat(document.getElementById("i13value1").value);
	var val2 = parseFloat(document.getElementById("i13value2").value);
	var val3 = parseFloat(document.getElementById("i13value3").value);
	var val4 = parseFloat(document.getElementById("i13value4").value);

	water_ratio_base = val1 / val2;
	water_ratio_new = val3 / val4;

	per_change= water_ratio_new / water_ratio_base;
		
	if (per_change > 1)
		res = 0;
	else // per_change <= 1
		res = (1 / per_change) * 0.552;
		
	sum += res;
			
	document.getElementById("i13res").innerHTML = res;
}



// Calculations for I14

function calcResI14() {
	var val1 = parseFloat(document.getElementById("i14value1").value);
	var val2 = parseFloat(document.getElementById("i14value2").value);
	var val3 = parseFloat(document.getElementById("i14value3").value);
		
	total = val1 + val2 + val3;

	if (total >= 0 && total <= 2) {
		message = " -- More things can be done.";
	}
	else {
		message = " -- The score is good.";
	}

	res = (val1 + val2 + val3) * 0.448;
	
	sum += res;
	
	document.getElementById("i14res").innerHTML = res + message;
}



// Calculations for I15

function calcResI15() {
	var val1 = parseFloat(document.getElementById("i15value1").value);
	var val2 = parseFloat(document.getElementById("i15value2").value);
	var val3 = parseFloat(document.getElementById("i15value3").value);
		
	total = val1 + val2 + val3;

	if (total >= 0 && total <= 2) {
		message = " -- More things can be done.";
	}
	else {
		message = " -- The score is good.";
	}

	res = (val1 + val2 + val3) * 0.58;
	
	sum += res;
	
	document.getElementById("i15res").innerHTML = res + message;
}



// Calculaations for I16

function calcResI16() {
	var val1 = parseFloat(document.getElementById("i16value1").value);
	var val2 = parseFloat(document.getElementById("i16value2").value);
	var val3 = parseFloat(document.getElementById("i16value3").value);
		
	total = val1 + val2 + val3;

	if (total >= 0 && total <= 2) {
		message = " -- More things can be done.";
	}
	else {
		message = " -- The score is good.";
	}

	res = (val1 + val2 + val3) * 0.264;
	
	sum += res;
	
	document.getElementById("i16res").innerHTML = res + message;
}



// Calculations for I17

function calcResI17() {
	var val1 = parseFloat(document.getElementById("i17value1").value);
	var val2 = parseFloat(document.getElementById("i17value2").value);
	var val3 = parseFloat(document.getElementById("i17value3").value);
	var val4 = parseFloat(document.getElementById("i17value4").value);

	energy_ratio_base = val1 / val2;
	energy_ratio_new = val3 / val4;

	per_change = energy_ratio_new / energy_ratio_base;
		
	if (per_change > 1)
		res = 0;
	else // per_change <= 1
		res = (1 / per_change) * 0.176;
		
	sum += res;
			
	document.getElementById("i17res").innerHTML = res;
}



// Calculations for I18

function calcResI18() {
	var val1 = parseFloat(document.getElementById("i18value1").value);
	var val2 = parseFloat(document.getElementById("i18value2").value);
	var val3 = parseFloat(document.getElementById("i18value3").value);
	var val4 = parseFloat(document.getElementById("i18value4").value);

	income_ratio_base = val1 / val2;
	income_ratio_new = val3 / val4;

	per_change = income_ratio_new / income_ratio_base;
		
	if (per_change < 1)
		res = 0;
	else // per_change >= 1
		res = per_change * 1;
		
	sum += res;
			
	document.getElementById("i18res").innerHTML = res;
}



// Calculations for I19

function calcResI19() {
	var val1 = parseFloat(document.getElementById("i19value1").value);
	var val2 = parseFloat(document.getElementById("i19value2").value);
	var val3 = parseFloat(document.getElementById("i19value3").value);
		
	total = val1 + val2 + val3;

	if (total >= 0 && total <= 2) {
		message = " -- More things can be done.";
	}
	else {
		message = " -- The score is good.";
	}

	res = (val1 + val2 + val3) * 1;
	
	sum += res;
	
	document.getElementById("i19res").innerHTML = res + message;
}



// Calculations for I20

function calcResI20() {
	var val1 = parseFloat(document.getElementById("i20value1").value);
	var val2 = parseFloat(document.getElementById("i20value2").value);
	var val3 = parseFloat(document.getElementById("i20value3").value);
		
	total = val1 + val2 + val3;

	if (total >= 0 && total <= 2.25) {
		message = " -- More things can be done.";
	}
	else {
		message = " -- The score is good.";
	}

	res = (val1 + val2 + val3) * 0.456;
	
	sum += res;
	
	document.getElementById("i20res").innerHTML = res + message;
}



// Calculations for I21

function calcResI21() {
	var val1 = parseFloat(document.getElementById("i21value1").value);
	var val2 = parseFloat(document.getElementById("i21value2").value);
	var val3 = parseFloat(document.getElementById("i21value3").value);
		
	total = val1 + val2 + val3;

	if (total >= 0 && total <= 2) {
		message = " -- More things can be done.";
	}
	else {
		message = " -- The score is good.";
	}

	res = (val1 + val2 + val3) * 0.535;
	
	sum += res;
	
	document.getElementById("i21res").innerHTML = res + message;
}



// Calculations for I22

function calcResI22() {
	var val1 = parseFloat(document.getElementById("i22value1").value);
	var val2 = parseFloat(document.getElementById("i22value2").value);
	var val3 = parseFloat(document.getElementById("i22value3").value);
		
	total = val1 + val2 + val3;

	if (total >= 0 && total <= 2) {
		message = " -- More things can be done.";
	}
	else {
		message = " -- The score is good.";
	}

	res = (val1 + val2 + val3) * 0.291;
	
	sum += res;
	
	document.getElementById("i22res").innerHTML = res + message;
}



// Calculations for I23

function calcResI23() {
	var val1 = parseFloat(document.getElementById("i23value1").value);
	var val2 = parseFloat(document.getElementById("i23value2").value);
	var val3 = parseFloat(document.getElementById("i23value3").value);
		
	total = val1 + val2 + val3;

	if (total >= 0 && total <= 2) {
		message = " -- More things can be done.";
	}
	else {
		message = " -- The score is good.";
	}

	res = (val1 + val2 + val3) * 0.422;
	
	sum += res;
	
	document.getElementById("i23res").innerHTML = res + message;
}



// Calculations for I24

function calcResI24() {
	var val1 = parseFloat(document.getElementById("i24value1").value);
	var val2 = parseFloat(document.getElementById("i24value2").value);
	var val3 = parseFloat(document.getElementById("i24value3").value);
	var val4 = parseFloat(document.getElementById("i24value4").value);

	waste_ratio_base = val1 / val2;
	waste_ratio_new = val3 / val4;

	per_change = waste_ratio_new / waste_ratio_base;
		
	if (per_change > 1)
		res = 0;
	else // per_change <= 1
		res = (1 / per_change) * 0.266;
			
	sum += res;
	
	document.getElementById("i24res").innerHTML = res;
}



// Calculations for I25

function calcResI25() {
	var val1 = parseFloat(document.getElementById("i25value1").value);

	if (val1 >= 0 && val1 <= 2.25) {
		message = " -- More things can be done.";
	}
	else {
		message = " -- The score is good.";
	}

	res = val1 * 0.589;
	
	sum += res;
			
	document.getElementById("i25res").innerHTML = res + message;
}



// Calculations for I26

function calcResI26() {
	var val1 = parseFloat(document.getElementById("i26value1").value);
	var val2 = parseFloat(document.getElementById("i26value2").value);
	var val3 = parseFloat(document.getElementById("i26value3").value);
		
	total = val1 + val2 + val3;

	if (total >= 0 && total <= 2) {
		message = " -- More things can be done.";
	}
	else {
		message = " -- The score is good.";
	}

	res = (val1 + val2 + val3) * 0.411;
	
	sum += res;
	
	document.getElementById("i26res").innerHTML = res + message;
}



// Calculations for I27

function calcResI27() {
	var val1 = parseFloat(document.getElementById("i27value1").value);
	var val2 = parseFloat(document.getElementById("i27value2").value);
	var val3 = parseFloat(document.getElementById("i27value3").value);
		
	total = val1 + val2 + val3;

	if (total >= 0 && total <= 2) {
		message = " -- More things can be done.";
	}
	else {
		message = " -- The score is good.";
	}

	res = (val1 + val2 + val3) * 1;
	
	sum += res;
	
	document.getElementById("i27res").innerHTML = res + message;
}



// Calculations for I28

function calcResI28() {
	var val1 = parseFloat(document.getElementById("i28value1").value);
	var val2 = parseFloat(document.getElementById("i28value2").value);
	var val3 = parseFloat(document.getElementById("i28value3").value);
		
	total = val1 + val2 + val3;

	if (total >= 0 && total <= 2) {
		message = " -- More things can be done.";
	}
	else {
		message = " -- The score is good.";
	}

	res = (val1 + val2 + val3) * 1;
	
	sum += res;
	
	document.getElementById("i28res").innerHTML = res + message;
}



// Calculations for I29

function calcResI29() {
	var val1 = parseFloat(document.getElementById("i29value1").value);
	var val2 = parseFloat(document.getElementById("i29value2").value);
	var val3 = parseFloat(document.getElementById("i29value3").value);
		
	total = val1 + val2 + val3;

	if (total >= 0 && total <= 2) {
		message = " -- More things can be done.";
	}
	else {
		message = " -- The score is good.";
	}

	res = (val1 + val2 + val3) * 1;
	
	sum += res;
	
	document.getElementById("i29res").innerHTML = res + message;
}



// Calculations for I30

function calcResI30() {
	var val1 = parseFloat(document.getElementById("i30value1").value);
	var val2 = parseFloat(document.getElementById("i30value2").value);
	var val3 = parseFloat(document.getElementById("i30value3").value);
	var val4 = parseFloat(document.getElementById("i30value4").value);
	
	publications_ratio_base = val1 / val2;
	publications_ratio_new = val3 / val4;

	per_change = publications_ratio_new / publications_ratio_base;
		
	if (per_change < 1)
		res = 0;
	else // per_change >= 1
		res = per_change * 0.241;
		
	sum += res;
			
	document.getElementById("i30res").innerHTML = res;
}



// Calculations for I31

function calcResI31() {
	var val1 = parseFloat(document.getElementById("i31value1").value);
	var val2 = parseFloat(document.getElementById("i31value2").value);
	var val3 = parseFloat(document.getElementById("i31value3").value);
		
	total = val1 + val2 + val3;

	if (total >= 0 && total <= 2.25) {
		message = " -- More things can be done.";
	}
	else {
		message = " -- The score is good.";
	}

	res = (val1 + val2 + val3) * 0.322;
	
	sum += res;
	
	document.getElementById("i31res").innerHTML = res + message;
}



// Calculations for I32

function calcResI32() {
	var val1 = parseFloat(document.getElementById("i32value1").value);
	var val2 = parseFloat(document.getElementById("i32value2").value);
	var val3 = parseFloat(document.getElementById("i32value3").value);
		
	total = val1 + val2 + val3;

	if (total >= 0 && total <= 2.25) {
		message = " -- More things can be done.";
	}
	else {
		message = " -- The score is good.";
	}

	res = (val1 + val2 + val3) * 0.18;
	
	sum += res;
	
	document.getElementById("i32res").innerHTML = res + message;
}



// Calculations for I33

function calcResI33() {
	var val1 = parseFloat(document.getElementById("i33value1").value);
	var val2 = parseFloat(document.getElementById("i33value2").value);
	var val3 = parseFloat(document.getElementById("i33value3").value);
		
	total = val1 + val2 + val3;

	if (total >= 0 && total <= 2) {
		message = " -- More things can be done.";
	}
	else {
		message = " -- The score is good.";
	}

	res = (val1 + val2 + val3) * 0.114;
	
	sum += res;
	
	document.getElementById("i33res").innerHTML = res + message;
}



// Calculations for I34

function calcResI34() {
	var val1 = parseFloat(document.getElementById("i34value1").value);
	var val2 = parseFloat(document.getElementById("i34value2").value);
	var val3 = parseFloat(document.getElementById("i34value3").value);
		
	total = val1 + val2 + val3;

	if (total >= 0 && total <= 2) {
		message = " -- More things can be done.";
	}
	else {
		message = " -- The score is good.";
	}

	res = (val1 + val2 + val3) * 0.143;
	
	sum += res;
	
	document.getElementById("i34res").innerHTML = res + message;
}


function showTotal() {
	document.getElementById("totalscore").innerHTML = "The total score is... " + sum;
} 
