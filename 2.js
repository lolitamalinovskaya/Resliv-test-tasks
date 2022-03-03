const search = new URLSearchParams('size=M&color=1&color=2&manufacturer=aaa&manufacturer=ddd'); /*empty object*/

for (const [key, value] of search) {
    const form = document.querySelector("form").elements[key];
    if (!form) continue;

    switch (form.constructor) {
        case RadioNodeList:
            for (const size of form) {
                if (size.value === value)
                    size.checked = true;
            }
            break;
        case HTMLSelectElement:
            for (const option of form) {
                if (option.value === value)
                    option.selected = true;
            }
            break;
        case HTMLInputElement:
            form.value = value;
            if (form.type === "checkbox")
                form.checked = true;
            break;
    }
}

addEventListener("input", ({target}) => {
    if (!target.matches("form [name]"))

        return;
    const url = `${new URLSearchParams(new FormData(target.form))}`;

    console.log(url);

});
