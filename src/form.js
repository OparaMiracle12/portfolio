export default class FormValidator
{
    constructor(forms)
    {
        if (forms.constructor.name !== "NodeList") return;

        for (const form of Array.from(forms))
        {
            form.addEventListener("submit", this.onSubmit);
        }
    }

    // Method for handling submit action
    onSubmit(event)
    {
        event.preventDefault();
        if (!this.checkValidity())
        {
            event.preventDefault();
            event.stopPropagation();
        }

        this.classList.add("was-validated");
    }
}