function validate(event) {
    event.preventDefault();

    const dob = document.querySelector("#dob").value;
    const joiningdate = document.querySelector("#joining-date").value;
    const salary = document.querySelector("#salary").value.trim();

    const dobError = document.querySelector("#dob-error");
    const joiningdateError = document.querySelector("#joining-error");
    const salaryError = document.querySelector("#salary-error");

    dobError.innerHTML = "";
    joiningdateError.innerHTML = "";
    salaryError.innerHTML = "";

    const dobVal = new Date(dob);
    const joiningVal = new Date(joiningdate);

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (!dob || dobVal >= today) {
        dobError.innerHTML = "<p style='color:red'>DOB must be in the past.</p>";
    }

    if (!joiningdate || joiningVal <= dobVal) {
        joiningdateError.innerHTML = "<p style='color:red'>Joining date must be after DOB.</p>";
    }

    if (salary === "" || isNaN(salary)) {
        salaryError.innerHTML = "<p style='color:red'>Enter a valid salary.</p>";
    }
}
