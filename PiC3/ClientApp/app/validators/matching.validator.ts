import { FormControl,FormGroup } from '@angular/forms';

export function validateMatching(control: FormControl) {
/*   for (let prop of Object.keys(control.parent.controls)) {
    console.log(prop);
  } */
  //const formGroup:FormGroup = new FormGroup(control.parent);
  var control2 = control.root.get('username')
console.log(control2);
  if (!control.value.startsWith('B')) {
    return { validateStarts:{valid: true }};
  }
  return null;
}




/* export function validateMatching(matchingControl: string) {
  return function(input: FormControl) {
    console.log(input.root.controls)
    //const formGroup = control[matchingControl];
    
    return (input.value) ?
        null :
        { validateMatching: {valid: true } };
  };
}  */


