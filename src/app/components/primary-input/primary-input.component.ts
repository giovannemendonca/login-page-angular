import {Component, forwardRef, Input} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR, ReactiveFormsModule} from '@angular/forms';


type InputTypes = 'text' | 'password' | 'email';

@Component({
  selector: 'app-primary-input',
  imports: [
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PrimaryInputComponent),
      multi: true
    }
  ],
  templateUrl: './primary-input.component.html',
  styleUrl: './primary-input.component.scss'
})
export class PrimaryInputComponent implements ControlValueAccessor {

  @Input() inputName: string = '';
  @Input() type: InputTypes = 'text';
  @Input() placeholder: string = '';
  @Input() label: string = '';

  value: string = '';

  onChange: any = () => {
  }

  onTouched: any = () => {
  }

  onInput(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.onChange(value);
  }

  writeValue(obj: any) {
    this.value = obj;
  }

  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }

  setValue(value: any) {

  }
}
