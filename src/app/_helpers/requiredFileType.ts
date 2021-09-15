import { AbstractControl, FormControl } from "@angular/forms";
export function requiredFileType(type: string[]) {
  return function(control: FormControl) {
    // return (control: AbstractControl): { [key: string]: any } | null => {
    const file = control.value;
    const valid = null;
    if (file) {
      // console.log(file);
      var path = file.replace(/^.*[\\\/]/, "");
      //   var el_down = path
      //     .split("\\")
      //     .pop()
      //     .split("/")
      //     .pop();

      const extension = path.split(".")[1].toUpperCase();
      // console.log(extension + "extension" + type.length);
      var existValue: boolean = false;
      for (var i = 0; i < type.length; i++) {
        let typeFile = type[i].toUpperCase();
        if (typeFile === extension.toUpperCase()) {
          // console.log("type" + typeFile);
          existValue = true;
        }
      }
      if (existValue == true) {
        return null;
      } else {
        return {
          requiredFileType: true
        };
      }
      return null;
    }
    return null;
  };
}
