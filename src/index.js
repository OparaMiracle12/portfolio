import "bootstrap";
import "@fortawesome/fontawesome-free/js/all.min";
import "./index.scss";
import FormValidator from "./form";

// Initializing form validation
new FormValidator(document.querySelectorAll(".needs-validation"));