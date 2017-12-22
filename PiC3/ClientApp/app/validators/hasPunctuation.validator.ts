import { FormControl } from "@angular/forms";

export function hasPunctuation(punctuation: string, errorType: string) {
  return function(input: FormControl) {
    return input.value.indexOf(punctuation) >= 0 ?
        null :
        { hasPunctuation: {valid: true } };
  };
}

