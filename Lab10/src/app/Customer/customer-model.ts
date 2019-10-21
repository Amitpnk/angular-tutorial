import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

export class CustomerModel {
    CustomerCode: string;
    CustomerName: string;
    CustomerAmount: number;

    formCustomerGroup: FormGroup;

    constructor() {
        let builder = new FormBuilder();

        this.formCustomerGroup = builder.group({});
        this.formCustomerGroup.addControl("CustomerNameControl", new FormControl('', Validators.required))

        let validationCollection = [];
        validationCollection.push(Validators.required);
        // REGEX VALIDATION
        validationCollection.push(Validators.pattern("^[0-9]{4,4}$"))

        this.formCustomerGroup.addControl("CustomerCodeControl", new FormControl('', Validators.compose(validationCollection)))

    }

}
