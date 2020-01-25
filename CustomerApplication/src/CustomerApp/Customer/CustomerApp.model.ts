import { NgForm, FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

export class Customer {
    CustomerCode = '';
    CustomerName = '';
    CustomerAmount = 0;
    formCustomerGroup: FormGroup = null;

    /**
     * create formgroup object
     */
    constructor() {
        // 1st C : Create
        const builder = new FormBuilder();
        this.formCustomerGroup = builder.group({});

        this.formCustomerGroup.
        addControl('CustomerNameControl', new FormControl('', Validators.required));

        const validationcollection = [];
        validationcollection.push(Validators.required);
        validationcollection.push(Validators.pattern('^[0-9]{4,4}$'));

        this.formCustomerGroup.
        addControl('CustomerCodeControl', new FormControl('', Validators.compose(validationcollection)));

        // now need to connect to ui by creating form tag and put input inside form
        //

    }

}



// So applying validation is three step process . CCC process

// here first C is create, 2nd C is connect, 3rd C is CHECK.

// CREATE : we create the validation object model.
// Connect : we connect the validation to ui
// Check : IsValid, IsDirty