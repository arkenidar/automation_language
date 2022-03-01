/*

# inspired from Java's "switch(...)" and chained "if(...)"s

# comment example (it starts with "#")

x=1
conditions{ # only first true condition executes
	x==5: out "equals 5"
	x<5: out "lesser than 5"
	x>5: out "greater than 5"
}

n=in
out conditions{
	n%2==0: "even"
	n%2==1: "odd"
}

loop result differs "ok" {
answer=in
result=conditions{
	answer=="y" or answer=="yes": true
	answer=="n" or answer=="no": false
	true: "error"
}
if result=="error" out "this case is not defined"
else { choice=result result="ok" }
}
out conditions {
	choice: "you agreed"
	not choice: "you agreed not"
}
# comment

#<
multi-line
comment
example
#>

# fb.com/dario.cangialosi/posts/10224150478981803
*/
//---------- typeof code=="string" -----------
x=1 // assign operator // x=input()
conditions([ // only first true condition executes
	[`x==5`, `out("equals 5")`],
	[`x<5`, `out("lesser than 5")`],
	[`x>5`, `out("greater than 5")`],
])
//---------------------------------------
n=3 // n=input()
out( conditions([
	[`n%2==0`, `"even"`],
	[`n%2==1`, `"odd"`],
]) )
//---------------------------------------
var result
while( result != "ok" ){
answer="yes" // answer=input()
result=conditions([
	[`answer=="y" || answer=="yes"`, `true`],
	[`answer=="n" || answer=="no"`, `false`],
	[`true`, `"error"`],
])
if( result=="error" ) out( "this case is not defined" )
else { choice=result ; result="ok" }
}
out( conditions( [
	[`choice`, `"you agreed"`],
	[`!choice`, `"you agreed not"`],
 ] ) )
//---------------------------------------
//------------ typeof code=="function" --------
x=1 // assign operator // x=input()
conditions([ // only first true condition executes
	[()=> x==5, ()=> out("equals 5")],
	[()=> x<5, ()=> out("lesser than 5")],
	[()=> x>5, ()=> out("greater than 5")],
])
//---------------------------------------
n=3 // n=input()
out( conditions([
	[()=> n%2==0, ()=> "even"],
	[()=> n%2==1, ()=> "odd"],
]) )
//---------------------------------------
var result
while( result != "ok" ){
answer="yes" // answer=input()
result=conditions([
	[()=> answer=="y" || answer=="yes", ()=> true],
	[()=> answer=="n" || answer=="no", ()=> false],
	[()=> true, ()=> "error"],
])
if( result=="error" ) out( "this case is not defined" )
else { choice=result ; result="ok" }
}
out( conditions( [
	[()=> choice, ()=> "you agreed"],
	[()=> !choice, ()=> "you agreed not"],
 ] ) )
//---------------------------------------
//---------------------------------------
// condition as a value
// code as a value (data, code as data)
function conditions(pairs){ // pairs of conditions and actions (conditional actions/code)
	// iterate pairs
	for([condition,code] of pairs)
	if(execute(condition))
		return execute(code)

	function execute(code){
		if(typeof code=="string")
			return eval(code)
		if(typeof code=="function")
			return code()
	}
}
//---------------------------------------
function out(data){ console.log(data) }

function input(){ return "yes"} // use standard input system instead
