import { AfterViewInit, Component, inject, input } from "@angular/core";
import { ControlValueAccessor, FormGroup, FormsModule, NgControl, ReactiveFormsModule } from "@angular/forms";

@Component({
    selector: 'app-input',
    standalone: true,
    imports: [ FormsModule ],
    template: `
        <input type="text" 
        [(ngModel)]="value"
        [placeholder]="label()"
        (focus)="onTouched && onTouched()"
        (input)="onChange && onChange(value)"
        [disabled]="disabled"
        />
    `,
    styleUrls: ['./input.component.scss']
})

export class InputComponent implements ControlValueAccessor {
    label = input.required<string>();
    value = '';

    private ngControl = inject(NgControl, {optional: true});
    protected onTouched?: () => {};
    protected onChange?: (value: string) => {};
    protected disabled: boolean = false;

    constructor() {
        if (this.ngControl) {
            this.ngControl.valueAccessor = this;
        }
    }

    writeValue(obj: string): void {
        this.value = obj;
    }
    registerOnChange(fn: any): void {
        this.onChange = fn;
    }
    registerOnTouched(fn: any): void {
        this.onTouched = fn;
    }
    setDisabledState?(isDisabled: boolean): void {
       this.disabled = isDisabled;
    }
}